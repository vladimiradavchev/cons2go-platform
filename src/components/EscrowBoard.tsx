"use client";

import { useEffect, useState } from "react";
import {
  Lock,
  Rocket,
  Package,
  HandCoins,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Loader2,
  AlertTriangle,
  PartyPopper,
  Undo2,
} from "lucide-react";
import type { EscrowProject, EscrowStage } from "@/lib/escrow-store";

const STAGE_STEPS: { key: EscrowStage; label: string; icon: React.ElementType }[] = [
  { key: "funded", label: "Funded", icon: Lock },
  { key: "in_progress", label: "In progress", icon: Rocket },
  { key: "delivered", label: "Delivered", icon: Package },
  { key: "released", label: "Released", icon: HandCoins },
];

const STAGE_RANK: Record<EscrowStage, number> = {
  awaiting_funding: -1,
  funded: 0,
  in_progress: 1,
  delivered: 2,
  released: 3,
  refunded: 3,
  disputed: 1,
};

const STAGE_COLOR: Record<EscrowStage, string> = {
  awaiting_funding: "bg-zinc-500/10 text-zinc-600",
  funded: "bg-emerald-500/10 text-emerald-700",
  in_progress: "bg-blue-500/10 text-blue-700",
  delivered: "bg-amber-500/10 text-amber-700",
  released: "bg-teal-500/10 text-teal-700",
  refunded: "bg-zinc-500/10 text-zinc-700",
  disputed: "bg-red-500/10 text-red-700",
};

