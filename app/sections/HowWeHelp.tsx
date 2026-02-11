"use client";

import { Search, Palette, Rocket } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const defaultSteps: Step[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business, market position, and goals to understand what makes you unique.",
    icon: <Search className="w-6 h-6" />,
    details: [
      "Comprehensive stakeholder interviews",
      "Market and competitive analysis",
      "Narrative framework development",
      "Key messaging identification"
    ]
  },
  {
    number: "02",
    title: "Design & Development",
    description: "Our team crafts visually stunning materials that bring your story to life with institutional-grade polish.",
    icon: <Palette className="w-6 h-6" />,
    details: [
      "Custom visual identity creation",
      "Data visualization and charts",
      "Content refinement and editing",
      "Iterative design reviews"
    ]
  },
  {
    number: "03",
    title: "Refinement & Delivery",
    description: "We polish every detail and prepare your materials for maximum impact in the boardroom or investor meeting.",
    icon: <Rocket className="w-6 h-6" />,
    details: [
      "Final content optimization",
      "Presentation coaching (optional)",
      "Print and digital formatting",
      "Ongoing support and iterations"
    ]
  }
];

interface HowWeHelpProps {
  customSteps?: Step[];
  title?: string;
  subtitle?: string;
}

export default function HowWeHelp({ 
  customSteps, 
  title = "How We Help",
  subtitle = "A proven process designed to deliver exceptional results, on time and on brand."
}: HowWeHelpProps) {
  const steps = customSteps || defaultSteps;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10" />

                {/* Number Badge */}
                <div className={`flex-shrink-0 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}>
                  <span className="text-2xl font-bold text-gray-900">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className={`pl-20 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                }`}>
                  <div className={`flex items-center gap-3 mb-3 ${
                    index % 2 === 0 ? "" : "md:justify-end"
                  }`}>
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <ul className={`space-y-2 ${
                    index % 2 === 0 ? "" : "md:text-right"
                  }`}>
                    {step.details.map((detail, i) => (
                      <li key={i} className={`flex items-center gap-2 text-sm text-gray-500 ${
                        index % 2 === 0 ? "" : "md:flex-row-reverse"
                      }`}>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
