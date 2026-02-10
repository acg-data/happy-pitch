import { ChevronRight, FileText, BarChart3, Target, Sparkles, Clock, Shield, Award } from "lucide-react";
import { FooterCTA } from "@/components/shared/FooterCTA";

const services = [
  {
    icon: FileText,
    title: "Pitch Deck Design",
    description: "Investor-ready presentations that combine stunning visuals with compelling narratives.",
    features: ["Custom design system", "Investor psychology approach", "Multiple format delivery", "2 revision rounds included"],
    price: "From $3,500",
  },
  {
    icon: BarChart3,
    title: "Financial Modeling",
    description: "Clear, defensible financial projections that investors can trust and understand.",
    features: ["3-statement model", "Scenario analysis", "KPI dashboard", "Investor Q&A prep"],
    price: "From $2,500",
  },
  {
    icon: Target,
    title: "Market Research",
    description: "In-depth market analysis that positions your opportunity and validates your TAM.",
    features: ["TAM/SAM/SOM analysis", "Competitive landscape", "Market trends", "Data visualization"],
    price: "From $1,500",
  },
  {
    icon: Sparkles,
    title: "Pitch Coaching",
    description: "One-on-one coaching to help you deliver your pitch with confidence and impact.",
    features: ["3 coaching sessions", "Q&A preparation", "Body language training", "Presentation review"],
    price: "From $1,000",
  },
];

const process = [
  {
    icon: Clock,
    title: "2 Week Delivery",
    description: "Standard projects delivered in just 10 business days without compromising quality.",
  },
  {
    icon: Shield,
    title: "Confidentiality",
    description: "NDA included with every project. Your ideas and data are always protected.",
  },
  {
    icon: Award,
    title: "Investor-Grade",
    description: "Every deck is reviewed by former VCs to ensure it meets institutional standards.",
  },
];

const faqs = [
  {
    question: "How long does the process take?",
    answer: "Standard pitch deck projects take 2 weeks from kickoff to delivery. Rush delivery (5 business days) is available for an additional fee.",
  },
  {
    question: "What do you need from us to get started?",
    answer: "We need your existing pitch materials (if any), brand guidelines, and access to key team members for discovery sessions. We'll provide a detailed checklist during onboarding.",
  },
  {
    question: "How many revision rounds are included?",
    answer: "All packages include 2 rounds of revisions. Additional revisions can be added at $500 per round.",
  },
  {
    question: "Can you help with other fundraising materials?",
    answer: "Yes! We also create one-pagers, executive summaries, and investor update templates. Just let us know what you need.",
  },
  {
    question: "Do you work with international startups?",
    answer: "Absolutely. We work with founders worldwide and can accommodate different time zones for meetings and reviews.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-dark min-h-[70vh] flex items-center pt-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Solutions Built for
              <span className="block text-gray-400">Fundraising Success</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              From pitch decks to financial models, we provide everything you need 
              to tell your story and secure funding. Every solution is tailored to 
              your stage, industry, and fundraising goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-pill-white">
                Get a Quote
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
              <a href="/case-studies" className="btn-pill-outline-white">
                See Examples
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for every stage of your fundraising journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card-shadow p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-sm font-medium text-gray-500">{service.price}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-black rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="btn-pill-primary w-full justify-center">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Built by Investors, For Founders
              </h2>
              <p className="text-gray-600 mb-8">
                Our team combines VC experience with world-class design to create 
                materials that actually work in the fundraising process.
              </p>
              <div className="space-y-6">
                {process.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-lg">Process Image</p>
                <p className="text-sm">Team collaboration photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Everything you need to know about working with us
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card-shadow p-6">
                  <h3 className="font-bold text-black mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA
        title="Ready to Get Started?"
        description="Let's discuss your project and create a custom quote tailored to your needs."
        primaryButtonText="Request a Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
      />
    </>
  );
}
