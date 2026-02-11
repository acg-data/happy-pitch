const Statistics = () => {
  const stats = [
    {
      value: '$10B+',
      label: 'Capital Represented in Client Projects',
    },
    {
      value: '$10B+',
      label: 'Capital Represented in Client Projects',
    },
    {
      value: '$10B+',
      label: 'Capital Represented in Client Projects',
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
            <div key={index} className="text-center">
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
