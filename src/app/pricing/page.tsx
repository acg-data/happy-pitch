import { ChevronRight, Check, X } from "lucide-react";
import { FooterCTA } from "@/components/shared/FooterCTA";

const plans = [
  {
    name: "Starter",
    description: "For early-stage startups preparing for seed funding",
    price: "$3,500",
    features: [
      "10-12 slide pitch deck",
      "Custom design system",
      "2 revision rounds",
      "PDF & PPT formats",
      "2-week delivery",
    ],
    notIncluded: [
      "Financial model",
      "Market research",
      "Pitch coaching",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For startups ready for Series A or B funding",
    price: "$6,500",
    features: [
      "15-18 slide pitch deck",
      "Custom design system",
      "3 revision rounds",
      "PDF, PPT & Keynote formats",
      "Basic financial model",
      "Market research summary",
      "2-week delivery",
    ],
    notIncluded: [
      "Detailed financial model",
      "Pitch coaching",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For later-stage companies with complex needs",
    price: "$12,000",
    features: [
      "20+ slide pitch deck",
      "Premium design system",
      "Unlimited revisions",
      "All formats + investor one-pager",
      "Detailed financial model",
      "Comprehensive market research",
      "3 pitch coaching sessions",
      "Priority support",
      "Rush delivery available",
    ],
    notIncluded: [],
    cta: "Contact Us",
    popular: false,
  },
];

const addOns = [
  {
    name: "Financial Model",
    description: "3-statement model with scenario analysis",
    price: "$2,500",
  },
  {
    name: "Market Research",
    description: "TAM/SAM/SOM analysis with competitive landscape",
    price: "$1,500",
  },
  {
    name: "Pitch Coaching",
    description: "3 one-on-one sessions with presentation expert",
    price: "$1,000",
  },
  {
    name: "Rush Delivery",
    description: "5-day turnaround instead of 2 weeks",
    price: "$1,500",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-dark min-h-[60vh] flex items-center pt-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Simple, Transparent
              <span className="block text-gray-400">Pricing</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Choose the package that fits your stage and needs. All packages include 
              our signature design quality and investor-focused approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="btn-pill-white">
                View Packages
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
              <a href="/contact" className="btn-pill-outline-white">
                Custom Quote
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card-shadow p-6 lg:p-8 relative ${
                  plan.popular ? "ring-2 ring-black" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  <span className="text-gray-500"> / project</span>
                </div>
                <a
                  href="/contact"
                  className={`btn-pill w-full justify-center mb-6 ${
                    plan.popular ? "btn-pill-primary" : "btn-pill-secondary"
                  }`}
                >
                  {plan.cta}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
                <div className="space-y-3">
                  <p className="font-medium text-black text-sm">What&apos;s included:</p>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.length > 0 && (
                    <>
                      <div className="pt-3 border-t border-gray-100" />
                      {plan.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <X className="w-4 h-4 text-gray-300 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Add-On Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Customize your package with additional services to meet your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div key={addon.name} className="card-shadow p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-black mb-1">{addon.name}</h3>
                  <p className="text-gray-600 text-sm">{addon.description}</p>
                </div>
                <span className="text-lg font-bold text-black">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Pricing FAQ</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "What payment options do you accept?",
                  a: "We accept all major credit cards, bank transfers, and wire transfers. For enterprise clients, we also offer net-30 terms.",
                },
                {
                  q: "Can I upgrade my package later?",
                  a: "Yes! You can upgrade at any time. We'll credit what you've already paid toward the new package.",
                },
                {
                  q: "What's your refund policy?",
                  a: "We offer a full refund if you cancel before we begin work. After work has started, refunds are prorated based on progress.",
                },
                {
                  q: "Do you offer payment plans?",
                  a: "Yes, we offer 50/50 payment splits for packages over $5,000. Enterprise clients can arrange custom payment schedules.",
                },
              ].map((faq, index) => (
                <div key={index} className="card-shadow p-6">
                  <h3 className="font-bold text-black mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA
        title="Need a Custom Quote?"
        description="Every startup is unique. Contact us for a custom proposal tailored to your specific needs."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
      />
    </>
  );
}
