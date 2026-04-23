"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageSquare, DollarSign, Eye, Star, Bell, Settings, User, TrendingUp, Users, Clock, ChevronRight, CheckCircle2, Send, Award, BarChart3, Activity, ShieldCheck, Lock } from "lucide-react";
import { EscrowBoard } from "@/components/EscrowBoard";

const stats = [
  { icon: MessageSquare, label: "Active Consultations", value: "5", change: "+2 this week", color: "from-blue-500 to-blue-600" },
  { icon: DollarSign, label: "Revenue (MTD)", value: "$12,450", change: "+18% vs last month", color: "from-emerald-500 to-emerald-600" },
  { icon: Eye, label: "Profile Views", value: "847", change: "+23% vs last month", color: "from-violet-500 to-violet-600" },
  { icon: Star, label: "Avg. Rating", value: "4.9", change: "+0.1 improvement", color: "from-amber-500 to-amber-600" },
];

const activity = [
  { type: "success", text: "New proposal received for \"Reduce cloud spend by 30%\"", time: "15 min ago" },
  { type: "payment", text: "Payment of $2,500 released to consultant Olivia P.", time: "2 hours ago" },
  { type: "star", text: "You received a 5-star review from TechScale Inc.", time: "5 hours ago" },
  { type: "match", text: "New consultant match: Marcus Weber — Corporate Finance", time: "1 day ago" },
  { type: "milestone", text: "Milestone completed: Discovery Phase for LogiFlow project", time: "2 days ago" },
  { type: "message", text: "New message from Priya Sharma regarding SEO strategy", time: "2 days ago" },
];

const activityIcons: Record<string, typeof Activity> = {
  success: CheckCircle2,
  payment: DollarSign,
  star: Star,
  match: Users,
  milestone: Award,
  message: MessageSquare,
};

const activityColors: Record<string, string> = {
  success: "text-emerald-500",
  payment: "text-blue-500",
  star: "text-amber-500",
  match: "text-violet-500",
  milestone: "text-teal-500",
  message: "text-pink-500",
};

const projects = [
  { client: "TechScale Inc.", consultant: "Olivia Park", title: "AI Content Pipeline Design", progress: 75, budget: "$8,500", deadline: "Apr 20", status: "On Track", statusColor: "text-emerald-600 bg-emerald-500/10" },
  { client: "LogiFlow", consultant: "Yuki Tanaka", title: "Supply Chain Optimization", progress: 45, budget: "$4,200", deadline: "May 1", status: "At Risk", statusColor: "text-amber-600 bg-amber-500/10" },
  { client: "GrowthCo", consultant: "Marcus Weber", title: "Financial Model for Series B", progress: 20, budget: "$6,000", deadline: "May 15", status: "On Track", statusColor: "text-emerald-600 bg-emerald-500/10" },
  { client: "StartupXYZ", consultant: "Natasha Volkov", title: "Fundraising Strategy", progress: 90, budget: "$3,000", deadline: "Apr 10", status: "Completing", statusColor: "text-[var(--primary)] bg-[var(--primary)]/10" },
  { client: "Lumi Botanics", consultant: "Leila Mansour", title: "Brand Identity & Guidelines", progress: 60, budget: "$1,800", deadline: "Apr 25", status: "On Track", statusColor: "text-emerald-600 bg-emerald-500/10" },
  { client: "DataSync", consultant: "Ben Taylor", title: "Cash Flow Analysis & Forecast", progress: 10, budget: "$2,750", deadline: "May 20", status: "Just Started", statusColor: "text-blue-500 bg-blue-500/10" },
];

const messages = [
  { name: "Olivia Park", lastMsg: "The AI pipeline architecture is ready for review. I've uploaded the diagrams to the project folder.", time: "5 min ago", unread: true },
  { name: "Yuki Tanaka", lastMsg: "Updated the supply chain analysis with new Q1 data. The bottleneck is in your Asian distribution center.", time: "2 hours ago", unread: true },
  { name: "Marcus Weber", lastMsg: "I've completed the initial financial model. Let's schedule a call to discuss the Series B projections?", time: "1 day ago", unread: false },
  { name: "Natasha Volkov", lastMsg: "Great progress on the pitch deck! The Series B investors will love the unit economics breakdown.", time: "3 days ago", unread: false },
  { name: "Ben Taylor", lastMsg: "Just started the cash flow analysis. I'll need access to your Stripe and QuickBooks data.", time: "5 days ago", unread: false },
];

const revenue = [6200, 7800, 5400, 9100, 8300, 12450];
const months = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];

