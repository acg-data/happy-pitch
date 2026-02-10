"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface FooterCTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function FooterCTA({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: FooterCTAProps) {
  return (
    <section className="section-dark py-16 lg:py-24">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryButtonHref}
              className="btn-pill-white"
            >
              {primaryButtonText}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className="btn-pill-outline-white"
              >
                {secondaryButtonText}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
