import { ChevronRight, MapPin, Phone, Mail, Clock, Users } from "lucide-react";
import { FooterCTA } from "@/components/shared/FooterCTA";

const locations = [
  {
    city: "New York",
    country: "United States",
    address: "123 Broadway, Suite 500",
    region: "Americas HQ",
    phone: "+1 (555) 123-4567",
    email: "ny@happypitch.com",
    hours: "Mon - Fri: 9AM - 6PM EST",
    team: "15 team members",
    specialties: ["Fintech", "SaaS", "Healthcare"],
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "45 Old Street, EC1V 9HX",
    region: "EMEA HQ",
    phone: "+44 20 7123 4567",
    email: "ldn@happypitch.com",
    hours: "Mon - Fri: 9AM - 6PM GMT",
    team: "12 team members",
    specialties: ["Fintech", "CleanTech", "E-commerce"],
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "88 Market Street, #15-01",
    region: "APAC HQ",
    phone: "+65 6123 4567",
    email: "sg@happypitch.com",
    hours: "Mon - Fri: 9AM - 6PM SGT",
    team: "8 team members",
    specialties: ["Fintech", "Logistics", "Marketplaces"],
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-dark min-h-[60vh] flex items-center pt-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Global Reach,
              <span className="block text-gray-400">Local Expertise</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              With offices in major startup hubs around the world, we&apos;re ready 
              to help founders everywhere create pitch decks that win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#locations" className="btn-pill-white">
                Find an Office
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
              <a href="/contact" className="btn-pill-outline-white">
                Contact Us
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section id="locations" className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Our Offices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our global locations or schedule a virtual meeting
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div key={location.city} className="card-shadow p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{location.city}</h3>
                    <p className="text-gray-500">{location.country}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {location.region}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-gray-700 text-sm hover:text-black">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <a href={`mailto:${location.email}`} className="text-gray-700 text-sm hover:text-black">
                      {location.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{location.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{location.team}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-black mb-3">Industry Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {location.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Meetings */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Can&apos;t Visit in Person?
              </h2>
              <p className="text-gray-600 mb-8">
                We work with founders worldwide through virtual meetings. Schedule 
                a video call with our team to discuss your project from anywhere 
                in the world.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-gray-700">Video consultations available worldwide</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-gray-700">Flexible scheduling across time zones</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-gray-700">Same quality service as in-person meetings</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-lg">Virtual Meeting</p>
                <p className="text-sm">Video call illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="bg-gray-100 rounded-3xl aspect-[21/9] flex items-center justify-center">
            <div className="text-center text-gray-400">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg">Global Map</p>
              <p className="text-sm">Interactive map showing all locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA
        title="Visit Us or Connect Virtually"
        description="Ready to start your project? Reach out to your nearest office or schedule a virtual consultation."
        primaryButtonText="Contact an Office"
        primaryButtonHref="/contact"
      />
    </>
  );
}