export default function DashboardPage() {
  const [tab, setTab] = useState("overview");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const t = params.get("tab");
    if (t && ["overview", "escrow", "projects", "messages", "settings"].includes(t)) {
      setTab(t);
    }
  }, []);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "escrow", label: "Escrow & Payments" },
    { id: "projects", label: "Projects" },
    { id: "messages", label: `Messages` },
    { id: "settings", label: "Settings" },
  ];

  const maxRevenue = Math.max(...revenue);

  return (
    <div>
      {/* Dashboard Header */}
      <div className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-extrabold">Dashboard</h1>
              <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-[var(--success)]/10 px-3 py-1 text-xs font-medium text-[var(--success)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
                Live
              </span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mt-1">Welcome back, Alex. Here's what's happening.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full p-2 hover:bg-[var(--border)] transition-colors relative">
              <Bell size={20} />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--primary)] text-[10px] font-bold text-white ring-2 ring-[var(--muted)]">3</span>
            </button>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-xs font-bold text-white shadow-lg shadow-[var(--primary)]/20">AK</div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        {/* Sub-tabs */}
        <div className="flex gap-1 mb-8 border-b border-[var(--border)] overflow-x-auto">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${tab === t.id ? "border-[var(--primary)] text-[var(--primary)]" : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <>
            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg`}>
                      <s.icon size={18} />
                    </div>
                    <TrendingUp size={14} className="text-[var(--success)]" />
                  </div>
                  <p className="text-2xl font-extrabold">{s.value}</p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-1">{s.label}</p>
                  <p className="text-xs text-[var(--success)] mt-1 font-medium">{s.change}</p>
                </div>
              ))}
            </div>

            {/* Charts + Activity */}
            <div className="grid gap-6 lg:grid-cols-3 mb-8">
              {/* Revenue Chart */}
              <div className="lg:col-span-2 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="font-bold">Revenue Trends</h2>
                    <p className="text-sm text-[var(--muted-foreground)] mt-0.5">Last 6 months</p>
                  </div>
                  <BarChart3 size={20} className="text-[var(--muted-foreground)]" />
                </div>
                <div className="flex items-end gap-3 h-48">
                  {revenue.map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-xs font-semibold">{v < 10000 ? `$${v / 1000}k` : `$${(v / 1000).toFixed(1)}k`}</span>
                      <div className="w-full rounded-t-lg bg-gradient-to-t from-[var(--primary)] to-[var(--accent)] opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${(v / maxRevenue) * 140}px` }} />
                      <span className="text-xs text-[var(--muted-foreground)]">{months[i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold">Activity</h2>
                  <Clock size={18} className="text-[var(--muted-foreground)]" />
                </div>
                <div className="flex flex-col gap-4">
                  {activity.map((a, i) => {
                    const Icon = activityIcons[a.type];
                    return (
                      <div key={i} className="flex items-start gap-3">
                        {Icon && <Icon size={14} className={`mt-0.5 shrink-0 ${activityColors[a.type]}`} />}
                        <div className="min-w-0 flex-1">
                          <p className="text-sm leading-snug">{a.text}</p>
                          <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{a.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Active Projects */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-bold">Active Projects</h2>
                  <p className="text-sm text-[var(--muted-foreground)] mt-0.5">{projects.filter(p => p.progress < 100).length} projects in progress</p>
                </div>
                <Users size={20} className="text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-4">
                {projects.slice(0, 4).map((p, i) => (
                  <div key={i} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 px-4 rounded-xl hover:bg-[var(--muted)] transition-colors cursor-pointer">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold group-hover:text-[var(--primary)] transition-colors">{p.title}</p>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${p.statusColor}`}>{p.status}</span>
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{p.client} &times; {p.consultant}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 w-40">
                        <div className="flex-1 h-2 rounded-full bg-[var(--muted)] overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className="text-xs font-medium w-10 text-right">{p.progress}%</span>
                      </div>
                      <span className="text-sm font-semibold">{p.budget}</span>
                      <ChevronRight size={16} className="text-[var(--muted-foreground)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === "escrow" && (
          <div>
            <div className="mb-6 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={20} className="text-[var(--success)]" />
                    <h2 className="text-xl font-bold">Escrow control room</h2>
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)] max-w-xl">
                    Every engagement is funded up front but held by Stripe — we only pay out when you release. Track each project's stage, close milestones, and trigger the payout in one click.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  <Link href="/checkout" className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)] shadow-lg shadow-[var(--primary)]/20">
                    <Lock size={14} /> Fund new escrow
                  </Link>
                  <Link href="/how-it-works" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-semibold hover:bg-[var(--muted)]">
                    How it works
                  </Link>
                </div>
              </div>
            </div>
            <EscrowBoard />
          </div>
        )}

        {tab === "projects" && (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold">All Projects</h2>
                <p className="text-sm text-[var(--muted-foreground)] mt-0.5">Active and recently completed engagements</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="py-3 px-4 text-left font-medium text-[var(--muted-foreground)]">Project</th>
                    <th className="py-3 px-4 text-left font-medium text-[var(--muted-foreground)] hidden md:table-cell">Client</th>
                    <th className="py-3 px-4 text-left font-medium text-[var(--muted-foreground)] hidden lg:table-cell">Consultant</th>
                    <th className="py-3 px-4 text-left font-medium text-[var(--muted-foreground)]">Budget</th>
                    <th className="py-3 px-4 text-left font-medium text-[var(--muted-foreground)]">Progress</th>
                    <th className="py-3 px-4 text-left font-medium text-[var(--muted-foreground)] hidden md:table-cell">Status</th>
                    <th className="py-3 px-4 text-left font-medium text-[var(--muted-foreground)] hidden lg:table-cell">Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p, i) => (
                    <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--muted)] transition-colors cursor-pointer">
                      <td className="py-4 px-4 font-semibold">{p.title}</td>
                      <td className="py-4 px-4 text-[var(--muted-foreground)] hidden md:table-cell">{p.client}</td>
                      <td className="py-4 px-4 hidden lg:table-cell">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-[9px] font-bold text-white">{p.consultant.split(" ").map((n) => n[0]).join("")}</div>
                          {p.consultant}
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium">{p.budget}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2 w-32">
                          <div className="flex-1 h-2 rounded-full bg-[var(--muted)] overflow-hidden">
                            <div className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" style={{ width: `${p.progress}%` }} />
                          </div>
                          <span className="text-xs font-medium">{p.progress}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 hidden md:table-cell">
                        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${p.statusColor}`}>{p.status}</span>
                      </td>
                      <td className="py-4 px-4 text-[var(--muted-foreground)] hidden lg:table-cell">{p.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "messages" && (
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] overflow-hidden">
              <div className="p-6 border-b border-[var(--border)]">
                <h2 className="text-xl font-bold">Messages</h2>
                <p className="text-sm text-[var(--muted-foreground)] mt-0.5">{messages.filter(m => m.unread).length} unread conversations</p>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {messages.map((msg, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 hover:bg-[var(--muted)] transition-colors cursor-pointer group">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-xs font-bold text-white shadow-md shadow-[var(--primary)]/20">{msg.name.split(" ").map((n) => n[0]).join("")}</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold group-hover:text-[var(--primary)] transition-colors">{msg.name}</p>
                        <span className="text-xs text-[var(--muted-foreground)]">{msg.time}</span>
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)] mt-0.5 line-clamp-2">{msg.lastMsg}</p>
                    </div>
                    {msg.unread && <div className="h-2.5 w-2.5 rounded-full bg-[var(--primary)] shrink-0 mt-3 shadow-md shadow-[var(--primary)]/40" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "settings" && (
          <div className="mx-auto max-w-2xl">
            {/* Profile */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8 mb-6">
              <div className="flex items-center gap-4 mb-8">
                <Settings size={22} className="text-[var(--muted-foreground)]" />
                <h2 className="text-xl font-bold">Account Settings</h2>
              </div>

              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[var(--border)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-lg font-bold text-white shadow-lg shadow-[var(--primary)]/20">AK</div>
                <div>
                  <p className="font-semibold text-lg">Alex K.</p>
                  <p className="text-sm text-[var(--muted-foreground)]">alex@company.com &middot; Client + Consultant</p>
                </div>
                <button className="ml-auto text-sm font-medium text-[var(--primary)] hover:underline">Change Avatar</button>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="text-sm font-medium">Display Name</label>
                  <input defaultValue="Alex K." className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input defaultValue="alex@company.com" className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                </div>
                <div>
                  <label className="text-sm font-medium">Company</label>
                  <input defaultValue="TechCo Inc." className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                </div>
                <div>
                  <label className="text-sm font-medium">Role</label>
                  <select className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <option>Client</option>
                    <option selected>Both</option>
                    <option>Consultant</option>
                  </select>
                </div>
                <button className="self-start rounded-xl bg-[var(--primary)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-dark)] shadow-lg shadow-[var(--primary)]/20">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Notifications */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8 mb-6">
              <h3 className="text-lg font-bold mb-1">Notifications</h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-5">Choose what updates you want to receive</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: "New proposals on my problems", desc: "Get notified when a consultant bids on your problem", checked: true },
                  { label: "Project milestone updates", desc: "Stay informed about progress on your engagements", checked: true },
                  { label: "New messages", desc: "Real-time notifications for direct messages", checked: true },
                  { label: "Payment confirmations", desc: "Email confirmations when funds are released from escrow", checked: true },
                  { label: "Marketing & product updates", desc: "Occasional emails about new features and consulting tips", checked: false },
                ].map((n) => (
                  <label key={n.label} className="flex items-center justify-between py-3 border-b border-[var(--border)] last:border-b-0 cursor-pointer group">
                    <div>
                      <p className="text-sm font-medium group-hover:text-[var(--primary)] transition-colors">{n.label}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">{n.desc}</p>
                    </div>
                    <input type="checkbox" defaultChecked={n.checked} className="h-5 w-5 rounded accent-[var(--primary)]" />
                  </label>
                ))}
              </div>
            </div>

            {/* Subscription */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8">
              <h3 className="text-lg font-bold mb-1">Subscription</h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-5">Manage your plan and billing</p>
              <div className="rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium opacity-80">Current Plan</p>
                    <p className="text-2xl font-extrabold">Professional</p>
                    <p className="text-sm opacity-80">$49/month &middot; Next billing: Apr 15, 2026</p>
                  </div>
                  <button className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/30 transition-colors">Change Plan</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
