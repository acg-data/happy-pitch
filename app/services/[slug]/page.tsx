import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowLeft, Check, FileText, Presentation, TrendingUp, Building2, Briefcase } from 'lucide-react';
import HowWeHelp from '../../sections/HowWeHelp';
import WhyChooseUs from '../../sections/WhyChooseUs';

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  useCases: string[];
  deliverables: string[];
  ctaText: string;
  relatedIndustries: string[];
  howWeHelpTitle?: string;
  howWeHelpSubtitle?: string;
  whyChooseTitle?: string;
  whyChooseSubtitle?: string;
}

const serviceData: Record<string, ServiceData> = {
  'corporate-presentation': {
    title: 'Corporate Presentations',
    subtitle: 'Board-ready decks that command attention.',
    description: 'From annual shareholder meetings to strategic board presentations, we create corporate materials that communicate your vision, performance, and strategy with institutional-grade clarity. Our presentations blend executive storytelling with data visualization to ensure your message resonates with directors, investors, and stakeholders.',
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    features: [
      'Executive summary design with key metrics',
      'Financial performance visualization',
      'Strategic roadmap graphics',
      'Competitive landscape analysis',
      'ESG and sustainability reporting',
    ],
    useCases: [
      'Annual shareholder presentations',
      'Board of directors meetings',
      'Strategic planning sessions',
      'Executive town halls',
      'Analyst day presentations',
    ],
    deliverables: [
      'Full presentation deck (15-40 slides)',
      'Executive summary one-pager',
      'Appendix with detailed data',
      'Speaker notes and talking points',
      'Custom graphics and icons',
    ],
    ctaText: 'Build Your Corporate Presentation',
    relatedIndustries: ['private-equity', 'venture-capital', 'family-office'],
    howWeHelpTitle: 'How We Build Corporate Presentations',
    howWeHelpSubtitle: 'A proven process designed to deliver board-ready materials that command attention.',
    whyChooseTitle: 'Why Choose Us for Corporate Presentations',
    whyChooseSubtitle: 'What sets us apart when creating materials for boards, investors, and stakeholders.',
  },
  'pitch-decks': {
    title: 'Pitch Decks',
    subtitle: 'Fundraising materials that close rounds.',
    description: 'Whether you are raising Series A or Series E, our pitch decks tell your equity story with the precision and impact that investors expect. We understand what VCs and growth equity firms look for and structure your narrative to highlight traction, market opportunity, and team strength.',
    icon: <Presentation className="w-12 h-12 text-purple-600" />,
    features: [
      'Problem-solution framework',
      'Market size and opportunity analysis',
      'Traction and growth metrics',
      'Business model visualization',
      'Team and advisory board highlights',
    ],
    useCases: [
      'Seed and Series A fundraising',
      'Series B-D growth rounds',
      'Strategic investor presentations',
      'Demo day materials',
      'Follow-on investment decks',
    ],
    deliverables: [
      'Investor pitch deck (10-15 slides)',
      'Appendix with supporting data',
      'Financial model visualization',
      'Competitive matrix',
      'One-page executive summary',
    ],
    ctaText: 'Build Your Pitch Deck',
    relatedIndustries: ['saas', 'biotech', 'venture-capital', 'digital-transformation'],
    howWeHelpTitle: 'How We Build Pitch Decks',
    howWeHelpSubtitle: 'A battle-tested process that has helped raise over $100M in funding.',
    whyChooseTitle: 'Why Choose Us for Pitch Decks',
    whyChooseSubtitle: 'What makes our pitch decks stand out in crowded investor inboxes.',
  },
  'investor-memos': {
    title: 'Investor Memos',
    subtitle: 'Compelling narratives for sophisticated capital.',
    description: 'Investment memos are the foundation of institutional fundraising. We craft memos that articulate your thesis, demonstrate track record, and build confidence with LPs. Our memos combine rigorous analysis with accessible storytelling to meet the standards of the most discerning investors.',
    icon: <FileText className="w-12 h-12 text-emerald-600" />,
    features: [
      'Investment thesis articulation',
      'Track record analysis',
      'Strategy and methodology overview',
      'Risk management framework',
      'Team credentials and expertise',
    ],
    useCases: [
      'Fund I fundraising',
      'Fund II-V marketing',
      'Co-investment opportunities',
      'Strategic LP communications',
      'Secondary transactions',
    ],
    deliverables: [
      'Full investment memo (20-30 pages)',
      'Executive summary',
      'Performance track record tables',
      'Strategy visualization',
      'Due diligence questionnaire responses',
    ],
    ctaText: 'Build Your Investor Memo',
    relatedIndustries: ['private-equity', 'private-credit', 'venture-capital', 'family-office'],
    howWeHelpTitle: 'How We Build Investor Memos',
    howWeHelpSubtitle: 'A rigorous process that creates memos worthy of sophisticated institutional capital.',
    whyChooseTitle: 'Why Choose Us for Investor Memos',
    whyChooseSubtitle: 'What makes our memos resonate with the most discerning limited partners.',
  },
  'cims': {
    title: 'CIMs',
    subtitle: 'Confidential Information Memorandums that drive deals.',
    description: 'The CIM is your company is story in its most comprehensive form. We create CIMs that present your business opportunity with the depth and polish that strategic and financial buyers expect. From financial history to growth levers, every section is crafted to build value and drive competitive tension.',
    icon: <Briefcase className="w-12 h-12 text-amber-600" />,
    features: [
      'Business overview and history',
      'Market and industry analysis',
      'Financial performance and projections',
      'Management team profiles',
      'Growth opportunities and strategic initiatives',
    ],
    useCases: [
      'Sell-side M&A processes',
      'Private equity exits',
      'Strategic buyer outreach',
      'Management buyouts',
      'Recapitalizations',
    ],
    deliverables: [
      'Full CIM (40-60 pages)',
      'Executive summary',
      'Financial model and projections',
      'Customer and contract analysis',
      'Risk factors and mitigation',
    ],
    ctaText: 'Build Your CIM',
    relatedIndustries: ['private-equity', 'biotech', 'saas', 'cpg'],
    howWeHelpTitle: 'How We Build CIMs',
    howWeHelpSubtitle: 'A comprehensive process that creates CIMs worthy of premium valuations.',
    whyChooseTitle: 'Why Choose Us for CIMs',
    whyChooseSubtitle: 'What makes our CIMs stand out to strategic and financial buyers.',
  },
  'sales-decks': {
    title: 'Sales Decks',
    subtitle: 'Enterprise materials that win deals.',
    description: 'B2B sales requires materials that speak to multiple stakeholders and address complex buying processes. We create sales decks that articulate value proposition, demonstrate ROI, and overcome objections. From first call to board presentation, our decks help you advance deals faster.',
    icon: <TrendingUp className="w-12 h-12 text-rose-600" />,
    features: [
      'Value proposition framework',
      'ROI and business case calculators',
      'Product/solution visualization',
      'Case study integration',
      'Competitive differentiation',
    ],
    useCases: [
      'Enterprise sales cycles',
      'Product launches',
      'Channel partner enablement',
      'Sales training materials',
      'Conference and event presentations',
    ],
    deliverables: [
      'Master sales deck (20-30 slides)',
      'Modular slide library',
      'One-page leave-behinds',
      'ROI calculator templates',
      'Email follow-up templates',
    ],
    ctaText: 'Build Your Sales Deck',
    relatedIndustries: ['saas', 'digital-transformation', 'food-beverages', 'cpg'],
    howWeHelpTitle: 'How We Build Sales Decks',
    howWeHelpSubtitle: 'A buyer-centric process that creates materials that advance deals faster.',
    whyChooseTitle: 'Why Choose Us for Sales Decks',
    whyChooseSubtitle: 'What makes our sales decks convert prospects into customers.',
  },
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = serviceData[params.slug];
  return {
    title: `${service?.title || 'Service'} | Happy Pitch`,
    description: service?.subtitle || 'Professional presentation services',
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = serviceData[params.slug];

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <div className="mb-6">{service.icon}</div>
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
              {service.title}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {service.subtitle}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <HowWeHelp 
        title={service.howWeHelpTitle}
        subtitle={service.howWeHelpSubtitle}
      />

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Key Features */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Common Use Cases</h2>
              <ul className="space-y-4">
                {service.useCases.map((useCase, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-3.5 h-3.5 text-purple-600" />
                    </div>
                    <span className="text-gray-700">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">What You Get</h2>
              <ul className="space-y-4">
                {service.deliverables.map((deliverable, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs 
        title={service.whyChooseTitle}
        subtitle={service.whyChooseSubtitle}
      />

      {/* Related Industries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Popular With These Industries
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.relatedIndustries.map((industry) => (
              <Link
                key={industry}
                href={`/industries/${industry}`}
                className="px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700 hover:border-purple-600 hover:text-purple-600 transition-colors"
              >
                {industry.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s build a {service.title.toLowerCase()} that drives results and wins over your audience.
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            {service.ctaText}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
