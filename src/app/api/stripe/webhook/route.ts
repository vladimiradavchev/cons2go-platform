import { NextRequest } from "next/server";
import Stripe from "stripe";
import { stripe, isStripeLive } from "@/lib/stripe";
import { getProject, transitionStage, upsertProject } from "@/lib/escrow-store";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if (!isStripeLive || !stripe) {
    return Response.json({ received: false, reason: "stripe_not_configured" }, { status: 200 });
  }

  const sig = req.headers.get("stripe-signature");
  const whSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !whSecret) {
    return Response.json({ error: "missing_signature" }, { status: 400 });
  }

  const payload = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, sig, whSecret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "bad_signature";
    return Response.json({ error: msg }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const pid = session.metadata?.escrow_project_id;
      if (pid) {
        const project = getProject(pid);
        if (project) {
          project.paymentIntentId =
            typeof session.payment_intent === "string"
              ? session.payment_intent
              : session.payment_intent?.id;
          upsertProject(project);
          transitionStage(pid, "funded");
        }
      }
      break;
    }
    case "payment_intent.amount_capturable_updated": {
      const pi = event.data.object as Stripe.PaymentIntent;
      const pid = pi.metadata?.escrow_project_id;
      if (pid) transitionStage(pid, "funded");
      break;
    }
    case "payment_intent.succeeded": {
      const pi = event.data.object as Stripe.PaymentIntent;
      const pid = pi.metadata?.escrow_project_id;
      if (pid) transitionStage(pid, "released");
      break;
    }
    case "payment_intent.canceled": {
      const pi = event.data.object as Stripe.PaymentIntent;
      const pid = pi.metadata?.escrow_project_id;
      if (pid) transitionStage(pid, "refunded");
      break;
    }
  }

  return Response.json({ received: true });
}
