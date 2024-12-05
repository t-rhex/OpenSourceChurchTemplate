"use client";

import { motion } from "framer-motion";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function PageLayout({ 
  children, 
  className = "", 
  animate = true 
}: PageLayoutProps) {
  if (!animate) {
    return (
      <div className={`min-h-screen pt-[120px] sm:pt-[140px] ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen pt-[120px] sm:pt-[140px] ${className}`}
    >
      {children}
    </motion.div>
  );
} 