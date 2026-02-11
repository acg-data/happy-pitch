import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <div className="pt-12 lg:pt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Clear Stories That
              <br />
              Close Deals
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Enable your firm to compete and win across every front with deal-winning
              narratives that turn complex strategies into capital raises and institutional
              credibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2">
                Request Samples
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2">
                Case Studies
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Content - 3D Shape */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img
                src="/hero-3d-shape.png"
                alt="Abstract 3D Shape"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
