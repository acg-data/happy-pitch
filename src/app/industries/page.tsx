import { ChevronRight, TrendingUp, Cloud, Heart, ArrowUpRight } from "lucide-react";
import { FooterCTA } from "@/components/shared/FooterCTA";

const industries = [
  {
    name: "Fintech",
    description: "Payment solutions, crypto, insurtech, and banking innovation",
    stats: "150+ decks, $800M+ raised",
    icon: TrendingUp,
    href: "/industries/fintech",
    color: "bg-green-50",
  },
  {
    name: "SaaS",
    description: "B2B software, productivity tools, and enterprise platforms",
    stats: "200+ decks, $1.2B+ raised",
    icon: Cloud,
    href: "/industries/saas",
    color: "bg-blue-50",
  },
  {
    name: "Healthcare",
    description: "Digital health, biotech, medical devices, and healthtech",
    stats: "75+ decks, $500M+ raised",
    icon: Heart,
    href: "/industries/healthcare",
    color: "bg-red-50",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-dark min-h-[60vh] flex items-center pt-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Industry-Specific
              <span className="block text-gray-400">Pitch Deck Expertise</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Different industries require different approaches. Our team has deep 
              expertise across fintech, SaaS, healthcare, and more, ensuring your 
              pitch deck speaks directly to industry-savvy investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-pill-white">
                Get Started
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
              <a href="/case-studies" className="btn-pill-outline-white">
                View Case Studies
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deep expertise across the industries that drive innovation and investment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <a
                key={industry.name}
                href={industry.href}
                className="card-shadow p-6 lg:p-8 group hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${industry.color} rounded-xl flex items-center justify-center`}>
                    <industry.icon className="w-6 h-6 text-black" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{industry.description}</p>
                <p className="text-gray-500 text-xs">{industry.stats}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* More Industries */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">More Industries</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with startups across a wide range of sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "E-commerce",
              "CleanTech",
              "EdTech",
              "Consumer Apps",
              "Marketplaces",
              "AI & ML",
              "Logistics",
              "Gaming",
            ].map((industry) => (
              <div key={industry} className="card-shadow p-4 text-center">
                <span className="font-medium text-black">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Industry Expertise Matters
              </h2>
              <p className="text-gray-600 mb-8">
                Investors in different industries look for different things. Our team 
                includes former investors and operators who understand what drives 
                decisions in each sector.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Fintech Focus</h3>
                    <p className="text-gray-600 text-sm">
                      Regulatory expertise, unit economics, and technical differentiation
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">SaaS Metrics</h3>
                    <p className="text-gray-600 text-sm">
                      LTV/CAC, retention analysis, and product-market fit demonstration
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Healthcare Trust</h3>
                    <p className="text-gray-600 text-sm">
                      Clinical validation, regulatory pathways, and compliance frameworks
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-lg">Industry Expertise</p>
                <p className="text-sm">Team or workspace photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA
        title="Not Sure About Your Industry?"
        description="Contact us to discuss your specific needs. We work with startups across all sectors."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonHref="/solutions"
      />
    </>
  );
}
