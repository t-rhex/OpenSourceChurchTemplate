"use client";

import { motion } from "framer-motion";
import { FeatureConfig } from "@/types/FeatureConfig";
import Image from "next/image";
import Link from "next/link";

interface FeatureCardProps {
  feature: FeatureConfig;
  animationDelay: string;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Link href={feature.button.href} className="block h-full">
      <motion.div
        className="group relative h-full rounded-xl overflow-hidden bg-background-primary shadow-md 
                   hover:shadow-xl transition-all duration-300"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10]">
          <Image
            src={feature.backgroundImage}
            alt={feature.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-background-dark/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6 sm:p-8">
          <div className="space-y-4">
            {/* Icon */}
            <div className="mb-4">
              <feature.icon className="text-primary w-8 h-8 opacity-90" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl sm:text-2xl text-gray-900 font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed">
              {feature.description}
            </p>
            
            {/* Button */}
            <div className="pt-4">
              <span className="inline-flex items-center text-base font-medium text-primary group-hover:text-primary-dark transition-colors duration-300">
                {feature.button.text}
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
