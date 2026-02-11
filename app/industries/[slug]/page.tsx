import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface IndustryData {
    title: string;
    subtitle: string;
    description: string;
    services: string[];
    challenges: string[];
    ctaText: string;
}

const industryData: Record<string, IndustryData> = {
    pharma: {
        title: 'Pharma',
        subtitle: 'Powering pharma narratives that move markets.',
        description:
            'From clinical-stage biotechs to global pharma giants, we craft investor materials that articulate the science, the market opportunity, and the commercial strategy with precision. Our team understands regulatory milestones, pipeline dynamics, and the language that resonates with healthcare-focused investors.',
        services: [
            'Pipeline & Clinical Data Visualization',
            'Regulatory Milestone Roadmaps',
            'Commercial Launch Strategy Decks',
            'Investor Day Presentations',
        ],
        challenges: [
            'Simplifying complex MOA and clinical data for investors',
            'Communicating regulatory paths and timelines clearly',
            'Positioning pipeline value against competitive therapies',
            'Bridging the gap between science and investment thesis',
        ],
        ctaText: 'Build Your Pharma Deck',
    },
    biotech: {
        title: 'Biotech',
        subtitle: 'Translating breakthroughs into bankable stories.',
        description:
            'Biotech companies need materials that balance scientific rigor with investment appeal. We specialize in creating pitch decks, investor presentations, and fundraising materials that communicate your technology platform, clinical progress, and addressable market with clarity and impact.',
        services: [
            'Series A–D Fundraising Decks',
            'Platform Technology Overviews',
            'Scientific Advisory Board Materials',
            'IPO Roadshow Presentations',
        ],
        challenges: [
            'Making cutting-edge science accessible to generalist investors',
            'Quantifying TAM for novel therapeutic approaches',
            'Building credibility for pre-revenue stage companies',
            'Presenting competitive differentiation in crowded indications',
        ],
        ctaText: 'Build Your Biotech Deck',
    },
    'private-equity': {
        title: 'Private Equity',
        subtitle: 'Deal materials that win LP commitments.',
        description:
            'Private equity firms need polished, institutional-grade materials that convey track record, strategy, and operational value creation. We produce fund marketing materials, deal books, and portfolio reviews that meet the exacting standards of institutional LPs and placement agents.',
        services: [
            'Fund Marketing & PPM Support',
            'Deal Book & CIM Design',
            'Portfolio Company Reviews',
            'Annual Meeting Presentations',
        ],
        challenges: [
            'Articulating differentiated value creation strategies',
            'Presenting complex fund structures and waterfalls',
            'Showcasing track record with institutional-grade data',
            'Meeting tight deal timelines without sacrificing quality',
        ],
        ctaText: 'Build Your PE Deck',
    },
    'private-credit': {
        title: 'Private Credit',
        subtitle: 'Credit strategies, clearly communicated.',
        description:
            'Private credit managers need materials that clearly articulate risk-adjusted returns, underwriting discipline, and portfolio construction. We create presentations that instill confidence in LPs by combining financial precision with compelling visual storytelling.',
        services: [
            'Credit Fund Marketing Materials',
            'Deal-by-Deal Attribution Visuals',
            'Risk Management Framework Decks',
            'Investor Quarterly Reports',
        ],
        challenges: [
            'Visualizing complex credit structures and covenants',
            'Presenting risk-return profiles with nuance',
            'Differentiating in a competitive direct lending market',
            'Communicating downside protection strategies',
        ],
        ctaText: 'Build Your Credit Deck',
    },
    'venture-capital': {
        title: 'Venture Capital',
        subtitle: 'Fundraising materials for the next generation.',
        description:
            'Whether you\'re raising your first fund or your fifth, we help VC firms create materials that communicate thesis, team, and track record with the clarity and energy that LPs expect. Our decks are designed to stand out in a crowded fundraising market.',
        services: [
            'Fund I–V Fundraising Decks',
            'Thesis & Market Map Visuals',
            'Portfolio Showcase Materials',
            'LP Meeting & Data Room Prep',
        ],
        challenges: [
            'Articulating thesis conviction with supporting data',
            'Presenting early-stage portfolio with limited financials',
            'Standing out in a saturated fundraising environment',
            'Balancing narrative storytelling with institutional rigor',
        ],
        ctaText: 'Build Your VC Deck',
    },
    'family-office': {
        title: 'Family Office',
        subtitle: 'Sophisticated materials for sophisticated capital.',
        description:
            'Family offices demand discretion, precision, and a deep understanding of multi-asset strategies. We create bespoke presentations and reports that reflect the strategic sophistication and long-term perspective that define family office investing.',
        services: [
            'Investment Committee Presentations',
            'Multi-Asset Allocation Reviews',
            'Co-Investment Opportunity Decks',
            'Succession & Governance Materials',
        ],
        challenges: [
            'Balancing discretion with transparency',
            'Presenting diverse asset class exposures cohesively',
            'Communicating long-term value creation strategies',
            'Meeting the high aesthetic standards of UHNW clients',
        ],
        ctaText: 'Build Your Family Office Deck',
    },
    'digital-transformation': {
        title: 'Digital Transformation',
        subtitle: 'Pitch the future with clarity and conviction.',
        description:
            'Digital transformation companies need to articulate complex technology roadmaps, market disruption potential, and scalable business models. We create presentations that bridge technical depth with business impact, helping you win over investors and enterprise clients.',
        services: [
            'Technology Roadmap Visualization',
            'Enterprise Sales Presentations',
            'Board & Investor Update Decks',
            'Market Disruption Narratives',
        ],
        challenges: [
            'Making abstract technology concepts tangible',
            'Quantifying ROI for digital initiatives',
            'Bridging the gap between technical and business audiences',
            'Positioning against incumbent and emerging competitors',
        ],
        ctaText: 'Build Your DX Deck',
    },
    'food-beverages': {
        title: 'Food & Beverages',
        subtitle: 'From farm to fund, we tell the story.',
        description:
            'The food and beverage industry demands materials that showcase brand strength, distribution strategy, and growth potential. We help F&B companies create compelling investor and retail presentations that capture the energy and ambition of the category.',
        services: [
            'Brand Story & Growth Decks',
            'Distribution Strategy Visuals',
            'Retail Buyer Presentations',
            'Fundraising & M&A Materials',
        ],
        challenges: [
            'Communicating brand differentiation in crowded categories',
            'Visualizing complex supply chain and distribution networks',
            'Presenting unit economics for DTC and wholesale channels',
            'Balancing lifestyle branding with financial substance',
        ],
        ctaText: 'Build Your F&B Deck',
    },
    saas: {
        title: 'SaaS',
        subtitle: 'Metrics-driven decks that close rounds.',
        description:
            'SaaS companies live and die by their metrics. We create investor presentations that showcase ARR growth, retention curves, and unit economics with the clarity and sophistication that top-tier VCs and growth equity firms expect. Every chart tells a story.',
        services: [
            'Series A–D Fundraising Decks',
            'Metrics Dashboard Visualization',
            'Product Demo & Sales Decks',
            'Board Meeting Materials',
        ],
        challenges: [
            'Presenting SaaS metrics in the most compelling format',
            'Differentiating in a crowded software market',
            'Communicating product-market fit with data',
            'Balancing growth narrative with path to profitability',
        ],
        ctaText: 'Build Your SaaS Deck',
    },
    cpg: {
        title: 'CPG',
        subtitle: 'Consumer brands, institutional-grade storytelling.',
        description:
            'Consumer packaged goods companies need materials that blend brand energy with financial substance. We create presentations that communicate market opportunity, retail traction, and brand velocity in a way that resonates with both investors and retail buyers.',
        services: [
            'Investor Pitch Decks',
            'Retail Buyer Line Reviews',
            'Category & Market Sizing Analysis',
            'Brand Portfolio Overviews',
        ],
        challenges: [
            'Translating consumer insights into investment thesis',
            'Visualizing omnichannel distribution strategies',
            'Presenting scan data and velocities compellingly',
            'Building credibility with blue-chip retail buyers',
        ],
        ctaText: 'Build Your CPG Deck',
    },
};

