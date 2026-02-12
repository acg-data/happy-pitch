import type { Metadata } from 'next';
import Link from 'next/link';
import {
  metroTargets,
  pageVariants,
  getPseoPagesByMetro,
  pseoLaunchPhases,
  TOTAL_PSEO_PAGES,
} from '../lib/pseoPages';

export const metadata: Metadata = {
  title: '100-Page pSEO Rollout | Happy Pitch',
  description:
    'Sequenced pSEO rollout with 25 major metros and 4 niche page variations per metro.',
};

export default function PseoRolloutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-14 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            pSEO Rollout
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            100 Programmatic SEO Pages
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-8">
            Built as a fixed matrix: 25 major metros x 4 niche-service variations. Every page has a
            dedicated slug, local context, and conversion-oriented structure.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <p className="text-sm text-gray-500 mb-1">Total Pages</p>
              <p className="text-3xl font-bold text-gray-900">{TOTAL_PSEO_PAGES}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <p className="text-sm text-gray-500 mb-1">Target Metros</p>
              <p className="text-3xl font-bold text-gray-900">{metroTargets.length}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <p className="text-sm text-gray-500 mb-1">Variations Per Metro</p>
              <p className="text-3xl font-bold text-gray-900">{pageVariants.length}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Launch Sequence</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pseoLaunchPhases.map((phase) => (
              <div key={phase.name} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <p className="text-sm font-semibold text-gray-500 mb-2">{phase.name}</p>
                <p className="font-semibold text-gray-900 mb-2">
                  {phase.metroSlugs.length * pageVariants.length} pages
                </p>
                <p className="text-sm text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Metros and Variations</h2>
          <div className="space-y-6">
            {metroTargets.map((metro) => {
              const metroPages = getPseoPagesByMetro(metro.slug);
              return (
                <div key={metro.slug} className="border border-gray-200 rounded-2xl p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {metro.name} <span className="text-sm text-gray-500 font-medium">({metro.region})</span>
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{metro.localInsight}</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {metroPages.map((page) => (
                      <Link
                        key={page.slug}
                        href={`/${page.slug}`}
                        className="block bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-colors"
                      >
                        <p className="text-xs text-gray-500 mb-1">#{page.sequence}</p>
                        <p className="text-sm font-semibold text-gray-900 mb-2">
                          {page.variant.serviceName} / {page.variant.industryName}
                        </p>
                        <p className="text-xs text-gray-600 break-all">/{page.slug}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
