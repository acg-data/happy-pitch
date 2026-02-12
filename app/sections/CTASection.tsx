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
            Your Next Raise Starts
            <br />
            With a Better Deck
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Great strategies deserve great storytelling. Don&apos;t let a weak
            deck cost you your next allocation, let Happy Pitch make sure your
            materials match your ambition.
          </p>
          <a href="#contact" className="px-6 py-3 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 inline-flex">
            Book Consultation
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
