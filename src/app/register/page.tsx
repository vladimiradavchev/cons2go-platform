"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Lock, User, Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"client" | "consultant">("client");
  const [showPw, setShowPw] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold">Create your account</h1>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">Join 50,000+ users on cons2go</p>
          </div>

          {/* Role selector */}
          <div className="mt-6 flex gap-2 p-1 rounded-xl bg-[var(--muted)]">
            <button onClick={() => setRole("client")} className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${role === "client" ? "bg-[var(--background)] shadow-sm" : "text-[var(--muted-foreground)]"}`}>I need help</button>
            <button onClick={() => setRole("consultant")} className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${role === "consultant" ? "bg-[var(--background)] shadow-sm" : "text-[var(--muted-foreground)]"}`}>I&apos;m a consultant</button>
          </div>

          <div className="mt-6 flex flex-col gap-5">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative mt-1">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <div className="relative mt-1">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative mt-1">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
                <input type={showPw ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min. 8 characters" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]">
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            {role === "consultant" && (
              <div>
                <label className="text-sm font-medium">Your Expertise</label>
                <input type="text" placeholder="e.g., Cloud Architecture, M&A, Growth Marketing" className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
              </div>
            )}
            <label className="flex items-start gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1" />
              <span className="text-[var(--muted-foreground)]">I agree to the <a href="#" className="text-[var(--primary)] underline">Terms of Service</a> and <a href="#" className="text-[var(--primary)] underline">Privacy Policy</a></span>
            </label>
            <Link href="/dashboard" className="flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-dark)]">
              Create Account <ArrowRight size={16} />
            </Link>
            <p className="text-center text-xs text-[var(--muted-foreground)]">
              Already have an account?{" "}
              <Link href="/login" className="text-[var(--primary)] hover:underline">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
