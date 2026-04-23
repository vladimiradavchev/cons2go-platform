"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Users,
  Lock,
  Rocket,
  Package,
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Trophy,
  Zap,
  HandCoins,
  Scale,
} from "lucide-react";

type Step = {
  id: number;
  key: string;
  title: string;
  client: string;
  consultant: string;
  money: string;
  icon: React.ElementType;
  color: string;
  xp: number;
};

const steps: Step[] = [
  {
    id: 1,
    key: "post",
    title: "Post the Problem",
    client: "You describe your challenge, budget range, and deadline.",
    consultant: "You browse and pick challenges matching your expertise.",
    money: "No charge yet — posting a problem is free.",
    icon: FileText,
    color: "from-violet-500 to-violet-600",
    xp: 50,
  },
  {
    id: 2,
    key: "match",
    title: "Match & Agree",
    client: "Verified consultants bid with tailored proposals. You pick one.",
    consultant: "You pitch scope, price, and milestones. Once accepted, it's locked.",
    money: "Scope and fixed price are set. Still no money moved.",
    icon: Users,
    color: "from-fuchsia-500 to-pink-500",
    xp: 100,
  },
  {
    id: 3,
    key: "escrow",
    title: "Fund Escrow (Stripe)",
    client: "You fund the full project amount into escrow via Stripe.",
    consultant: "You get a green \"funds secured\" signal and start confidently.",
    money: "Stripe authorizes the card. Money is held — not yet paid out.",
    icon: Lock,
    color: "from-emerald-500 to-emerald-600",
    xp: 200,
  },
  {
    id: 4,
    key: "work",
    title: "Do the Work",
    client: "Watch live milestone progress and chat inside the platform.",
    consultant: "Hit each milestone, upload deliverables, collect XP.",
    money: "Escrow still holds the full amount — visible to both sides.",
    icon: Rocket,
    color: "from-blue-500 to-indigo-600",
    xp: 300,
  },
  {
    id: 5,
    key: "deliver",
    title: "Deliver & Review",
    client: "You get a 48h review window to check every deliverable.",
    consultant: "You submit the final handover and hit \"Mark Delivered\".",
    money: "Still held. Nothing transfers until you explicitly approve.",
    icon: Package,
    color: "from-amber-500 to-orange-500",
    xp: 250,
  },
  {
    id: 6,
    key: "release",
    title: "Release Funds",
    client: "One click releases escrow. Done.",
    consultant: "Funds land in your Stripe balance — typically same day.",
    money: "Stripe captures the payment. Platform fee (8%) split out. Consultant paid.",
    icon: HandCoins,
    color: "from-teal-500 to-cyan-500",
    xp: 500,
  },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Money never moves without your approval",
    desc: "Stripe authorizes the card when you fund. The actual capture only happens when you hit Release.",
  },
  {
    icon: Scale,
    title: "Dispute → mediated refund",
    desc: "If delivery doesn't meet the agreed scope, our team mediates within 72h. Escrow can be fully refunded.",
  },
  {
    icon: Zap,
    title: "Fast payouts for consultants",
    desc: "Once released, funds typically appear in your Stripe balance the same day.",
  },
];

