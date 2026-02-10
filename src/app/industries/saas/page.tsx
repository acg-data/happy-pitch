import { ChevronRight, Cloud, Users, BarChart3, Zap } from "lucide-react";
import { FooterCTA } from "@/components/shared/FooterCTA";

const stats = [
  { value: "200+", label: "SaaS Decks Created" },
  { value: "$1.2B+", label: "Capital Raised" },
  { value: "8", label: "Unicorns" },
];

const challenges = [
  {
    icon: Users,
    title: "Customer Acquisition",
    description: "We help you articulate your go-to-market strategy and customer acquisition metrics with clarity.",
  },
  {
    icon: BarChart3,
    title: "Unit Economics",
    description: "Present LTV/CAC ratios, payback periods, and other SaaS metrics that investors scrutinize.",
  },
  {
    icon: Zap,
    title: "Product-Market Fit",
    description: "Demonstrate traction, retention, and product-market fit through compelling data storytelling.",
  },
];

const caseStudies = [
  {
    company: "CloudSync",
    round: "Series A",
    amount: "$22M",
    description: "Enterprise data synchronization platform with 99.9% uptime SLA",
  },
  {
    company: "TaskFlow",
    round: "Series B",
    amount: "$35M",
    description: "Workflow automation tool adopted by 10,000+ teams worldwide",
  },
];

export default function SaaSIndustryPage() {
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
              SaaS Pitch Decks
              <span className="block text-gray-400">Built for Scale</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              SaaS investors expect specific metrics and a clear path to scale. 
              We help you present your MRR, retention, and growth strategy in 
              a way that gets term sheets signed.
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
              SaaS-Specific Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand the metrics and narratives that SaaS investors want to see
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
                Metrics That Matter
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">ARR & MRR Visualization</h3>
                    <p className="text-gray-600 text-sm">
                      Clear presentation of recurring revenue trends and growth rates
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Retention Analysis</h3>
                    <p className="text-gray-600 text-sm">
                      Logo and revenue retention metrics that demonstrate stickiness
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Unit Economics</h3>
                    <p className="text-gray-600 text-sm">
                      LTV, CAC, and payback period analysis with benchmarks
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Market Positioning</h3>
                    <p className="text-gray-600 text-sm">
                      Competitive differentiation and category creation narratives
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Cloud className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg">SaaS Metrics</p>
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
        title="Ready to Scale Your SaaS?"
        description="Let's create a pitch deck that showcases your metrics and growth story."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
      />
    </>
  );
}
