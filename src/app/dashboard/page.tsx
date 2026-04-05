"use client";

import { useState } from "react";
import { MessageSquare, DollarSign, Eye, Star, BarChart3, Bell, Settings, User, TrendingUp, Users, Clock } from "lucide-react";

const dashboardStats = [
  { icon: MessageSquare, label: "Active Consultations", value: "5", change: "+2 this week" },
  { icon: DollarSign, label: "Revenue (MTD)", value: "$12,450", change: "+18% vs last month" },
  { icon: Eye, label: "Profile Views", value: "847", change: "+23% vs last month" },
  { icon: Star, label: "Avg. Rating", value: "4.9", change: "+0.1 improvement" },
];

const recentActivity = [
  { type: "proposal", text: "New proposal received for \"Reduce cloud spend by 30%\"", time: "15 min ago" },
  { type: "payment", text: "Payment of $2,500 released to consultant Olivia P.", time: "2 hours ago" },
  { type: "review", text: "You received a 5-star review from TechScale Inc.", time: "5 hours ago" },
  { type: "match", text: "New consultant match: Marcus Weber (Corporate Finance)", time: "1 day ago" },
  { type: "milestone", text: "Milestone completed: Discovery Phase for LogiFlow project", time: "2 days ago" },
  { type: "message", text: "New message from Priya Sharma regarding SEO strategy", time: "2 days ago" },
];

const activeProjects = [
  { client: "TechScale Inc.", consultant: "Olivia Park", title: "AI Content Pipeline Design", progress: 75, budget: "$8,500", deadline: "Apr 20" },
  { client: "LogiFlow", consultant: "Yuki Tanaka", title: "Supply Chain Optimization", progress: 45, budget: "$4,200", deadline: "May 1" },
  { client: "GrowthCo", consultant: "Marcus Weber", title: "Financial Model for Series B", progress: 20, budget: "$6,000", deadline: "May 15" },
  { client: "StartupXYZ", consultant: "Natasha Volkov", title: "Fundraising Strategy", progress: 90, budget: "$3,000", deadline: "Apr 10" },
];

