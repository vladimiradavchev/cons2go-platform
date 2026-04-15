import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = {
  Platform: [
    { href: "/consultants", label: "Browse Consultants" },
    { href: "/problems", label: "Post a Problem" },
    { href: "/pricing", label: "Pricing" },
    { href: "/register", label: "Get Started" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "mailto:press@cons2go.com", label: "Press" },
  ],
  Legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/refunds", label: "Refund Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo size={28} />
            <p className="mt-4 max-w-xs text-sm text-[var(--muted-foreground)]">
              Expert consulting, solved problems. The marketplace where answers find you.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold">{title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} cons2go. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
