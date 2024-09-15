"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { footerConfig } from "@configs/FooterConfig";

export default function Footer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <FooterSkeleton />;
  }

  const enabledSections = footerConfig.sections.filter(
    (section) => section.enabled
  );

  return (
    <footer className="bg-pakistanGreen text-cornsilk py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {enabledSections.map((section, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold mb-2 text-earthYellow">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-earthYellow focus:outline-none focus:ring-2 focus:ring-earthYellow rounded">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-darkMossGreen pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-sm">
                {footerConfig.contactInfo.address} |{" "}
                {footerConfig.contactInfo.phone}
              </p>
            </div>
            <div className="flex space-x-4">
              {footerConfig.socialMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-earthYellow hover:text-tigersEye focus:outline-none focus:ring-2 focus:ring-earthYellow rounded-full p-1"
                  aria-label={social.label}>
                  <social.icon size={24} />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 text-sm text-center md:text-left">
            <p>{footerConfig.legalInfo.copyright}</p>
            <div className="mt-2">
              {footerConfig.legalInfo.links.map((link, index) => (
                <span key={index}>
                  {index > 0 && " | "}
                  <Link
                    href={link.href}
                    className="hover:text-earthYellow focus:outline-none focus:ring-2 focus:ring-earthYellow rounded">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
            <p className="mt-2">{footerConfig.legalInfo.additionalText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterSkeleton() {
  return (
    <footer className="bg-pakistanGreen text-cornsilk py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="mb-4" data-testid="skeleton-item">
              <div className="h-6 bg-darkMossGreen rounded w-3/4 mb-2"></div>
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, linkIndex) => (
                  <div
                    key={linkIndex}
                    className="h-4 bg-darkMossGreen rounded w-1/2"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* ... rest of the skeleton ... */}
      </div>
    </footer>
  );
}