export default function HowItWorksPage() {
  const [active, setActive] = useState(0);
  const [role, setRole] = useState<"client" | "consultant">("client");
  const [celebrated, setCelebrated] = useState<Record<number, boolean>>({});

  const current = steps[active];
  const totalXp = steps.slice(0, active + 1).reduce((s, x) => s + x.xp, 0);
  const maxXp = steps.reduce((s, x) => s + x.xp, 0);
  const percent = Math.round((totalXp / maxXp) * 100);

  const celebrate = (id: number) => {
    setCelebrated((c) => ({ ...c, [id]: true }));
    setTimeout(() => {
      setActive((a) => Math.min(a + 1, steps.length - 1));
    }, 400);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--accent)]/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/5 px-4 py-1.5 text-xs font-semibold text-[var(--primary)]">
              <Sparkles size={14} /> Payments & delivery, decoded
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl md:leading-tight">
              How money flows on{" "}
              <span className="gradient-text">cons2go</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted-foreground)]">
              Zero-trust escrow powered by Stripe. Funds are only paid out when
              the work is delivered and approved — you stay in control at every
              step.
            </p>
          </div>
        </div>
      </section>

      {/* Role toggle + XP bar */}
      <section className="mx-auto max-w-5xl px-6 -mt-6">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Pick your perspective
              </p>
              <div className="mt-2 inline-flex rounded-full border border-[var(--border)] bg-[var(--muted)] p-1">
                <button
                  onClick={() => setRole("client")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    role === "client"
                      ? "bg-[var(--primary)] text-white shadow-lg"
                      : "text-[var(--muted-foreground)]"
                  }`}
                >
                  I'm the Company
                </button>
                <button
                  onClick={() => setRole("consultant")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    role === "consultant"
                      ? "bg-[var(--accent)] text-white shadow-lg"
                      : "text-[var(--muted-foreground)]"
                  }`}
                >
                  I'm the Consultant
                </button>
              </div>
            </div>

            <div className="flex-1 sm:max-w-sm">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-[var(--primary)]">
                  <Trophy size={14} /> {totalXp} XP
                </span>
                <span className="text-[var(--muted-foreground)]">
                  Step {active + 1} of {steps.length}
                </span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-[var(--muted)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] via-fuchsia-500 to-[var(--accent)] transition-all duration-500"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step journey */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-6 mb-10">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = i === active;
            const isDone = i < active || celebrated[s.id];
            return (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`relative rounded-2xl border p-4 text-left transition-all hover:-translate-y-0.5 ${
                  isActive
                    ? "border-[var(--primary)] bg-[var(--primary)]/5 shadow-lg"
                    : isDone
                    ? "border-[var(--success)]/40 bg-[var(--success)]/5"
                    : "border-[var(--border)] bg-[var(--background)]"
                }`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-md mb-2`}>
                  {isDone ? <CheckCircle2 size={18} /> : <Icon size={18} />}
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                  Step {s.id}
                </p>
                <p className="text-sm font-bold leading-tight mt-0.5">{s.title}</p>
                <p className="mt-1 text-[10px] font-semibold text-[var(--primary)]">
                  +{s.xp} XP
                </p>
              </button>
            );
          })}
        </div>

        {/* Active step detail card */}
        <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--background)] overflow-hidden shadow-xl">
          <div className={`absolute inset-0 bg-gradient-to-br ${current.color} opacity-5`} />
          <div className="relative grid md:grid-cols-5 gap-0">
            {/* Illustration pane */}
            <div className={`md:col-span-2 bg-gradient-to-br ${current.color} p-10 text-white flex flex-col justify-between min-h-[320px]`}>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur">
                  <current.icon size={12} /> Step {current.id}
                </span>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight">
                  {current.title}
                </h2>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  {current.money}
                </p>
              </div>

              {/* Money visualization */}
              <div className="mt-8">
                <MoneyFlow stepKey={current.key} />
              </div>
            </div>

            {/* Role-specific narrative */}
            <div className="md:col-span-3 p-10">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
                {role === "client" ? "For the company" : "For the consultant"}
              </p>
              <p className="mt-3 text-xl font-semibold leading-snug">
                {role === "client" ? current.client : current.consultant}
              </p>

              {/* Mini flowchart bullets */}
              <div className="mt-6 flex flex-col gap-2.5">
                <MiniBullet icon={DollarSign} text={current.money} />
                <MiniBullet
                  icon={role === "client" ? Users : Rocket}
                  text={role === "client" ? current.consultant : current.client}
                  muted
                />
              </div>

              <div className="mt-8 flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => celebrate(current.id)}
                  disabled={celebrated[current.id]}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition-all hover:scale-105 disabled:opacity-60"
                >
                  {celebrated[current.id] ? (
                    <>
                      <CheckCircle2 size={16} /> Step claimed
                    </>
                  ) : (
                    <>
                      Claim +{current.xp} XP <Sparkles size={16} />
                    </>
                  )}
                </button>
                {active < steps.length - 1 && (
                  <button
                    onClick={() => setActive(active + 1)}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold hover:bg-[var(--muted)]"
                  >
                    Next step <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money flow timeline */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Where is the money at each step?
            </h2>
            <p className="mt-3 text-[var(--muted-foreground)]">
              Follow the dollar from your card to the consultant's bank account.
            </p>
          </div>

          <div className="rounded-3xl bg-[var(--background)] border border-[var(--border)] p-6 md:p-10">
            <div className="grid md:grid-cols-3 gap-6">
              <MoneyColumn
                label="Company's card"
                subtitle="Billed by Stripe"
                tone="from-violet-500 to-violet-700"
                moments={[
                  { stage: "Post", active: false, state: "idle" },
                  { stage: "Match", active: false, state: "idle" },
                  { stage: "Fund escrow", active: true, state: "charge" },
                  { stage: "Work", active: false, state: "held" },
                  { stage: "Deliver", active: false, state: "held" },
                  { stage: "Release", active: false, state: "captured" },
                ]}
              />
              <MoneyColumn
                label="Escrow vault"
                subtitle="Stripe Payment Intent (manual capture)"
                tone="from-emerald-500 to-emerald-700"
                moments={[
                  { stage: "Post", active: false, state: "idle" },
                  { stage: "Match", active: false, state: "idle" },
                  { stage: "Fund escrow", active: true, state: "filling" },
                  { stage: "Work", active: true, state: "held" },
                  { stage: "Deliver", active: true, state: "held" },
                  { stage: "Release", active: false, state: "empty" },
                ]}
                highlight
              />
              <MoneyColumn
                label="Consultant's balance"
                subtitle="Paid out from Stripe"
                tone="from-teal-500 to-cyan-600"
                moments={[
                  { stage: "Post", active: false, state: "idle" },
                  { stage: "Match", active: false, state: "idle" },
                  { stage: "Fund escrow", active: false, state: "idle" },
                  { stage: "Work", active: false, state: "idle" },
                  { stage: "Deliver", active: false, state: "idle" },
                  { stage: "Release", active: true, state: "landed" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold md:text-4xl">Your safety net</h2>
          <p className="mt-3 text-[var(--muted-foreground)]">
            Three guarantees that make this workable for both sides.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {guarantees.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8 hover:shadow-lg hover:border-[var(--primary)] transition-all"
              >
                <div className="inline-flex rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-3 text-white shadow-lg">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{g.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {g.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-12 text-center text-white md:p-16">
          <Trophy size={40} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Try a test payment — risk-free
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Fund a sandbox escrow with a Stripe test card. See the entire flow
            end to end without spending a real dollar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[var(--primary)] hover:bg-zinc-100"
            >
              Start a test escrow <ArrowRight size={16} />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Open dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function MiniBullet({
  icon: Icon,
  text,
  muted,
}: {
  icon: React.ElementType;
  text: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl border border-[var(--border)] p-3 ${
        muted ? "bg-[var(--muted)]" : "bg-[var(--background)]"
      }`}
    >
      <Icon size={16} className="mt-0.5 shrink-0 text-[var(--primary)]" />
      <p className="text-sm text-[var(--foreground)]">{text}</p>
    </div>
  );
}

