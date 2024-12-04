"use client";

import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  description?: string;
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage,
  description,
}: PageHeaderProps) {
  return (
    <div className="relative bg-gray-900 -mt-[104px] md:-mt-[112px]">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover object-center opacity-60"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
        </div>
      )}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 pt-[104px] md:pt-[112px]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-xl sm:text-2xl text-white/90 font-medium">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="mt-4 text-lg text-white/80">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
