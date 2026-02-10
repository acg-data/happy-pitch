"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Solutions", href: "/solutions" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Pricing", href: "/pricing" },
      { name: "Resources", href: "/resources" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Locations", href: "/locations" },
      { name: "Industries", href: "/industries" },
      { name: "Careers", href: "/about" },
    ],
    support: [
      { name: "Contact", href: "/contact" },
      { name: "Request Samples", href: "/contact" },
      { name: "Documentation", href: "/resources" },
      { name: "FAQ", href: "/solutions" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="font-bold text-sm text-black">HP</span>
              </div>
              <span className="font-bold text-lg">Happy Pitch</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Creating exceptional pitch decks that help businesses secure funding and close deals.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="btn-pill-white text-sm"
              >
                Request Samples
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Happy Pitch. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
