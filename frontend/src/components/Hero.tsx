"use client";

import { heroConfig } from "../configs/HeroConfig";
import FeatureCard from "./ui/FeatureCard";
import Welcome from "./Welcome";
import ImageCarousel from "./ui/ImageCarousel";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 text-pakistanGreen py-16">
      <div className="container mx-auto px-4 space-y-16">
        <ImageCarousel />
        <Welcome />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {heroConfig.features.map((feature, index) => (
            <div key={index}>
              <FeatureCard
                feature={feature}
                animationDelay={`${index * 0.2}s`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