function fmtMoney(cents: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

export function EscrowBoard() {
  const [projects, setProjects] = useState<EscrowProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [celebrateId, setCelebrateId] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/escrow/list", { cache: "no-store" });
      const data = await res.json();
      setProjects(data.projects || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function act(
    projectId: string,
    endpoint: string,
    body: Record<string, unknown>,
    celebrate?: boolean,
  ) {
    setBusyId(projectId);
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, ...body }),
      });
      if (celebrate) {
        setCelebrateId(projectId);
        setTimeout(() => setCelebrateId(null), 1400);
      }
      await load();
    } finally {
      setBusyId(null);
    }
  }

  const totalHeld = projects
    .filter((p) => ["funded", "in_progress", "delivered"].includes(p.stage))
    .reduce((s, p) => s + p.amountCents, 0);
  const totalReleased = projects
    .filter((p) => p.stage === "released")
    .reduce((s, p) => s + (p.amountCents - p.feeCents), 0);

  return (
    <div>
      {/* Summary strip */}
      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        <SummaryCard
          icon={ShieldCheck}
          label="In escrow now"
          value={fmtMoney(totalHeld, "usd")}
          tone="from-emerald-500 to-emerald-600"
          sub={`${projects.filter((p) => ["funded", "in_progress", "delivered"].includes(p.stage)).length} active engagements`}
        />
        <SummaryCard
          icon={HandCoins}
          label="Released this period"
          value={fmtMoney(totalReleased, "usd")}
          tone="from-teal-500 to-cyan-600"
          sub={`${projects.filter((p) => p.stage === "released").length} projects paid out`}
        />
        <SummaryCard
          icon={Clock}
          label="Awaiting your review"
          value={String(projects.filter((p) => p.stage === "delivered").length)}
          tone="from-amber-500 to-orange-500"
          sub="Release within 48h for a +50 XP streak bonus"
        />
      </div>

      {loading && (
        <div className="py-16 text-center text-sm text-[var(--muted-foreground)]">
          <Loader2 size={18} className="inline animate-spin mr-2" />
          Loading escrow projects…
        </div>
      )}

      <div className="flex flex-col gap-5">
        {projects.map((p) => {
          const rank = STAGE_RANK[p.stage];
          const done = p.milestones.filter((m) => m.done).length;
          const celebrating = celebrateId === p.id;
          return (
            <div
              key={p.id}
              className={`relative rounded-2xl border bg-[var(--background)] overflow-hidden transition-all ${
                celebrating
                  ? "border-[var(--success)] shadow-xl shadow-[var(--success)]/20 scale-[1.01]"
                  : "border-[var(--border)]"
              }`}
            >
              {celebrating && (
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--success)]/10 backdrop-blur-sm pointer-events-none z-10">
                  <div className="flex items-center gap-2 rounded-full bg-[var(--success)] px-5 py-2.5 text-white font-bold shadow-xl">
                    <PartyPopper size={18} /> Payment released!
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4 justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold">{p.title}</h3>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${STAGE_COLOR[p.stage]}`}
                      >
                        {p.stage.replace("_", " ")}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                      {p.clientName} &times; {p.consultantName}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-[var(--muted-foreground)]">Escrow amount</p>
                    <p className="text-2xl font-extrabold">{fmtMoney(p.amountCents, p.currency)}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      Fee {fmtMoney(p.feeCents, p.currency)} &middot; Consultant{" "}
                      {fmtMoney(p.amountCents - p.feeCents, p.currency)}
                    </p>
                  </div>
                </div>

                {/* Stage bar */}
                <div className="mt-6 relative">
                  <div className="absolute top-5 left-5 right-5 h-1 rounded-full bg-[var(--muted)]" />
                  <div
                    className="absolute top-5 left-5 h-1 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-500"
                    style={{
                      width:
                        rank < 0
                          ? "0%"
                          : `calc(${(rank / (STAGE_STEPS.length - 1)) * 100}% - ${rank > 0 ? "0" : "0"}px)`,
                    }}
                  />
                  <div className="relative grid grid-cols-4 gap-2">
                    {STAGE_STEPS.map((s, i) => {
                      const Icon = s.icon;
                      const reached = rank >= i;
                      const current = rank === i;
                      return (
                        <div key={s.key} className="flex flex-col items-center text-center">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                              current
                                ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/30 scale-110"
                                : reached
                                ? "border-[var(--success)] bg-[var(--success)] text-white"
                                : "border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)]"
                            }`}
                          >
                            {reached && !current ? (
                              <CheckCircle2 size={18} />
                            ) : (
                              <Icon size={16} />
                            )}
                          </div>
                          <p
                            className={`mt-2 text-[11px] font-semibold ${
                              current
                                ? "text-[var(--primary)]"
                                : reached
                                ? "text-[var(--foreground)]"
                                : "text-[var(--muted-foreground)]"
                            }`}
                          >
                            {s.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Milestones */}
                <div className="mt-6 rounded-xl bg-[var(--muted)] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
                      Milestones
                    </p>
                    <p className="text-xs font-semibold">
                      {done}/{p.milestones.length} done
                    </p>
                  </div>
                  <div className="mt-3 flex flex-col gap-2">
                    {p.milestones.map((m) => {
                      const clickable =
                        !m.done &&
                        (p.stage === "funded" || p.stage === "in_progress");
                      return (
                        <button
                          key={m.id}
                          disabled={!clickable || busyId === p.id}
                          onClick={() =>
                            act(p.id, "/api/escrow/advance", {
                              milestoneId: m.id,
                              action: "complete_milestone",
                            })
                          }
                          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                            m.done
                              ? "bg-[var(--success)]/10 text-[var(--foreground)]"
                              : clickable
                              ? "bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] cursor-pointer"
                              : "opacity-60"
                          }`}
                        >
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              m.done
                                ? "bg-[var(--success)] text-white"
                                : "border border-[var(--border)]"
                            }`}
                          >
                            {m.done && <CheckCircle2 size={12} />}
                          </span>
                          <span className={m.done ? "line-through opacity-70" : ""}>
                            {m.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action row */}
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {p.stage === "funded" && (
                    <ActionBtn
                      tone="primary"
                      disabled={busyId === p.id}
                      onClick={() =>
                        act(p.id, "/api/escrow/advance", { action: "start_work" })
                      }
                      icon={Rocket}
                    >
                      Start work
                    </ActionBtn>
                  )}
                  {["funded", "in_progress"].includes(p.stage) && (
                    <ActionBtn
                      tone="ghost"
                      disabled={busyId === p.id}
                      onClick={() =>
                        act(p.id, "/api/escrow/advance", { action: "mark_delivered" })
                      }
                      icon={Package}
                    >
                      Mark delivered
                    </ActionBtn>
                  )}
                  {p.stage === "delivered" && (
                    <>
                      <ActionBtn
                        tone="success"
                        disabled={busyId === p.id}
                        onClick={() => act(p.id, "/api/escrow/release", {}, true)}
                        icon={HandCoins}
                      >
                        Release payment
                      </ActionBtn>
                      <ActionBtn
                        tone="danger"
                        disabled={busyId === p.id}
                        onClick={() => act(p.id, "/api/escrow/refund", {})}
                        icon={AlertTriangle}
                      >
                        Dispute & refund
                      </ActionBtn>
                    </>
                  )}
                  {p.stage === "released" && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--success)]/10 px-4 py-2 text-sm font-semibold text-[var(--success)]">
                      <CheckCircle2 size={14} /> Paid to {p.consultantName}
                    </span>
                  )}
                  {p.stage === "refunded" && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--muted)] px-4 py-2 text-sm font-semibold text-[var(--muted-foreground)]">
                      <Undo2 size={14} /> Refunded to client
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  sub,
  tone,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  tone: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5">
      <div className={`inline-flex rounded-xl bg-gradient-to-br ${tone} p-2.5 text-white shadow-md`}>
        <Icon size={16} />
      </div>
      <p className="mt-3 text-xs text-[var(--muted-foreground)]">{label}</p>
      <p className="text-2xl font-extrabold">{value}</p>
      <p className="mt-1 text-xs text-[var(--muted-foreground)]">{sub}</p>
    </div>
  );
}

function ActionBtn({
  children,
  onClick,
  icon: Icon,
  tone,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  icon: React.ElementType;
  tone: "primary" | "ghost" | "success" | "danger";
  disabled?: boolean;
}) {
  const toneCls = {
    primary:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-lg shadow-[var(--primary)]/20",
    success:
      "bg-[var(--success)] text-white hover:brightness-110 shadow-lg shadow-[var(--success)]/20",
    danger:
      "bg-red-500/10 text-red-600 hover:bg-red-500/20 border border-red-500/30",
    ghost: "border border-[var(--border)] hover:bg-[var(--muted)]",
  }[tone];
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all disabled:opacity-50 ${toneCls}`}
    >
      <Icon size={14} /> {children}
    </button>
  );
}
