"use client";

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const TopProviders = () => {
  const [activeTab, setActiveTab] = useState('transaction');

  const tabs = [
    { id: 'transaction', label: 'Transaction Readiness' },
    { id: 'investor', label: 'Investor Relations' },
    { id: 'business', label: 'Business Development' },
    { id: 'strategic', label: 'Strategic Positioning' },
  ];

  const tabContent = {
    transaction: {
      title: 'Transaction Readiness',
      sections: [
        {
          subtitle: 'Investment Memorandums',
          description:
            'Deal books that secure funding and close acquisitions by presenting clear investment cases backed by data and strategic rationale.',
        },
        {
          subtitle: 'Management Presentations',
          description:
            'Executive pitch decks that drive M&A processes by articulating company value, market position, and growth potential.',
        },
        {
          subtitle: 'Company Profiles',
          description:
            'Strategic overviews that position firms for sale, partnerships, or investment by highlighting competitive advantages and value drivers.',
        },
      ],
    },
    investor: {
      title: 'Investor Relations',
      sections: [
        {
          subtitle: 'Annual Reports',
          description:
            'Comprehensive reports that communicate financial performance and strategic direction to stakeholders with clarity and impact.',
        },
        {
          subtitle: 'Earnings Presentations',
          description:
            'Quarterly updates that translate complex financial data into compelling narratives for investors and analysts.',
        },
        {
          subtitle: 'Investor Decks',
          description:
            'Professional materials that build confidence and support valuation during fundraising and IPO processes.',
        },
      ],
    },
    business: {
      title: 'Business Development',
      sections: [
        {
          subtitle: 'Sales Decks',
          description:
            'Persuasive presentations that communicate value propositions and drive conversion with enterprise clients.',
        },
        {
          subtitle: 'Proposal Templates',
          description:
            'Standardized formats that ensure consistency and professionalism across all client-facing materials.',
        },
        {
          subtitle: 'Capability Statements',
          description:
            'Concise overviews that establish credibility and differentiate your firm from competitors.',
        },
      ],
    },
    strategic: {
      title: 'Strategic Positioning',
      sections: [
        {
          subtitle: 'Market Analysis',
          description:
            'Data-driven insights that identify opportunities and inform strategic decision-making.',
        },
        {
          subtitle: 'Competitive Intelligence',
          description:
            'Comprehensive assessments that reveal competitive landscape and positioning opportunities.',
        },
        {
          subtitle: 'Brand Strategy',
          description:
            'Strategic frameworks that align messaging with business objectives and target audiences.',
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
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                activeTab === tab.id
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
                src="/tablet-mockup.png"
                alt="Financial Dashboard"
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
