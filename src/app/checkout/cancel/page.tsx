import Link from "next/link";
import { XCircle, ArrowLeft } from "lucide-react";

export default function CheckoutCancel() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
        <XCircle size={32} />
      </div>
      <h1 className="text-3xl font-extrabold">Escrow not funded</h1>
      <p className="mt-3 text-[var(--muted-foreground)]">
        No charge was made. Your card was never captured — Stripe just held the page open for you. You can try again whenever you're ready.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <Link
          href="/checkout"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
        >
          <ArrowLeft size={14} /> Back to checkout
        </Link>
        <Link
          href="/how-it-works"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold hover:bg-[var(--muted)]"
        >
          Learn how escrow works
        </Link>
      </div>
    </div>
  );
}
