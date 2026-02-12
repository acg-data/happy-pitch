export interface MetroTarget {
  slug: string;
  name: string;
  region: string;
  localInsight: string;
  investorLandscape: string;
  buyerLandscape: string;
}

export interface PageVariant {
  key: string;
  serviceSlug: 'pitch-decks' | 'investor-memos' | 'cims' | 'sales-decks';
  serviceName: string;
  industrySlug: 'saas' | 'biotech' | 'private-equity' | 'digital-transformation';
  industryName: string;
  useCase: string;
  angle: string;
  leadMagnet: string;
  caseStudyResult: string;
  deliverables: string[];
}

export interface PseoPage {
  sequence: number;
  slug: string;
  title: string;
  description: string;
  h1: string;
  ctaText: string;
  metro: MetroTarget;
  variant: PageVariant;
}

export const pageVariants: PageVariant[] = [
  {
    key: 'saas-fundraising',
    serviceSlug: 'pitch-decks',
    serviceName: 'Pitch Decks',
    industrySlug: 'saas',
    industryName: 'SaaS',
    useCase: 'Series A to Series C fundraising',
    angle:
      'Metrics-first storytelling built around ARR, retention, payback period, and expansion revenue.',
    leadMagnet: 'SaaS Fundraise Narrative Worksheet',
    caseStudyResult: 'Recent client: $24M raised in 14 weeks after deck and narrative overhaul.',
    deliverables: [
      '12-15 slide investor storyline',
      'KPI dashboard visuals (ARR, NRR, CAC payback)',
      'Follow-up one-pager for partner meetings',
    ],
  },
  {
    key: 'biotech-institutional',
    serviceSlug: 'investor-memos',
    serviceName: 'Investor Memos',
    industrySlug: 'biotech',
    industryName: 'Biotech',
    useCase: 'VC and strategic investor diligence',
    angle:
      'Scientific depth translated into a clear investment thesis with milestone-based risk framing.',
    leadMagnet: 'Biotech Investor Memo Outline',
    caseStudyResult: 'Recent client: oversubscribed round with 4 new healthcare-focused investors.',
    deliverables: [
      '20-30 page institutional memo',
      'Clinical and regulatory milestone timeline',
      'Risk matrix with downside/mitigation view',
    ],
  },
  {
    key: 'private-equity-deal',
    serviceSlug: 'cims',
    serviceName: 'CIMs',
    industrySlug: 'private-equity',
    industryName: 'Private Equity',
    useCase: 'Sell-side and recapitalization processes',
    angle:
      'Buyer-focused positioning that highlights growth levers, quality of earnings, and exit pathways.',
    leadMagnet: 'M&A CIM Structuring Checklist',
    caseStudyResult: 'Recent client: 3.2x more qualified buyer meetings in the first outreach wave.',
    deliverables: [
      '40-60 page CIM narrative and structure',
      'Buyer objection handling appendix',
      'Process-ready management presentation core',
    ],
  },
  {
    key: 'digital-transformation-growth',
    serviceSlug: 'sales-decks',
    serviceName: 'Sales Decks',
    industrySlug: 'digital-transformation',
    industryName: 'Digital Transformation',
    useCase: 'Enterprise pipeline acceleration and partnerships',
    angle:
      'Complex technical offerings reframed around executive outcomes, ROI, and implementation confidence.',
    leadMagnet: 'Enterprise Sales Deck Framework',
    caseStudyResult: 'Recent client: enterprise close rate improved by 31 percent within one quarter.',
    deliverables: [
      'Executive-ready core sales deck',
      'Industry-tailored value proposition slides',
      'Objection-response and ROI appendix',
    ],
  },
];

