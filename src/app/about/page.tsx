import Link from "next/link";
import { ArrowRight, Users, Globe, Shield, Heart, TrendingUp, Zap, Award, Target } from "lucide-react";
import { getAllTeamMembers, getSiteContent } from "@/lib/cms";
import type { TeamMember, Milestone, Feature } from "@/types/cms";

const iconMap: Record<string, React.ElementType> = {
  Shield, Globe, Heart, Zap, TrendingUp, Award, Users, Target,
};

const defaultValues: Feature[] = [
  { icon: "Shield", title: "Trust First", desc: "Every consultant is vetted. Every payment is escrowed. We don't compromise on your security." },
  { icon: "Globe", title: "Borderless Access", desc: "Expertise has no geography. Our platform connects problems with solutions across 50+ countries." },
  { icon: "Heart", title: "Fair for Everyone", desc: "Transparent pricing, balanced fees, and equal opportunity for both clients and consultants." },
  { icon: "Zap", title: "Speed Matters", desc: "Average response time under 48 hours. Because problems don't wait, and neither do we." },
];

const defaultMilestones: Milestone[] = [
  { year: "2023", event: "cons2go founded in Berlin", desc: "Two co-founders with a simple idea: consulting should be accessible to everyone, not just Fortune 500s." },
  { year: "2023 Q3", event: "First 100 consultants onboarded", desc: "Careful, manual vetting to prove our trust-first approach at scale." },
  { year: "2024", event: "$2M seed round", desc: "Backed by leading European VCs to expand into the US market." },
  { year: "2025", event: "10,000 problems solved", desc: "Reached our first major milestone with a 94% satisfaction rate." },
  { year: "2026", event: "Global expansion", desc: "Operating in 50+ countries with multi-currency support and localized experiences." },
];

const defaultStory = [
  "The idea for cons2go was born from frustration. Our co-founders spent years in top-tier consulting firms advising large enterprises. When they saw small and mid-sized businesses struggling with the same challenges but unable to afford expert help, they knew something had to change.",
  "The consulting industry had remained largely unchanged for decades — gatekept by relationships, inflated by overhead, and inaccessible to the very businesses that needed it most. We set out to build a platform that removes those barriers while maintaining the quality and trust that consulting demands.",
  "Today, cons2go connects verified consultants with businesses worldwide. Every interaction — from posting a problem to booking a retainer — happens on a platform designed for speed, transparency, and measurable results.",
];

const defaultStats = [
  { icon: Users, value: "12,500+", label: "Verified Consultants" },
  { icon: Target, value: "85,000+", label: "Problems Solved" },
  { icon: Award, value: "94%", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "$42M+", label: "Paid to Consultants" },
];

export default async function AboutPage() {
  const [teamMembers, content] = await Promise.all([
    getAllTeamMembers(),
    getSiteContent(),
  ]);

  const team: TeamMember[] = teamMembers || [];
  const values: Feature[] = content?.aboutValues || defaultValues;
  const milestones: Milestone[] = content?.aboutMilestones || defaultMilestones;
  const story: string[] = content?.aboutStory || defaultStory;
  const heroTitle = content?.aboutHeroTitle || "We believe every business deserves world-class advice";
  const heroDesc = content?.aboutHeroDesc || "cons2go was built to democratize access to expert consulting. No matter your size, industry, or budget — the right expert should be one click away.";

  return (
    <div>
      <section className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold md:text-5xl">
              {heroTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted-foreground)]">
              {heroDesc}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {defaultStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--muted)] text-[var(--primary)]">
                  <s.icon size={22} />
                </div>
                <p className="text-2xl font-extrabold gradient-text">{s.value}</p>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold">Our Story</h2>
          <div className="mt-6 flex flex-col gap-5 text-[var(--foreground)] leading-relaxed">
            {story.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold">What We Stand For</h2>
            <p className="mt-3 text-[var(--muted-foreground)]">The principles that guide everything we build</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = iconMap[v.icon || "Shield"] || Shield;
              return (
                <div key={v.title} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8">
                  <div className="mb-4 text-[var(--primary)]"><Icon size={28} /></div>
                  <h3 className="text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-extrabold">Where We&apos;ve Been</h2>
          <div className="relative border-l-2 border-[var(--primary)]/20 pl-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[41px] mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)] text-[10px] font-bold text-white">{m.year.slice(-2)}</span>
                <span className="text-sm font-semibold text-[var(--primary)]">{m.year}</span>
                <h3 className="text-lg font-bold mt-1">{m.event}</h3>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {team.length > 0 && (
        <section className="border-t border-[var(--border)] bg-[var(--muted)]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold">Meet the Team</h2>
              <p className="mt-3 text-[var(--muted-foreground)]">The people building the future of consulting</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((t) => (
                <div key={t._id} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-sm font-bold text-white">{t.avatar}</div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-xs text-[var(--primary)] mt-0.5">{t.role}</p>
                  <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">{t.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-12 text-center text-white md:p-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">Want to Help Us Build It?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">We&apos;re always looking for talented people who share our mission.</p>
          <Link href="/careers" className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[var(--primary)] transition-colors hover:bg-zinc-100">
            View Open Roles <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
