"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Lock, Eye, EyeOff, Shield, Users } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Form side */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold">Welcome back</h1>
            <p className="mt-2 text-[var(--muted-foreground)]">Log in to continue solving your challenges</p>
          </div>

          {/* Social login */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 text-sm font-medium hover:bg-[var(--muted)] transition-colors">
              <svg className="h-4 w-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 text-sm font-medium hover:bg-[var(--muted)] transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="text-xs text-[var(--muted-foreground)]">or continue with email</span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <label className="text-sm font-medium">Email</label>
              <div className="relative mt-1.5">
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative mt-1.5">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
                <input type={showPw ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-3 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded accent-[var(--primary)]" />
                Remember me
              </label>
              <a href="#" className="text-[var(--primary)] font-medium hover:underline">Forgot password?</a>
            </div>
            <Link href="/dashboard" className="flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--primary-dark)] shadow-lg shadow-[var(--primary)]/20">
              Log in <ArrowRight size={16} />
            </Link>
            <p className="text-center text-sm text-[var(--muted-foreground)]">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-[var(--primary)] font-medium hover:underline">Sign up free</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative side - hidden on mobile */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] items-center justify-center p-12">
        <div className="max-w-md text-white">
          <div className="flex items-center gap-3 mb-8">
            <Shield size={32} />
            <span className="text-xl font-bold">Why cons2go?</span>
          </div>
          <p className="text-lg leading-relaxed text-white/90 mb-8">
            &ldquo;We went from spending $200K on traditional consulting to getting better results for $80K through cons2go. The bidding model is a game-changer.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-sm font-bold">SK</div>
            <div>
              <p className="font-semibold">Sarah Kowalski</p>
              <p className="text-sm text-white/70">COO, TechScale &middot; 12 projects on cons2go</p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-extrabold">94%</p>
              <p className="text-sm text-white/60 mt-1">Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">48h</p>
              <p className="text-sm text-white/60 mt-1">Avg. Response</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">60%</p>
              <p className="text-sm text-white/60 mt-1">Cost Savings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
