import { TrendingUp, Briefcase, Award } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      value: '$100B+',
      label: 'Capital Raised by Clients',
      icon: TrendingUp,
    },
    {
      value: '500+',
      label: 'Deals Supported',
      icon: Briefcase,
    },
    {
      value: '100%',
      label: 'Founder-Led Execution',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Chosen By Sophisticated
            <br />
            Businesses
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-4 p-3 bg-gray-800/50 rounded-2xl group-hover:bg-gray-800 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
                {stat.value}
              </div>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
