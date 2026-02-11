import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Building2, TrendingUp, Landmark, CreditCard, Rocket, Home, Monitor, UtensilsCrossed, Cloud, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries | Happy Pitch',
  description: 'Specialized pitch deck and presentation services for pharma, biotech, private equity, venture capital, SaaS, and more.',
};

const industries = [
  {
    slug: 'pharma',
    title: 'Pharma',
    subtitle: 'Powering pharma narratives that move markets',
    description: 'From clinical-stage biotechs to global pharma giants, we craft investor materials that articulate the science and commercial strategy.',
    icon: Building2,
  },
  {
    slug: 'biotech',
    title: 'Biotech',
    subtitle: 'Translating breakthroughs into bankable stories',
    description: 'Balance scientific rigor with investment appeal. Pitch decks that communicate technology platforms and clinical progress.',
    icon: TrendingUp,
  },
  {
    slug: 'private-equity',
    title: 'Private Equity',
    subtitle: 'Deal materials that win LP commitments',
    description: 'Institutional-grade materials that convey track record, strategy, and operational value creation.',
    icon: Landmark,
  },
  {
    slug: 'private-credit',
    title: 'Private Credit',
    subtitle: 'Credit strategies, clearly communicated',
    description: 'Materials that articulate risk-adjusted returns, underwriting discipline, and portfolio construction.',
    icon: CreditCard,
  },
  {
    slug: 'venture-capital',
    title: 'Venture Capital',
    subtitle: 'Fundraising materials for the next generation',
    description: 'Communicate thesis, team, and track record with the clarity and energy that LPs expect.',
    icon: Rocket,
  },
  {
    slug: 'family-office',
    title: 'Family Office',
    subtitle: 'Sophisticated materials for sophisticated capital',
    description: 'Bespoke presentations that reflect strategic sophistication and long-term perspective.',
    icon: Home,
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    subtitle: 'Pitch the future with clarity and conviction',
    description: 'Articulate complex technology roadmaps, market disruption potential, and scalable business models.',
    icon: Monitor,
  },
  {
    slug: 'food-beverages',
    title: 'Food & Beverages',
    subtitle: 'From farm to fund, we tell the story',
    description: 'Showcase brand strength, distribution strategy, and growth potential with compelling materials.',
    icon: UtensilsCrossed,
  },
  {
    slug: 'saas',
    title: 'SaaS',
    subtitle: 'Metrics-driven decks that close rounds',
    description: 'Investor presentations that showcase ARR growth, retention curves, and unit economics.',
    icon: Cloud,
  },
  {
    slug: 'cpg',
    title: 'CPG',
    subtitle: 'Consumer brands, institutional-grade storytelling',
    description: 'Blend brand energy with financial substance. Materials that resonate with investors and retail buyers.',
    icon: ShoppingBag,
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Industries
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Specialized Expertise Across Every Sector
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Deep industry knowledge meets world-class design. We understand the nuances 
              of your market and create materials that speak the language of your investors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-gray-300 transition-all overflow-hidden"
                >
                  <div className="relative">
                    <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors">
                      <Icon className="w-7 h-7 text-gray-700" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {industry.title}
                    </h3>
                    
                    <p className="text-sm font-medium text-gray-500 mb-4">
                      {industry.subtitle}
                    </p>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-gray-900 font-medium group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">$100B+</div>
              <div className="text-gray-400">Capital Raised</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Deals Closed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Do not see your industry?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                We work with clients across all sectors. Let us discuss how we can help 
                tell your story, regardless of your industry.
              </p>
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Get in Touch
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
