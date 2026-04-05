"use client";

import { useState } from "react";
import { ArrowRight, Tag, Paperclip, Send, Eye, MessageSquare, Users, ChevronDown, Plus, Search } from "lucide-react";

const categories = [
  "Business Strategy", "Technology", "Finance", "Marketing",
  "Legal", "HR", "Operations", "Design", "Sales", "Data Science", "Other"
];

const statusColors: Record<string, string> = {
  "Open": "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
  "In Progress": "bg-amber-500/15 text-amber-600 border border-amber-500/20",
  "Closed": "bg-gray-500/10 text-gray-500 border border-gray-500/20",
  "Awarded": "bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20",
};

const statusDot: Record<string, string> = {
  "Open": "bg-emerald-500",
  "In Progress": "bg-amber-500",
  "Closed": "bg-gray-400",
  "Awarded": "bg-[var(--primary)]",
};

const problems = [
  { title: "Reduce AWS cloud spend by 30% without impacting performance", category: "Technology", budget: "$2,000 - $5,000", proposals: 7, status: "Open", desc: "We're a SaaS company spending ~$15k/mo on AWS. Looking for someone who can audit our EC2, RDS, and S3 usage, identify waste, and implement auto-scaling policies without degrading our 99.95% uptime SLA.", author: "JM", companyName: "CloudStack Inc.", timeAgo: "2h ago", tags: ["AWS", "Cost Optimization", "Infrastructure"] },
  { title: "Expand into European market — compliance & GTM strategy", category: "Business Strategy", budget: "$5,000 - $10,000", proposals: 12, status: "Open", desc: "US-based fintech looking to launch in the EU. Need help with GDPR compliance strategy, entity setup in Dublin, and go-to-market strategy targeting UK, DE, and FR markets. Target launch: Q4 2026.", author: "AK", companyName: "PayForward", timeAgo: "5h ago", tags: ["EU Expansion", "GDPR", "GTM"] },
  { title: "Restructure sales comp plan for Series B startup (40-person team)", category: "Sales", budget: "$1,000 - $3,000", proposals: 4, status: "Open", desc: "Growing fast but our sales team comp is misaligned — top performers under-earning, quota attainment at 62%. Need someone experienced in designing OTE plans for B2B SaaS with ACV > $50k.", author: "RL", companyName: "DataSync", timeAgo: "8h ago", tags: ["Sales Comp", "OTE Design", "B2B SaaS"] },
  { title: "Protect brand across US, UK, and Canada — trademark & IP", category: "Legal", budget: "$3,000 - $7,000", proposals: 9, status: "Awarded", desc: "Need to protect our brand name and logo across 3 jurisdictions. Looking for an IP attorney with international trademark experience. We operate in the consumer electronics space and plan to manufacture in Shenzhen.", author: "DW", companyName: "AuraTech", timeAgo: "1d ago", tags: ["Trademark", "IP Protection", "International"] },
  { title: "Build complete brand identity from scratch for D2C skincare line", category: "Design", budget: "$500 - $2,000", proposals: 15, status: "In Progress", desc: "Launching a premium D2C skincare brand targeting millennials. Need logo, color palette, packaging (primary + shipping), typography system, and brand guidelines document (min. 30 pages).", author: "SN", companyName: "Lumi Botanics", timeAgo: "2d ago", tags: ["Branding", "Packaging", "D2C"] },
  { title: "Implement OKR framework for 50-person organization", category: "Operations", budget: "$1,500 - $4,000", proposals: 6, status: "In Progress", desc: "We've grown to 50 people across 3 time zones and lost alignment. Need someone to help set up and run OKRs across the org. Experience with tech startups and distributed teams preferred.", author: "MP", companyName: "Syncly", timeAgo: "3d ago", tags: ["OKRs", "Org Design", "Remote Teams"] },
  { title: "Build predictive churn model for subscription-based platform", category: "Data Science", budget: "$3,000 - $6,000", proposals: 11, status: "Open", desc: "We have a database of 2M+ users and 18 months of behavioral data. Need a data scientist who can build a churn prediction model with >85% precision that integrates with our Python/ML pipeline.", author: "TK", companyName: "StreamLine", timeAgo: "4d ago", tags: ["ML", "Churn Prediction", "Python"] },
  { title: "Design and execute re-engagement email campaign (500K list)", category: "Marketing", budget: "$1,000 - $2,500", proposals: 18, status: "Open", desc: "Our email list of 500K has a 3% open rate (down from 22%). Need someone to audit our deliverability, design a re-engagement drip, and implement segmentation that can improve open rates to 15%+ within 60 days.", author: "JL", companyName: "FitTrack Pro", timeAgo: "5d ago", tags: ["Email Marketing", "Deliverability", "Segmentation"] },
  { title: "Design talent retention strategy for high-growth startup", category: "HR", budget: "$1,500 - $3,500", proposals: 5, status: "Closed", desc: "We've lost 8 engineers in 6 months (25% attrition). Need a complete retention strategy including comp benchmarking, career ladder design, and culture interventions. Pre-IPO timeline pressure.", author: "HR", companyName: "BuildOps", timeAgo: "1w ago", tags: ["Retention", "Engineering", "Pre-IPO"] },
];

