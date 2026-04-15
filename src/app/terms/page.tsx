import Link from "next/link";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the cons2go platform ("Platform," "Service," "cons2go," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.

cons2go is operated by cons2go Inc., a Delaware corporation registered at 100 Market Street, Suite 300, San Francisco, CA 94105, United States. These Terms constitute a legally binding agreement between you and cons2go Inc.`
  },
  {
    title: "2. Eligibility",
    content: `You must be at least 18 years old to use cons2go. By using the Platform, you represent and warrant that you are at least 18 years old, have the legal capacity to enter into a binding agreement, and are not barred from using the Service under the laws of the United States or any applicable jurisdiction.

If you are using the Service on behalf of a company, organization, or other legal entity, you represent that you have the authority to bind that entity to these Terms.`
  },
  {
    title: "3. Account Registration",
    content: `To access certain features of the Platform, you must register for an account. You agree to:

(a) Provide accurate, current, and complete information during registration.
(b) Maintain and update your account information to keep it accurate and complete.
(c) Keep your password secure and not share your account credentials with others.
(d) Accept responsibility for all activities that occur under your account.
(e) Notify us immediately of any unauthorized use of your account.

cons2go reserves the right to suspend or terminate accounts that provide false or misleading information.`
  },
  {
    title: "4. User Roles",
    content: `The Platform serves two distinct user roles:

Clients: Individuals or entities who post business problems and engage consultants for services.
Consultants: Verified professionals who provide consulting services in response to posted problems or through direct engagement.

You may register as either or both roles. Switching between roles is available in your account settings. Each role carries specific obligations as described in Sections 5 and 6.`
  },
  {
    title: "5. Client Obligations",
    content: `As a Client, you agree to:

(a) Provide accurate and detailed descriptions of problems or consulting needs.
(b) Review consultant proposals in good faith and select qualified consultants.
(c) Communicate professionally and clearly throughout the engagement.
(d) Release escrow payments promptly upon satisfactory completion of work.
(e) Provide constructive ratings and reviews based on actual experience.
(f) Comply with all applicable laws, including tax withholding obligations in your jurisdiction.

Clients are responsible for defining the scope of work, deliverables, and milestones for each engagement.`
  },
  {
    title: "6. Consultant Obligations",
    content: `As a Consultant, you agree to:

(a) Provide accurate information about your qualifications, credentials, and experience.
(b) Submit proposals that are genuine, tailored to the client's stated problem, and within your area of expertise.
(c) Deliver services in a professional, timely, and competent manner.
(d) Comply with all applicable professional standards and licensing requirements in your jurisdiction.
(e) Maintain the confidentiality of any proprietary or sensitive client information.
(f) Not solicit clients to transact outside of the Platform to avoid cons2go fees. Doing so may result in permanent account suspension.
(g) Pay applicable taxes on income earned through the Platform.

cons2go vets all consultants before they can begin receiving work. We reserve the right to revoke consultant status if credentials are found to be inaccurate.`
  },
  {
    title: "7. Fees and Payments",
    content: `cons2go charges the following fees:

Platform Subscription: Starter (Free), Professional ($49/month), Enterprise (Custom pricing).
Commission: Free accounts pay a 15% commission on each completed project. Professional accounts pay 8%. Enterprise accounts pay custom rates agreed individually.
Payment Processing: All payments are processed through Stripe. A standard 2.9% + $0.30 processing fee may apply on top of commissions.

All fees are clearly displayed before you confirm any payment. Prices are in USD and may include applicable taxes based on your jurisdiction.

cons2go reserves the right to modify fees upon 30 days' prior notice. Your continued use of the Platform after the effective date constitutes acceptance of any changes.`
  },
  {
    title: "8. Escrow Services",
    content: `cons2go provides an integrated escrow service to protect both parties in every engagement:

(a) When a client accepts a consultant's proposal, the agreed-upon payment is charged and held in escrow by our escrow provider.
(b) Funds are released to the consultant only when the client confirms satisfactory delivery or when the agreed-upon milestone is completed.
(c) If a dispute arises, cons2go's Trust & Safety team will review and mediate the resolution.
(d) Funds in escrow are held by a licensed third-party escrow provider and are not the property of cons2go.

For amounts under $500, cons2go may release funds at the consultant's request if 7 days have passed without a client dispute.`
  },
  {
    title: "9. Intellectual Property",
    content: `Content Ownership: You retain all intellectual property rights in content you create and submit to the Platform.
Work Product: Unless otherwise agreed between the Client and Consultant, work product created during a cons2go engagement belongs to the Client upon full payment.
Platform License: You grant cons2go a non-exclusive, worldwide, royalty-free license to use, reproduce, and display your username, ratings, and reviews for promotional purposes.
Restrictions: You may not copy, reproduce, distribute, or create derivative works from the Platform's proprietary technology without our prior written consent.`
  },
  {
    title: "10. User Conduct and Prohibited Activities",
    content: `You agree not to use the Platform to:
(a) Post fraudulent, misleading, or deceptive information.
(b) Harass, abuse, or discriminate against other users.
(c) Share personal contact information with the intent of circumventing Platform fees.
(d) Distribute malware, spam, or unsolicited communications.
(e) Attempt to gain unauthorized access to the Platform or other users' accounts.
(f) Use the Service in violation of any applicable law, regulation, or professional standard.

cons2go reserves the right to investigate and take action against users who violate these rules, including immediate account suspension, payment withholding, and reporting to relevant authorities.`
  },
  {
    title: "11. Disputes and Resolution",
    content: `If a dispute arises between a Client and a Consultant:

(a) The parties must first attempt to resolve the dispute through the Platform's built-in messaging system within 14 days.
(b) If unresolved, either party may escalate to cons2go's Trust & Safety team, which will review and make a binding determination.
(c) For disputes exceeding $10,000, either party may request independent mediation through the American Arbitration Association (AAA).

All binding arbitration shall take place in San Francisco, California, and shall be governed by the Commercial Arbitration Rules of the AAA.`
  },
  {
    title: "12. Limitation of Liability",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, CONS2GO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.

CONS2GO'S TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNT YOU PAID CONS2GO IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) $100.

THE PLATFORM IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. CONS2GO DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.`
  },
  {
    title: "13. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless cons2go Inc., its officers, directors, employees, agents, affiliates, successors, and assigns from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses arising from:
(a) Your use of the Service.
(b) Your violation of any term of these Terms.
(c) Your violation of any third-party right, including any intellectual property or privacy right.
(d) Any dispute between you and another cons2go user arising from your engagement on the Platform.`
  },
  {
    title: "14. Governing Law and Jurisdiction",
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to conflict of law principles.

Any action or proceeding arising out of or relating to these Terms shall be brought in the state or federal courts of San Francisco, California, or, at cons2go's election, resolved through binding arbitration in accordance with Section 11. If you are a consumer in the European Union, you retain the mandatory rights granted to you by the law of the country in which you are resident.`
  },
  {
    title: "15. Dispute Resolution for International Users",
    content: `For users outside the United States, cons2go respects your local consumer protection rights. If you are an EU-based consumer, you may also contact the European Commission's Online Dispute Resolution platform at https://ec.europa.eu/consumers/odr.

These Terms do not override any mandatory consumer rights you have in your country of residence.`
  },
  {
    title: "16. Term and Termination",
    content: `These Terms remain in effect until terminated. You may terminate your account at any time through your account settings. cons2go may suspend or terminate your account if we believe these Terms have been violated or for any reason with 30 days' written notice.

Upon termination: (a) any ongoing engagements in escrow shall be completed and settled per the engagement terms; (b) outstanding fees remain payable; (c) any provisions that by their nature should survive termination shall continue.`
  },
  {
    title: "17. Changes to These Terms",
    content: `We may modify these Terms at any time, but will provide at least 30 days' notice before material changes take effect. We will notify you via email and a Platform notification. Your continued use of the Platform after the effective date constitutes acceptance of the modified Terms.

We encourage you to review these Terms periodically. The "Last Updated" date at the bottom of this page indicates the most recent revision.`
  },
];

