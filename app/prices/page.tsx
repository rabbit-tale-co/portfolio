import { SectionSeparator } from "@/components/sections/SectionSeparator";
import { OutlineArrowRight } from "@/icons/Icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PricesPage() {
  return (
    <>
      {/* Header */}
      <section id="prices-header">
        <div className="border-l-4 border-black dark:border-white mb-8 pl-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-2">
            Pricing
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            I offer transparent pricing options tailored to your needs. Whether you&apos;re a small business
            just starting out or an established enterprise looking for comprehensive solutions,
            I have packages designed to help you succeed.
          </p>
        </div>
      </section>

      <SectionSeparator />

      {/* Pricing Packages */}
      <section id="pricing-packages">
        <div className="space-y-px">
          {/* Basic Package */}
          <PricePackage
            title="Basic Package"
            price="$349"
            originalPrice="$399"
            description="Great for small businesses needing a clean, simple site"
            features={[
              "Responsive design",
              "Up to 5 pages",
              "Basic SEO setup",
              "Contact form",
              "1 month of support",
              "Delivery in 2-3 weeks"
            ]}
          />

          {/* Professional Package */}
          <PricePackage
            title="Professional Package"
            price="$549"
            description="Ideal for growing businesses with specific needs"
            features={[
              "Everything in Basic",
              "One-page (hero + 5–7 sections) or up to ~8–10 pages",
              "Advanced SEO optimization",
              "Blog integration (Basic CMS)",
              "3 months of support",
              "2 rounds of revisions",
              "Delivery in 3-4 weeks"
            ]}
            highlighted={true}
          />

          {/* Enterprise Package */}
          <PricePackage
            title="Enterprise Package"
            price="from $899"
            description="Complete solution for established businesses"
            features={[
              "Everything in Professional",
              "Unlimited pages",
              "E-commerce functionality",
              "Custom animations",
              "Performance optimization",
              "6 months of support",
              "Unlimited revisions",
              "Priority support",
              "Delivery in 5-6 weeks"
            ]}
          />
        </div>
      </section>

      <SectionSeparator />

      {/* Custom Services */}
      <section id="custom-services">
        <div className="border-l-4 border-black dark:border-white pl-4 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            Custom Services
          </h2>
        </div>

        <div className="space-y-px bg-gray-200 dark:bg-background">
          <div className="bg-background first:pt-0 p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Web Development
            </h3>
            <div className="space-y-2">
              <ul className="space-y-4 sm:space-y-2.5">
                <PriceItem service="Custom Feature Development" price="$30/hour" />
                <PriceItem service="Bug Fixes" price="$22/hour" />
                <PriceItem service="Performance Optimization" price="$35/hour" />
                <PriceItem service="API Integration" price="$40/hour" />
              </ul>
            </div>
          </div>

          <div className="bg-background first:pt-0 p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              UI/UX Design Services
            </h3>
            <div className="space-y-2">
              <ul className="space-y-4 sm:space-y-2.5">
                <PriceItem service="Web UI/UX Design" price="$20/hour" />
                <PriceItem service="Mobile UI/UX Design" price="$30/hour" />
                <PriceItem service="Responsive Design Systems" price="$35/hour" />
                <PriceItem service="UI Component Library" price="$30/hour" originalPrice="$40/hour" />
              </ul>
            </div>
          </div>

          <div className="bg-background first:pt-0 p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Portfolio Websites
            </h3>
            <div className="space-y-2">
              <ul className="space-y-4 sm:space-y-2.5">
                <PriceItem service="One-Page Portfolio (hero + 5–7 sections, light animation)" price="$449–$649" />
                <PriceItem service="Multi-Page (3–5 simple pages)" price="$349–$499" />
                <PriceItem service="Premium (5+ pages, CMS/blog, tech SEO)" price="from $849" />
                <PriceItem service="Maintenance" price="$20–$40/month" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* FAQ Section */}
      <section id="faq">
        <div className="border-l-4 border-black dark:border-white pl-4 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-px bg-gray-200 dark:bg-background">
          <FaqItem
            question="How long does it take to complete a website?"
            answer="Typically, a basic website takes 2-3 weeks, a professional site 4-6 weeks, and enterprise solutions 8-12 weeks. Timeline varies based on project complexity and feedback cycles."
          />
          <FaqItem
            question="Do you offer maintenance plans?"
            answer="Yes, I offer monthly maintenance plans starting at $99/month which include updates, security patches, and minor content changes."
          />
          <FaqItem
            question="What payment methods do you accept?"
            answer="I accept credit cards, PayPal, and bank transfers. Projects typically require a 50% deposit upfront with the remainder due upon completion."
          />
          <FaqItem
            question="Can I update the website myself?"
            answer="Absolutely! I build sites with user-friendly content management systems and provide training so you can make updates independently."
          />
        </div>
      </section>

      <SectionSeparator />

      {/* Terms of Service */}
      <section id="terms-of-service">
        <div className="border-l-4 border-black dark:border-white pl-4 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            Terms of Service
          </h2>
        </div>

        <div className="space-y-px bg-gray-200 dark:bg-background">
          {/* Payment Terms */}
          <div className="bg-background first:pt-0 p-4 sm:p-6">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">Payment Terms</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Projects typically require a 50% deposit to begin. The remaining balance is due upon completion and prior to launch or transfer of assets.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Invoices are payable within 7 days unless otherwise agreed. Late payments may pause work and can incur a late fee.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Rush work (expedited timelines) may be subject to a surcharge.</span>
              </li>
            </ul>
          </div>

          {/* Scope, Revisions & Change Requests */}
          <div className="bg-background p-4 sm:p-6">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">Scope, Revisions & Change Requests</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Each package includes a defined number of revision rounds; additional revisions or scope changes are billed at the hourly rate.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Significant changes that deviate from the agreed scope may require a revised quote and timeline.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Content entry covers reasonable amounts of copy and images. Bulk data entry or migrations can be quoted separately.</span>
              </li>
            </ul>
          </div>

          {/* Project Timeline & Client Responsibilities */}
          <div className="bg-background p-4 sm:p-6">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">Project Timeline & Client Responsibilities</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Estimated delivery times assume timely client feedback and provision of assets. Delays in approvals or content will extend timelines.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Projects inactive for more than 30 days may be archived and subject to a restart fee.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Final acceptance occurs after your review and approval of the agreed deliverables.</span>
              </li>
            </ul>
          </div>

          {/* Ownership, Portfolio & Attribution */}
          <div className="bg-background p-4 sm:p-6">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">Ownership, Portfolio & Attribution</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Upon full payment, you own the final deliverables (code, designs, and assets that I created for the project).</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">I may showcase the work in my portfolio and marketing materials unless otherwise agreed in writing.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Clients must ensure they have valid licenses for any content or third‑party assets they provide.</span>
              </li>
            </ul>
          </div>

          {/* Technical Standards & Third‑Party Services */}
          <div className="bg-background p-4 sm:p-6">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">Technical Standards & Third‑Party Services</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Websites are built to modern best practices and tested on current versions of major browsers. Legacy browser support can be scoped separately.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Performance, SEO, and accessibility are implemented to reasonable standards but cannot guarantee specific rankings, scores, or outcomes.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Hosting, domains, analytics, payment providers, and other third‑party services remain your responsibility, including fees and terms.</span>
              </li>
            </ul>
          </div>

          {/* Warranty, Maintenance & Support */}
          <div className="bg-background p-4 sm:p-6">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">Warranty, Maintenance & Support</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Bug fixes for work delivered are covered for a short warranty period after launch (reasonable defects attributable to my work).</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Ongoing maintenance and feature requests are available under separate agreements or hourly billing.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Support is provided during standard business hours unless a different arrangement is agreed.</span>
              </li>
            </ul>
          </div>

          {/* Cancellation & Termination */}
          <div className="bg-background p-4 sm:p-6">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">Cancellation & Termination</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">If a project is cancelled after work has begun, payment is due for work completed up to that point. The initial deposit is non‑refundable.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Either party may terminate the project for material breach with written notice.</span>
              </li>
            </ul>
          </div>

          {/* Liability & Force Majeure */}
          <div className="bg-background p-4 sm:p-6">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">Liability & Force Majeure</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">To the fullest extent permitted by law, liability is limited to the amount paid for the specific services rendered.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
                <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
                <span className="leading-relaxed text-gray-700 dark:text-gray-300">Neither party is liable for delays or failures due to events beyond reasonable control (force majeure).</span>
              </li>
            </ul>
          </div>

          {/* "Unlimited" Pages Clarification */}
          <div className="bg-background p-4 sm:p-6">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">Clarification on “Unlimited Pages”</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              “Unlimited pages” refers to there being no preset hard cap within normal business needs for templated pages and routes. It does not mean infinite pages or unbounded content entry. High‑volume catalogs, massive blogs, bulk imports, or programmatic page generation may require separate scoping, automation, or additional fees. Content entry is covered to a reasonable extent; very large content volumes can be quoted separately.
            </p>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* CTA Section */}
      <section id="cta" className="my-8">
        <div className="bg-background p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
            Contact us today for a free consultation and let&apos;s discuss how I can bring your vision to life.
          </p>
          <Button asChild className="group">
            <Link href="/contact" className="flex items-center gap-2">
              Contact Me
              <OutlineArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function PricePackage({
  title,
  price,
  description,
  features,
  highlighted = false,
  originalPrice
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  originalPrice?: string;
}) {
  return (
    <div className={`bg-background first:pt-0 p-4 sm:p-6 ${highlighted ? 'bg-foreground/[0.02] dark:border-l-4 dark:border-white' : ''}`}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <div className="text-left sm:text-right mt-2 sm:mt-0">
          {originalPrice && (
            <span className="text-sm font-mono text-gray-500 line-through block">{originalPrice}</span>
          )}
          <div className="text-xl font-bold text-gray-900 dark:text-gray-100">{price}</div>
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
            <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <Button asChild className="group w-full sm:w-auto">
        <Link href="/contact" className="flex items-center justify-center gap-2">
          Get Started
          <OutlineArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
}

function PriceItem({
  service,
  price,
  originalPrice
}: {
  service: string;
  price: string;
  originalPrice?: string;
}) {
  return (
    <li className="flex items-start gap-3 sm:gap-2.5 text-sm relative pl-6">
      <span className="absolute left-0 top-2.5 size-1.5 bg-foreground flex-shrink-0" />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
        <span className="leading-relaxed mb-1 sm:mb-0">{service}</span>
        <div className="text-left sm:text-right">
          {originalPrice && (
            <span className="text-sm font-mono text-gray-500 line-through sm:mr-2 block sm:inline">{originalPrice}</span>
          )}
          <span className="text-sm font-mono font-bold">{price}</span>
        </div>
      </div>
    </li>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-background first:pt-0 p-4 sm:p-6">
      <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">{question}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{answer}</p>
    </div>
  );
}
