"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { headerConfig } from "@/configs/HeaderConfig";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      {/* Announcement Bar */}
      <div className="bg-darkMossGreen text-white text-center py-2 text-sm font-medium tracking-wide">
        {headerConfig.subheader.name}
      </div>

      {/* Main Header */}
      <div className="mx-2 sm:mx-4 mt-2 sm:mt-4">
        <header
          className={cn(
            "w-full rounded-full transition-all duration-300",
            "bg-gray-100/95 backdrop-blur-sm",
            "border border-gray-200/20",
            "px-2 sm:px-4",
            isScrolled && "shadow-lg"
          )}
        >
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={headerConfig.logo.src}
                alt={headerConfig.logo.alt}
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {headerConfig.navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
              >
                Contact Us
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-1 sm:p-2"
              aria-label="Open menu"
              title="Open menu"
            >
              <Menu className="text-gray-600" />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src={headerConfig.logo.src}
                    alt={headerConfig.logo.alt}
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                  aria-label="Close menu"
                  title="Close menu"
                >
                  <X className="text-gray-600" />
                </button>
              </div>
              <nav className="flex-1 overflow-auto px-4 py-2">
                {headerConfig.navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-base sm:text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white rounded-full">Contact Us</Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