export const metroTargets: MetroTarget[] = [
  {
    slug: 'new-york',
    name: 'New York',
    region: 'NY, USA',
    localInsight: 'Dense founder, PE, and growth equity ecosystem with high quality buyer access.',
    investorLandscape: 'Multi-stage funds with strong appetite for fintech, healthcare, and SaaS.',
    buyerLandscape: 'Active corporate development teams and frequent sponsor-backed platform deals.',
  },
  {
    slug: 'san-francisco',
    name: 'San Francisco',
    region: 'CA, USA',
    localInsight: 'Fast cycle for product-led companies where narrative clarity directly impacts valuation.',
    investorLandscape: 'Top-tier venture funds focused on software, AI infrastructure, and developer tools.',
    buyerLandscape: 'Strategic acquirers and growth investors actively scanning breakout categories.',
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    region: 'CA, USA',
    localInsight: 'Consumer-tech and media-heavy market where storytelling quality is a differentiator.',
    investorLandscape: 'Operators-turned-investors and growth funds backing brand and software convergence.',
    buyerLandscape: 'Private equity and strategic buyers targeting scaled, margin-improving assets.',
  },
  {
    slug: 'chicago',
    name: 'Chicago',
    region: 'IL, USA',
    localInsight: 'Strong B2B and logistics footprint requiring clear differentiation against incumbents.',
    investorLandscape: 'Discipline-driven investors focused on fundamentals and execution reliability.',
    buyerLandscape: 'Large strategic acquirers and middle-market PE groups executing consistent add-ons.',
  },
  {
    slug: 'boston',
    name: 'Boston',
    region: 'MA, USA',
    localInsight: 'Deep biotech and enterprise software concentration with technical buyer audiences.',
    investorLandscape: 'Healthcare specialists and software funds with rigorous diligence expectations.',
    buyerLandscape: 'Frequent strategic interest in IP-rich and clinically de-risked companies.',
  },
  {
    slug: 'austin',
    name: 'Austin',
    region: 'TX, USA',
    localInsight: 'High-growth startup market where speed-to-meeting often drives fundraising outcomes.',
    investorLandscape: 'Early-stage and growth funds investing in software, fintech, and mobility.',
    buyerLandscape: 'Corporate innovation teams and PE-backed roll-ups seeking scalable operators.',
  },
  {
    slug: 'miami',
    name: 'Miami',
    region: 'FL, USA',
    localInsight: 'Cross-border capital hub with frequent LATAM and US investor overlap.',
    investorLandscape: 'Family offices, emerging managers, and venture groups with thematic conviction.',
    buyerLandscape: 'International acquirers and private capital pursuing regional expansion plays.',
  },
  {
    slug: 'seattle',
    name: 'Seattle',
    region: 'WA, USA',
    localInsight: 'Enterprise and cloud-native talent concentration favors metrics-heavy positioning.',
    investorLandscape: 'Tech-focused funds valuing technical defensibility and durable gross margins.',
    buyerLandscape: 'Strategic cloud players and sponsor-backed platforms pursuing capability expansion.',
  },
  {
    slug: 'denver',
    name: 'Denver',
    region: 'CO, USA',
    localInsight: 'Scaled startup corridor where buyer confidence depends on operational discipline.',
    investorLandscape: 'Growth investors prioritizing efficient growth and repeatable go-to-market models.',
    buyerLandscape: 'Active middle-market M&A with strong appetite for category leaders.',
  },
  {
    slug: 'atlanta',
    name: 'Atlanta',
    region: 'GA, USA',
    localInsight: 'Fintech and logistics hotspot where execution narrative must match real traction.',
    investorLandscape: 'Sector-focused investors looking for capital-efficient growth profiles.',
    buyerLandscape: 'Strategic buyers and sponsors actively pursuing payments and software assets.',
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    region: 'TX, USA',
    localInsight: 'Corporate HQ density creates strong demand for enterprise-focused storytelling.',
    investorLandscape: 'Late-stage and private equity investors emphasizing EBITDA and scalability.',
    buyerLandscape: 'High transaction volume in business services, software, and industrial tech.',
  },
  {
    slug: 'houston',
    name: 'Houston',
    region: 'TX, USA',
    localInsight: 'Energy transition and industrial innovation market with complex buyer criteria.',
    investorLandscape: 'Funds balancing technology upside with infrastructure-grade risk management.',
    buyerLandscape: 'Strategics and PE firms targeting resilient cash flow and defensible niches.',
  },
  {
    slug: 'washington-dc',
    name: 'Washington, DC',
    region: 'DC, USA',
    localInsight: 'Policy-aware market where credibility and compliance framing drive trust quickly.',
    investorLandscape: 'Government-adjacent and cybersecurity investors requiring tight thesis discipline.',
    buyerLandscape: 'Strategic acquirers looking for regulated-market expertise and customer stickiness.',
  },
  {
    slug: 'philadelphia',
    name: 'Philadelphia',
    region: 'PA, USA',
    localInsight: 'Healthcare, biotech, and services market with diligence-heavy investor behavior.',
    investorLandscape: 'Funds focused on fundamentals, milestone execution, and credible margin path.',
    buyerLandscape: 'Strong private equity presence for lower middle-market and growth-stage assets.',
  },
  {
    slug: 'san-diego',
    name: 'San Diego',
    region: 'CA, USA',
    localInsight: 'Biotech and medtech concentration with high importance on scientific clarity.',
    investorLandscape: 'Specialist healthcare funds requiring milestone-ready clinical communication.',
    buyerLandscape: 'Strategic pharma and medtech buyers evaluating pipeline and commercialization fit.',
  },
  {
    slug: 'phoenix',
    name: 'Phoenix',
    region: 'AZ, USA',
    localInsight: 'Rapidly scaling tech and services market where precision messaging builds confidence.',
    investorLandscape: 'Regional and national funds prioritizing unit economics and sustainable growth.',
    buyerLandscape: 'Private capital firms targeting profitable expansion opportunities.',
  },
  {
    slug: 'nashville',
    name: 'Nashville',
    region: 'TN, USA',
    localInsight: 'Healthcare and services ecosystem where differentiation must be sharply articulated.',
    investorLandscape: 'Investors focused on operator quality, reimbursement dynamics, and growth durability.',
    buyerLandscape: 'Strategics and sponsors seeking category specialists with expansion potential.',
  },
  {
    slug: 'charlotte',
    name: 'Charlotte',
    region: 'NC, USA',
    localInsight: 'Finance and enterprise services center with strong emphasis on risk-adjusted growth.',
    investorLandscape: 'Capital providers evaluating governance, margins, and path to scale.',
    buyerLandscape: 'Frequent PE activity in B2B services and workflow software.',
  },
  {
    slug: 'minneapolis',
    name: 'Minneapolis',
    region: 'MN, USA',
    localInsight: 'Operationally rigorous market where proof and clarity outperform hype-heavy narratives.',
    investorLandscape: 'Investors favoring pragmatic growth plans with measurable conversion points.',
    buyerLandscape: 'Strategic and sponsor buyers active in health, industrial, and software niches.',
  },
  {
    slug: 'toronto',
    name: 'Toronto',
    region: 'ON, Canada',
    localInsight: 'Strong North American capital bridge for scaling software and fintech teams.',
    investorLandscape: 'Cross-border investors looking for efficient growth and global expansion readiness.',
    buyerLandscape: 'Corporate and PE buyers targeting category leaders with US expansion potential.',
  },
  {
    slug: 'london',
    name: 'London',
    region: 'UK',
    localInsight: 'Global financial center where investor standards demand structured narrative rigor.',
    investorLandscape: 'International funds active across fintech, enterprise tech, and climate sectors.',
    buyerLandscape: 'High-frequency M&A from strategics and sponsor-backed consolidators.',
  },
  {
    slug: 'berlin',
    name: 'Berlin',
    region: 'Germany',
    localInsight: 'Product-led tech hub where positioning and go-to-market clarity drive conversion.',
    investorLandscape: 'European VC and growth investors focused on category differentiation.',
    buyerLandscape: 'Cross-border strategic interest in efficient software and workflow platforms.',
  },
  {
    slug: 'paris',
    name: 'Paris',
    region: 'France',
    localInsight: 'Enterprise innovation market where premium narrative quality accelerates investor trust.',
    investorLandscape: 'Institutional and venture investors emphasizing defensibility and execution pace.',
    buyerLandscape: 'Large strategic groups and PE buyers evaluating international scale readiness.',
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    region: 'Singapore',
    localInsight: 'Regional capital gateway for Southeast Asia expansion and cross-border fundraising.',
    investorLandscape: 'Family offices, sovereign-linked funds, and growth investors with regional theses.',
    buyerLandscape: 'Strategic acquirers targeting APAC market entry and platform expansion.',
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    region: 'UAE',
    localInsight: 'Fast-moving growth market where premium positioning helps secure executive access.',
    investorLandscape: 'Sovereign, family office, and private capital investors with global mandates.',
    buyerLandscape: 'Regional consolidators and international buyers pursuing strategic footholds.',
  },
];

