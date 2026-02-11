import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  Presentation, 
  FileText, 
  Briefcase, 
  TrendingUp, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Happy Pitch',
  description: 'Professional presentation and pitch deck services for corporate, fundraising, M&A, and sales.',
};

const services = [
  {
    slug: 'corporate-presentation',
    title: 'Corporate Presentations',
    subtitle: 'Board-ready decks that command attention',
    description: 'Annual shareholder presentations, strategic board decks, and executive communications with institutional-grade polish.',
    icon: Building2,
    color: 'blue',
  },
  {
    slug: 'pitch-decks',
    title: 'Pitch Decks',
    subtitle: 'Fundraising materials that close rounds',
    description: 'Investor-ready pitch decks for Series A through Series E that articulate your equity story with clarity and impact.',
    icon: Presentation,
    color: 'purple',
  },
  {
    slug: 'investor-memos',
    title: 'Investor Memos',
    subtitle: 'Compelling narratives for sophisticated capital',
    description: 'Investment memos that articulate your thesis, demonstrate track record, and build confidence with LPs.',
    icon: FileText,
    color: 'emerald',
  },
  {
    slug: 'cims',
    title: 'CIMs',
    subtitle: 'Confidential Information Memorandums that drive deals',
    description: 'Comprehensive sell-side materials that present your business opportunity with depth, polish, and strategic insight.',
    icon: Briefcase,
    color: 'amber',
  },
  {
    slug: 'sales-decks',
    title: 'Sales Decks',
    subtitle: 'Enterprise materials that win deals',
    description: 'B2B sales presentations that articulate value proposition, demonstrate ROI, and accelerate complex buying cycles.',
    icon: TrendingUp,
    color: 'rose',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200' },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Presentation Services That Drive Results
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              From corporate boardrooms to investor meetings, we craft presentations that communicate 
              your vision with clarity, credibility, and impact. Every deck is built to win.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const colors = colorClasses[service.color];
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all hover:border-purple-300"
                >
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-purple-600 font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven process designed to deliver exceptional results, on time and on brand.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive into your business, goals, and audience' },
              { step: '02', title: 'Strategy', desc: 'Develop narrative framework and key messaging' },
              { step: '03', title: 'Design', desc: 'Create visuals that bring your story to life' },
              { step: '04', title: 'Refine', desc: 'Iterate based on feedback until perfect' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-bold text-purple-200 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Schedule a consultation and we will help you identify the right solution for your goals.
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Schedule a Consultation
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
