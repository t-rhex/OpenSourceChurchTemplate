"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { headerConfig } from "../configs/HeaderConfig";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <HeaderSkeleton />;
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileDropdowns({});
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
    setMobileDropdowns({});
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {headerConfig.subheader.enabled && (
        <div className="bg-green-700 text-white text-center py-2">
          <p className="text-xs sm:text-sm md:text-base font-medium">
            {headerConfig.subheader.name}
          </p>
        </div>
      )}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                className="h-8 w-auto sm:h-10 md:h-12"
                src={headerConfig.logo.src}
                alt={headerConfig.logo.alt}
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {headerConfig.navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 text-sm font-medium group ${
                        isScrolled ? 'text-gray-800' : 'text-white'
                      } hover:text-green-700 transition-colors duration-200`}
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="py-1" role="menu">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-700"
                              onClick={closeDropdowns}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    } hover:text-green-700 transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Desktop Buttons */}
            <div className="flex items-center space-x-4">
              {headerConfig.buttons
                .filter((button) => button.enabled)
                .map((button, index) =>
                  button.component ? (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {React.createElement(button.component, { closeMenu })}
                    </motion.div>
                  ) : (
                    <Link
                      key={button.name}
                      href={button.href}
                      className={`text-sm font-medium transition-colors duration-200 ${
                        button.variant === "primary"
                          ? "bg-green-700 text-white hover:bg-green-800 px-4 py-2 rounded"
                          : isScrolled
                          ? "text-gray-800 hover:text-green-700"
                          : "text-white hover:text-green-700"
                      }`}
                    >
                      {button.name}
                    </Link>
                  )
                )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {headerConfig.navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setMobileDropdowns((prev) => ({
                            ...prev,
                            [item.name]: !prev[item.name],
                          }))
                        }
                        className="flex items-center justify-between w-full py-2 text-gray-800 hover:text-green-700"
                      >
                        <span className="text-sm font-medium">{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transform transition-transform ${
                            mobileDropdowns[item.name] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileDropdowns[item.name] && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block py-2 text-sm text-gray-600 hover:text-green-700"
                              onClick={closeMenu}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-sm font-medium text-gray-800 hover:text-green-700"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile Buttons */}
              <div className="pt-4 space-y-3">
                {headerConfig.buttons
                  .filter((button) => button.enabled)
                  .map((button, index) =>
                    button.component ? (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {React.createElement(button.component, { closeMenu })}
                      </motion.div>
                    ) : (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={button.href}
                          className={`block text-center text-sm font-medium py-2 ${
                            button.variant === "primary"
                              ? "bg-green-700 text-white hover:bg-green-800 rounded"
                              : "text-gray-800 hover:text-green-700"
                          }`}
                          onClick={closeMenu}
                        >
                          {button.name}
                        </Link>
                      </motion.div>
                    )
                  )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function HeaderSkeleton() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="w-32 h-8 bg-gray-200 rounded animate-pulse" />
          <div className="hidden md:flex space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
