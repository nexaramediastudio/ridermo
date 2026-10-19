import type { ReactNode } from "react";
import Link from "next/link";
import {
  COMPANY_LEGAL_NAME,
  SITE_NAME,
  EMAIL,
  ADDRESS,
  LANDLINE_NUMBER,
  LANDLINE_TEL,
  WHATSAPP_DISPLAY,
  SOCIAL_LINKS,
  MAPS_URL,
} from "@/lib/constants";

const LAST_UPDATED = "14 October 2026";

const toc = [
  { id: "who-we-are", label: "1. Who we are and scope" },
  { id: "information-we-collect", label: "2. Personal information we may collect" },
  { id: "how-we-collect", label: "3. How we collect information" },
  { id: "how-we-use", label: "4. How we use personal information" },
  { id: "legal-bases", label: "5. Legal bases and choice" },
  { id: "sharing", label: "6. Sharing and disclosure" },
  { id: "finance-payment", label: "7. Finance, payment and identity" },
  { id: "cookies", label: "8. Cookies, analytics and online services" },
  { id: "retention", label: "9. Data retention" },
  { id: "security", label: "10. Security and incident response" },
  { id: "transfers", label: "11. International transfers" },
  { id: "your-rights", label: "12. Your privacy rights" },
  { id: "children", label: "13. Children and young people" },
  { id: "marketing", label: "14. Marketing and communications" },
  { id: "third-parties", label: "15. Third-party websites" },
  { id: "changes", label: "16. Changes to this policy" },
  { id: "contact", label: "17. Contact RIDERMO" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-text md:text-base">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tvs-red" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyView() {
  return (
    <div className="bg-primary pt-28">
      <article className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <header className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-tvs-red">
            <span className="h-px w-8 bg-tvs-red/60" />
            Legal
            <span className="h-px w-8 bg-tvs-red/60" />
          </span>
          <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-text md:text-lg">
            How {COMPANY_LEGAL_NAME} collects, uses, protects and shares personal
            information.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gray-text">
            Last updated {LAST_UPDATED}
          </p>
        </header>

        <nav
          aria-label="Privacy policy contents"
          className="mb-16 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contents
          </h2>
          <ol className="mt-5 grid gap-2 sm:grid-cols-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-text transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-14">
          <Section id="who-we-are" title="1. Who we are and scope of this policy">
            <p>
              This Privacy Policy explains how {COMPANY_LEGAL_NAME} (“RIDERMO”,
              “we”, “us” or “our”) may collect, use, store, disclose and protect
              personal information when you contact us, visit our premises or
              website, enquire about or purchase a motorcycle or accessory,
              arrange an exchange or rental, request repairs or restoration, seek
              a valuation or inspection, or otherwise interact with our services.
            </p>
            <p>
              The company’s Articles of Association describe a business providing
              motorcycle-related solutions, including buying, selling, exchange,
              rental, modifications, repairs, restoration, valuation,
              finance-related services, inspection certification and the
              manufacture of modification accessories, subject to applicable Sri
              Lankan laws and required approvals. This policy is framed around
              those activities.
            </p>
            <p>
              This policy applies to customers, prospective customers, sellers,
              buyers, renters, suppliers, business contacts, website visitors and
              other individuals whose information we handle. It applies across
              our in-person, telephone, messaging, paper and digital
              interactions, to the extent relevant.
            </p>
            <p>
              This policy does not replace any separate contract, finance-provider
              privacy notice, employment privacy notice or terms that may apply
              to a specific service. If a service has a separate notice, that
              notice should be read together with this policy.
            </p>
          </Section>

          <Section id="information-we-collect" title="2. Personal information we may collect">
            <p>
              The information we collect depends on the service you request. We
              aim to collect information that is relevant and reasonably
              necessary for the stated purpose.
            </p>

            <h3 className="pt-2 text-base font-semibold text-white">
              2.1 Identification and contact details
            </h3>
            <BulletList
              items={[
                "Name, preferred title, postal or delivery address, email address, telephone number and preferred contact method.",
                "Identity or age-verification details where reasonably required for a transaction, rental, safety check, legal obligation or fraud prevention. We avoid keeping full copies of identity documents unless there is a clear need.",
              ]}
            />

            <h3 className="pt-2 text-base font-semibold text-white">
              2.2 Motorcycle, vehicle and transaction details
            </h3>
            <BulletList
              items={[
                "Motorcycle make, model, year, registration number, chassis/VIN or engine number, mileage, condition, service and repair history, photographs, valuation notes and inspection findings.",
                "Buying, selling, exchange, rental, reservation, delivery, modification, repair, restoration, warranty, accessory and after-sales records.",
                "Ownership or authority-to-sell documents and other records needed to verify a transaction or meet legal requirements.",
              ]}
            />

            <h3 className="pt-2 text-base font-semibold text-white">
              2.3 Payment and finance-related information
            </h3>
            <BulletList
              items={[
                "Invoices, transaction amounts, payment status, receipts, refund details and limited payment references.",
                "Where a finance-related service is requested, information necessary to refer, coordinate or administer that service. Any lender or finance provider may collect and process additional information under its own privacy notice.",
              ]}
            />
            <p>
              We do not intend to collect or store full card security codes or
              unnecessary payment-card details. Where possible, payments should
              be handled by a reputable payment provider and only
              confirmation/reference information retained by RIDERMO.
            </p>

            <h3 className="pt-2 text-base font-semibold text-white">
              2.4 Service and communication records
            </h3>
            <BulletList
              items={[
                "Enquiries, complaints, feedback, service requests, appointment or rental details, messages, call notes and communications with our staff.",
                "Preferences and consent records, including marketing preferences and requests to access, correct or delete information.",
              ]}
            />

            <h3 className="pt-2 text-base font-semibold text-white">
              2.5 Website and device information
            </h3>
            <BulletList
              items={[
                "IP address, browser and device type, approximate location inferred from network information, pages visited, referral source, timestamps, cookie identifiers and security logs, where these are collected by the website or service providers.",
              ]}
            />

            <h3 className="pt-2 text-base font-semibold text-white">
              2.6 Supplier and business contact information
            </h3>
            <BulletList
              items={[
                "Contact details, company or trading name, delivery and invoicing information, and records needed to manage supplier, contractor or business relationships.",
              ]}
            />
            <p>
              Please do not provide sensitive personal information unless it is
              genuinely needed for the service and we have explained why it is
              required.
            </p>
          </Section>

          <Section id="how-we-collect" title="3. How we collect information">
            <p>We may collect information:</p>
            <BulletList
              items={[
                "Directly from you when you contact us, complete a form, make a booking, request a quote, purchase or rent a motorcycle, arrange a repair, or communicate with our staff.",
                "From documents you choose or are required to provide, such as proof of ownership, registration records, inspection reports, invoices or payment confirmations.",
                "From a person acting with your authority, such as a representative arranging a service.",
                "From relevant third parties where necessary and lawful, such as payment providers, insurers, finance providers, delivery partners, repair specialists, verification services or public registers.",
                "Automatically through our website, cookies, server logs, analytics tools or security systems, if these tools are used.",
              ]}
            />
            <p>
              If you provide information about another person, you should have
              authority to do so and, where appropriate, inform that person
              about this policy.
            </p>
          </Section>

          <Section id="how-we-use" title="4. How we use personal information">
            <p>Depending on the relationship and service, we may use personal information to:</p>
            <BulletList
              items={[
                "Respond to enquiries, provide quotations and communicate with you.",
                "Arrange motorcycle purchases, sales, exchanges, rentals, deliveries, inspections, valuations, modifications, repairs, restoration and accessory orders.",
                "Verify identity, ownership, authority, eligibility, bookings or transaction details, where reasonably required.",
                "Process invoices, payments, refunds, warranties, service history and customer support.",
                "Coordinate with finance providers, insurers, inspection providers, suppliers or other service partners when you ask us to or when needed to complete a transaction.",
                "Maintain business, accounting, tax, audit, warranty and transaction records and meet applicable legal or regulatory obligations.",
                "Protect people, property and systems; prevent fraud, theft, misuse, unauthorised transactions and security incidents.",
                "Operate, maintain and improve our website, services, customer experience and internal processes.",
                "Send service notices, safety information, policy updates and transactional messages.",
                "Send marketing communications only where permitted by applicable law and subject to your choices and any required consent.",
                "Establish, exercise or defend legal claims and resolve disputes.",
              ]}
            />
            <p>
              We will not use personal information for a materially different
              purpose without a lawful basis and, where required, informing you
              or obtaining your consent.
            </p>
          </Section>

          <Section id="legal-bases" title="5. Legal bases and choice">
            <p>
              Where applicable law requires a legal basis for processing,
              RIDERMO will identify and rely on an appropriate basis for the
              relevant activity. Depending on the circumstances, this may
              include:
            </p>
            <BulletList
              items={[
                "Taking steps at your request before entering into a contract, or performing a contract with you.",
                "Complying with a legal or regulatory obligation.",
                "Your consent, where consent is required or is the appropriate basis.",
                "Legitimate business interests, where permitted by law and where those interests do not override applicable rights and protections.",
                "Establishing, exercising or defending legal claims, or protecting vital interests, where legally available.",
              ]}
            />
            <p>
              You may choose not to provide information. However, if the
              information is necessary to verify a transaction, provide a
              requested service, complete a rental or meet a legal obligation, we
              may be unable to proceed. We will explain this where reasonably
              possible.
            </p>
            <p>
              Consent can be withdrawn where processing relies on consent.
              Withdrawal does not make earlier processing unlawful, and we may
              still retain or use information where another lawful basis or legal
              obligation applies.
            </p>
          </Section>

          <Section id="sharing" title="6. Sharing and disclosure">
            <p>
              RIDERMO does not sell personal information as a standalone
              commercial product. We may share information, limited to what is
              reasonably necessary, with:
            </p>
            <BulletList
              items={[
                "Payment processors, banks and payment service providers to confirm or administer transactions.",
                "Finance providers, insurers, brokers or other financial-service partners when you request or authorise a finance-related or insurance-related service.",
                "Motorcycle sellers, buyers, suppliers, manufacturers, delivery providers, mechanics, inspectors, restoration specialists and warranty or service partners when required to complete the requested service.",
                "Website hosting, IT support, customer relationship management, analytics, communications, cloud storage and other service providers acting on our instructions.",
                "Professional advisers, auditors and insurers where reasonably necessary.",
                "Government authorities, law enforcement, courts, regulators or other parties when disclosure is required or authorised by law, or necessary to protect rights, safety or property.",
                "A successor or prospective successor in a business restructuring, merger, sale or transfer, subject to appropriate confidentiality and legal safeguards.",
              ]}
            />
            <p>
              We require service providers who handle information for us to use
              appropriate safeguards and to process it only for authorised
              purposes, subject to the applicable contract and law. Some
              recipients may separately act as independent controllers and
              provide their own privacy notices.
            </p>
          </Section>

          <Section id="finance-payment" title="7. Finance, payment and identity information">
            <p>
              Some transactions may involve a bank, lender, finance company,
              insurer, payment provider or other independent organisation. Those
              organisations may ask you directly for financial, identity,
              employment or other information and will generally determine their
              own purposes and means of processing.
            </p>
            <p>
              RIDERMO will share such information with a third party only where
              reasonably necessary for the requested service, authorised by you,
              or otherwise permitted or required by law. Please review the third
              party’s own privacy notice and terms before submitting information
              directly to it.
            </p>
            <p>
              We aim to restrict staff access to payment and identity information
              on a need-to-know basis. We do not promise approval for any finance
              product, and any decision made by a finance provider is subject to
              that provider’s own assessment and rules.
            </p>
          </Section>

          <Section id="cookies" title="8. Cookies, analytics and online services">
            <p>
              If our website uses cookies or similar technologies, they may be
              used to keep the website working, remember preferences, protect
              against abuse, understand website traffic and improve performance.
              Essential technologies may be necessary for core website functions.
              Non-essential analytics or advertising technologies should be used
              in accordance with applicable law and any consent or preference
              mechanism required.
            </p>
            <p>
              You can usually manage or block cookies through your browser
              settings. Blocking some cookies may affect website functionality.
              If we use third-party analytics, embedded maps, social media
              plugins, chat tools or advertising pixels, those providers may
              collect information under their own terms and privacy notices.
            </p>
          </Section>

          <Section id="retention" title="9. Data retention">
            <p>
              We keep personal information only for as long as reasonably needed
              for the purposes described in this policy, including providing
              services, maintaining transaction and service records, handling
              warranties and complaints, meeting accounting or legal obligations,
              preventing fraud and resolving disputes.
            </p>
            <p>
              Retention periods depend on the type of information, the
              transaction, applicable legal requirements and whether a dispute or
              investigation is ongoing. When information is no longer needed, we
              will take reasonable steps to delete it, securely destroy it or
              anonymise it, unless retention is required or permitted by law.
            </p>
          </Section>

          <Section id="security" title="10. Security and incident response">
            <p>
              We intend to use reasonable technical, physical and organisational
              safeguards designed to protect personal information against
              accidental loss, unauthorised access, misuse, alteration or
              disclosure. Safeguards may include access controls, staff
              confidentiality, secure devices and accounts, backups, software
              updates, secure disposal and appropriate supplier agreements.
            </p>
            <p>
              No method of transmission or storage is completely secure. We
              cannot guarantee absolute security, but we will take reasonable
              steps to reduce risks and respond appropriately to suspected
              incidents.
            </p>
            <p>
              If a personal data incident occurs, RIDERMO will assess the facts,
              contain and investigate the incident, keep appropriate records, and
              notify affected individuals or authorities where required by
              applicable law. Staff should promptly report suspected loss,
              misdirection, unauthorised access or disclosure using the contact
              details in Section 17.
            </p>
          </Section>

          <Section id="transfers" title="11. International transfers and service providers">
            <p>
              Some service providers may store or process information outside Sri
              Lanka, for example through cloud hosting, email, analytics or
              customer-management services. If this occurs, RIDERMO will assess
              the relevant transfer requirements and use safeguards required by
              applicable law before transferring personal information
              internationally.
            </p>
            <p>
              We do not claim that information always remains in Sri Lanka.
            </p>
          </Section>

          <Section id="your-rights" title="12. Your privacy rights and requests">
            <p>
              Subject to applicable law and any relevant exceptions, you may be
              entitled to request information about our handling of your personal
              data, access or obtain a copy of it, correct inaccurate or
              incomplete information, withdraw consent where processing is based
              on consent, object to or request restriction of certain processing,
              request deletion, or exercise other rights available under
              applicable law.
            </p>
            <p>
              To make a request, use the contact details in Section 17 and
              describe your request clearly. We may need to verify your identity
              or authority before responding. We will respond within the period
              required by applicable law. Some information may need to be
              retained where required by law, needed for a contract, or necessary
              to establish, exercise or defend legal claims.
            </p>
            <p>
              You may also have the right to raise a concern with the relevant
              data protection authority. Requests and complaints should be
              handled respectfully and without unlawful discrimination or
              retaliation.
            </p>
          </Section>

          <Section id="children" title="13. Children and young people">
            <p>
              Our motorcycle sales, rental and related services are generally
              intended for adults and people legally eligible to enter into the
              relevant transaction. We do not knowingly seek to collect personal
              information from children through general marketing channels. Where
              a transaction or service involves a person under the age required
              by law, RIDERMO must follow applicable age, consent, contract and
              safety requirements and involve a parent or legal guardian where
              required.
            </p>
            <p>
              If you believe a child has provided personal information to us
              inappropriately, contact us using Section 17 so that we can assess
              and take appropriate action.
            </p>
          </Section>

          <Section id="marketing" title="14. Marketing and communications">
            <p>
              We may send service-related communications about an enquiry, order,
              booking, repair, rental, payment, warranty or safety matter. These
              are different from promotional messages.
            </p>
            <p>
              We will send promotional communications only where permitted by
              applicable law and where any required consent or other condition
              has been satisfied. You can opt out of marketing by using an
              unsubscribe method provided in the message or contacting us. We may
              retain minimal information needed to record and respect your
              opt-out.
            </p>
            <p>
              Please note that a marketing opt-out will not stop essential
              transactional or legally required communications.
            </p>
          </Section>

          <Section id="third-parties" title="15. Third-party websites and services">
            <p>
              Our website, messages or documents may link to third-party websites
              or services, including finance providers, payment services, social
              media pages, maps or suppliers. Those third parties control their
              own privacy practices. RIDERMO is not responsible for their
              policies, security or content. Review their privacy notices before
              providing information to them.
            </p>
          </Section>

          <Section id="changes" title="16. Changes to this policy">
            <p>
              We may update this Privacy Policy to reflect changes in our
              services, systems, suppliers, business operations or legal
              requirements. The revised version will be published through our
              usual channels with an updated “Last updated” date. Where required
              by law, we will provide additional notice or seek consent for
              material changes.
            </p>
            <p>Last updated: {LAST_UPDATED}.</p>
          </Section>

          <Section id="contact" title="17. Contact RIDERMO">
            <p>
              For privacy questions, requests or complaints, contact RIDERMO
              using the details below. Please do not send full payment-card
              details, passwords or other highly sensitive information in an
              ordinary email.
            </p>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
              <dl className="space-y-4 text-sm md:text-base">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white">
                    Company
                  </dt>
                  <dd className="mt-1">{COMPANY_LEGAL_NAME}</dd>
                  <dd className="text-white/70">{SITE_NAME}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white">
                    Registered / business address
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      {ADDRESS}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white">
                    Privacy email
                  </dt>
                  <dd className="mt-1">
                    <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                      {EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white">
                    Telephone
                  </dt>
                  <dd className="mt-1">
                    <a href={`tel:${LANDLINE_TEL}`} className="transition-colors hover:text-white">
                      {LANDLINE_NUMBER}
                    </a>
                    {" · "}
                    <a
                      href={SOCIAL_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      WhatsApp {WHATSAPP_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white">
                    Website
                  </dt>
                  <dd className="mt-1">
                    <Link href="/" className="transition-colors hover:text-white">
                      {SITE_NAME}
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </Section>
        </div>
      </article>
    </div>
  );
}
