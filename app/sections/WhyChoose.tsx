import { FileText, BarChart3, Users, Shield, Zap, Target } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: FileText,
      title: 'Built for Finance',
      description:
        "We don't just design; we understand finance. Our team is fluent in capitalization tables, complex waterfalls, and investment theses, ensuring every slide is not only visually stunning but technically precise and market-ready.",
    },
    {
      icon: BarChart3,
      title: 'Institutional Grade Data',
      description:
        "Turn dense spreadsheets into compelling visual narratives. We transform complex datasets into intuitive, institutional-grade charts and graphs that allow investors to grasp your value proposition at a glance.",
    },
    {
      icon: Users,
      title: 'Founder-Led Execution',
      description:
        "Nothing is outsourced. You work directly with the founder to get your deck ready, ensuring your materials benefit from expert experience and personal dedication without agency layers.",
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description:
        "Uncompromising security for your most sensitive data. We adhere to strict NDAs and utilize enterprise-grade encryption and security protocols, giving you the peace of mind that your proprietary information remains confidential.",
    },
    {
      icon: Zap,
      title: 'Deal Speed',
      description:
        "We operate at the speed of M&A. With 24/7 availability and rapid turnaround times, we ensure you never miss a critical deadline, keeping your deal momentum moving forward no matter the hour.",
    },
    {
      icon: Target,
      title: 'Outcome Focused',
      description:
        "Design that drives results. We don't just make decks look good; we engineer them for conversion. Whether your goal is securing a meeting, raising capital, or closing a fund, our materials are optimized to help you win.",
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
            Happy Pitch?
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const gradientColors = [
              ['from-blue-500 to-cyan-500', 'from-cyan-500 to-blue-500'],
              ['from-emerald-500 to-teal-500', 'from-teal-500 to-emerald-500'],
              ['from-purple-500 to-indigo-500', 'from-indigo-500 to-purple-500'],
              ['from-amber-500 to-yellow-500', 'from-yellow-500 to-amber-500'],
              ['from-orange-500 to-red-500', 'from-red-500 to-orange-500'],
              ['from-rose-500 to-pink-500', 'from-pink-500 to-rose-500'],
            ];
            const [topGradient, bottomGradient] = gradientColors[index];

            return (
              <div
                key={index}
                className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-shadow relative overflow-hidden group"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br opacity-5 rounded-full blur-3xl -mr-24 -mt-24 transition-opacity group-hover:opacity-10 ${topGradient}`}
                />
                <div
                  className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr opacity-5 rounded-full blur-3xl -ml-24 -mb-24 transition-opacity group-hover:opacity-10 ${bottomGradient}`}
                />

                <div className="relative z-10">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
