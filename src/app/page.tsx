import Link from "next/link";
import { ArrowRight, Shield, Zap, Users, Star, CheckCircle, Briefcase, TrendingUp, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Experts",
    desc: "Every consultant is vetted for credentials, experience, and track record. No guesswork.",
  },
  {
    icon: Zap,
    title: "Problem-First Matching",
    desc: "Post your challenge and let the best consultants come to you with tailored proposals.",
  },
  {
    icon: Users,
    title: "All Fields, One Platform",
    desc: "Business, tech, legal, finance, marketing — find specialists no matter your industry.",
  },
  {
    icon: MessageCircle,
    title: "Built-In Communication",
    desc: "Secure messaging, video calls, and file sharing — all inside the platform.",
  },
  {
    icon: Briefcase,
    title: "Flexible Engagement",
    desc: "Hourly, project-based, or retainer — book consultants the way your business works.",
  },
  {
    icon: TrendingUp,
    title: "Results You Can Track",
    desc: "See ROI metrics, satisfaction scores, and outcomes for every consultant.",
  },
];

const testimonials = [
  {
    quote: "We cut our consulting costs by 60% and got better results. The bidding model means real competition.",
    name: "Sarah K.",
    role: "COO, TechScale",
    avatar: "SK",
  },
  {
    quote: "As a consultant, I doubled my client base in 3 months. The platform does the marketing for you.",
    name: "David M.",
    role: "Independent Strategy Consultant",
    avatar: "DM",
  },
  {
    quote: "Posted a supply chain problem at 9am, had 5 proposals by noon. Solved it by Friday.",
    name: "Elena R.",
    role: "VP Operations, LogiFlow",
    avatar: "ER",
  },
];

const stats = [
  { value: "12,500+", label: "Verified Consultants" },
  { value: "85,000+", label: "Problems Solved" },
  { value: "4.9/5", label: "Average Satisfaction" },
  { value: "48h", label: "Avg. First Response" },
];

function FeatureCard({ icon: Icon, title, desc }: { icon: typeof ArrowRight; title: string; desc: string }) {
  return (
    <div className="group rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8 transition-all hover:shadow-lg hover:border-[var(--primary)] hover:-translate-y-1">
      <div className="mb-5 inline-flex rounded-xl bg-[var(--muted)] p-3 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ quote, name, role, avatar }: { quote: string; name: string; role: string; avatar: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8">
      <div className="mb-5 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className="fill-[var(--warning)] text-[var(--warning)]" />
        ))}
      </div>
      <p className="mb-6 text-[var(--foreground)] leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-xs font-bold text-white">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-[var(--muted-foreground)]">{role}</p>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ title, price, features, highlighted }: { title: string; price: string; features: string[]; highlighted?: boolean }) {
  return (
    <div className={`rounded-2xl border p-8 ${highlighted ? "border-[var(--primary)] shadow-lg ring-1 ring-[var(--primary)]" : "border-[var(--border)]"}`}>
      {highlighted && <span className="mb-2 inline-block rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-white">Most Popular</span>}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">
        <span className="text-4xl font-extrabold">{price}</span>
        {price !== "Custom" && <span className="text-[var(--muted-foreground)] text-sm">/month</span>}
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <CheckCircle size={16} className="mt-0.5 shrink-0 text-[var(--success)]" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/register"
        className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${highlighted ? "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]" : "border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--muted)]"}`}
      >
        Get Started
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl md:leading-tight">
              Expert{" "}
              <span className="gradient-text">consulting</span>
              ,{" "}
              <span className="gradient-text">solved problems</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted-foreground)]">
              Post your business challenge. Get proposals from verified experts. Book a consultant who has solved your exact problem before.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/problems"
                className="flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-dark)]"
              >
                Post a Problem <ArrowRight size={16} />
              </Link>
              <Link
                href="/consultants"
                className="flex items-center gap-2 rounded-full border border-[var(--border)] px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-[var(--muted)]"
              >
                Browse Consultants
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold gradient-text">{s.value}</p>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">How cons2go Works</h2>
          <p className="mt-3 text-[var(--muted-foreground)]">Three steps from problem to solution</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { step: "01", title: "Describe Your Challenge", desc: "Post your problem with as much detail as you like. It takes under 5 minutes." },
            { step: "02", title: "Get Matched", desc: "Verified consultants bid with tailored proposals. Compare ratings, prices, and approaches." },
            { step: "03", title: "Solve & Review", desc: "Work directly on the platform. Pay through escrow. Rate the outcome." },
          ].map((item) => (
            <div key={item.step} className="rounded-2xl bg-[var(--muted)] p-8 md:p-10">
              <p className="text-5xl font-extrabold gradient-text">{item.step}</p>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-[var(--muted-foreground)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold md:text-4xl">Why cons2go?</h2>
            <p className="mt-3 text-[var(--muted-foreground)]">Everything you need to find and work with the right expert</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">Trusted by Teams Worldwide</h2>
          <p className="mt-3 text-[var(--muted-foreground)]">Real stories from real users</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold md:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mt-3 text-[var(--muted-foreground)]">Start free. Scale as you grow.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <PricingCard title="Starter" price="Free" features={["Post up to 3 problems/month", "Basic consultant search", "Secure escrow payments", "Email support", "48h avg response time"]} />
            <PricingCard title="Professional" price="$49" features={["Unlimited problems", "Advanced filtering & matching", "Video consultations", "Priority support", "24h avg response time", "Detailed analytics dashboard"]} highlighted />
            <PricingCard title="Enterprise" price="Custom" features={["Dedicated account manager", "Custom SLA & contracts", "Team collaboration (up to 50)", "API access", "Custom integrations", "White-label reports"]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-12 text-center text-white md:p-20">
          <h2 className="text-3xl font-extrabold md:text-4xl">Ready to Solve Your Next Challenge?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">Join 12,500+ verified consultants and 50,000+ businesses already on the platform.</p>
          <Link href="/register" className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[var(--primary)] transition-colors hover:bg-zinc-100">
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
