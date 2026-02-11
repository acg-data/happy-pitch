const Testimonials = () => {
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
                  "Collateral Partners' research capabilities set them apart
                  —they aggregated bespoke market data and industry
                  intelligence that perfectly supported our investment
                  thesis. Their ability to synthesize complex real estate
                  fundamentals into a compelling fundraising narrative
                  was instrumental in our capital raising success."
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Thomson</p>
                  <p className="text-sm text-gray-500">Managing Director</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-white">Z</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">ZeniZap</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Image */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-48 h-48 lg:w-64 lg:h-64">
                  <img
                    src="/testimonial-person.jpg"
                    alt="Sarah Thomson"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
