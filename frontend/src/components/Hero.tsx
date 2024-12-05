"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#1a1a1a] -mt-[120px] sm:-mt-[140px]">
      {/* Full width hero image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/icons/new-placeholder.svg"
          alt="Church Community"
          fill
          className="object-cover object-center opacity-60"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-[120px] sm:pt-[140px]">
          <div className="max-w-4xl space-y-6">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We exist to know, enjoy, and express the love of Jesus
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Love God | Love People | Serve People
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="/visit"
                className="px-8 py-3 text-base font-medium bg-earthYellow text-black rounded-full
                         hover:bg-earthYellow/90 transition-all duration-300 
                         inline-flex items-center justify-center sm:w-auto w-full
                         border border-earthYellow shadow-md hover:shadow-lg"
              >
                Visit In-Person
              </Link>
              <Link
                href="/watch"
                className="px-8 py-3 text-base font-medium text-white bg-darkMossGreen/80 rounded-full
                         hover:bg-darkMossGreen transition-all duration-300 
                         inline-flex items-center justify-center sm:w-auto w-full
                         border border-earthYellow/20 shadow-md hover:shadow-lg"
              >
                Watch Online
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
