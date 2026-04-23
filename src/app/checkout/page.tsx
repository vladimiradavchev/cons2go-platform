"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Lock,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
  Loader2,
  Sparkles,
} from "lucide-react";

const STRIPE_TEST_CARDS = [
  { label: "Success", number: "4242 4242 4242 4242" },
  { label: "Requires authentication (3DS)", number: "4000 0025 0000 3155" },
  { label: "Declined", number: "4000 0000 0000 9995" },
];

export default function CheckoutPage() {
  const [title, setTitle] = useState("Supply Chain Optimization Sprint");
  const [amount, setAmount] = useState(4200);
  const [clientName, setClientName] = useState("LogiFlow");
  const [consultantName, setConsultantName] = useState("Yuki Tanaka");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const feePct = 8;
  const fee = Math.round(amount * (feePct / 100));
  const consultantGets = amount - fee;

  async function fund() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          amountCents: Math.round(amount * 100),
          clientName,
          consultantName,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || "failed");
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/5 px-4 py-1.5 text-xs font-semibold text-[var(--primary)]">
          <Lock size={14} /> Secure escrow checkout
        </span>
        <h1 className="mt-5 text-3xl font-extrabold md:text-5xl">
          Fund your <span className="gradient-text">escrow</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
          The amount below is authorized on your card and held until you
          explicitly release it. If Stripe isn't configured on this deployment,
          we'll run a safe simulation so you can preview the full flow.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-5">
        {/* Form */}
        <div className="md:col-span-3 rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8 shadow-sm">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CreditCard size={20} className="text-[var(--primary)]" /> Engagement details
          </h2>

          <div className="mt-6 flex flex-col gap-5">
            <Field label="Project title">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Company">
                <input
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </Field>
              <Field label="Consultant">
                <input
                  value={consultantName}
                  onChange={(e) => setConsultantName(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </Field>
            </div>
            <Field label="Agreed amount (USD)">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[var(--muted-foreground)]">$</span>
                <input
                  type="number"
                  min={10}
                  value={amount}
                  onChange={(e) => setAmount(Math.max(10, Number(e.target.value || 0)))}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {[500, 1500, 4200, 8500, 15000].map((v) => (
                  <button
                    key={v}
                    onClick={() => setAmount(v)}
                    className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
                      amount === v
                        ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                        : "border-[var(--border)] hover:bg-[var(--muted)]"
                    }`}
                  >
                    ${v.toLocaleString()}
                  </button>
                ))}
              </div>
            </Field>
          </div>

          {/* Test card helper */}
          <div className="mt-8 rounded-2xl border border-dashed border-[var(--primary)]/40 bg-[var(--primary)]/5 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Info size={16} className="text-[var(--primary)]" /> Stripe test cards
            </p>
            <p className="mt-1 text-xs text-[var(--muted-foreground)]">
              Use any future expiry, any CVC, any ZIP. Toggle outcomes with:
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {STRIPE_TEST_CARDS.map((c) => (
                <div
                  key={c.number}
                  className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
                    {c.label}
                  </p>
                  <p className="mt-1 font-mono text-xs">{c.number}</p>
                </div>
              ))}
            </div>
          </div>

          {error && (
            <div className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            onClick={fund}
            disabled={loading || amount < 10}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/30 hover:bg-[var(--primary-dark)] disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Redirecting to Stripe…
              </>
            ) : (
              <>
                <Lock size={16} /> Fund ${amount.toLocaleString()} into escrow
              </>
            )}
          </button>
          <p className="mt-3 text-center text-xs text-[var(--muted-foreground)]">
            By continuing you agree to our{" "}
            <Link href="/terms" className="underline">Terms</Link> and{" "}
            <Link href="/refunds" className="underline">Refund Policy</Link>.
          </p>
        </div>

        {/* Receipt */}
        <div className="md:col-span-2">
          <div className="sticky top-24 rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8 shadow-sm">
            <h2 className="text-lg font-bold">Breakdown</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Row label="Project amount" value={`$${amount.toLocaleString()}`} />
              <Row
                label={`Platform fee (${feePct}%)`}
                value={`-$${fee.toLocaleString()}`}
                muted
              />
              <div className="my-1 border-t border-dashed border-[var(--border)]" />
              <Row
                label="Consultant receives on release"
                value={`$${consultantGets.toLocaleString()}`}
                strong
              />
              <Row
                label="You pay today (held in escrow)"
                value={`$${amount.toLocaleString()}`}
                highlight
              />
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <ShieldCheck size={16} /> 100% escrow-protected
              </p>
              <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                The consultant only gets paid when you press <b>Release</b> in
                your dashboard. Full refund available if scope isn't met.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <GuaranteeLine icon={CheckCircle2} text="Stripe authorizes — doesn't capture" />
              <GuaranteeLine icon={CheckCircle2} text="Milestone-based visibility for both parties" />
              <GuaranteeLine icon={CheckCircle2} text="72h mediation if you dispute delivery" />
            </div>

            <div className="mt-6 rounded-2xl bg-[var(--muted)] p-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
                <Sparkles size={12} /> Earn XP
              </p>
              <p className="mt-1 text-sm">
                Funding this escrow unlocks <b>+200 XP</b> and the <b>Trust Builder</b> badge on your profile.
              </p>
            </div>

            <Link
              href="/how-it-works"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold hover:bg-[var(--muted)]"
            >
              How the flow works <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Row({
  label,
  value,
  strong,
  muted,
  highlight,
}: {
  label: string;
  value: string;
  strong?: boolean;
  muted?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between ${
        highlight ? "rounded-xl bg-[var(--primary)]/10 p-3" : ""
      }`}
    >
      <span
        className={
          muted
            ? "text-[var(--muted-foreground)]"
            : strong
            ? "font-semibold"
            : ""
        }
      >
        {label}
      </span>
      <span
        className={`font-semibold ${
          highlight ? "text-[var(--primary)]" : strong ? "text-base" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function GuaranteeLine({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-start gap-2 text-xs">
      <Icon size={14} className="mt-0.5 shrink-0 text-[var(--success)]" />
      <span>{text}</span>
    </div>
  );
}
