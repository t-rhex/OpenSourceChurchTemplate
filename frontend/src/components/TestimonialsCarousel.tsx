"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { QuoteIcon } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-earthYellow/10">
        <QuoteIcon className="w-32 h-32" />
      </div>

      <div className="relative">
        <div className="flex items-center justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto px-4">
            <div className="mb-6">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-earthYellow">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg md:text-xl text-white/90 italic mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              <h4 className="text-earthYellow font-semibold">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-white/60 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 
                ${index === currentIndex ? "bg-earthYellow w-4" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
