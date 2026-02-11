"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const TopProviders = () => {
  const [activeTab, setActiveTab] = useState('fundraising');

  const tabs = [
    { id: 'fundraising', label: 'Fundraising' },
    { id: 'ma', label: 'M&A Advisory' },
    { id: 'investor', label: 'Investor Communications' },
    { id: 'growth', label: 'Growth & Sales' },
  ];

  const tabContent = {
    fundraising: {
      title: 'Fundraising',
      image: '/Fundraising.avif',
      link: '/services/pitch-decks',
      sections: [
        {
          subtitle: 'Pitch Decks',
          description:
            'Investor-ready decks that tell your equity story with data, design, and conviction. Built to win meetings and close rounds.',
          link: '/services/pitch-decks',
        },
        {
          subtitle: 'Investor Memos',
          description:
            'LP-facing Happy Pitch! materials that communicate strategy, track record, and differentiation with institutional polish.',
          link: '/services/investor-memos',
        },
        {
          subtitle: 'Data Room Presentations',
          description:
            'Structured materials that accelerate due diligence and build investor confidence from the first click.',
          link: '/services',
        },
      ],
    },
    ma: {
      title: 'M&A Advisory',
      image: '/M&A.avif',
      link: '/services/cims',
      sections: [
        {
          subtitle: 'Confidential Information Memorandums',
          description:
            'Sell-side CIMs that present the full business opportunity with clarity, credibility, and institutional-grade formatting.',
          link: '/services/cims',
        },
        {
          subtitle: 'Management Presentations',
          description:
            'Executive decks that articulate value, growth levers, and strategic fit for potential buyers and partners.',
          link: '/services/corporate-presentation',
        },
        {
          subtitle: 'Buyer & Target Profiles',
          description:
            'Concise overviews that position acquisition targets or potential partners effectively for deal teams.',
          link: '/services',
        },
      ],
    },
    investor: {
      title: 'Investor Communications',
      image: '/Investor Communications.avif',
      link: '/services/corporate-presentation',
      sections: [
        {
          subtitle: 'Quarterly Reports',
          description:
            'Polished LP updates that communicate portfolio performance, market outlook, and strategic direction.',
          link: '/services/investor-memos',
        },
        {
          subtitle: 'Annual Meeting Decks',
          description:
            'Board-ready materials that inform, align, and inspire stakeholder confidence at every level.',
          link: '/services/corporate-presentation',
        },
        {
          subtitle: 'Earnings & IR Presentations',
          description:
            'Public-facing materials that translate complex financial data into compelling investor narratives.',
          link: '/services/corporate-presentation',
        },
      ],
    },
    growth: {
      title: 'Growth & Sales',
      image: '/Growth & Sales.avif',
      link: '/services/sales-decks',
      sections: [
        {
          subtitle: 'Enterprise Sales Decks',
          description:
            'Persuasive presentations that communicate your value proposition clearly and close deals faster.',
          link: '/services/sales-decks',
        },
        {
          subtitle: 'Product & Platform Overviews',
          description:
            'Clear, compelling materials that make complex solutions easy to understand for any audience.',
          link: '/services/sales-decks',
        },
        {
          subtitle: 'Case Studies & Proof Points',
          description:
            'Evidence-backed narratives that build credibility, demonstrate impact, and drive conversion.',
          link: '/services/sales-decks',
        },
      ],
    },
  };

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Top providers trusted
            <br />
            by growing teams
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combining strategic storytelling, deep industry research, and world-class design to turn
            complex ideas into clear, confident communication.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${activeTab === tab.id
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {currentContent.title}
              </h3>
              <div className="space-y-6">
                {currentContent.sections.map((section, index) => (
                  <Link key={index} href={section.link || '/services'} className="block group">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {section.subtitle}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                  </Link>
                ))}
              </div>
              <Link 
                href={currentContent.link || '/services'}
                className="mt-8 text-sm font-medium text-gray-900 flex items-center gap-1 hover:gap-2 transition-all group"
              >
                Explore Solutions
                <ChevronRight className="w-4 h-4 group-hover:text-purple-600" />
              </Link>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <img
                src={currentContent.image}
                alt={currentContent.title}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProviders;
