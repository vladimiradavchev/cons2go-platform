import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    slug: "#",
    category: "Marketplace",
    title: "How the Bidding Model Cuts Consulting Costs by up to 60%",
    excerpt: "Traditional consulting firms charge fixed rates. On cons2go, multiple consultants compete to solve your problem — driving down price while driving up quality.",
    author: "Alexandra Chen",
    avatar: "AC",
    date: "March 28, 2026",
    readTime: "6 min read",
  },
  {
    slug: "#",
    category: "Guides",
    title: "The Complete Guide to Writing a Problem Post That Attracts Top Consultants",
    excerpt: "The difference between 2 proposals and 14? It all comes down to how you describe your challenge. Here's exactly what to include.",
    author: "Priya Sharma",
    avatar: "PS",
    date: "March 15, 2026",
    readTime: "8 min read",
  },
  {
    slug: "#",
    category: "Industry Analysis",
    title: "The $300B Consulting Market Is Being Disrupted — And Here's What's Next",
    excerpt: "McKinsey, BCG, and Bain still dominate the top tier. But the long tail of small and mid-sized businesses remains largely unserved by traditional firms.",
    author: "Marcus Weber",
    avatar: "MW",
    date: "March 2, 2026",
    readTime: "10 min read",
  },
  {
    slug: "#",
    category: "Success Stories",
    title: "How TechScale Scaled to Series B Using cons2go Consultants",
    excerpt: "A $2.5M engagement across 3 consultants helped TechScale raise their Series B at a $45M valuation. Here's their playbook.",
    author: "David Kim",
    avatar: "DK",
    date: "February 20, 2026",
    readTime: "7 min read",
  },
  {
    slug: "#",
    category: "Consultant Tips",
    title: "How Our Top Consultant Earned $240K in Their First Year on cons2go",
    excerpt: "Olivia Park went from zero to 94 five-star reviews in 12 months. She shares her exact strategy for standing out on the platform.",
    author: "Editorial Team",
    avatar: "ET",
    date: "February 8, 2026",
    readTime: "5 min read",
  },
  {
    slug: "#",
    category: "Product Updates",
    title: "Introducing cons2go Enterprise: White-Label Reports, Custom SLAs, and Dedicated Support",
    excerpt: "Enterprise customers now get custom service level agreements, white-labeled deliverables, and a dedicated account manager.",
    author: "Product Team",
    avatar: "PT",
    date: "January 25, 2026",
    readTime: "4 min read",
  },
];

const categories = ["All", "Marketplace", "Guides", "Industry Analysis", "Success Stories", "Consultant Tips", "Product Updates"];

export default function BlogPage() {
  return (
    <div>
      <div className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-[var(--primary)]">Blog</p>
            <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">Insights from the cons2go Platform</h1>
            <p className="mt-3 text-[var(--muted-foreground)]">Market analysis, success stories, expert tips, and product updates.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button key={c} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${c === "All" ? "bg-[var(--primary)] text-white" : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--border)]"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Featured post */}
          <div className="lg:col-span-2">
            <article className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] overflow-hidden transition-all hover:shadow-lg">
              <div className="h-48 md:h-64 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
                <span className="text-white/20 text-6xl font-extrabold">c2g</span>
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-block rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]">{posts[2].category}</span>
                <Link href={posts[2].slug} className="block mt-4 text-2xl font-extrabold group-hover:text-[var(--primary)] transition-colors leading-tight">{posts[2].title}</Link>
                <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">{posts[2].excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-[10px] font-bold text-white">{posts[2].avatar}</div>
                    <span className="text-sm font-medium">{posts[2].author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {posts[2].date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {posts[2].readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Side posts */}
          <div className="flex flex-col gap-6">
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} href={p.slug} className="group flex gap-4 items-start rounded-xl border border-[var(--border)] p-4 bg-[var(--background)] hover:border-[var(--primary)] transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-xs font-bold text-white">{p.avatar}</div>
                <div>
                  <span className="text-xs font-semibold text-[var(--primary)]">{p.category}</span>
                  <p className="mt-1 text-sm font-bold group-hover:text-[var(--primary)] transition-colors leading-snug">{p.title}</p>
                  <div className="mt-1 text-xs text-[var(--muted-foreground)]">{p.readTime}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All posts */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug + p.title} href={p.slug} className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:border-[var(--primary)] hover:shadow-lg">
              <span className="inline-block rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]">{p.category}</span>
              <p className="mt-4 text-lg font-bold group-hover:text-[var(--primary)] transition-colors leading-snug">{p.title}</p>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-3">{p.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-[10px] font-bold text-white">{p.avatar}</div>
                  <span className="text-xs text-[var(--muted-foreground)]">{p.author}</span>
                </div>
                <span className="text-xs text-[var(--muted-foreground)]">{p.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
