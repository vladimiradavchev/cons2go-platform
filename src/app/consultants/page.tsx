"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Search, MapPin, Clock, TrendingUp, Award, Languages, MessageCircle, Video, ChevronDown } from "lucide-react";

const categories = ["All", "Business Strategy", "Technology", "Finance", "Marketing", "Legal", "HR", "Operations"];

const consultants = [
  {
    name: "Alexandra Chen", title: "Digital Transformation Lead", category: "Technology",
    rating: 4.9, reviews: 142, price: 250, location: "New York, US", available: true,
    expertise: ["Cloud Migration", "Agile", "System Design"], avatar: "AC",
    badge: "Top Rated", clients: 98, responseRate: "100%", avgResponse: "< 1hr",
    languages: ["EN", "ZH"], bio: "Former AWS Principal Solutions Architect with 12+ years helping Fortune 500 companies modernize their infrastructure. Led 200+ cloud migrations with zero downtime.",
    completedProjects: 142, specialization: "Cloud Architecture",
  },
  {
    name: "Marcus Weber", title: "Corporate Finance Advisor", category: "Finance",
    rating: 5.0, reviews: 89, price: 300, location: "London, UK", available: true,
    expertise: ["M&A", "Valuation", "Risk"], avatar: "MW",
    badge: "Featured", clients: 72, responseRate: "98%", avgResponse: "< 2hr",
    languages: ["EN", "DE"], bio: "20 years at Goldman Sachs and McKinsey. Advisor on $3B+ in M&A transactions across Europe and North America.",
    completedProjects: 89, specialization: "Financial Advisory",
  },
  {
    name: "Priya Sharma", title: "Growth Marketing Strategist", category: "Marketing",
    rating: 4.8, reviews: 203, price: 175, location: "Mumbai, IN", available: true,
    expertise: ["SEO", "Paid Media", "Analytics"], avatar: "PS",
    badge: "Top Rated", clients: 156, responseRate: "100%", avgResponse: "< 1hr",
    languages: ["EN", "HI"], bio: "Scaled D2C brands from $0 to $50M+. Previously Head of Growth at three Y Combinator startups.",
    completedProjects: 203, specialization: "Growth Marketing",
  },
  {
    name: "James O'Brien", title: "Employment Law Expert", category: "Legal",
    rating: 4.9, reviews: 67, price: 350, location: "Dublin, IE", available: false,
    expertise: ["Compliance", "Contracts", "IP"], avatar: "JO",
    badge: "Verified", clients: 45, responseRate: "95%", avgResponse: "< 4hr",
    languages: ["EN", "GA"], bio: "Partner at a leading EU employment law firm. Specialized in cross-border compliance and employee handbook design.",
    completedProjects: 67, specialization: "Employment Law",
  },
  {
    name: "Yuki Tanaka", title: "Business Process Optimizer", category: "Operations",
    rating: 4.7, reviews: 156, price: 200, location: "Tokyo, JP", available: true,
    expertise: ["Lean", "Six Sigma", "Supply Chain"], avatar: "YT",
    badge: "Top Rated", clients: 110, responseRate: "99%", avgResponse: "< 2hr",
    languages: ["EN", "JA"], bio: "Master Black Belt Six Sigma consultant. Reduced operational costs by 35%+ across 50+ manufacturing engagements.",
    completedProjects: 156, specialization: "Process Optimization",
  },
  {
    name: "Natasha Volkov", title: "Startup Growth Coach", category: "Business Strategy",
    rating: 4.9, reviews: 311, price: 225, location: "Berlin, DE", available: true,
    expertise: ["Fundraising", "Scaling", "Product-Market Fit"], avatar: "NV",
    badge: "Most Hired", clients: 245, responseRate: "100%", avgResponse: "< 30min",
    languages: ["EN", "DE", "RU"], bio: "Helped 100+ startups reach Series A. Former VP Strategy at a $2B venture studio. Expert in GTM strategy and investor relations.",
    completedProjects: 311, specialization: "Startup Strategy",
  },
  {
    name: "Carlos Rivera", title: "HR Transformation Lead", category: "HR",
    rating: 4.6, reviews: 78, price: 180, location: "Mexico City, MX", available: true,
    expertise: ["Culture", "Recruiting", "Retention"], avatar: "CR",
    badge: "Verified", clients: 52, responseRate: "97%", avgResponse: "< 3hr",
    languages: ["EN", "ES"], bio: "Built HR departments from scratch for 5 Latin American unicorns. Expert in remote-first culture design.",
    completedProjects: 78, specialization: "HR & Talent",
  },
  {
    name: "Olivia Park", title: "AI & Machine Learning Consultant", category: "Technology",
    rating: 5.0, reviews: 94, price: 400, location: "Seoul, KR", available: true,
    expertise: ["ML Ops", "NLP", "Computer Vision"], avatar: "OP",
    badge: "Elite", clients: 67, responseRate: "100%", avgResponse: "< 1hr",
    languages: ["EN", "KO"], bio: "PhD in CS from Stanford. Former ML lead at DeepMind. Published 15+ papers on transformer architectures. Helped 6 startups launch AI products.",
    completedProjects: 94, specialization: "AI/ML Architecture",
  },
  {
    name: "Ben Taylor", title: "CFO Advisory", category: "Finance",
    rating: 4.8, reviews: 120, price: 275, location: "Sydney, AU", available: true,
    expertise: ["FP&A", "Cash Flow", "Reporting"], avatar: "BT",
    badge: "Top Rated", clients: 88, responseRate: "99%", avgResponse: "< 2hr",
    languages: ["EN"], bio: "Former CFO at 3 SaaS IPOs. Expert in building financial models for fundraising, runway optimization, and unit economics.",
    completedProjects: 120, specialization: "CFO Advisory",
  },
  {
    name: "Leila Mansour", title: "Brand Strategy Director", category: "Marketing",
    rating: 4.9, reviews: 167, price: 210, location: "Dubai, AE", available: true,
    expertise: ["Brand Identity", "Repositioning", "Creative Direction"], avatar: "LM",
    badge: "Featured", clients: 130, responseRate: "100%", avgResponse: "< 1hr",
    languages: ["EN", "AR", "FR"], bio: "Repositioned 30+ brands across MENA and Europe. Former Head of Brand at Wieden+Kennedy.",
    completedProjects: 167, specialization: "Brand Strategy",
  },
  {
    name: "Samuel Adeyemi", title: "Fintech Regulatory Advisor", category: "Legal",
    rating: 4.7, reviews: 54, price: 325, location: "Lagos, NG", available: true,
    expertise: ["Fintech", "KYC/AML", "Regulatory Licensing"], avatar: "SA",
    badge: "Verified", clients: 38, responseRate: "96%", avgResponse: "< 3hr",
    languages: ["EN", "YO"], bio: "Licensed in 3 jurisdictions. Helped 20+ fintechs obtain regulatory approvals across Africa and Europe.",
    completedProjects: 54, specialization: "Fintech Regulation",
  },
  {
    name: "Ingrid Lindgren", title: "Sustainability & ESG Strategy", category: "Business Strategy",
    rating: 5.0, reviews: 73, price: 290, location: "Stockholm, SE", available: true,
    expertise: ["ESG Reporting", "Carbon Accounting", "Impact Investing"], avatar: "IL",
    badge: "Elite", clients: 55, responseRate: "100%", avgResponse: "< 2hr",
    languages: ["EN", "SV", "DA"], bio: "Led ESG transformations for Nordic Fortune 500s. Former Head of Sustainability at EQT Partners.",
    completedProjects: 73, specialization: "ESG & Sustainability",
  },
];