const formCategories = ["All", ...categories];

export default function ProblemsPage() {
  const [tab, setTab] = useState("browse");
  const [category, setCategory] = useState("All");
  const [formData, setFormData] = useState({ title: "", desc: "", category: "", budget: "" });
  const [statusFilter, setStatusFilter] = useState("All");
  const [showStatusFilter, setShowStatusFilter] = useState(false);

  const filtered = problems.filter((p) => {
    if (category !== "All" && p.category !== category) return false;
    if (statusFilter !== "All" && p.status !== statusFilter) return false;
    return true;
  });

  const totalValue = filtered.reduce((acc, p) => {
    const match = p.budget.match(/\$(\d+),?(\d+)?/);
    return acc + (match ? parseInt(match[1] + (match[2] || ""), 10) : 0);
  }, 0);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative border-b border-[var(--border)] bg-[var(--muted)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/8 to-transparent to-[var(--primary)]/5" />
        <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-[var(--accent)]/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold md:text-5xl">
              The{" "}
              <span className="gradient-text">Problem Marketplace</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
              Post your business challenge. Get proposals from verified experts. Or respond to existing problems and expand your consulting practice.
            </p>
          </div>
          {/* Trust metrics */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 rounded-full bg-[var(--background)] px-4 py-2 shadow-sm">
              <MessageSquare size={14} className="text-[var(--primary)]" />
              <span className="text-sm font-medium">8,400+ active problems</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[var(--background)] px-4 py-2 shadow-sm">
              <Users size={14} className="text-[var(--accent)]" />
              <span className="text-sm font-medium">4.1 avg. proposals per problem</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-0 border-b border-[var(--border)] mb-8">
          {[
            { id: "browse", label: "Browse Problems", icon: Eye },
            { id: "post", label: "Post a Problem", icon: Plus },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium border-b-2 transition-colors ${tab === t.id ? "border-[var(--primary)] text-[var(--primary)]" : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
            >
              <t.icon size={16} />
              {t.label}
            </button>
          ))}
        </div>

        {tab === "post" ? (
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8 md:p-10">
              <div className="mb-2 text-sm font-semibold text-[var(--primary)]">Step 1 of 3</div>
              <h2 className="text-2xl font-extrabold">Describe Your Challenge</h2>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">Be specific — well-defined problems get 3x more proposals.</p>

              <div className="mt-8 flex flex-col gap-5">
                <div>
                  <label className="text-sm font-medium">Problem Title *</label>
                  <input
                    className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-shadow"
                    placeholder="e.g., Reduce AWS costs by 30% without impacting uptime"
                    value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Category *</label>
                  <select
                    className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="">Select a category...</option>
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Detailed Description *</label>
                  <textarea
                    rows={5}
                    className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                    placeholder="Describe your challenge, current state, desired outcome, and any constraints. Include relevant metrics if possible..."
                    value={formData.desc} onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Budget Range</label>
                    <input
                      className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      placeholder="$1,000 - $5,000"
                      value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Timeline</label>
                    <select className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                      <option>Within 1 week</option>
                      <option>Within 2 weeks</option>
                      <option selected>Within 1 month</option>
                      <option>Within 3 months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-[var(--border)] p-4 hover:bg-[var(--muted)] transition-colors">
                  <Paperclip size={18} className="text-[var(--muted-foreground)]" />
                  <div>
                    <span className="text-sm font-medium">Attach files</span>
                    <p className="text-xs text-[var(--muted-foreground)]">Documents, spreadsheets, screenshots (max 25MB)</p>
                  </div>
                  <input type="file" className="hidden" multiple />
                </label>
                <div className="flex items-center gap-2 pt-2">
                  <input type="checkbox" className="rounded accent-[var(--primary)]" />
                  <span className="text-xs text-[var(--muted-foreground)]">I agree to cons2go's <a href="/terms" className="text-[var(--primary)] underline">Terms of Service</a> and understand that consultants will see my problem description.</span>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--primary-dark)] shadow-lg shadow-[var(--primary)]/20 hover:shadow-[var(--primary)]/30">
                  Post Problem — Get Proposals <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex flex-wrap gap-2 flex-1">
                {formCategories.slice(0, 6).map((c) => (
                  <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${category === c ? "bg-[var(--primary)] text-white" : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--border)]"}`}>
                    {c}
                  </button>
                ))}
              </div>
              <div className="relative">
                <button onClick={() => setShowStatusFilter(!showStatusFilter)} className="flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-1.5 text-xs font-medium bg-[var(--muted)] hover:bg-[var(--border)] transition-colors">
                  Status: {statusFilter} <ChevronDown size={12} />
                </button>
                {showStatusFilter && (
                  <div className="absolute right-0 top-full mt-2 z-10 w-40 rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-xl py-1">
                    {["All", "Open", "In Progress", "Awarded", "Closed"].map((s) => (
                      <button key={s} onClick={() => { setStatusFilter(s); setShowStatusFilter(false); }}
                        className={`w-full text-left px-4 py-2 text-xs hover:bg-[var(--muted)] ${statusFilter === s ? "text-[var(--primary)] font-medium" : "text-[var(--muted-foreground)]"}`}
                      >{s}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <p className="text-sm text-[var(--muted-foreground)] mb-1">{filtered.length} problems found &middot; ~${totalValue.toLocaleString()} total value</p>

            {/* Problem Cards */}
            <div className="mt-4 flex flex-col gap-4">
              {filtered.map((p, i) => (
                <div key={i} className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 md:p-8 transition-all hover:border-[var(--primary)] hover:shadow-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-bold group-hover:text-[var(--primary)] transition-colors leading-snug">{p.title}</h3>
                        <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1.5 ${statusColors[p.status]}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${statusDot[p.status]}`} />
                          {p.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-2">{p.desc}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-md bg-[var(--muted)] px-2 py-0.5 text-xs text-[var(--muted-foreground)]">{t}</span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-4 text-xs text-[var(--muted-foreground)] flex-wrap">
                        <span className="flex items-center gap-1"><Tag size={12} /> {p.category}</span>
                        <span className="flex items-center gap-1"><Send size={12} /> {p.budget}</span>
                        <span className="flex items-center gap-1"><MessageSquare size={12} /> {p.proposals} proposals</span>
                        <span className="flex items-center gap-1"><Users size={12} /> {p.companyName}</span>
                        <span>{p.timeAgo}</span>
                      </div>
                    </div>
                    <button className="shrink-0 rounded-full border border-[var(--border)] p-2.5 transition-colors hover:bg-[var(--primary)] hover:text-white group-hover:border-[var(--primary)] hover:shadow-md">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-20 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--muted)]">
                  <Search size={32} className="text-[var(--muted-foreground)]" />
                </div>
                <p className="text-lg font-semibold">No problems match your filters</p>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">Try broadening your search</p>
              </div>
            )}
          </div>
        )}

        {/* CTA for Consultants */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-10 text-center text-white md:p-14">
          <h2 className="text-2xl md:text-3xl font-extrabold">Are You a Consultant?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Browse problems, submit proposals, and grow your consulting practice. Join 12,500+ experts already earning on cons2go.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a href="/register" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-[var(--primary)] transition-colors hover:bg-zinc-100">
              Join as Consultant
            </a>
            <a href="/consultants" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">
              View All Consultants
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
