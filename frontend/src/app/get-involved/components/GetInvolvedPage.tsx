"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layouts/PageLayout";
import { getInvolvedContent } from "@/configs/GetInvolvedConfig";
import { HandHeartIcon, UsersIcon, BookOpenIcon } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gray-900 -mt-[104px] md:-mt-[112px]">
        <div className="absolute inset-0">
          <Image
            src={getInvolvedContent.hero.image}
            alt="Get Involved"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
        </div>

        <div className="relative min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 pt-[104px] md:pt-[112px]">
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                {getInvolvedContent.hero.title}
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-white/90 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                {getInvolvedContent.hero.subtitle}
              </motion.p>
              <motion.p
                className="text-base text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                {getInvolvedContent.hero.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Opportunities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getInvolvedContent.opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6">
                <opportunity.icon className="w-12 h-12 text-earthYellow mb-4" />
                <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <Link
                  href={opportunity.link}
                  className="text-darkMossGreen hover:text-earthYellow transition-colors">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-darkMossGreen text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {getInvolvedContent.callToAction.title}
          </h2>
          <p className="text-lg mb-8">{getInvolvedContent.callToAction.description}</p>
          <div className="space-x-4">
            <Link
              href={getInvolvedContent.callToAction.primaryButton.link}
              className="inline-block bg-earthYellow text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              {getInvolvedContent.callToAction.primaryButton.text}
            </Link>
            <Link
              href={getInvolvedContent.callToAction.secondaryButton.link}
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-darkMossGreen transition-colors">
              {getInvolvedContent.callToAction.secondaryButton.text}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 