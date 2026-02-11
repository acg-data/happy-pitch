import { ChevronRight } from 'lucide-react';

const TrustedBy = () => {
  const cards = [
    {
      tag: 'Real Estate',
      title: 'Elevate Your Real Estate Marketing Collateral',
      cta: 'Learn More',
      logo: 'KBS',
      fileType: 'PDF',
    },
    {
      tag: 'Real Estate',
      title: 'Elevate Your Real Estate Marketing Collateral',
      cta: 'Learn More',
      logo: 'KBS',
      fileType: 'PDF',
    },
    {
      tag: 'Real Estate',
      title: 'Elevate Your Real Estate Marketing Collateral',
      cta: 'Learn More',
      logo: 'KBS',
      fileType: 'PDF',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted By Leading
            <br />
            Financial Firms
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real estate funds that closed billion-dollar acquisitions. Private equity firms that raised
            oversubscribed funds. Hedge funds that won institutional mandates. When the stakes are
            high, sophisticated firms choose materials that actually work.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Card Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full mb-4">
                  {card.tag}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <button className="text-sm font-medium text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
                  {card.cta}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{card.logo}</span>
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-500 px-2 py-1 bg-white rounded border border-gray-200">
                  {card.fileType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
