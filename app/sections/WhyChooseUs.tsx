"use client";

import { Award, Users, Clock, Shield } from "lucide-react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultReasons: Reason[] = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Deep Industry Expertise",
    description: "We understand the nuances of your sector. Our team has worked with hundreds of companies across every major industry."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Founder-Led Execution",
    description: "Senior team members personally oversee every project. No junior staff learning on your dime."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Deal-Speed Focus",
    description: "We understand that timing is everything. Our process is designed to move as fast as your deal requires."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Institutional-Grade Quality",
    description: "Materials that meet the exacting standards of the world's most sophisticated investors and boards."
  }
];

interface WhyChooseUsProps {
  customReasons?: Reason[];
  title?: string;
  subtitle?: string;
}

export default function WhyChooseUs({ 
  customReasons,
  title = "Why Choose Happy Pitch",
  subtitle = "What sets us apart from generic design agencies and freelancers."
}: WhyChooseUsProps) {
  const reasons = customReasons || defaultReasons;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Why Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-700 group-hover:bg-gray-100 transition-colors">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
