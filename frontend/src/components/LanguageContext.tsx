"use client";

import React, { createContext, useContext, useState } from "react";

// 1. Define the context type
type LanguageContextType = {
  language: string;
  toggleLanguage: () => void;
  t: (enText: string, zhText?: string) => string;
};

// Provide a default value (null is common for JS)
const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "zh" : "en"));
  };

  const t = (zhText: string, enText?: string) => {
    return language === "zh" ? zhText : enText || zhText;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
