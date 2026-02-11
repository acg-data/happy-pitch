import { Search, Lightbulb, Palette, Check } from 'lucide-react';

const ComplexStrategies = () => {
  const cards = [
    {
      icon: Search,
      title: 'Research',
      description:
        'Market intelligence that reveals where you win. Deep industry insights and data-backed analysis that give your materials clarity, credibility, and substance.',
      features: [
        'Market Sizing & TAM Analysis',
        'Competitive Landscape Mapping',
        'Investor Due Diligence Prep',
        'Valuation Benchmarking',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Strategy',
      description:
        'Investment theses built on logic and clarity. Messaging frameworks that articulate value, align stakeholders, and withstand due diligence across every stage of the process.',
      features: [
        'Equity Story Development',
        'Financial Model Integration',
        'Unit Economics Deep Dive',
        'Capital Structure Advisory',
      ],
    },
    {
      icon: Palette,
      title: 'Design',
      description:
        'Sophisticated visuals that match your strategy. Complex ideas transformed into clear, compelling presentations that earn attention and build lasting trust.',
      features: [
        'Institutional-Grade Visuals',
        'Complex Data Simplification',
        'Information Architecture',
        'Board-Ready Formatting',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Turn Complex Strategies Into Presentations
            <br />
            That Close Deals
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real estate funds that closed billion-dollar acquisitions. Private equity firms that raised
            oversubscribed funds. Hedge funds that won institutional mandates. When the stakes are
            high, sophisticated firms choose materials that actually work.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity group-hover:opacity-10
                  ${index === 0
                    ? 'from-blue-500 to-cyan-500'
                    : index === 1
                      ? 'from-purple-500 to-indigo-500'
                      : 'from-rose-500 to-pink-500'
                  }`}
              />
              <div
                className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr opacity-5 rounded-full blur-3xl -ml-32 -mb-32 transition-opacity group-hover:opacity-10
                  ${index === 0
                    ? 'from-cyan-500 to-blue-500'
                    : index === 1
                      ? 'from-indigo-500 to-purple-500'
                      : 'from-pink-500 to-rose-500'
                  }`}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>
                <ul className="space-y-3">
                  {card.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplexStrategies;
