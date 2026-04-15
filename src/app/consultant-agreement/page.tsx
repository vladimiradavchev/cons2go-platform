import Link from "next/link";

const sections = [
  {
    title: "1. Overview",
    content: `This Consultant Agreement ("Agreement") governs the relationship between cons2go Inc. ("Platform") and independent consultants ("Consultant") who provide services through the cons2go platform.

By registering as a consultant on cons2go, you acknowledge and agree to this Agreement in addition to our Terms of Service and Privacy Policy.`
  },
  {
    title: "2. Independent Contractor Status",
    content: `You are an independent contractor, not an employee of cons2go. Nothing in this Agreement creates an employment, partnership, joint venture, or agency relationship.

You are solely responsible for:
- Your own taxes, insurance, and benefits in your jurisdiction
- Compliance with local laws governing independent contractors
- Maintaining any professional licenses or certifications required for your field

If you are based in California, you acknowledge that you do not meet the ABC test for employee classification under California Assembly Bill 5 (AB5) and you are operating a genuinely independent business.`
  },
  {
    title: "3. Consultant Earnings & Payments",
    content: `You set your own rates for consulting services. cons2go charges a commission on each completed project:

- Starter plan clients: 15% commission
- Professional plan clients: 8% commission
- Enterprise plan clients: rate negotiated individually

Payments are released from escrow to you when:
(a) The client confirms satisfactory completion of a milestone or project, OR
(b) 7 calendar days pass after delivery with no dispute from the client

Payments are processed through Stripe and deposited to your linked bank account within 2 business days of release. A minimum payout threshold of $25 applies.`
  },
  {
    title: "4. Standards of Performance",
    content: `As a consultant on cons2go, you agree to:

(a) Respond to client communications within 48 hours.
(b) Deliver agreed-upon work by the committed deadlines.
(c) Maintain professional standards consistent with industry best practices.
(d) Not represent cons2go as your employee or partner.
(e) Not provide legal, financial, or medical advice that requires a specific professional license unless you hold such license and disclose it.
(f) Report any conflict of interest that may affect your ability to provide objective consulting services.

Consistent failure to meet these standards may result in account review, suspension, or termination.`
  },
  {
    title: "5. Non-Solicitation",
    content: `During your engagement with a client through cons2go and for 12 months thereafter, you agree not to:

(a) Solicit the client to transact outside the cons2go platform for services substantially similar to those provided through cons2go.
(b) Share personal contact information (email, phone, social media) with the intent of conducting business off-platform.

Violations may result in permanent account suspension and forfeiture of pending payments.`
  },
  {
    title: "6. Intellectual Property",
    content: `Unless otherwise agreed in writing between the consultant and the client:

All work product, deliverables, and materials created during a cons2go engagement become the property of the client upon full payment through the escrow system.

Consultants retain the right to showcase work product in their portfolio, subject to any non-disclosure agreement (NDA) agreed to with the client.`
  },
  {
    title: "7. Termination",
    content: `Either party may terminate this Agreement at any time through the platform settings.

Upon termination:
(a) Ongoing engagements must be completed and settled per the existing escrow terms.
(b) Outstanding payments remain payable.
(c) Sections 5 (Non-Solicitation), 6 (Intellectual Property), and 8 (Limitation of Liability) survive termination.`
  },
  {
    title: "8. Limitation of Liability",
    content: `CONS2GO IS NOT A PARTY TO THE CONSULTING ENGAGEMENT BETWEEN CONSULTANTS AND CLIENTS. WE DO NOT GUARANTEE THE QUALITY, ACCURACY, OR COMPLETENESS OF CONSULTING SERVICES PROVIDED THROUGH THE PLATFORM.

CONS2GO SHALL NOT BE LIABLE FOR ANY DISPUTES, CLAIMS, OR LOSSES ARISING FROM CLIENT-CONSULTANT ENGAGEMENTS. OUR LIABILITY IS LIMITED TO THE COMMISSION FEES WE COLLECT ON THE SPECIFIC ENGAGEMENT IN QUESTION.

CONSULTANTS AGREE TO INDEMNIFY CONS2GO AGAINST ANY CLAIMS ARISING FROM THEIR PROFESSIONAL ADVICE, EXCEPT WHERE SUCH CLAIMS RESULT FROM GROSS NEGLIGENCE OR WILLFUL MISCONDUCT BY THE PLATFORM.`
  },
];

export default function ConsultantAgreementPage() {
  return (
    <div>
      <div className="border-b border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold text-[var(--primary)]">Legal</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Consultant Agreement</h1>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">Last updated: April 1, 2026 &middot; Effective date: April 15, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-10 rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-6 text-sm text-[var(--muted-foreground)]">
          <p className="font-semibold text-[var(--foreground)] mb-2">Key Points for Consultants</p>
          You keep 85-92% of your project fees (depending on the clients plan). You set your own rates and hours. You retain your IP and can showcase your work. Do NOT take clients off-platform. We are not liable for the work you do on engagements.
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
          <p className="text-sm text-[var(--muted-foreground)]">Questions? Email <a href="mailto:legal@cons2go.com" className="text-[var(--primary)] hover:underline">legal@cons2go.com</a>.</p>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
            <Link href="/terms" className="text-[var(--primary)] hover:underline">Terms of Service</Link>
            <Link href="/privacy" className="text-[var(--primary)] hover:underline">Privacy Policy</Link>
          </div>
          <Link href="/" className="mt-6 inline-block text-sm font-medium text-[var(--primary)] hover:underline">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
