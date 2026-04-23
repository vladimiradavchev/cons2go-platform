import { NextRequest } from "next/server";
import { stripe, isStripeLive } from "@/lib/stripe";
import { getProject, transitionStage } from "@/lib/escrow-store";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const { projectId } = (await req.json().catch(() => ({}))) as {
    projectId?: string;
  };
  if (!projectId)
    return Response.json({ error: "projectId required" }, { status: 400 });

  const project = getProject(projectId);
  if (!project)
    return Response.json({ error: "not found" }, { status: 404 });

  if (isStripeLive && stripe && project.paymentIntentId) {
    await stripe.paymentIntents.cancel(project.paymentIntentId);
  }

  const updated = transitionStage(projectId, "refunded");
  return Response.json({ project: updated });
}
