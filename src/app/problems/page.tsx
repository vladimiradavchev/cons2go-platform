"use client";

import { useState } from "react";
import { ArrowRight, Tag, Paperclip, Send, Eye } from "lucide-react";

const categories = [
  "Business Strategy", "Technology", "Finance", "Marketing",
  "Legal", "HR", "Operations", "Design", "Sales", "Other"
];

const sampleProblems = [
  { title: "Need to reduce AWS cloud spend by 30%", category: "Technology", budget: "$2,000 - $5,000", proposals: 7, status: "Open", desc: "We're a SaaS company spending ~$15k/mo on AWS. Looking for someone who can audit and optimize without impacting performance.", author: "JM", timeAgo: "2h ago" },
  { title: "Expand into European market — compliance & GTM", category: "Business Strategy", budget: "$5,000 - $10,000", proposals: 12, status: "Open", desc: "US-based fintech looking to launch in the EU. Need help with GDPR compliance, entity setup, and go-to-market strategy.", author: "AK", timeAgo: "5h ago" },
  { title: "Restructure sales comp plan for Series B startup", category: "Sales", budget: "$1,000 - $3,000", proposals: 4, status: "Open", desc: "Growing fast but our sales team comp is misaligned. Need someone experienced in designing OTE plans for B2B SaaS.", author: "RL", timeAgo: "8h ago" },
  { title: "Trademark & IP protection across 3 countries", category: "Legal", budget: "$3,000 - $7,000", proposals: 9, status: "In Progress", desc: "Need to protect our brand name and logo in the US, UK, and Canada. Looking for an IP attorney with international experience.", author: "DW", timeAgo: "1d ago" },
  { title: "Build a brand identity from scratch", category: "Design", budget: "$500 - $2,000", proposals: 15, status: "In Progress", desc: "Launching a D2C skincare brand. Need logo, color palette, packaging design, and brand guidelines.", author: "SN", timeAgo: "2d ago" },
  { title: "Implement OKR framework for 50-person company", category: "Operations", budget: "$1,500 - $4,000", proposals: 6, status: "Closed", desc: "We've grown to 50 people and lost alignment. Need someone to help set up and run OKRs across our org.", author: "MP", timeAgo: "5d ago" },
];

export default function ProblemsPage() {
  const [tab, setTab] = useState("browse");
  const [category, setCategory] = useState("All");
  const [formData, setFormData] = useState({ title: "", desc: "", category: "", budget: "", attachments: false });

  const filtered = category === "All" ? sampleProblems : sampleProblems.filter((p) => p.category === category);

  return (
    <div>
      <div className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h1 className="text-3xl font-extrabold md:text-4xl">Problem Marketplace</h1>
          <p className="mt-2 text-[var(--muted-foreground)]">Post a challenge or respond to existing ones</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 border-b border-[var(--border)] mb-8">
          {[
            { id: "browse", label: "Browse Problems" },
            { id: "post", label: "Post a Problem" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${tab === t.id ? "border-[var(--primary)] text-[var(--primary)]" : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "post" ? (
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8">
              <h2 className="text-xl font-bold">Describe Your Challenge</h2>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">Be as specific as possible — better details attract better proposals.</p>
              <div className="mt-6 flex flex-col gap-5">
                <div>
                  <label className="text-sm font-medium">Title</label>
                  <input className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="e.g., Need to reduce AWS costs by 30%" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <select className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                    <option value="">Select...</option>
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <textarea rows={5} className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none" placeholder="Describe your challenge, goals, and constraints..." value={formData.desc} onChange={(e) => setFormData({ ...formData, desc: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium">Budget Range</label>
                  <input className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="e.g., $1,000 - $5,000" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} />
                </div>
                <label className="flex cursor-pointer items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                  <Paperclip size={16} />
                  <span>Attach files or documents</span>
                  <input type="file" className="hidden" />
                </label>
                <button className="flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-dark)]">
                  Post Problem <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["All", ...categories].map((c) => (
                <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${category === c ? "bg-[var(--primary)] text-white" : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--border)]"}`}>
                  {c}
                </button>
              ))}
            </div>

            {/* Problem cards */}
            <div className="grid gap-4">
              {filtered.map((p, i) => (
                <div key={i} className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:border-[var(--primary)] hover:shadow-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold group-hover:text-[var(--primary)] transition-colors">{p.title}</h3>
                        <span className={`ml-auto shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${p.status === "Open" ? "bg-[var(--success)]/10 text-[var(--success)]" : p.status === "In Progress" ? "bg-[var(--warning)]/20 text-[var(--warning)]" : "bg-[var(--muted-foreground)]/20 text-[var(--muted-foreground)]"}`}>{p.status}</span>
                      </div>
                      <p className="mt-1 text-sm text-[var(--muted-foreground)] line-clamp-2">{p.desc}</p>
                      <div className="mt-3 flex items-center gap-4 text-xs text-[var(--muted-foreground)] flex-wrap">
                        <span className="flex items-center gap-1"><Tag size={12} /> {p.category}</span>
                        <span className="flex items-center gap-1"><Send size={12} /> {p.budget}</span>
                        <span>{p.proposals} proposals</span>
                        <span>{p.timeAgo}</span>
                      </div>
                    </div>
                    <button className="shrink-0 rounded-full border border-[var(--border)] p-2 transition-colors hover:bg-[var(--muted)]"><Eye size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