export const pseoPages: PseoPage[] = metroTargets.flatMap((metro, metroIndex) =>
  pageVariants.map((variant, variantIndex) => {
    const slug = `${variant.serviceSlug}-${metro.slug}-${variant.industrySlug}`;
    const sequence = metroIndex * pageVariants.length + variantIndex + 1;

    return {
      sequence,
      slug,
      title: `${variant.serviceName} in ${metro.name} for ${variant.industryName}`,
      h1: `${variant.serviceName} in ${metro.name} for ${variant.industryName} Teams`,
      description: `High-converting ${variant.serviceName.toLowerCase()} for ${variant.industryName.toLowerCase()} companies in ${metro.name}. ${variant.angle}`,
      ctaText: `Work with ${metro.name}'s top ${variant.serviceName.toLowerCase()} team`,
      metro,
      variant,
    };
  })
);

export const TOTAL_PSEO_PAGES = pseoPages.length;

export function getPseoPageBySlug(slug: string): PseoPage | undefined {
  return pseoPages.find((page) => page.slug === slug);
}

export function getPseoPagesByMetro(metroSlug: string): PseoPage[] {
  return pseoPages.filter((page) => page.metro.slug === metroSlug);
}

export const pseoLaunchPhases = [
  {
    name: 'Phase 1',
    description: 'Top 10 metros first for fastest organic validation.',
    metroSlugs: metroTargets.slice(0, 10).map((metro) => metro.slug),
  },
  {
    name: 'Phase 2',
    description: 'Next 10 metros to scale winning page patterns.',
    metroSlugs: metroTargets.slice(10, 20).map((metro) => metro.slug),
  },
  {
    name: 'Phase 3',
    description: 'Final 5 metros with expanded regional and global reach.',
    metroSlugs: metroTargets.slice(20).map((metro) => metro.slug),
  },
];
