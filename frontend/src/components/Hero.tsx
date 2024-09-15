"use client";

import { heroConfig } from "../configs/HeroConfig";
import FeatureCard from "./ui/FeatureCard";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Welcome from "./Welcome";
import ImageCarousel from "./ui/ImageCarousel";
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  {
    ssr: false,
  }
);

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-white to-green-50 text-pakistanGreen py-16">
      <MotionDiv
        className="container mx-auto px-4 space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}>
        <ImageCarousel />
        <Welcome />
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}>
          {heroConfig.features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                feature={feature}
                animationDelay={`${index * 100}ms`}
              />
            </motion.div>
          ))}
        </motion.div>
      </MotionDiv>
    </section>
  );
}
