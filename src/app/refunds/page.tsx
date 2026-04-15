import Link from "next/link";

export default function RefundsPage() {
  return (
    <div>
      <div className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold text-[var(--primary)]">Legal</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Refund &amp; Cancellation Policy</h1>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">Last updated: April 1, 2026 &middot; Effective date: April 15, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex flex-col gap-10">
          <section>
            <h2 className="text-xl font-bold">1. Subscription Refunds</h2>
            <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
              If you are dissatisfied with your Starter, Professional, or Enterprise subscription, you may request a full refund within **14 days** of your initial purchase in accordance with international consumer rights legislation (EU Consumer Rights Directive 2011/83/EU).
            </p>
            <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
              For customers outside the EU, we offer a **30-day money-back guarantee** on your first subscription payment. After this period, no refunds are available for subscription fees already charged.
            </p>
            <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
              To cancel your subscription and request a refund, go to <strong>Dashboard &rarr; Settings &rarr; Subscription</strong> or email <a href="mailto:support@cons2go.com" className="text-[var(--primary)] hover:underline">support@cons2go.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">2. Project-Based Engagements</h2>
            <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
              All project-based engagements use our integrated <strong>escrow system</strong>:
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-[var(--muted-foreground)]">
              <li className="leading-relaxed"><strong>Before milestone delivery:</strong> You may cancel and receive a full refund of the escrowed amount, minus a 2.9% processing fee.</li>
              <li className="leading-relaxed"><strong>After milestone delivery:</strong> You have 7 days to review the work. If unsatisfied, raise a dispute through our Trust & Safety team. Refund eligibility is determined on a case-by-case basis.</li>
              <li className="leading-relaxed"><strong>After escrow release:</strong> No refunds are available for released funds. If you believe the work was substandard or incomplete, contact our Trust & Safety team for mediation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold">3. Disputed Charges</h2>
            <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
              If you notice an unauthorized charge on your account or through your payment method, contact us immediately at <a href="mailto:support@cons2go.com" className="text-[var(--primary)] hover:underline">support@cons2go.com</a>. We will investigate and respond within 5 business days.
            </p>
            <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
              We do not charge chargeback fees for disputed transactions that are resolved through our support process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">4. Processing Time</h2>
            <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
              Approved refunds will be processed to your original payment method within <strong>5-10 business days</strong>. The exact timing depends on your bank or card issuer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">5. Contact</h2>
            <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
              Questions about refunds? Reach us at <a href="mailto:support@cons2go.com" className="text-[var(--primary)] hover:underline">support@cons2go.com</a> or +1 (415) 555-0132 (Mon-Fri, 9AM-5PM PT).
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-8">
          <Link href="/" className="text-sm font-medium text-[var(--primary)] hover:underline">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
