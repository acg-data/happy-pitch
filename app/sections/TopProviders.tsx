"use client";

import { useState } from 'react';
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
      sections: [
        {
          subtitle: 'Pitch Decks',
          description:
            'Investor-ready decks that tell your equity story with data, design, and conviction. Built to win meetings and close rounds.',
        },
        {
          subtitle: 'Fund Marketing Materials',
          description:
            'LP-facing collateral that communicates strategy, track record, and differentiation with institutional polish.',
        },
        {
          subtitle: 'Data Room Presentations',
          description:
            'Structured materials that accelerate due diligence and build investor confidence from the first click.',
        },
      ],
    },
    ma: {
      title: 'M&A Advisory',
      image: '/M&A.avif',
      sections: [
        {
          subtitle: 'Confidential Information Memorandums',
          description:
            'Sell-side CIMs that present the full business opportunity with clarity, credibility, and institutional-grade formatting.',
        },
        {
          subtitle: 'Management Presentations',
          description:
            'Executive decks that articulate value, growth levers, and strategic fit for potential buyers and partners.',
        },
        {
          subtitle: 'Buyer & Target Profiles',
          description:
            'Concise overviews that position acquisition targets or potential partners effectively for deal teams.',
        },
      ],
    },
    investor: {
      title: 'Investor Communications',
      image: '/Investor Communications.avif',
      sections: [
        {
          subtitle: 'Quarterly Reports',
          description:
            'Polished LP updates that communicate portfolio performance, market outlook, and strategic direction.',
        },
        {
          subtitle: 'Annual Meeting Decks',
          description:
            'Board-ready materials that inform, align, and inspire stakeholder confidence at every level.',
        },
        {
          subtitle: 'Earnings & IR Presentations',
          description:
            'Public-facing materials that translate complex financial data into compelling investor narratives.',
        },
      ],
    },
    growth: {
      title: 'Growth & Sales',
      image: '/Growth & Sales.avif',
      sections: [
        {
          subtitle: 'Enterprise Sales Decks',
          description:
            'Persuasive presentations that communicate your value proposition clearly and close deals faster.',
        },
        {
          subtitle: 'Product & Platform Overviews',
          description:
            'Clear, compelling materials that make complex solutions easy to understand for any audience.',
        },
        {
          subtitle: 'Case Studies & Proof Points',
          description:
            'Evidence-backed narratives that build credibility, demonstrate impact, and drive conversion.',
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
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      {section.subtitle}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
              <button className="mt-8 text-sm font-medium text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
                Explore Solutions
                <ChevronRight className="w-4 h-4" />
              </button>
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
