import { ChevronRight, BookOpen, Video, FileText, Download, ArrowUpRight } from "lucide-react";
import { FooterCTA } from "@/components/shared/FooterCTA";

const resources = [
  {
    icon: BookOpen,
    title: "The Ultimate Pitch Deck Guide",
    description: "Everything you need to know about creating a winning pitch deck, from structure to design.",
    type: "Guide",
    readTime: "15 min read",
  },
  {
    icon: FileText,
    title: "10 Pitch Deck Templates",
    description: "Ready-to-use templates for different industries and funding stages.",
    type: "Templates",
    readTime: "Download",
  },
  {
    icon: Video,
    title: "Pitch Deck Masterclass",
    description: "Video course covering the fundamentals of great pitch deck design and storytelling.",
    type: "Course",
    readTime: "2 hours",
  },
  {
    icon: Download,
    title: "Financial Model Template",
    description: "A startup-friendly financial model that investors actually understand.",
    type: "Template",
    readTime: "Download",
  },
  {
    icon: BookOpen,
    title: "Investor Psychology 101",
    description: "Understanding what investors look for and how to position your startup.",
    type: "Article",
    readTime: "8 min read",
  },
  {
    icon: FileText,
    title: "The Startup Funding Playbook",
    description: "A comprehensive guide to raising capital from seed to Series B.",
    type: "Guide",
    readTime: "25 min read",
  },
];

const categories = ["All", "Guides", "Templates", "Courses", "Articles"];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-dark min-h-[60vh] flex items-center pt-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Free Resources for
              <span className="block text-gray-400">Founders</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Guides, templates, and tools to help you create better pitch decks 
              and raise funding with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#resources" className="btn-pill-white">
                Browse Resources
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
              <a href="/contact" className="btn-pill-outline-white">
                Get Custom Help
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section id="resources" className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="card-shadow p-6 lg:p-8 group hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-black" />
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.readTime}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Get Resources in Your Inbox
            </h2>
            <p className="text-gray-600 mb-8">
              Join 10,000+ founders receiving weekly pitch deck tips, fundraising advice, and exclusive resources.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors"
              />
              <button type="submit" className="btn-pill-primary whitespace-nowrap">
                Subscribe
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA
        title="Need Personalized Help?"
        description="Our team can create custom resources tailored to your specific industry and stage."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/solutions"
      />
    </>
  );
}
