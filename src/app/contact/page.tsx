import { ChevronRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { FooterCTA } from "@/components/shared/FooterCTA";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries and project discussions",
    value: "hello@happypitch.com",
    href: "mailto:hello@happypitch.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Available during business hours",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "We're here to help",
    value: "Mon - Fri: 9AM - 6PM EST",
    href: null,
  },
];

const services = [
  "Pitch Deck Design",
  "Financial Modeling",
  "Market Research",
  "Pitch Coaching",
  "Rush Delivery",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-dark min-h-[60vh] flex items-center pt-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Start Your
              <span className="block text-gray-400">Fundraising Journey</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Ready to create a pitch deck that gets results? Fill out the form 
              below and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-form" className="btn-pill-white">
                Request Samples
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
              <a href="/case-studies" className="btn-pill-outline-white">
                View Case Studies
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <div key={method.title} className="card-shadow p-6 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-bold text-black mb-1">{method.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{method.description}</p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-black font-medium hover:underline"
                  >
                    {method.value}
                  </a>
                ) : (
                  <span className="text-black font-medium">{method.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-light section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                Request Samples & Pricing
              </h2>
              <p className="text-gray-600">
                Tell us about your project and we&apos;ll send you relevant samples and a custom quote.
              </p>
            </div>

            <div className="card-shadow p-8 lg:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-black mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors"
                      placeholder="https://yourcompany.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Services Interested In *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-black transition-colors"
                      >
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          className="w-4 h-4 rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="stage" className="block text-sm font-medium text-black mb-2">
                    Funding Stage *
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors"
                  >
                    <option value="">Select your stage</option>
                    <option value="pre-seed">Pre-Seed</option>
                    <option value="seed">Seed</option>
                    <option value="series-a">Series A</option>
                    <option value="series-b">Series B+</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors resize-none"
                    placeholder="Describe your company, fundraising goals, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-pill-primary w-full justify-center"
                >
                  Send Request
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>

                <p className="text-center text-sm text-gray-500">
                  We typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Our Locations</h2>
            <p className="text-gray-600">
              Serving founders worldwide from our global offices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: "New York", address: "123 Broadway, Suite 500", region: "Americas HQ" },
              { city: "London", address: "45 Old Street, EC1V 9HX", region: "EMEA HQ" },
              { city: "Singapore", address: "88 Market Street, #15-01", region: "APAC HQ" },
            ].map((location) => (
              <div key={location.city} className="card-shadow p-6 text-center">
                <MapPin className="w-6 h-6 mx-auto mb-4 text-black" />
                <h3 className="font-bold text-black mb-1">{location.city}</h3>
                <p className="text-gray-600 text-sm mb-1">{location.address}</p>
                <p className="text-gray-500 text-xs">{location.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA
        title="Prefer to Email Directly?"
        description="Send us a message at hello@happypitch.com and we'll get back to you within 24 hours."
        primaryButtonText="Email Us Now"
        primaryButtonHref="mailto:hello@happypitch.com"
      />
    </>
  );
}
