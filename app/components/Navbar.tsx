"use client";

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const industries = [
  { label: 'Pharma', slug: 'pharma' },
  { label: 'Biotech', slug: 'biotech' },
  { label: 'Private Equity', slug: 'private-equity' },
  { label: 'Private Credit', slug: 'private-credit' },
  { label: 'Venture Capital', slug: 'venture-capital' },
  { label: 'Family Office', slug: 'family-office' },
  { label: 'Digital Transformation', slug: 'digital-transformation' },
  { label: 'Food & Beverages', slug: 'food-beverages' },
  { label: 'SaaS', slug: 'saas' },
  { label: 'CPG', slug: 'cpg' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Resources', href: '#resources' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-gray-900">
              Happy Pitch
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Who We Serve Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
                Who We Serve
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${isDropdownOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                  }`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-[420px]">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                    Industries
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {industries.map((industry) => (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        className="px-3 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {industry.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors flex items-center gap-1">
              Request Samples
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-1">
              Case Studies
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Who We Serve Accordion */}
              <button
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2 flex items-center justify-between"
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              >
                Who We Serve
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {isMobileDropdownOpen && (
                <div className="pl-4 flex flex-col gap-1 pb-2">
                  {industries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors py-1.5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {industry.label}
                    </Link>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-2 pt-4">
                <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-1">
                  Request Samples
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                  Case Studies
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
