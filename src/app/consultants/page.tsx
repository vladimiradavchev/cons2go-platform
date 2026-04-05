"use client";

import { useState } from "react";
import { Star, Search, Filter, MapPin, Clock, Award } from "lucide-react";

const categories = ["All", "Business Strategy", "Technology", "Finance", "Marketing", "Legal", "HR", "Operations"];

const consultants = [
  { name: "Alexandra Chen", title: "Digital Transformation Lead", category: "Technology", rating: 4.9, reviews: 142, price: 250, location: "New York, US", available: true, expertise: ["Cloud Migration", "Agile", "System Design"], avatar: "AC" },
  { name: "Marcus Weber", title: "Corporate Finance Advisor", category: "Finance", rating: 5.0, reviews: 89, price: 300, location: "London, UK", available: true, expertise: ["M&A", "Valuation", "Risk"], avatar: "MW" },
  { name: "Priya Sharma", title: "Growth Marketing Strategist", category: "Marketing", rating: 4.8, reviews: 203, price: 175, location: "Mumbai, IN", available: true, expertise: ["SEO", "Paid Media", "Analytics"], avatar: "PS" },
  { name: "James O'Brien", title: "Employment Law Expert", category: "Legal", rating: 4.9, reviews: 67, price: 350, location: "Dublin, IE", available: false, expertise: ["Compliance", "Contracts", "IP"], avatar: "JO" },
  { name: "Yuki Tanaka", title: "Business Process Optimizer", category: "Operations", rating: 4.7, reviews: 156, price: 200, location: "Tokyo, JP", available: true, expertise: ["Lean", "Six Sigma", "Supply Chain"], avatar: "YT" },
  { name: "Natasha Volkov", title: "Startup Growth Coach", category: "Business Strategy", rating: 4.9, reviews: 311, price: 225, location: "Berlin, DE", available: true, expertise: ["Fundraising", "Scaling", "Product-Market Fit"], avatar: "NV" },
  { name: "Carlos Rivera", title: "HR Transformation Lead", category: "HR", rating: 4.6, reviews: 78, price: 180, location: "Mexico City, MX", available: true, expertise: ["Culture", "Recruiting", "Retention"], avatar: "CR" },
  { name: "Olivia Park", title: "AI & Machine Learning Consultant", category: "Technology", rating: 5.0, reviews: 94, price: 400, location: "Seoul, KR", available: true, expertise: ["ML Ops", "NLP", "Computer Vision"], avatar: "OP" },
  { name: "Ben Taylor", title: "CFO Advisory", category: "Finance", rating: 4.8, reviews: 120, price: 275, location: "Sydney, AU", available: true, expertise: ["FP&A", "Cash Flow", "Reporting"], avatar: "BT" },
];

export default function ConsultantsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = consultants.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.title.toLowerCase().includes(search.toLowerCase()) || c.expertise.some((e) => e.toLowerCase().includes(search.toLowerCase()));
    const matchCat = category === "All" || c.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div>
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h1 className="text-3xl font-extrabold md:text-4xl">Browse Consultants</h1>
          <p className="mt-2 text-[var(--muted-foreground)]">Find the right expert for your challenge</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Search & Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name, title, or expertise..." className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
            <Filter size={16} />
            <span className="hidden sm:inline">Filters:</span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)} className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${category === cat ? "bg-[var(--primary)] text-white" : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--border)]"}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mt-6 text-sm text-[var(--muted-foreground)]">{filtered.length} consultant{filtered.length !== 1 ? "s" : ""} found</p>

        {/* Cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <div key={c.name} className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:border-[var(--primary)] hover:shadow-lg hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-base font-bold text-white">{c.avatar}</div>
                <div className="min-w-0">
                  <h3 className="font-semibold truncate">{c.name}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] truncate">{c.title}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-[var(--muted-foreground)] flex-wrap">
                <span className="flex items-center gap-1"><Star size={12} className="fill-[var(--warning)] text-[var(--warning)]" /> {c.rating} ({c.reviews})</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {c.location}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> ${c.price}/hr</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.expertise.slice(0, 3).map((e) => (
                  <span key={e} className="rounded-md bg-[var(--muted)] px-2 py-0.5 text-xs text-[var(--muted-foreground)]">{e}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className={`text-xs font-medium ${c.available ? "text-[var(--success)]" : "text-[var(--muted-foreground)]"}`}>
                  {c.available ? "Available now" : "Currently booked"}
                </span>
                <button className="rounded-full bg-[var(--primary)] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--primary-dark)]">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-medium text-[var(--muted-foreground)]">No consultants found</p>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
