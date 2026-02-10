import { ChevronRight, Target, Lightbulb, Rocket, Heart } from "lucide-react";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { StatsSection } from "@/components/shared/StatsSection";
import { FooterCTA } from "@/components/shared/FooterCTA";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every slide is crafted with purpose. We focus on clarity and impact over flashy design.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of design trends and investor expectations to give you a competitive edge.",
  },
  {
    icon: Rocket,
    title: "Results",
    description: "Our success is measured by your funding rounds. We celebrate every dollar raised.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We're not just designers – we're your fundraising partners, invested in your success.",
  },
];

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & Creative Director",
    bio: "Former VC analyst turned designer. Alex has reviewed 1000+ pitch decks and knows what investors want.",
  },
  {
    name: "Maria Chen",
    role: "Lead Designer",
    bio: "Award-winning designer with 10+ years of experience creating presentations for Fortune 500 companies.",
  },
  {
    name: "James Wilson",
    role: "Strategy Director",
    bio: "Ex-investment banker who helps founders craft narratives that resonate with institutional investors.",
  },
  {
    name: "Sarah Park",
    role: "Senior Designer",
    bio: "Specialist in data visualization and financial modeling. Turns complex numbers into compelling stories.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-dark min-h-[70vh] flex items-center pt-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              We&apos;re on a Mission to Help Founders Succeed
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Happy Pitch was founded with a simple belief: great ideas deserve great presentations. 
              We combine deep industry expertise with world-class design to help startups tell their 
              stories and secure the funding they need to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-pill-white">
                Work With Us
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
              <a href="/case-studies" className="btn-pill-outline-white">
                See Our Work
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-3xl aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
              <div className="text-center text-gray-400">
                <p className="text-lg">Our Story</p>
                <p className="text-sm">Office or team photo</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  It started with a frustration. As a VC analyst, our founder Alex reviewed hundreds 
                  of pitch decks – most were poorly designed, confusing, and failed to communicate 
                  the founder&apos;s vision.
                </p>
                <p>
                  In 2019, Alex left the investment world to start Happy Pitch with a mission: 
                  help founders create pitch decks that actually work.
                </p>
                <p>
                  Since then, we&apos;ve helped 500+ startups raise over $2B in funding. From seed 
                  rounds to Series C, we&apos;ve been there for the entire journey.
                </p>
                <p>
                  Today, we&apos;re a team of 12 designers, strategists, and former investors who 
                  are passionate about helping great ideas get the funding they deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-shadow p-6 lg:p-8 flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Team Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Meet the Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A passionate group of designers, strategists, and former investors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card-shadow p-6 lg:p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Photo</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Footer CTA */}
      <FooterCTA
        title="Ready to Work Together?"
        description="Let's create a pitch deck that helps you raise the funding you need."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonHref="/case-studies"
      />
    </>
  );
}
