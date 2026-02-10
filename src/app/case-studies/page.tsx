import { ChevronRight, ArrowUpRight } from "lucide-react";
import { FooterCTA } from "@/components/shared/FooterCTA";

const caseStudies = [
  {
    company: "TechFlow",
    industry: "SaaS",
    round: "Series A",
    amount: "$12M",
    description: "Helped a B2B workflow automation platform secure Series A funding with a complete deck redesign and financial model.",
    tags: ["SaaS", "Series A", "Workflow"],
  },
  {
    company: "DataSync",
    industry: "Data Infrastructure",
    round: "Seed",
    amount: "$2.5M",
    description: "Created a compelling narrative for a data synchronization platform targeting enterprise customers.",
    tags: ["Data", "Enterprise", "Seed"],
  },
  {
    company: "CloudBase",
    industry: "Cloud Computing",
    round: "Series B",
    amount: "$45M",
    description: "Redesigned pitch materials for a cloud infrastructure company expanding into international markets.",
    tags: ["Cloud", "Series B", "Global"],
  },
  {
    company: "MediConnect",
    industry: "Healthcare",
    round: "Series A",
    amount: "$8M",
    description: "Developed investor materials for a healthcare communication platform focusing on HIPAA compliance.",
    tags: ["Healthcare", "HIPAA", "Series A"],
  },
  {
    company: "FinFlow",
    industry: "Fintech",
    round: "Seed",
    amount: "$3.2M",
    description: "Helped a fintech startup simplify complex financial products into an investor-friendly story.",
    tags: ["Fintech", "Payments", "Seed"],
  },
  {
    company: "GreenEnergy",
    industry: "CleanTech",
    round: "Series A",
    amount: "$15M",
    description: "Created impact-focused materials for a renewable energy company targeting ESG investors.",
    tags: ["CleanTech", "ESG", "Series A"],
  },
];

const filters = ["All", "SaaS", "Fintech", "Healthcare", "Data", "Cloud", "CleanTech"];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-dark min-h-[60vh] flex items-center pt-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Success Stories from
              <span className="block text-gray-400">500+ Founders</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              See how we&apos;ve helped startups across industries secure funding 
              and achieve their fundraising goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-pill-white">
                Start Your Project
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
              <a href="/solutions" className="btn-pill-outline-white">
                View Services
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 text-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm text-gray-400">Decks Created</p>
            </div>
            <div>
              <p className="text-3xl font-bold">$2B+</p>
              <p className="text-sm text-gray-400">Capital Raised</p>
            </div>
            <div>
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm text-gray-400">Unicorns</p>
            </div>
            <div>
              <p className="text-3xl font-bold">98%</p>
              <p className="text-sm text-gray-400">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === "All"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.company}
                className="card-shadow p-6 lg:p-8 group hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-sm text-gray-500">{study.industry}</span>
                    <h3 className="text-xl font-bold text-black">{study.company}</h3>
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold text-black">{study.amount}</span>
                  <span className="text-sm text-gray-500">{study.round}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Proven Results Across Industries
              </h2>
              <p className="text-gray-600 mb-8">
                Our clients have successfully raised funding across every major industry 
                and funding stage. From pre-seed to Series C and beyond, we understand 
                what investors are looking for in each phase.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-gray-700">Average 40% higher response rates from investors</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-gray-700">3x faster fundraising cycles</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-gray-700">15 companies reached unicorn status</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-lg">Results Visualization</p>
                <p className="text-sm">Charts or infographics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA
        title="Ready to Join Our Success Stories?"
        description="Let's create a pitch deck that helps you secure the funding you need."
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
      />
    </>
  );
}