export default function DashboardPage() {
  const [tab, setTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "projects", label: "Projects" },
    { id: "messages", label: "Messages" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div>
      <div className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">Dashboard</h1>
            <p className="text-sm text-[var(--muted-foreground)]">Welcome back, Alex</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full p-2 hover:bg-[var(--border)] transition-colors relative">
              <Bell size={20} />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--primary)] text-[10px] font-bold text-white">3</span>
            </button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-xs font-bold text-white">AK</div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Sub-tabs */}
        <div className="flex gap-1 mb-8 border-b border-[var(--border)]">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${tab === t.id ? "border-[var(--primary)] text-[var(--primary)]" : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <>
            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {dashboardStats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                  <div className="flex items-center justify-between mb-3">
                    <s.icon size={20} className="text-[var(--muted-foreground)]" />
                    <TrendingUp size={16} className="text-[var(--success)]" />
                  </div>
                  <p className="text-2xl font-extrabold">{s.value}</p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-1">{s.label}</p>
                  <p className="text-xs text-[var(--success)] mt-2">{s.change}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Active Projects */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold">Active Projects</h2>
                  <Users size={18} className="text-[var(--muted-foreground)]" />
                </div>
                <div className="flex flex-col gap-4">
                  {activeProjects.map((p, i) => (
                    <div key={i} className="group">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <p className="text-sm font-semibold group-hover:text-[var(--primary)] transition-colors">{p.title}</p>
                          <p className="text-xs text-[var(--muted-foreground)]">{p.client} x {p.consultant}</p>
                        </div>
                        <span className="text-xs font-medium text-[var(--muted-foreground)]">{p.budget}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex-1 h-2 rounded-full bg-[var(--muted)] overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className="text-xs text-[var(--muted-foreground)] w-10 text-right">{p.progress}%</span>
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)] mt-1">Due {p.deadline}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold">Recent Activity</h2>
                  <Clock size={18} className="text-[var(--muted-foreground)]" />
                </div>
                <div className="flex flex-col gap-4">
                  {recentActivity.map((a, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[var(--primary)] shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm">{a.text}</p>
                        <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {tab === "projects" && (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
            <h2 className="font-bold mb-6">All Projects</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="py-3 text-left font-medium text-[var(--muted-foreground)]">Project</th>
                    <th className="py-3 text-left font-medium text-[var(--muted-foreground)]">Client</th>
                    <th className="py-3 text-left font-medium text-[var(--muted-foreground)]">Consultant</th>
                    <th className="py-3 text-left font-medium text-[var(--muted-foreground)]">Budget</th>
                    <th className="py-3 text-left font-medium text-[var(--muted-foreground)]">Progress</th>
                    <th className="py-3 text-left font-medium text-[var(--muted-foreground)]">Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {activeProjects.map((p, i) => (
                    <tr key={i} className="border-b border-[var(--border)]">
                      <td className="py-4 font-medium">{p.title}</td>
                      <td className="py-4 text-[var(--muted-foreground)]">{p.client}</td>
                      <td className="py-4 text-[var(--muted-foreground)]">{p.consultant}</td>
                      <td className="py-4">{p.budget}</td>
                      <td className="py-4">
                        <span className="inline-flex items-center gap-2">
                          <div className="w-24 h-2 rounded-full bg-[var(--muted)] overflow-hidden">
                            <div className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" style={{ width: `${p.progress}%` }} />
                          </div>
                          <span className="text-xs">{p.progress}%</span>
                        </span>
                      </td>
                      <td className="py-4 text-[var(--muted-foreground)]">{p.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "messages" && (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
            <h2 className="font-bold mb-4">Messages</h2>
            <div className="flex flex-col gap-3">
              {[
                { name: "Olivia Park", lastMsg: "The AI pipeline architecture is ready for review. I've uploaded the diagrams.", time: "5 min ago", unread: true },
                { name: "Yuki Tanaka", lastMsg: "Updated the supply chain analysis with new Q1 data. Let me know your thoughts.", time: "2 hours ago", unread: true },
                { name: "Marcus Weber", lastMsg: "I've completed the initial financial model. Schedule a call to discuss?", time: "1 day ago", unread: false },
                { name: "Natasha Volkov", lastMsg: "Great progress on the pitch deck! The Series B investors will love this.", time: "3 days ago", unread: false },
              ].map((msg, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-[var(--muted)] cursor-pointer transition-colors">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-xs font-bold text-white">{msg.name.split(" ").map((n) => n[0]).join("")}</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">{msg.name}</p>
                      <span className="text-xs text-[var(--muted-foreground)]">{msg.time}</span>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)] mt-0.5 truncate">{msg.lastMsg}</p>
                  </div>
                  {msg.unread && <div className="h-2.5 w-2.5 rounded-full bg-[var(--primary)] shrink-0 mt-2" />}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "settings" && (
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8">
              <div className="flex items-center gap-4 mb-8">
                <Settings size={24} className="text-[var(--muted-foreground)]" />
                <h2 className="text-xl font-bold">Account Settings</h2>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <label className="text-sm font-medium">Display Name</label>
                  <input defaultValue="Alex K." className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input defaultValue="alex@company.com" className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                </div>
                <div>
                  <label className="text-sm font-medium">Role</label>
                  <select className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <option>Client</option>
                    <option>Consultant</option>
                    <option>Both</option>
                  </select>
                </div>
                <div className="pt-4 border-t border-[var(--border)]">
                  <h3 className="text-sm font-medium mb-3">Notifications</h3>
                  <div className="flex flex-col gap-3">
                    {[
                      "New proposals on my problems",
                      "Project milestone updates",
                      "New messages",
                      "Payment confirmations",
                    ].map((n) => (
                      <label key={n} className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm">{n}</span>
                        <input type="checkbox" defaultChecked className="accent-[var(--primary)]" />
                      </label>
                    ))}
                  </div>
                </div>
                <button className="self-start rounded-full bg-[var(--primary)] px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-dark)]">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
