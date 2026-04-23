import Link from "next/link";
import { CheckCircle2, Lock, ArrowRight, Sparkles, Trophy } from "lucide-react";
import { getProject, transitionStage } from "@/lib/escrow-store";

export const dynamic = "force-dynamic";

type Search = Promise<{ pid?: string; sid?: string; sim?: string }>;

export default async function CheckoutSuccess({ searchParams }: { searchParams: Search }) {
  const { pid, sid, sim } = await searchParams;
  const project = pid ? getProject(pid) : undefined;

  if (project && project.stage === "awaiting_funding") {
    transitionStage(project.id, "funded");
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-10 text-white text-center shadow-xl">
        <CheckCircle2 size={56} className="mx-auto mb-4 drop-shadow" />
        <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur">
          <Lock size={12} /> {sim ? "Simulated escrow funded" : "Escrow funded"}
        </span>
        <h1 className="mt-4 text-4xl font-extrabold">Funds secured.</h1>
        <p className="mx-auto mt-3 max-w-xl text-white/90">
          {project
            ? `$${(project.amountCents / 100).toLocaleString()} is held in escrow for "${project.title}". Nothing has been paid to ${project.consultantName} yet — you're in control.`
            : "Your payment is held in escrow. The consultant has been notified to start work."}
        </p>

        <div className="mt-8 rounded-2xl bg-white/15 backdrop-blur p-4 text-left">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
            <Trophy size={12} /> You earned
          </p>
          <p className="mt-1 text-2xl font-extrabold">+200 XP &middot; Trust Builder badge</p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Sparkles size={18} className="text-[var(--primary)]" /> What happens next
        </h2>
        <ol className="mt-4 flex flex-col gap-3 text-sm">
          <StepLine n={1} label="Consultant confirms scope and starts work" />
          <StepLine n={2} label="Each milestone closed = progress visible to you" />
          <StepLine n={3} label="When delivery is complete, you get a 48h review window" />
          <StepLine n={4} label="One-click release sends funds minus the 8% platform fee" />
        </ol>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/dashboard?tab=escrow"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
          >
            Open dashboard <ArrowRight size={14} />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold hover:bg-[var(--muted)]"
          >
            Full payment flow
          </Link>
        </div>

        {sid && (
          <p className="mt-6 text-[11px] font-mono text-[var(--muted-foreground)] break-all">
            Reference: {sid}
          </p>
        )}
      </div>
    </div>
  );
}

function StepLine({ n, label }: { n: number; label: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[11px] font-bold text-[var(--primary)]">
        {n}
      </span>
      <span>{label}</span>
    </li>
  );
}
