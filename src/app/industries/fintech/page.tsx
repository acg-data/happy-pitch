import { ChevronRight, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";
import { FooterCTA } from "@/components/shared/FooterCTA";

const stats = [
  { value: "150+", label: "Fintech Decks Created" },
  { value: "$800M+", label: "Capital Raised" },
  { value: "12", label: "Unicorns" },
];

const challenges = [
  {
    icon: Shield,
    title: "Regulatory Complexity",
    description: "We help you clearly communicate compliance strategies and risk mitigation to institutional investors.",
  },
  {
    icon: Zap,
    title: "Technical Differentiation",
    description: "Translate complex technology into compelling value propositions that investors understand.",
  },
  {
    icon: BarChart3,
    title: "Market Validation",
    description: "Present TAM/SAM/SOM analysis and competitive positioning with credibility and clarity.",
  },
];

const caseStudies = [
  {
    company: "PayFlow",
    round: "Series B",
    amount: "$45M",
    description: "B2B payments platform that simplified complex enterprise workflows",
  },
  {
    company: "CryptoVault",
    round: "Series A",
    amount: "$18M",
    description: "Institutional-grade crypto custody solution",
  },
];

export default function FintechIndustryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-dark min-h-[70vh] flex items-center pt-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/10 text-white text-sm rounded-full mb-6">
              Industry Solutions
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Fintech Pitch Decks
              <span className="block text-gray-400">That Win Investors</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              We understand the unique challenges fintech startups face. From regulatory 
              complexity to technical differentiation, we help you tell a compelling story 
              that resonates with institutional investors.
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

      {/* Stats */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl lg:text-4xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Fintech-Specific Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges fintech founders face when pitching to investors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((item) => (
              <div key={item.title} className="card-shadow p-6 lg:p-8">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                What We Deliver
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Regulatory Storytelling</h3>
                    <p className="text-gray-600 text-sm">
                      Clear communication of compliance strategies, licenses, and risk management
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Technical Translation</h3>
                    <p className="text-gray-600 text-sm">
                      Complex tech made accessible to non-technical investors
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Financial Models</h3>
                    <p className="text-gray-600 text-sm">
                      Unit economics and projections that fintech investors trust
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Market Analysis</h3>
                    <p className="text-gray-600 text-sm">
                      Competitive landscape and regulatory environment context
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg">Fintech Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Recent Successes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <div key={study.company} className="card-shadow p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-black">{study.company}</h3>
                  <span className="text-2xl font-bold text-black">{study.amount}</span>
                </div>
                <p className="text-gray-500 text-sm mb-2">{study.round}</p>
                <p className="text-gray-600">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA
        title="Ready to Raise Your Fintech Round?"
        description="Let's create a pitch deck that communicates your vision and secures funding."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
      />
    </>
  );
}
