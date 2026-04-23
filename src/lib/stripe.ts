import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

export const stripe = secretKey
  ? new Stripe(secretKey, { typescript: true })
  : null;

export const PLATFORM_FEE_PERCENT = 8;

export function platformFee(amountCents: number) {
  return Math.round((amountCents * PLATFORM_FEE_PERCENT) / 100);
}

export const isStripeLive = Boolean(secretKey);
