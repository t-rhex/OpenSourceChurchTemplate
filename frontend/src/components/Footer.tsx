"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { footerConfig } from "@configs/FooterConfig";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Expand all sections on large screens by default
      if (window.innerWidth >= 1024) {
        setExpandedSections(
          Array.from({ length: footerConfig.sections.length }, (_, i) => i)
        );
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (isLoading) {
    return <FooterSkeleton />;
  }

  return (
    <footer className="bg-pakistanGreen text-cornsilk py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-8">
          {footerConfig.sections
            .filter((section) => section.enabled)
            .map((section, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex justify-between items-center w-full text-left font-semibold mb-2 text-earthYellow focus:outline-none focus:ring-2 focus:ring-earthYellow rounded"
                  aria-expanded={expandedSections.includes(index)}
                  aria-controls={`section-${index}`}>
                  <h3>{section.title}</h3>
                  {expandedSections.includes(index) ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {expandedSections.includes(index) && (
                    <motion.ul
                      id={`section-${index}`}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={{
                        expanded: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="space-y-2 overflow-hidden">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="hover:text-earthYellow focus:outline-none focus:ring-2 focus:ring-earthYellow rounded">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
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
        <div className="border-t border-darkMossGreen pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <div className="h-4 bg-darkMossGreen rounded w-3/4"></div>
            </div>
            <div className="flex space-x-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="h-6 w-6 bg-darkMossGreen rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-sm text-center md:text-left">
            <div className="h-4 bg-darkMossGreen rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-darkMossGreen rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