export default function TermsPage() {
  return (
    <div>
      <div className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold text-[var(--primary)]">Legal</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Terms of Service</h1>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">Last updated: April 1, 2026 &middot; Effective date: April 15, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-10 rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-6 text-sm text-[var(--muted-foreground)]">
          <p className="font-semibold text-[var(--foreground)] mb-2">Summary</p>
          These Terms of Service govern your use of the cons2go platform. cons2go connects clients with verified consultants. We facilitate payments through escrow and charge fees as described below. By using the platform, you agree to these terms. This is not legal advice &mdash; consult a lawyer if you are unsure.
        </div>

        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold">{s.title}</h2>
              {s.content.split("\n\n").map((p, i) => (
                <p key={i} className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed whitespace-pre-line">{p}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-8">
          <p className="text-sm text-[var(--muted-foreground)]">If you have any questions about these Terms, contact us at <a href="mailto:legal@cons2go.com" className="text-[var(--primary)] hover:underline">legal@cons2go.com</a>.</p>
          <p className="mt-4 text-xs text-[var(--muted-foreground)]">cons2go Inc. &middot; 100 Market Street, Suite 300 &middot; San Francisco, CA 94105 &middot; United States</p>
          <Link href="/" className="mt-6 inline-block text-sm font-medium text-[var(--primary)] hover:underline">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
