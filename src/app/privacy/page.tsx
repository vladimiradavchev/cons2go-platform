import Link from "next/link";
import { ArrowDown } from "lucide-react";

const sections = [
  {
    title: "1. What We Collect",
    content: `We collect the following categories of personal information:

Account Data: Name, email address, phone number, profile photo, password hash.
Profile Data: Professional experience, education, certifications, expertise areas, hourly rate, portfolio materials.
Transaction Data: Billing address, payment information (processed securely by Stripe — we do not store card details), project history, invoices, tax documents.
Communication Data: Messages exchanged between users, consultation notes, support tickets.
Usage Data: Pages visited, search queries, time spent on the Platform, device information, IP address, browser type.
Location Data: Approximate location derived from IP address. Precise location is never collected without your explicit consent.

We do not collect sensitive data such as government IDs, religious beliefs, biometric data, or health information. If verification requires a government ID, it is processed by our identity verification partner (Trulioo) and immediately deleted after verification.`
  },
  {
    title: "2. How We Use Your Data",
    content: `We use your information to:

Create and manage your cons2go account.
Verify consultant credentials and qualifications.
Facilitate matching between clients and consultants.
Process payments and manage escrow transactions.
Send service notifications, updates, and marketing communications (with your consent).
Improve the Platform through analytics and user research.
Comply with legal obligations, including anti-money laundering (AML) and tax reporting requirements.
Detect, prevent, and address fraud, abuse, and security threats.`
  },
  {
    title: "3. Data Sharing",
    content: `We share your data with the following third parties:

Stripe: For secure payment processing. Your financial data is subject to Stripe's privacy policy.
Trulioo: For identity verification of consultants. ID documents are deleted immediately after verification.
SendGrid: For transactional email delivery.
AWS: For cloud hosting and data storage. All data is encrypted in transit (TLS 1.3) and at rest (AES-256).
Google Analytics: For aggregated platform analytics (anonymized IP addresses).
Law Enforcement: When required by law, regulation, legal process, or governmental request.

We do not sell your personal information. Ever. We share only the minimum data necessary for each purpose.`
  },
  {
    title: "4. Data Retention",
    content: `We retain your personal data as follows:

Account Data: Retained for the duration of your account plus 2 years after closure for legal and business purposes.
Transaction Data: Retained for 7 years to comply with US and international tax requirements.
Communication Data: Retained for the duration of your account plus 1 year.
Usage Data: Aggregated and anonymized after 90 days; retained indefinitely in anonymized form.
Verification Documents: Deleted immediately after successful verification.

You may request deletion of your data at any time, subject to our retention obligations under Section 4.`
  },
  {
    title: "5. Your Rights",
    content: `Depending on your location, you have the following rights:

Right of Access: Request a copy of the personal data we hold about you.
Right to Rectification: Correct inaccurate or incomplete personal data.
Right to Erasure: Request deletion of your personal data (subject to legal retention requirements).
Right to Restriction: Restrict or object to certain processing activities.
Right to Data Portability: Receive your data in a machine-readable format and transfer it to another service.
Right to Withdraw Consent: Withdraw consent at any time where processing is based on consent.
Right Not to Be Subject to Automated Decision-Making: Our consultant matching algorithm does not make decisions about individuals without human review.

California Residents (CCPA/CPRA): You have the right to know what personal information we collect, use, disclose, and sell. You may request access, delete, or correct your data. You have the right to opt out of sharing.

EU Residents (GDPR): You have the right to lodge a complaint with a supervisory authority in your country of residence.

To exercise any of these rights, email privacy@cons2go.com. We respond to all requests within 30 days. We will not charge you for exercising your rights unless the request is manifestly unfounded or excessive.`
  },
  {
    title: "6. Security Measures",
    content: `We implement industry-standard security measures to protect your data:

Encryption: TLS 1.3 for all data in transit. AES-256 for data at rest.
Access Control: Role-based access control with multi-factor authentication for all internal systems.
Auditing: Regular third-party security audits and SOC 2 Type II compliance.
Incident Response: Documented incident response plan. You will be notified within 72 hours of any data breach that affects your information.
Monitoring: 24/7 infrastructure monitoring with automated threat detection.

While we take every precaution, no system is 100% secure. You are responsible for keeping your password secure.`
  },
  {
    title: "7. International Data Transfers",
    content: `cons2go operates globally. Your data may be transferred to and processed in countries other than your country of residence, including the United States. These countries may have different data protection laws.

We ensure adequate protection through:

Standard Contractual Clauses (SCCs) approved by the European Commission.
US-EU Data Privacy Framework for transfers to our US-based infrastructure.
Adequacy decisions where applicable.

You are entitled to a copy of the safeguards we use. Contact us at privacy@cons2go.com.`
  },
  {
    title: "8. Children's Privacy",
    content: `cons2go is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from children. If you are the parent or guardian of a child who has provided data without your consent, please contact us and we will delete the data.`
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes via email or a prominent notice on the Platform at least 30 days before the changes take effect. Your continued use after the effective date constitutes acceptance of the updated policy.`
  },
  {
    title: "10. Contact Us",
    content: `cons2go Inc.
Data Protection Officer
100 Market Street, Suite 300
San Francisco, CA 94105
United States

Email: privacy@cons2go.com
Phone: +1 (415) 555-0132

You may also contact your local data protection authority directly if you reside within the EU.`
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <div className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold text-[var(--primary)]">Legal</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">Last updated: April 1, 2026 &middot; Effective date: April 15, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-10 rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-6 text-sm text-[var(--muted-foreground)]">
          <p className="font-semibold text-[var(--foreground)] mb-2">Plain English Summary</p>
          We collect only the data we need to run the platform. We never sell your information. We encrypt everything. You can request deletion, access, or correction of your data at any time. Here are the full details below.
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
          <p className="text-sm text-[var(--muted-foreground)]">Questions? Email <a href="mailto:privacy@cons2go.com" className="text-[var(--primary)] hover:underline">privacy@cons2go.com</a>.</p>
          <Link href="/" className="mt-6 inline-block text-sm font-medium text-[var(--primary)] hover:underline">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
