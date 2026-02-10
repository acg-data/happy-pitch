import { ChevronRight, Heart, Shield, Users, Activity } from "lucide-react";
import { FooterCTA } from "@/components/shared/FooterCTA";

const stats = [
  { value: "75+", label: "Healthcare Decks Created" },
  { value: "$500M+", label: "Capital Raised" },
  { value: "5", label: "Unicorns" },
];

const challenges = [
  {
    icon: Shield,
    title: "HIPAA & Compliance",
    description: "Navigate complex healthcare regulations and demonstrate robust compliance frameworks.",
  },
  {
    icon: Users,
    title: "Stakeholder Complexity",
    description: "Address the needs of patients, providers, payers, and regulators in your story.",
  },
  {
    icon: Activity,
    title: "Clinical Validation",
    description: "Present outcomes data, clinical studies, and efficacy metrics with credibility.",
  },
];

const caseStudies = [
  {
    company: "MediConnect",
    round: "Series A",
    amount: "$18M",
    description: "HIPAA-compliant telehealth platform for rural healthcare providers",
  },
  {
    company: "BioTrack",
    round: "Series B",
    amount: "$42M",
    description: "AI-powered diagnostics platform with FDA breakthrough device designation",
  },
];

export default function HealthcareIndustryPage() {
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
              Healthcare Pitch Decks
              <span className="block text-gray-400">That Build Trust</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Healthcare investors need to see regulatory expertise, clinical validation, 
              and clear paths to market. We help you communicate complex healthcare 
              innovation in a way that builds investor confidence.
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
              Healthcare-Specific Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges of healthcare innovation fundraising
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
                    <h3 className="font-bold text-black mb-1">Regulatory Roadmap</h3>
                    <p className="text-gray-600 text-sm">
                      Clear FDA, HIPAA, and compliance strategies with timelines
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Clinical Data Visualization</h3>
                    <p className="text-gray-600 text-sm">
                      Outcomes, efficacy metrics, and study results presented clearly
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Market Access Strategy</h3>
                    <p className="text-gray-600 text-sm">
                      Reimbursement pathways and payer engagement approaches
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Stakeholder Mapping</h3>
                    <p className="text-gray-600 text-sm">
                      Understanding the complex healthcare ecosystem and decision makers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg">Healthcare Solutions</p>
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
        title="Ready to Transform Healthcare?"
        description="Let's create a pitch deck that communicates your vision and builds investor trust."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
      />
    </>
  );
}
