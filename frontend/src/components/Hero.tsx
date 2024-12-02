"use client";

import { heroConfig } from "../configs/HeroConfig";
import FeatureCard from "./ui/FeatureCard";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div 
          className="relative overflow-hidden rounded-2xl bg-white shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Image Section */}
          <div className="relative h-[60vh] md:h-[70vh]">
            <Image
              src="/assets/people.jpg"
              alt="Church Community"
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            {/* Hero Content */}
            <div className="relative h-full flex flex-col justify-end text-white px-8 md:px-16 pb-16 md:pb-20">
              <div className="max-w-3xl space-y-4">
                <motion.h1 
                  className="text-3xl md:text-5xl font-bold leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We exist to know, enjoy, and express the love of Jesus
                </motion.h1>
                <motion.p 
                  className="text-base md:text-lg text-white/80 tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Serve | Listen | Eat | Rest | Pray | Share
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Link 
                    href="/visit"
                    className="bg-white text-gray-900 px-6 py-2.5 rounded font-medium 
                             hover:bg-gray-100 transition-colors duration-200 text-sm tracking-wide inline-flex items-center justify-center"
                  >
                    Visit In-Person
                  </Link>
                  <Link
                    href="/watch"
                    className="bg-green-700 text-white px-6 py-2.5 rounded font-medium
                             hover:bg-green-800 transition-colors duration-200 text-sm tracking-wide inline-flex items-center justify-center"
                  >
                    Watch Online
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {heroConfig.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <FeatureCard
                feature={feature}
                animationDelay={`${index * 0.2}s`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
