"use client";

import { motion } from "framer-motion";
import { FeatureConfig } from "@/types/FeatureConfig";
import Image from "next/image";

interface FeatureCardProps {
  feature: FeatureConfig;
  animationDelay: string;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <motion.div
      className="relative rounded-lg shadow-lg overflow-hidden h-full"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}>
      <Image
        src={feature.backgroundImage}
        alt=""
        fill
        className="object-cover absolute inset-0 z-0"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 p-8 h-full flex flex-col justify-between">
        <div>
          <feature.icon className="text-white w-16 h-16 mb-6" />
          <h3 className="text-2xl text-white font-bold mb-3 drop-shadow-lg">
            {feature.title}
          </h3>
          <p className="text-white text-lg mb-6 drop-shadow-md">
            {feature.description}
          </p>
        </div>
        <a
          href={feature.button.href}
          className={`${feature.button.className} text-center py-2 px-4 rounded-full transition-colors duration-300 hover:bg-opacity-90 font-semibold text-lg`}>
          {feature.button.text}
        </a>
      </div>
    </motion.div>
  );
}
