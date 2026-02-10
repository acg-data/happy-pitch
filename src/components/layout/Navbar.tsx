"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Resources", href: "/resources" },
  { name: "Case Studies", href: "/case-studies" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Check if current page is dark (has dark hero)
  const darkPages = ["/about", "/solutions", "/case-studies", "/contact", "/resources", "/pricing", "/locations"];
  const isDarkPage = darkPages.some((page) => pathname === page || pathname.startsWith(page));

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent",
        isDarkPage && !isScrolled ? "text-white" : "text-black"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                isDarkPage && !isScrolled ? "bg-white" : "bg-black"
              )}
            >
              <span
                className={cn(
                  "font-bold text-sm",
                  isDarkPage && !isScrolled ? "text-black" : "text-white"
                )}
              >
                HP
              </span>
            </div>
            <span
              className={cn(
                "font-bold text-lg",
                isDarkPage && !isScrolled ? "text-white" : "text-black"
              )}
            >
              Happy Pitch
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isDarkPage && !isScrolled
                    ? isActive(link.href)
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                    : isActive(link.href)
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm transition-all duration-200",
                isDarkPage && !isScrolled
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-black text-white hover:bg-gray-800"
              )}
            >
              Request Samples
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="/case-studies"
              className={cn(
                "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm transition-all duration-200",
                isDarkPage && !isScrolled
                  ? "bg-transparent text-white border border-white/30 hover:bg-white/10"
                  : "bg-white text-black border border-gray-200 hover:bg-gray-50"
              )}
            >
              Case Studies
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2",
              isDarkPage && !isScrolled ? "text-white" : "text-black"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
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
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium px-2 py-2 text-left transition-colors",
                    isActive(link.href)
                      ? "text-black font-semibold"
                      : "text-gray-700 hover:text-black"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-2">
                <Link
                  href="/contact"
                  className="btn-pill-primary w-full justify-center"
                >
                  Request Samples
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
                <Link
                  href="/case-studies"
                  className="btn-pill-secondary w-full justify-center"
                >
                  Case Studies
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
