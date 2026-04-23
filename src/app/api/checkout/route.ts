import { NextRequest } from "next/server";
import { stripe, platformFee, isStripeLive } from "@/lib/stripe";
import {
  getProject,
  newId,
  upsertProject,
  transitionStage,
  type EscrowProject,
} from "@/lib/escrow-store";

export const dynamic = "force-dynamic";

type Body = {
  projectId?: string;
  title?: string;
  amountCents?: number;
  clientName?: string;
  consultantName?: string;
  milestones?: { id: string; label: string }[];
};

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as Body;

  let project = body.projectId ? getProject(body.projectId) : undefined;

  if (!project) {
    const amountCents = Math.max(100, body.amountCents ?? 50000);
    const now = Date.now();
    project = {
      id: newId(),
      title: body.title || "Consulting engagement",
      clientName: body.clientName || "Demo Client",
      consultantName: body.consultantName || "Demo Consultant",
      amountCents,
      feeCents: platformFee(amountCents),
      currency: "usd",
      stage: "awaiting_funding",
      createdAt: now,
      updatedAt: now,
      milestones: body.milestones?.length
        ? body.milestones.map((m) => ({ ...m, done: false }))
        : [
            { id: "m1", label: "Kickoff", done: false },
            { id: "m2", label: "Mid-point review", done: false },
            { id: "m3", label: "Final deliverables", done: false },
          ],
    } satisfies EscrowProject;
    upsertProject(project);
  }

  const origin = req.nextUrl.origin;

  if (isStripeLive && stripe) {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: project.currency,
            unit_amount: project.amountCents,
            product_data: {
              name: `Escrow: ${project.title}`,
              description: `Funds held in escrow until you release them to ${project.consultantName}.`,
            },
          },
        },
      ],
      payment_intent_data: {
        capture_method: "manual",
        metadata: {
          escrow_project_id: project.id,
          platform_fee_cents: String(project.feeCents),
        },
      },
      metadata: { escrow_project_id: project.id },
      success_url: `${origin}/checkout/success?pid=${project.id}&sid={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel?pid=${project.id}`,
    });

    project.checkoutSessionId = session.id;
    upsertProject(project);
    return Response.json({ url: session.url, projectId: project.id, mode: "live" });
  }

  transitionStage(project.id, "funded");
  return Response.json({
    url: `${origin}/checkout/success?pid=${project.id}&sid=sim_${project.id}&sim=1`,
    projectId: project.id,
    mode: "simulated",
  });
}
