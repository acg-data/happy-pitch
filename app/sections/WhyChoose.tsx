import { FileText, BarChart3, Users, Shield, Zap, Target } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: FileText,
      title: 'Built for Finance',
      description:
        'Deal books that secure funding and close acquisitions by presenting clear investment cases backed by data and strategic rationale.',
    },
    {
      icon: BarChart3,
      title: 'Built for Finance',
      description:
        'Deal books that secure funding and close acquisitions by presenting clear investment cases backed by data and strategic rationale.',
    },
    {
      icon: Users,
      title: 'Built for Finance',
      description:
        'Deal books that secure funding and close acquisitions by presenting clear investment cases backed by data and strategic rationale.',
    },
    {
      icon: Shield,
      title: 'Built for Finance',
      description:
        'Deal books that secure funding and close acquisitions by presenting clear investment cases backed by data and strategic rationale.',
    },
    {
      icon: Zap,
      title: 'Built for Finance',
      description:
        'Deal books that secure funding and close acquisitions by presenting clear investment cases backed by data and strategic rationale.',
    },
    {
      icon: Target,
      title: 'Built for Finance',
      description:
        'Deal books that secure funding and close acquisitions by presenting clear investment cases backed by data and strategic rationale.',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose
            <br />
            Collateral Partners?
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
