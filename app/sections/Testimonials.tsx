"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Justin is great! We're a biotech therapeutics company. Justin did an amazing job upgrading our pitch deck. He has outstanding judgement and creativity regarding content and style. He's also highly professional, responsive, friendly, and a pleasure to work with. Highly recommended!",
    name: 'John Ramunas',
    title: 'Chief Executive Officer',
    company: 'Rejuvenation Technologies Inc.',
    companyInitial: 'R',
    companyColor: 'bg-emerald-600',
    image: '/John Ramunas.jpg',
  },
  {
    quote:
      "Asked to do TAM/SAM/SOM market analysis. Did an excellent job with a very fast turnaround - fully explained reasoning and backed up the #s. Very knowledgable and I feel like I'm an expert now that I've talked to him. You will learn a lot about market analysis and your own industry if you hire him. Well worth the $ and then some. Well done, thank you.",
    name: 'James Shelburne',
    title: 'Product Manager',
    company: 'Rev',
    companyInitial: 'R',
    companyColor: 'bg-blue-600',
    image: '/James Shelburne.jpg',
  },
  {
    quote:
      "Happy Pitch's research capabilities set them apart—they aggregated bespoke market data and industry intelligence that perfectly supported our investment thesis. Their ability to synthesize complex real estate fundamentals into a compelling fundraising narrative was instrumental in our capital raising success.",
    name: 'Sarah Thomson',
    title: 'Managing Director',
    company: 'ZeniZap',
    companyInitial: 'Z',
    companyColor: 'bg-purple-600',
    image: '/testimonial-person.jpg',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const prev = () => {
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const next = () => {
    setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real estate funds that closed billion-dollar acquisitions. Private equity firms that raised
            oversubscribed funds. Hedge funds that won institutional mandates. When the stakes are
            high, sophisticated firms choose materials that actually work.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content - Quote */}
              <div>
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">{current.name}</p>
                  <p className="text-sm text-gray-500">{current.title}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className={`w-6 h-6 ${current.companyColor} rounded flex items-center justify-center`}>
                      <span className="text-xs font-bold text-white">{current.companyInitial}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{current.company}</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Image */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-48 h-48 lg:w-64 lg:h-64">
                  {current.image ? (
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-6xl lg:text-7xl font-bold text-gray-400">
                        {current.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === activeIndex
                      ? 'bg-gray-900 w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
