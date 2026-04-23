"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/consultants", label: "Consultants" },
  { href: "/problems", label: "Post a Problem" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex-shrink-0">
          <Logo size={32} />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/login" onClick={() => setOpen(false)} className="text-sm font-medium">
            Log in
          </Link>
          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-white text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
