"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { headerConfig } from "@/configs/HeaderConfig";
import { useLanguage } from "@/components/LanguageContext";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
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
      {/* Top Bar */}

      {/* Main Header */}
      <div>
        <header
          className={cn(
            "w-full transition-all duration-300",
            "bg-gray-100/95 backdrop-blur-sm",
            "border border-gray-200/20",
            "px-2 sm:px-4",
            isScrolled && "shadow-lg"
          )}
        >
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link href="/" className="ml-4 flex-shrink-0">
              <div className="flex items-end justify-self-begin">
                <Image
                  src={headerConfig.logo.src}
                  alt={headerConfig.logo.alt}
                  width={120}
                  height={50}
                  className="h-10 w-auto"
                  priority
                />
                <span className="ml-4 text-3xl font-bold text-gray-600">
                  {t(headerConfig.logo.zhName, headerConfig.logo.enName)}
                </span>
              </div>
            </Link>

            {/* Nav */}
            <div className="flex justify-items-stretch items-center gap-4 sm:gap-6">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8 ml-auto">
                {headerConfig.navItems.map((item) => (
                  <Link
                    key={t(item.zname, item.ename)}
                    href={item.href}
                    className="text-md font-medium text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    {t(item.zname, item.ename)}
                  </Link>
                ))}
              </nav>

              {/* Language Toggle Button */}
              <Button
                variant="ghost"
                size="lg"
                onClick={toggleLanguage}
                className="text-gray-600 hover:text-amber-600 px-3 py-1 justify-self-end ml-auto hover:bg-transparent"
              >
                <Languages className="w-4 h-4 mr-1" />
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-1 sm:p-2 ml-auto justify-self-end"
                aria-label="Open menu"
                title="Open menu"
              >
                <Menu className="text-gray-600" />
              </button>
            </div>
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
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex"
                >
                  <Image
                    src={headerConfig.logo.src}
                    alt={headerConfig.logo.alt}
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <span className="ml-2 text-2xl font-bold text-gray-800">
                    {t(headerConfig.logo.zhName, headerConfig.logo.enName)}
                  </span>
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
              <nav className="flex-1 overflow-auto px-4 py-2 border-b">
                {headerConfig.navItems.map((item) => (
                  <Link
                    key={t(item.zname, item.ename)}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-base sm:text-lg font-medium text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    {t(item.zname, item.ename)}
                  </Link>
                ))}
              </nav>
              <Button
                variant="ghost"
                size="lg"
                onClick={toggleLanguage}
                className="block flex py-2 text-base sm:text-lg font-medium text-gray-600 hover:text-amber-600 transition-colors"
              >
                <Languages className="w-4 h-4 mr-1" />
                {language === "en" ? "换到中文" : "Switch to English"}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
