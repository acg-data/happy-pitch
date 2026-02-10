import { ChevronRight, FileText, Palette, BarChart3, Zap, Award, Users } from "lucide-react";
import Link from "next/link";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { StatsSection } from "@/components/shared/StatsSection";
import { FooterCTA } from "@/components/shared/FooterCTA";

const services = [
  {
    icon: FileText,
    title: "Pitch Deck Design",
    description: "Investor-ready presentations that tell your story and secure funding.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Cohesive visual systems that make your brand unforgettable.",
  },
  {
    icon: BarChart3,
    title: "Financial Models",
    description: "Clear, compelling financial projections that investors trust.",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description: "Rush delivery available for time-sensitive fundraising rounds.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your business, market, and goals to understand your unique story.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Our team crafts a compelling narrative structure tailored to your target investors.",
  },
  {
    step: "03",
    title: "Design",
    description: "Visual design that brings your story to life with stunning graphics and layouts.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Final polish and delivery in multiple formats ready for your fundraising campaign.",
  },
];

const whyChoose = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "500+ pitch decks created for startups across every major industry.",
  },
  {
    icon: Users,
    title: "Investor Psychology",
    description: "We understand what investors look for and how to capture their attention.",
  },
  {
    icon: Zap,
    title: "Proven Results",
    description: "Our clients have raised over $2B in funding with our decks.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white pt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 leading-tight">
                Pitch Decks That
                <span className="block text-gray-400">Close Deals</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                We create exceptional pitch decks that help startups secure funding, 
                attract investors, and accelerate growth. From Seed to Series C and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-pill-primary">
                  Request Samples
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
                <Link href="/case-studies" className="btn-pill-secondary">
                  View Case Studies
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-black">500+</p>
                  <p className="text-sm text-gray-500">Decks Created</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <p className="text-3xl font-bold text-black">$2B+</p>
                  <p className="text-sm text-gray-500">Capital Raised</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <p className="text-3xl font-bold text-black">98%</p>
                  <p className="text-sm text-gray-500">Success Rate</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl aspect-square flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <p className="text-lg">Hero Image</p>
                  <p className="text-sm">Pitch deck preview mockup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive pitch deck solutions for every stage of your fundraising journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card-shadow p-6 lg:p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Why Founders Choose Happy Pitch
              </h2>
              <p className="text-gray-600 mb-8">
                We combine deep industry expertise with proven design principles to create 
                pitch decks that resonate with investors and drive results.
              </p>
              <div className="space-y-6">
                {whyChoose.map((item) => (
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
                <p className="text-lg">Why Choose Image</p>
                <p className="text-sm">Team or workspace photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven four-step approach to creating pitch decks that win
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="card-shadow p-6 lg:p-8">
                <span className="text-4xl font-bold text-gray-200 mb-4 block">{item.step}</span>
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Footer CTA */}
      <FooterCTA
        title="Ready to Raise?"
        description="Join 500+ founders who have secured funding with our pitch decks."
        primaryButtonText="Request Samples"
        primaryButtonHref="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
      />
    </>
  );
}
