"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarIcon,
  MapPinIcon,
  HeartIcon,
  Music2Icon,
  HandHeartIcon,
} from "lucide-react";

// Define Feature type for better type safety
interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  link: {
    text: string;
    href: string;
  };
}

// Define Highlight type
interface Highlight {
  title: string;
  date: string;
  description: string;
  image: string;
  icon: React.ElementType;
  link: {
    text: string;
    href: string;
  };
  tags: string[];
}

const features: Feature[] = [
  {
    title: "Upcoming Events",
    description:
      "Join us for special services, community outreach, and fellowship gatherings.",
    icon: CalendarIcon,
    image: "/assets/placeholder.svg",
    link: {
      text: "View Events",
      href: "/events",
    },
  },
  {
    title: "Find Us",
    description:
      "Located in the heart of our community, we're here to serve and welcome you.",
    icon: MapPinIcon,
    image: "/assets/placeholder.svg",
    link: {
      text: "Get Directions",
      href: "/location",
    },
  },
  {
    title: "Our Mission",
    description:
      "Spreading love, hope, and compassion through faith and community service.",
    icon: HeartIcon,
    image: "/assets/placeholder.svg",
    link: {
      text: "Learn More",
      href: "/mission",
    },
  },
];

const highlights: Highlight[] = [
  {
    title: "Easter Sunday Celebration",
    date: "March 31, 2024",
    description:
      "Join us for a special Easter service celebrating the resurrection of Jesus Christ. Experience powerful worship, inspiring messages, and community fellowship.",
    image: "/assets/placeholder.svg",
    icon: Music2Icon,
    link: {
      text: "Learn More",
      href: "/events/easter-2024",
    },
    tags: ["Special Service", "Family Event"],
  },
  {
    title: "Community Outreach Program",
    date: "Starting April 2024",
    description:
      "Be part of our new community outreach initiative. Together, we'll serve our neighbors and share God's love through practical acts of service.",
    image: "/assets/placeholder.svg",
    icon: HandHeartIcon,
    link: {
      text: "Get Involved",
      href: "/outreach",
    },
    tags: ["Outreach", "Volunteer"],
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <Link
    href={feature.link.href}
    className="group block h-full bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden 
             shadow-md hover:shadow-xl transition-all duration-300 border border-earthYellow/10 hover:border-earthYellow/20">
    <div className="relative h-48 overflow-hidden">
      <Image
        src={feature.image}
        alt={feature.title}
        fill
        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-darkMossGreen mb-2">
        {feature.title}
      </h3>
      <p className="text-pakistanGreen/80 mb-4">{feature.description}</p>
      <div
        className="flex items-center text-earthYellow font-medium 
                    group-hover:text-pakistanGreen transition-colors duration-300">
        <span className="mr-2">{feature.link.text}</span>
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </Link>
);

const HighlightCard = ({ highlight }: { highlight: Highlight }) => (
  <Link
    href={highlight.link.href}
    className="group block h-full bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden 
             shadow-md hover:shadow-xl transition-all duration-300 
             border border-earthYellow/10 hover:border-earthYellow/20">
    <div className="relative h-64 overflow-hidden">
      <Image
        src={highlight.image}
        alt={highlight.title}
        fill
        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          {highlight.icon && (
            <highlight.icon className="w-5 h-5 text-earthYellow" />
          )}
          <span className="text-sm font-medium text-earthYellow">
            {highlight.date}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{highlight.title}</h3>
        <div className="flex gap-2">
          {highlight.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="p-6">
      <p className="text-pakistanGreen/80 mb-4">{highlight.description}</p>
      <div
        className="flex items-center text-earthYellow font-medium 
                    group-hover:text-pakistanGreen transition-colors duration-300">
        <span className="mr-2">{highlight.link.text}</span>
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </Link>
);

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-cornsilk/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <HighlightCard highlight={highlight} />
            </motion.div>
          ))}
        </div>

        {/* Regular Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