const badgeColors: Record<string, string> = {
  "Top Rated": "bg-green-500",
  Featured: "bg-[var(--primary)]",
  Verified: "bg-blue-500",
  Elite: "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]",
  "Most Hired": "bg-orange-500",
};

export default function ConsultantsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const [showSort, setShowSort] = useState(false);

  const filtered = consultants.filter((c) => {
    if (category !== "All" && c.category !== category) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.expertise.some((e) => e.toLowerCase().includes(q)) ||
        c.bio.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "reviews") return b.reviews - a.reviews;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative border-b border-[var(--border)] bg-[var(--muted)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/8 to-transparent to-[var(--accent)]/5" />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
        <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full bg-[var(--accent)]/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold md:text-5xl">
              Meet Our{" "}
              <span className="gradient-text">Verified Experts</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
              12,500+ consultants across 50 countries. Each one vetted, rated, and ready to solve your challenge.
            </p>
          </div>
          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-[var(--muted-foreground)]">
            <span className="flex items-center gap-2"><Award size={16} className="text-[var(--primary)]" /> Verified Credentials</span>
            <span className="flex items-center gap-2"><Star size={16} className="fill-[var(--warning)] text-[var(--warning)]" /> 4.9/5 Avg. Rating</span>
            <span className="flex items-center gap-2"><Video size={16} className="text-[var(--accent)]" /> Video Ready</span>
            <span className="flex items-center gap-2"><MessageCircle size={16} className="text-[var(--primary)]" /> Response Under 48h</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Search & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-4 mb-6">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, title, expertise, or industry..."
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm font-medium hover:bg-[var(--muted)] transition-colors"
            >
              Sort by {sortBy === "rating" ? "Rating" : sortBy === "reviews" ? "Reviews" : sortBy === "price-low" ? "Price: Low → High" : "Price: High → Low"}
              <ChevronDown size={14} />
            </button>
            {showSort && (
              <div className="absolute right-0 top-full mt-2 z-10 w-52 rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-xl py-1">
                {[
                  { id: "rating", label: "Highest Rated" },
                  { id: "reviews", label: "Most Reviewed" },
                  { id: "price-low", label: "Price: Low → High" },
                  { id: "price-high", label: "Price: High → Low" },
                ].map((o) => (
                  <button
                    key={o.id}
                    onClick={() => { setSortBy(o.id); setShowSort(false); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--muted)] ${sortBy === o.id ? "text-[var(--primary)] font-medium" : "text-[var(--muted-foreground)]"}`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${category === cat
                ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20"
                : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--border)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-[var(--muted-foreground)] mb-6">{sorted.length} consultant{sorted.length !== 1 ? "s" : ""} found</p>

        {/* Consultant Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sorted.map((c) => (
            <div key={c.name} className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] overflow-hidden hover:border-[var(--primary)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Card Header */}
              <div className="relative h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-base font-bold text-white shadow-lg shadow-[var(--primary)]/20">
                      {c.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold truncate">{c.name}</h3>
                        {c.badge && (
                          <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold text-white ${badgeColors[c.badge]}`}>
                            {c.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[var(--muted-foreground)] truncate">{c.title}</p>
                      <p className="text-xs text-[var(--primary)] mt-0.5">{c.specialization}</p>
                    </div>
                  </div>
                  <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${c.available ? "bg-[var(--success)]/10 text-[var(--success)]" : "bg-[var(--muted-foreground)]/20 text-[var(--muted-foreground)]"}`}>
                    {c.available ? "Online" : "Booked"}
                  </span>
                </div>

                {/* Bio */}
                <p className="mt-4 text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-2">{c.bio}</p>

                {/* Expertise Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.expertise.map((e) => (
                    <span key={e} className="rounded-lg bg-[var(--muted)] px-2.5 py-1 text-xs font-medium text-[var(--muted-foreground)] border border-[var(--border)]">{e}</span>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="mt-5 grid grid-cols-3 gap-3 py-3 border-t border-[var(--border)]">
                  <div className="text-center">
                    <p className="text-sm font-bold">{c.rating}</p>
                    <p className="text-[10px] text-[var(--muted-foreground)] flex items-center justify-center gap-1">
                      <Star size={10} className="fill-[var(--warning)] text-[var(--warning)]" /> {c.reviews}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold">{c.completedProjects}</p>
                    <p className="text-[10px] text-[var(--muted-foreground)]">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold">{c.responseRate}</p>
                    <p className="text-[10px] text-[var(--muted-foreground)]">Response</p>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-extrabold">${c.price}</span>
                    <span className="text-xs text-[var(--muted-foreground)]">per hour</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                      <MapPin size={11} /> {c.location}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                      <Languages size={11} /> {c.languages.join(", ")}
                    </div>
                  </div>
                </div>

                <button className="mt-5 w-full rounded-xl bg-[var(--primary)] py-2.5 text-sm font-semibold text-white transition-all group-hover:bg-[var(--primary-dark)]">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sorted.length === 0 && (
          <div className="py-20 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--muted)]">
              <Search size={32} className="text-[var(--muted-foreground)]" />
            </div>
            <p className="text-lg font-semibold">No consultants found</p>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">Try adjusting your search or filters</p>
            <button onClick={() => { setSearch(""); setCategory("All"); }} className="mt-4 rounded-full bg-[var(--primary)] px-6 py-2 text-sm font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors">
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-10 text-center text-white md:p-14">
          <h2 className="text-2xl md:text-3xl font-extrabold">Are You a Consultant?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Join 12,500+ verified experts on cons2go. Set your own rates, find clients worldwide, and get paid securely through escrow.
          </p>
          <Link
            href="/register"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-[var(--primary)] transition-colors hover:bg-zinc-100"
          >
            Become a Consultant
          </Link>
        </div>
      </div>
    </div>
  );
}
