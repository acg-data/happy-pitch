import { ChevronRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/cta-gradient-bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Next Deal Starts
            <br />
            With Better Collateral
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Great strategies get overlooked when they're not
            presented the right way. Don't let weak communication
            cost you the allocation.
          </p>
          <button className="px-6 py-3 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
            Book Consultation
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
