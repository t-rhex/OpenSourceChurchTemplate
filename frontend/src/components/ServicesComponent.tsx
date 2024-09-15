"use client";

import ImageCard from "./ui/ImageCard";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ServicesConfig } from "@/configs/ServicesConfig";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function ServicesComponent() {
  const { cardImages } = ServicesConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="bg-offwhite text-pakistanGreen py-16 lg:py-24">
      <MotionDiv
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}>
          {cardImages.map((card, index) => (
            <ImageCard
              key={index}
              imageSrc={card.src}
              title={card.title}
              subTitle={card.subTitle}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </MotionDiv>
    </section>
  );
}
