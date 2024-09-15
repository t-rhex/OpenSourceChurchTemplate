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
  const [mobileDropdowns, setMobileDropdowns] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
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
      className="bg-white shadow-sm">
      {headerConfig.subheader.enabled && (
        <div className="bg-pakistanGreen text-white text-center py-2">
          <p className="text-xs sm:text-sm md:text-base">
            {headerConfig.subheader.name}
          </p>
        </div>
      )}
      <div className="container mx-auto px-4 py-2 sm:py-4">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col items-center">
              <Image
                className="h-8 w-auto sm:h-10 md:h-12 lg:h-14"
                src={headerConfig.logo.src}
                alt={headerConfig.logo.alt}
                width={100}
                height={100}
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-8">
            {headerConfig.navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-darkMossGreen hover:text-earthYellow"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }>
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                              onClick={closeDropdowns}>
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
                    className="text-darkMossGreen hover:text-earthYellow">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {headerConfig.buttons
              .filter((button) => button.enabled)
              .map((button, index) =>
                button.component ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}>
                    {React.createElement(button.component, { closeMenu })}
                  </motion.div>
                ) : (
                  <Link
                    key={button.name}
                    href={button.href}
                    className={`text-xs sm:text-sm md:text-sm lg:text-base font-medium transition-colors duration-200 ${
                      button.variant === "primary"
                        ? "bg-darkMossGreen text-white hover:bg-earthYellow px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-md"
                        : "text-darkMossGreen hover:text-gray-900"
                    }`}>
                    {button.name}
                  </Link>
                )
              )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 p-2"
              aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden container mx-auto px-4 py-2 sm:py-4 overflow-hidden">
            <div className="flex flex-col space-y-2 sm:space-y-4">
              {headerConfig.buttons
                .filter((button) => button.enabled)
                .map((button, index) =>
                  button.component ? (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}>
                      {React.createElement(button.component, { closeMenu })}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}>
                      <Link
                        href={button.href}
                        className={`block text-center text-sm sm:text-base font-medium transition-colors duration-200 ${
                          button.variant === "primary"
                            ? "bg-darkMossGreen text-white hover:bg-earthYellow px-3 py-2 rounded-md"
                            : "text-darkMossGreen hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md"
                        }`}
                        onClick={closeMenu}>
                        {button.name}
                      </Link>
                    </motion.div>
                  )
                )}
              {headerConfig.navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (index + headerConfig.buttons.length) * 0.1,
                  }}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setMobileDropdowns((prev) => ({
                            ...prev,
                            [item.name]: !prev[item.name],
                          }))
                        }
                        className="flex items-center justify-between w-full text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm sm:text-base font-medium">
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileDropdowns[item.name] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileDropdowns[item.name] && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm"
                              onClick={closeMenu}>
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm sm:text-base font-medium"
                      onClick={closeMenu}>
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function HeaderSkeleton() {
  return (
    <div className="bg-white shadow-sm animate-pulse">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          <div className="w-24 sm:w-32 h-6 sm:h-8 bg-gray-200 rounded"></div>
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-16 sm:w-20 h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="w-20 sm:w-24 h-6 sm:h-8 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="md:hidden w-6 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
