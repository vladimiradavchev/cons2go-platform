import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllBlogPosts } from "@/lib/cms";
import type { BlogPost } from "@/types/cms";

const categories = ["All", "Marketplace", "Guides", "Industry Analysis", "Success Stories", "Consultant Tips", "Product Updates"];

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const hasPosts = posts && posts.length > 0;

  if (!hasPosts) {
    return (
      <div>
        <div className="border-b border-[var(--border)] bg-[var(--muted)]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-[var(--primary)]">Blog</p>
              <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">Insights from the cons2go Platform</h1>
              <p className="mt-3 text-[var(--muted-foreground)]">Market analysis, success stories, expert tips, and product updates — coming soon.</p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-lg text-[var(--muted-foreground)]">Blog posts will appear here once added in the CMS.</p>
        </div>
      </div>
    );
  }

  const allPosts = posts as BlogPost[];

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
          <div className="lg:col-span-2">
            <article className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] overflow-hidden transition-all hover:shadow-lg">
              <div className="h-48 md:h-64 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
                <span className="text-white/20 text-6xl font-extrabold">c2g</span>
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-block rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]">{allPosts[0].category}</span>
                <Link href={allPosts[0].slug?.current || "#"} className="block mt-4 text-2xl font-extrabold group-hover:text-[var(--primary)] transition-colors leading-tight">{allPosts[0].title}</Link>
                <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">{allPosts[0].excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-[10px] font-bold text-white">{allPosts[0].avatar}</div>
                    <span className="text-sm font-medium">{allPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {allPosts[0].date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {allPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="flex flex-col gap-6">
            {allPosts.slice(1, 4).map((p, i) => (
              <Link key={p._id || i} href={p.slug?.current || "#"} className="group flex gap-4 items-start rounded-xl border border-[var(--border)] p-4 bg-[var(--background)] hover:border-[var(--primary)] transition-colors">
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

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {allPosts.map((p, i) => (
            <Link key={p._id || i} href={p.slug?.current || "#"} className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:border-[var(--primary)] hover:shadow-lg">
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
