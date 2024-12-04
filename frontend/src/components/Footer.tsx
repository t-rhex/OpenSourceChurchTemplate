"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { footerConfig } from "@/configs/FooterConfig";
import FooterSkeleton from "./skeletons/FooterSkeleton";

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
    <footer className="bg-[#1a1a1a] text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {enabledSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-6 text-earthYellow text-lg">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-earthYellow transition-colors duration-300
                               focus:outline-none focus:ring-2 focus:ring-earthYellow/20 rounded">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-earthYellow mb-4">
              Stay Connected
            </h3>
            <p className="text-white/80 mb-8">
              Subscribe to our newsletter for updates, events, and spiritual insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20
                         text-white placeholder:text-white/50 focus:outline-none 
                         focus:border-earthYellow/50 transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-darkMossGreen/90 text-white rounded-full
                         hover:bg-darkMossGreen transition-all duration-300
                         border border-earthYellow/20 shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Revival Center. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-earthYellow text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-earthYellow text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