export function generateStaticParams() {
    return Object.keys(industryData).map((slug) => ({
        slug,
    }));
}

export function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Metadata {
    const industry = industryData[params.slug];
    return {
        title: `${industry?.title || 'Industry'} | Happy Pitch`,
        description: industry?.subtitle || 'Industry-specific pitch deck services',
    };
}

export default function IndustryPage({
    params,
}: {
    params: { slug: string };
}) {
    const industry = industryData[params.slug];

    if (!industry) {
        return (
            <div className="pt-32 pb-20 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Industry Not Found
                </h1>
                <Link href="/" className="text-blue-600 hover:underline">
                    Return Home
                </Link>
            </div>
        );
    }

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">
                            {industry.title}
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            {industry.subtitle}
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {industry.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* What We Deliver */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                What We Deliver
                            </h2>
                            <ul className="space-y-4">
                                {industry.services.map((service, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <ChevronRight className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <span className="text-gray-700">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Challenges We Solve */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Challenges We Solve
                            </h2>
                            <ul className="space-y-4">
                                {industry.challenges.map((challenge, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <ChevronRight className="w-3.5 h-3.5 text-purple-600" />
                                        </div>
                                        <span className="text-gray-700">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Let&apos;s build a pitch deck that speaks the language of your
                        industry and wins over investors.
                    </p>
                    <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                        {industry.ctaText}
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </section>
        </>
    );
}
