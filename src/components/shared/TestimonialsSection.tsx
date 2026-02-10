"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "Happy Pitch transformed our presentation into a compelling story. We closed our Series A within 3 weeks of sending the deck.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
    company: "Series A - $12M",
    image: "/images/testimonial-person.jpg",
  },
  {
    quote: "The team's attention to detail and understanding of investor psychology is unmatched. Best investment we made.",
    author: "Michael Roberts",
    role: "Founder, DataSync",
    company: "Seed Round - $2.5M",
    image: "/images/testimonial-person.jpg",
  },
  {
    quote: "From concept to completion, the process was seamless. The final deck exceeded all our expectations.",
    author: "Emily Watson",
    role: "COO, CloudBase",
    company: "Series B - $45M",
    image: "/images/testimonial-person.jpg",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-black text-white py-16 lg:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-400">Success stories from founders who trusted us with their vision</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-rounded bg-gray-900 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden flex-shrink-0 bg-gray-800">
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-500 text-sm">
                  Photo
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <blockquote className="text-xl lg:text-2xl text-white mb-6 leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-white">{current.author}</p>
                  <p className="text-gray-400 text-sm">{current.role}</p>
                  <p className="text-gray-500 text-sm mt-1">{current.company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
