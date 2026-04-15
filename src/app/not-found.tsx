import Link from "next/link";
import { ArrowLeft, Search, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Decorative element */}
        <div className="relative mx-auto mb-8 flex h-32 w-32 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-10 animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-20" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)]">
            <span className="text-5xl font-extrabold text-white">?</span>
          </div>
          <Sparkles size={20} className="absolute top-2 right-4 text-[var(--warning)] animate-spin" style={{ animationDuration: "3s" }} />
          <Sparkles size={14} className="absolute bottom-6 left-4 text-[var(--accent)] animate-spin" style={{ animationDuration: "4s" }} />
        </div>

        <h1 className="text-7xl font-extrabold gradient-text">404</h1>
        <h2 className="mt-4 text-2xl font-bold">Page not found</h2>
        <p className="mx-auto mt-3 max-w-sm text-[var(--muted-foreground)] leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Don&apos;t worry — even the best consultants occasionally lose a file.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-dark)] shadow-lg shadow-[var(--primary)]/20">
            <Home size={16} />
            Go Home
          </Link>
          <Link href="/consultants" className="flex items-center gap-2 rounded-xl border border-[var(--border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--muted)]">
            <Search size={16} />
            Browse Consultants
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-[var(--muted-foreground)]">
          <Link href="/problems" className="hover:text-[var(--foreground)] transition-colors">Post a Problem</Link>
          <Link href="/pricing" className="hover:text-[var(--foreground)] transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-[var(--foreground)] transition-colors">About</Link>
          <Link href="/blog" className="hover:text-[var(--foreground)] transition-colors">Blog</Link>
        </div>
      </div>
    </div>
  );
}
