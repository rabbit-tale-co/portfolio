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
    <div className={`bg-background first:pt-0 p-6 ${highlighted ? 'bg-foreground/[0.02] dark:border-l-4 dark:border-white' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <div className="text-right">
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

      <Button asChild className="group">
        <Link href="/contact" className="flex items-center gap-2">
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
      <div className="flex justify-between items-center w-full">
        <span className="leading-relaxed">{service}</span>
        <div className="text-right">
          {originalPrice && (
            <span className="text-sm font-mono text-gray-500 line-through mr-2">{originalPrice}</span>
          )}
          <span className="text-sm font-mono font-bold">{price}</span>
        </div>
      </div>
    </li>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-background first:pt-0 p-6">
      <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">{question}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{answer}</p>
    </div>
  );
}
