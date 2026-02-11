"use client";

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const industries = [
  { label: 'Pharma', slug: 'pharma', icon: '💊' },
  { label: 'Biotech', slug: 'biotech', icon: '🧬' },
  { label: 'Private Equity', slug: 'private-equity', icon: '📈' },
  { label: 'Private Credit', slug: 'private-credit', icon: '💳' },
  { label: 'Venture Capital', slug: 'venture-capital', icon: '🚀' },
  { label: 'Family Office', slug: 'family-office', icon: '🏛️' },
  { label: 'Digital Transformation', slug: 'digital-transformation', icon: '💻' },
  { label: 'Food & Beverages', slug: 'food-beverages', icon: '🍽️' },
  { label: 'SaaS', slug: 'saas', icon: '☁️' },
  { label: 'CPG', slug: 'cpg', icon: '🛍️' },
];

const services = [
  { label: 'Corporate Presentations', slug: 'corporate-presentation' },
  { label: 'Pitch Decks', slug: 'pitch-decks' },
  { label: 'Investor Memos', slug: 'investor-memos' },
  { label: 'CIMs', slug: 'cims' },
  { label: 'Sales Decks', slug: 'sales-decks' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const industriesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleIndustriesEnter = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setIsIndustriesOpen(true);
  };

  const handleIndustriesLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIsIndustriesOpen(false);
    }, 150);
  };

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Resources', href: '#resources' },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <nav
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'bg-white/70 backdrop-blur-md'
        } rounded-full border border-white/20`}
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Happy Pitch
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <button className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1">
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {/* Services Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${isServicesOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                    }`}
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-gray-100/50 p-4 w-[320px]">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                      Our Services
                    </p>
                    <div className="flex flex-col gap-1">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="px-3 py-2.5 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50/50 rounded-lg transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 my-2"></div>
                      <Link
                        href="/services"
                        className="px-3 py-2.5 text-sm font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors flex items-center gap-1"
                      >
                        View All Services
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div
                ref={industriesRef}
                className="relative"
                onMouseEnter={handleIndustriesEnter}
                onMouseLeave={handleIndustriesLeave}
              >
                <button className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1">
                  Industries
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isIndustriesOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {/* Industries Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${isIndustriesOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                    }`}
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-gray-100/50 p-4 w-[420px]">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                      Industries We Serve
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {industries.map((industry) => (
                        <Link
                          key={industry.slug}
                          href={`/industries/${industry.slug}`}
                          className="px-3 py-2.5 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50/50 rounded-lg transition-colors flex items-center gap-2"
                        >
                          <span className="text-lg">{industry.icon}</span>
                          {industry.label}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 my-2"></div>
                    <Link
                      href="/industries"
                      className="px-3 py-2.5 text-sm font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors flex items-center gap-1"
                    >
                      View All Industries
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-1">
                Request Samples
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white/50 hover:bg-white rounded-full border border-gray-200/50 transition-all flex items-center gap-1">
                Case Studies
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100/50">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50/50 transition-colors py-2 px-2 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Services Accordion */}
                <button
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors py-2 px-2 flex items-center justify-between rounded-lg hover:bg-purple-50/50"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 pb-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="text-sm text-gray-600 hover:text-purple-600 transition-colors py-1.5"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors py-1.5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      View All Services
                    </Link>
                  </div>
                )}

                {/* Mobile Industries Accordion */}
                <button
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors py-2 px-2 flex items-center justify-between rounded-lg hover:bg-purple-50/50"
                  onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                >
                  Industries
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isMobileIndustriesOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {isMobileIndustriesOpen && (
                  <div className="pl-4 flex flex-col gap-1 pb-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        className="text-sm text-gray-600 hover:text-purple-600 transition-colors py-1.5 flex items-center gap-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{industry.icon}</span>
                        {industry.label}
                      </Link>
                    ))}
                    <Link
                      href="/industries"
                      className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors py-1.5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      View All Industries
                    </Link>
                  </div>
                )}

                <div className="flex flex-col gap-2 pt-4 px-2">
                  <button className="px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-1">
                    Request Samples
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-all flex items-center justify-center gap-1">
                    Case Studies
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
