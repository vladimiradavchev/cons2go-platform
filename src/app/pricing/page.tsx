import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "Try out cons2go and solve your first challenges.",
    features: [
      "Post up to 3 problems/month",
      "Basic consultant search",
      "Secure escrow payments",
      "Email support",
      "Community access",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    desc: "For teams that need more power and faster results.",
    features: [
      "Unlimited problems",
      "Advanced consultant matching",
      "Priority 24h response",
      "Video consultation room",
      "Analytics dashboard",
      "API access (5k req/mo)",
      "Priority support",
      "Team chat & collaboration",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For organizations that need a tailored, white-glove experience.",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom SLA agreements",
      "Team access (up to 50)",
      "Custom API & webhooks",
      "SSO / SAML integration",
      "White-label reports",
      "Onboarding & training",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes. There are no long-term contracts. Cancel your subscription at any time with a single click." },
  { q: "How do commissions work?", a: "For free plans, we take a 15% commission on each completed project. Professional plans pay just 8%. Enterprise rates are negotiated individually." },
  { q: "What if I'm not satisfied with the work?", a: "All payments go through escrow. You only release funds when you're satisfied with the deliverables. If there's a dispute, our support team will mediate." },
  { q: "Can consultants upgrade their plan?", a: "Absolutely. Consultants on the Professional plan get featured placement, advanced analytics, and reduced commission rates." },
];

export default function PricingPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h1 className="text-3xl font-extrabold md:text-4xl">Pricing That Scales With You</h1>
          <p className="mt-3 text-[var(--muted-foreground)]">Start free and upgrade when you need more power.</p>
        </div>
      </div>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-8 flex flex-col ${p.highlighted ? "border-[var(--primary)] shadow-xl ring-1 ring-[var(--primary)] scale-[1.02]" : "border-[var(--border)]"}`}
            >
              {p.highlighted && (
                <span className="mb-3 self-start rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-white">Most Popular</span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">{p.desc}</p>
              <p className="mt-4">
                <span className="text-4xl font-extrabold">{p.price}</span>
                {p.period && <span className="text-[var(--muted-foreground)] text-sm">{p.period}</span>}
              </p>
              <ul className="mt-6 flex flex-col grow gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-[var(--success)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${p.highlighted ? "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]" : "border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--muted)]"}`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-extrabold text-center mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-3 text-left font-medium text-[var(--muted-foreground)]">Feature</th>
                  <th className="py-3 text-center font-medium">Starter</th>
                  <th className="py-3 text-center font-medium">Professional</th>
                  <th className="py-3 text-center font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Problems per month", "3", "Unlimited", "Unlimited"],
                  ["Commission rate", "15%", "8%", "Custom"],
                  ["Video calls", "-", "Yes", "Yes"],
                  ["Analytics", "Basic", "Full", "White-label"],
                  ["Support", "Email", "Priority", "Dedicated"],
                  ["API access", "-", "5k/mo", "Unlimited"],
                  ["SSO / SAML", "-", "-", "Yes"],
                ].map(([feat, ...vals], i) => (
                  <tr key={i} className="border-b border-[var(--border)]">
                    <td className="py-3 font-medium">{feat}</td>
                    {vals.map((v, j) => (
                      <td key={j} className="py-3 text-center text-[var(--muted-foreground)]">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-extrabold text-center mb-8">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-6">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/register" className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-dark)]">
            Start Free Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
