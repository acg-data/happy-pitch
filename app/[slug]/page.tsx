import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ChevronRight, MapPin, Building2, Target } from 'lucide-react';
import {
  getPseoPageBySlug,
  getPseoPagesByMetro,
  TOTAL_PSEO_PAGES,
  pseoPages,
} from '../lib/pseoPages';

export const dynamicParams = false;

export function generateStaticParams() {
  return pseoPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const page = getPseoPageBySlug(resolvedParams.slug);

  if (!page) {
    return {
      title: 'Page Not Found | Happy Pitch',
      description: 'The requested page could not be found.',
    };
  }

  return {
    title: `${page.title} | Happy Pitch`,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
  };
}

export default async function PseoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const page = getPseoPageBySlug(resolvedParams.slug);

  if (!page) {
    notFound();
  }

  const relatedPages = getPseoPagesByMetro(page.metro.slug).filter(
    (relatedPage) => relatedPage.slug !== page.slug
  );

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-14 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/pseo"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to 100-page rollout
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700">
                Page {page.sequence} of {TOTAL_PSEO_PAGES}
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700">
                {page.variant.serviceName}
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700">
                {page.variant.industryName}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {page.h1}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {page.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#request"
                className="px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
              >
                Request Samples
                <ChevronRight className="w-4 h-4" />
              </a>
              <Link
                href={`/services/${page.variant.serviceSlug}`}
                className="px-6 py-3 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                View {page.variant.serviceName}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-gray-700" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Local Market Insight
              </h2>
              <p className="text-gray-600">{page.metro.localInsight}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-gray-700" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Investor Landscape
              </h2>
              <p className="text-gray-600">{page.metro.investorLandscape}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-7">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-gray-700" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Buyer Landscape
              </h2>
              <p className="text-gray-600">{page.metro.buyerLandscape}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Use Case Focus
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {page.variant.useCase}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                {page.variant.angle}
              </p>
              <p className="text-sm font-medium text-gray-900">
                Lead magnet: {page.variant.leadMagnet}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                What You Get
              </p>
              <ul className="space-y-3">
                {page.variant.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-900" />
                    <span className="text-gray-700">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-white">
            <p className="text-sm text-gray-300 mb-3">Case Study Signal</p>
            <h2 className="text-3xl font-bold mb-4">
              {page.variant.caseStudyResult}
            </h2>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              This page variation is tuned for {page.metro.name} buyers and investors in{' '}
              {page.variant.industryName.toLowerCase()}, then reinforced with local proof points,
              offer structure, and conversion-focused CTA placement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Other {page.metro.name} Variations
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {relatedPages.map((relatedPage) => (
              <Link
                key={relatedPage.slug}
                href={`/${relatedPage.slug}`}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <p className="text-xs text-gray-500 mb-2">
                  Page {relatedPage.sequence} of {TOTAL_PSEO_PAGES}
                </p>
                <p className="font-semibold text-gray-900 mb-2">
                  {relatedPage.variant.serviceName} for {relatedPage.variant.industryName}
                </p>
                <p className="text-sm text-gray-600">{relatedPage.variant.useCase}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="request" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-200 rounded-3xl p-8 sm:p-12 bg-white">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {page.ctaText}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              We will tailor messaging, structure, and design to the {page.metro.name} market and
              your {page.variant.industryName.toLowerCase()} niche so every slide supports
              conversion.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@happypitch.com"
                className="px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
              >
                Book a 15-minute consult
              </a>
              <Link
                href={`/industries/${page.variant.industrySlug}`}
                className="px-6 py-3 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                Explore {page.variant.industryName}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
