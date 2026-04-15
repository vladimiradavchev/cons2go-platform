import Link from "next/link";

const cookieTypes = [
  {
    icon: "🔴",
    title: "Strictly Necessary",
    subtitle: "Always Active",
    description: `These cookies are essential for the Platform to function. They enable core features like account login, session management, and security. You cannot opt out of these cookies.

Examples:
  - session_id: Stores your authenticated session (30 days)
  - csrf_token: Protects against cross-site request forgery attacks (session)
  - cookie_consent: Remembers your cookie preferences (1 year)`,
  },
  {
    icon: "🟡",
    title: "Performance & Analytics",
    subtitle: "Consent Required",
    description: `These cookies help us understand how visitors interact with the Platform. All data is aggregated and anonymous — we cannot identify individual users from analytics cookies.

Examples:
  - _ga (Google Analytics): Tracks visitor behavior anonymously (2 years)
  - _gid (Google Analytics): Distinguishes users (24 hours)
  - _vwo (Visual Website Optimizer): A/B testing analysis (30 days)

Legal basis (EU): Your consent, which you may withdraw at any time.`,
  },
  {
    icon: "🔵",
    title: "Functional & Preferences",
    subtitle: "Consent Required",
    description: `These cookies remember your preferences and settings to personalize your experience on the Platform.

Examples:
  - theme_preference: Remembers your selected visual theme (1 year)
  - language: Remembers your preferred language (1 year)
  - last_search: Remembers your last search filter (30 days)`,
  },
  {
    icon: "🟢",
    title: "Marketing & Advertising",
    subtitle: "Consent Required",
    description: `These cookies may be set by our advertising partners to build a profile of your interests and show relevant ads on other sites. They do not store directly personal information but are based on uniquely identifying your browser and device.

Examples:
  - _fbp (Facebook Pixel): Tracks ad effectiveness (3 months)
  - _gcl_au (Google Ads): Stores conversion data (3 months)

We use these to measure the effectiveness of our marketing campaigns and to ensure our advertising budget reaches people who might benefit from cons2go. Legal basis (EU): Your consent.`,
  },
];

export default function CookiesPage() {
  return (
    <div>
      <div className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold text-[var(--primary)]">Legal</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Cookie Policy</h1>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">Last updated: April 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">What Are Cookies?</h2>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, keeping you logged in, and helping us improve the Platform.
          </p>
          <p className="text-sm text-[var(--muted-foreground)] mt-3 leading-relaxed">
            This Cookie Policy explains what cookies we use, why we use them, and how you can control your cookie preferences. It supplements our <Link href="/privacy" className="text-[var(--primary)] hover:underline">Privacy Policy</Link>.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {cookieTypes.map((c) => (
            <div key={c.title} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold">{c.icon} {c.title}</h3>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${c.subtitle === "Always Active" ? "bg-[var(--success)]/10 text-[var(--success)]" : "bg-[var(--muted)] text-[var(--muted-foreground)]"}`}>{c.subtitle}</span>
              </div>
              <div className="text-sm text-[var(--muted-foreground)] leading-relaxed whitespace-pre-line">{c.description.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--muted)] p-6">
          <h3 className="font-bold">How to Control Cookies</h3>
          <div className="mt-3 flex flex-col gap-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
            <p><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser.</p>
            <p><strong>Cookie Preferences on cons2go:</strong> You can manage your cookie preferences at any time through the banner that appears when you first visit the Platform, or by adjusting your account settings.</p>
            <p><strong>Google Analytics Opt-out:</strong> You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-[var(--primary)] hover:underline" target="_blank">Google Analytics Opt-out Browser Add-on</a>.</p>
            <p><strong>Contact Us:</strong> If you have further questions about how we use cookies, email us at <a href="mailto:privacy@cons2go.com" className="text-[var(--primary)] hover:underline">privacy@cons2go.com</a>.</p>
          </div>
        </div>

        <Link href="/" className="mt-8 inline-block text-sm font-medium text-[var(--primary)] hover:underline">&larr; Back to Home</Link>
      </div>
    </div>
  );
}
