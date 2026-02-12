import type { MetadataRoute } from 'next';
import { pseoPages } from './lib/pseoPages';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.happypitch.com';

const staticRoutes = [
  '/',
  '/services',
  '/industries',
  '/pseo',
  '/services/corporate-presentation',
  '/services/pitch-decks',
  '/services/investor-memos',
  '/services/cims',
  '/services/sales-decks',
  '/industries/pharma',
  '/industries/biotech',
  '/industries/private-equity',
  '/industries/private-credit',
  '/industries/venture-capital',
  '/industries/family-office',
  '/industries/digital-transformation',
  '/industries/food-beverages',
  '/industries/saas',
  '/industries/cpg',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const baseEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  const pseoEntries = pseoPages.map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...baseEntries, ...pseoEntries];
}
