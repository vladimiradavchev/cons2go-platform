import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, DollarSign } from "lucide-react";

const benefits = [
  { icon: "🌍", title: "Remote-First", desc: "Work from anywhere. We have team members in 12 countries and counting." },
  { icon: "💰", title: "Competitive Salary + Equity", desc: "Top-of-market compensation with meaningful equity in a growing company." },
  { icon: "📚", title: "Learning Budget", desc: "$2,000/year for courses, conferences, books — whatever helps you grow." },
  { icon: "🏖️", title: "Unlimited PTO", desc: "We trust you to manage your time. Take the rest you need." },
  { icon: "🏥", title: "Health & Wellness", desc: "Full medical, dental, and vision for you and your dependents." },
  { icon: "🎉", title: "Team Retreats", desc: "Paid company retreat twice a year to a destination voted on by the team." },
];

const jobs = [
  {
    title: "Senior Full-Stack Engineer",
    dept: "Engineering",
    location: "Remote (US/EU timezones)",
    type: "Full-time",
    salary: "$160K - $210K",
    stack: "Next.js, TypeScript, PostgreSQL, AWS",
  },
  {
    title: "Product Designer",
    dept: "Design",
    location: "Remote (Anywhere)",
    type: "Full-time",
    salary: "$120K - $160K",
    stack: "Figma, Design Systems, User Research",
  },
  {
    title: "Trust & Safety Analyst",
    dept: "Operations",
    location: "San Francisco, CA / Remote (US)",
    type: "Full-time",
    salary: "$90K - $130K",
    stack: "Fraud Detection, Compliance, Risk Management",
  },
  {
    title: "Growth Marketing Manager",
    dept: "Marketing",
    location: "Remote (US/EU)",
    type: "Full-time",
    salary: "$100K - $150K",
    stack: "Paid Acquisition, Content, Lifecycle",
  },
  {
    title: "Customer Success Lead",
    dept: "Operations",
    location: "Remote (Anywhere)",
    type: "Full-time",
    salary: "$80K - $120K",
    stack: "Support, Onboarding, Relationship Management",
  },
  {
    title: "Backend Engineer (Payments)",
    dept: "Engineering",
    location: "Remote (US timezones)",
    type: "Full-time",
    salary: "$150K - $200K",
    stack: "Node.js, Stripe, Microservices, Redis",
  },
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-[var(--primary)]">Careers</p>
            <h1 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Help us{" "}
              <span className="gradient-text">democratize consulting</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted-foreground)]">
              We&apos;re a 50-person team building the global marketplace for expertise. Join us and shape how millions of businesses find answers.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold">Why Work at cons2go?</h2>
          <p className="mt-3 text-[var(--muted-foreground)]">We invest in the people who invest in our mission</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8">
              <span className="text-4xl">{b.icon}</span>
              <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold">Open Positions</h2>
            <p className="mt-3 text-[var(--muted-foreground)]">Find your place on the team</p>
          </div>
          <div className="flex flex-col gap-4">
            {jobs.map((j) => (
              <div key={j.title} className="group flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:border-[var(--primary)] hover:shadow-lg cursor-pointer">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold group-hover:text-[var(--primary)] transition-colors">{j.title}</h3>
                    <span className="rounded-full bg-[var(--primary)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--primary)]">{j.dept}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {j.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {j.type}</span>
                    <span className="flex items-center gap-1"><DollarSign size={14} /> {j.salary}</span>
                  </div>
                  <p className="mt-2 text-xs text-[var(--muted-foreground)]">{j.stack}</p>
                </div>
                <button className="shrink-0 rounded-full bg-[var(--primary)] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-dark)]">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-12 text-center text-white md:p-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">Don&apos;t See the Right Fit?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep you in mind for future openings.</p>
          <a href="mailto:careers@cons2go.com" className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[var(--primary)] transition-colors hover:bg-zinc-100">
            careers@cons2go.com <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
