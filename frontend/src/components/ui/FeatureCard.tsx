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
    <Link href={feature.button.href}>
      <motion.div
        className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-white shadow-md hover:shadow-xl transition-all duration-300"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Image Container */}
        <div className="absolute inset-0">
          <Image
            src={feature.backgroundImage}
            alt={feature.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="relative h-full p-6 flex flex-col justify-end">
          <div className="space-y-3">
            {/* Icon */}
            <div className="mb-2">
              <feature.icon className="text-white w-8 h-8 opacity-90" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-2xl text-white font-bold tracking-tight">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-100 text-sm md:text-base leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
              {feature.description}
            </p>
            
            {/* Learn More Link */}
            <div className="pt-3 flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {feature.button.text}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
