"use client";

import { BarChart3, Users, Zap, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: BarChart3,
    value: "500+",
    label: "Pitch Decks Created",
    description: "For startups worldwide",
  },
  {
    icon: Users,
    value: "$2B+",
    label: "Capital Raised",
    description: "By our clients",
  },
  {
    icon: Zap,
    value: "98%",
    label: "Success Rate",
    description: "Client satisfaction",
  },
  {
    icon: TrendingUp,
    value: "15+",
    label: "Unicorns",
    description: "Companies we've helped",
  },
];

export function StatsSection() {
  return (
    <section className="bg-black text-white py-16 lg:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="font-semibold text-white mb-1">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
