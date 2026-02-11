import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, TrendingUp, Landmark, CreditCard, Rocket, Home, Monitor, UtensilsCrossed, Cloud, ShoppingBag, ChevronRight } from 'lucide-react';

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
    color: 'blue',
  },
  {
    slug: 'biotech',
    title: 'Biotech',
    subtitle: 'Translating breakthroughs into bankable stories',
    description: 'Balance scientific rigor with investment appeal. Pitch decks that communicate technology platforms and clinical progress.',
    icon: TrendingUp,
    color: 'emerald',
  },
  {
    slug: 'private-equity',
    title: 'Private Equity',
    subtitle: 'Deal materials that win LP commitments',
    description: 'Institutional-grade materials that convey track record, strategy, and operational value creation.',
    icon: Landmark,
    color: 'slate',
  },
  {
    slug: 'private-credit',
    title: 'Private Credit',
    subtitle: 'Credit strategies, clearly communicated',
    description: 'Materials that articulate risk-adjusted returns, underwriting discipline, and portfolio construction.',
    icon: CreditCard,
    color: 'indigo',
  },
  {
    slug: 'venture-capital',
    title: 'Venture Capital',
    subtitle: 'Fundraising materials for the next generation',
    description: 'Communicate thesis, team, and track record with the clarity and energy that LPs expect.',
    icon: Rocket,
    color: 'purple',
  },
  {
    slug: 'family-office',
    title: 'Family Office',
    subtitle: 'Sophisticated materials for sophisticated capital',
    description: 'Bespoke presentations that reflect strategic sophistication and long-term perspective.',
    icon: Home,
    color: 'amber',
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    subtitle: 'Pitch the future with clarity and conviction',
    description: 'Articulate complex technology roadmaps, market disruption potential, and scalable business models.',
    icon: Monitor,
    color: 'cyan',
  },
  {
    slug: 'food-beverages',
    title: 'Food & Beverages',
    subtitle: 'From farm to fund, we tell the story',
    description: 'Showcase brand strength, distribution strategy, and growth potential with compelling materials.',
    icon: UtensilsCrossed,
    color: 'orange',
  },
  {
    slug: 'saas',
    title: 'SaaS',
    subtitle: 'Metrics-driven decks that close rounds',
    description: 'Investor presentations that showcase ARR growth, retention curves, and unit economics.',
    icon: Cloud,
    color: 'sky',
  },
  {
    slug: 'cpg',
    title: 'CPG',
    subtitle: 'Consumer brands, institutional-grade storytelling',
    description: 'Blend brand energy with financial substance. Materials that resonate with investors and retail buyers.',
    icon: ShoppingBag,
    color: 'rose',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  blue: { 
    bg: 'bg-blue-50', 
    text: 'text-blue-600', 
    border: 'border-blue-200',
    gradient: 'from-blue-500 to-blue-600'
  },
  emerald: { 
    bg: 'bg-emerald-50', 
    text: 'text-emerald-600', 
    border: 'border-emerald-200',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  slate: { 
    bg: 'bg-slate-50', 
    text: 'text-slate-600', 
    border: 'border-slate-200',
    gradient: 'from-slate-500 to-slate-600'
  },
  indigo: { 
    bg: 'bg-indigo-50', 
    text: 'text-indigo-600', 
    border: 'border-indigo-200',
    gradient: 'from-indigo-500 to-indigo-600'
  },
  purple: { 
    bg: 'bg-purple-50', 
    text: 'text-purple-600', 
    border: 'border-purple-200',
    gradient: 'from-purple-500 to-purple-600'
  },
  amber: { 
    bg: 'bg-amber-50', 
    text: 'text-amber-600', 
    border: 'border-amber-200',
    gradient: 'from-amber-500 to-amber-600'
  },
  cyan: { 
    bg: 'bg-cyan-50', 
    text: 'text-cyan-600', 
    border: 'border-cyan-200',
    gradient: 'from-cyan-500 to-cyan-600'
  },
  orange: { 
    bg: 'bg-orange-50', 
    text: 'text-orange-600', 
    border: 'border-orange-200',
    gradient: 'from-orange-500 to-orange-600'
  },
  sky: { 
    bg: 'bg-sky-50', 
    text: 'text-sky-600', 
    border: 'border-sky-200',
    gradient: 'from-sky-500 to-sky-600'
  },
  rose: { 
    bg: 'bg-rose-50', 
    text: 'text-rose-600', 
    border: 'border-rose-200',
    gradient: 'from-rose-500 to-rose-600'
  },
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
              Industries
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Specialized Expertise Across{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Every Sector
              </span>
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
              const colors = colorClasses[industry.color];
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all hover:border-purple-200 overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {industry.title}
                    </h3>
                    
                    <p className={`text-sm font-medium ${colors.text} mb-4`}>
                      {industry.subtitle}
                    </p>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-purple-600 font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Do not see your industry?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
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