function MoneyFlow({ stepKey }: { stepKey: string }) {
  const configs: Record<string, { from: string; to: string; label: string }> = {
    post: { from: "—", to: "—", label: "No money yet" },
    match: { from: "—", to: "—", label: "Scope locked, no charge" },
    escrow: { from: "Card", to: "Escrow", label: "$ → Vault" },
    work: { from: "Escrow", to: "Escrow", label: "$ stays secured" },
    deliver: { from: "Escrow", to: "Escrow", label: "$ awaits release" },
    release: { from: "Escrow", to: "Consultant", label: "$ → Payout" },
  };
  const c = configs[stepKey];
  return (
    <div className="rounded-2xl bg-white/15 backdrop-blur p-4">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white/70">
        <span>{c.from}</span>
        <ArrowRight size={14} className="opacity-70" />
        <span>{c.to}</span>
      </div>
      <p className="mt-2 text-lg font-extrabold">{c.label}</p>
    </div>
  );
}

type Moment = {
  stage: string;
  active: boolean;
  state: "idle" | "charge" | "filling" | "held" | "captured" | "empty" | "landed";
};

function MoneyColumn({
  label,
  subtitle,
  tone,
  moments,
  highlight,
}: {
  label: string;
  subtitle: string;
  tone: string;
  moments: Moment[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        highlight
          ? "border-[var(--primary)] bg-[var(--primary)]/5 ring-1 ring-[var(--primary)]/30"
          : "border-[var(--border)]"
      }`}
    >
      <div className={`inline-flex rounded-xl bg-gradient-to-br ${tone} p-2.5 text-white shadow-md`}>
        <DollarSign size={16} />
      </div>
      <p className="mt-3 font-bold">{label}</p>
      <p className="text-xs text-[var(--muted-foreground)]">{subtitle}</p>
      <div className="mt-5 flex flex-col gap-2.5">
        {moments.map((m) => (
          <div
            key={m.stage}
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs ${
              m.active
                ? "bg-[var(--foreground)] text-[var(--background)] font-semibold"
                : "bg-[var(--muted)] text-[var(--muted-foreground)]"
            }`}
          >
            <span>{m.stage}</span>
            <StateBadge state={m.state} />
          </div>
        ))}
      </div>
    </div>
  );
}

function StateBadge({ state }: { state: Moment["state"] }) {
  const map: Record<Moment["state"], { label: string; cls: string }> = {
    idle: { label: "—", cls: "opacity-40" },
    charge: { label: "charged", cls: "bg-violet-500/20" },
    filling: { label: "filling", cls: "bg-emerald-400/20" },
    held: { label: "held", cls: "bg-emerald-400/30" },
    captured: { label: "captured", cls: "bg-violet-500/30" },
    empty: { label: "released", cls: "bg-amber-400/30" },
    landed: { label: "paid out", cls: "bg-teal-400/30" },
  };
  const m = map[state];
  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${m.cls}`}>
      {m.label}
    </span>
  );
}
