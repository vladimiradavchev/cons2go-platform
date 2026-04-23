export type EscrowStage =
  | "awaiting_funding"
  | "funded"
  | "in_progress"
  | "delivered"
  | "released"
  | "refunded"
  | "disputed";

export type EscrowProject = {
  id: string;
  title: string;
  clientName: string;
  consultantName: string;
  amountCents: number;
  feeCents: number;
  currency: string;
  stage: EscrowStage;
  createdAt: number;
  updatedAt: number;
  paymentIntentId?: string;
  checkoutSessionId?: string;
  milestones: {
    id: string;
    label: string;
    done: boolean;
    doneAt?: number;
  }[];
};

const g = globalThis as unknown as { __escrow?: Map<string, EscrowProject> };
if (!g.__escrow) g.__escrow = new Map();
const store = g.__escrow;

function seed() {
  if (store.size > 0) return;
  const now = Date.now();
  const samples: EscrowProject[] = [
    {
      id: "esc_demo_01",
      title: "AI Content Pipeline Design",
      clientName: "TechScale Inc.",
      consultantName: "Olivia Park",
      amountCents: 850000,
      feeCents: 68000,
      currency: "usd",
      stage: "in_progress",
      createdAt: now - 1000 * 60 * 60 * 24 * 6,
      updatedAt: now - 1000 * 60 * 60 * 4,
      milestones: [
        { id: "m1", label: "Kickoff & scope locked", done: true, doneAt: now - 1000 * 60 * 60 * 24 * 5 },
        { id: "m2", label: "Architecture draft delivered", done: true, doneAt: now - 1000 * 60 * 60 * 24 * 2 },
        { id: "m3", label: "Implementation plan", done: false },
        { id: "m4", label: "Final handover", done: false },
      ],
    },
    {
      id: "esc_demo_02",
      title: "Fundraising Strategy",
      clientName: "StartupXYZ",
      consultantName: "Natasha Volkov",
      amountCents: 300000,
      feeCents: 24000,
      currency: "usd",
      stage: "delivered",
      createdAt: now - 1000 * 60 * 60 * 24 * 10,
      updatedAt: now - 1000 * 60 * 30,
      milestones: [
        { id: "m1", label: "Positioning workshop", done: true },
        { id: "m2", label: "Pitch deck v1", done: true },
        { id: "m3", label: "Investor list", done: true },
        { id: "m4", label: "Final deliverables", done: true },
      ],
    },
    {
      id: "esc_demo_03",
      title: "Supply Chain Optimization",
      clientName: "LogiFlow",
      consultantName: "Yuki Tanaka",
      amountCents: 420000,
      feeCents: 33600,
      currency: "usd",
      stage: "funded",
      createdAt: now - 1000 * 60 * 60 * 24 * 1,
      updatedAt: now - 1000 * 60 * 45,
      milestones: [
        { id: "m1", label: "Discovery & data ingestion", done: false },
        { id: "m2", label: "Bottleneck analysis", done: false },
        { id: "m3", label: "Optimization plan", done: false },
      ],
    },
  ];
  for (const p of samples) store.set(p.id, p);
}

seed();

export function listProjects() {
  return Array.from(store.values()).sort((a, b) => b.updatedAt - a.updatedAt);
}

export function getProject(id: string) {
  return store.get(id);
}

export function upsertProject(p: EscrowProject) {
  store.set(p.id, p);
  return p;
}

export function transitionStage(id: string, stage: EscrowStage) {
  const p = store.get(id);
  if (!p) return null;
  p.stage = stage;
  p.updatedAt = Date.now();
  store.set(id, p);
  return p;
}

export function completeMilestone(id: string, milestoneId: string) {
  const p = store.get(id);
  if (!p) return null;
  const m = p.milestones.find((x) => x.id === milestoneId);
  if (m && !m.done) {
    m.done = true;
    m.doneAt = Date.now();
    p.updatedAt = Date.now();
    store.set(id, p);
  }
  return p;
}

export function newId(prefix = "esc") {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}
