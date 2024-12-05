"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { components } from "@/configs/DesignSystem";
import { HandHeartIcon, UsersIcon, BookOpenIcon } from "lucide-react";

// This can later be moved to a config file or fetched from API
const aboutContent = {
  hero: {
    title: "About Us",
    subtitle: "A community united in faith, service, and love",
    backgroundImage: "/assets/icons/new-placeholder.svg",
  },
  story: {
    title: "Our Story",
    content:
      "Founded on the principles of love, compassion, and community service, Revival Center has been a beacon of hope in our community. We believe in creating an inclusive environment where everyone can experience God's love and grow in their faith journey.",
    image: "/assets/icons/new-placeholder.svg",
    button: {
      text: "Learn More",
      href: "/about/history",
    },
  },
  values: [
    {
      icon: HandHeartIcon,
      title: "Service & Love",
      description:
        "Dedicated to serving our community and spreading God's love through action.",
    },
    {
      icon: UsersIcon,
      title: "Community",
      description:
        "Building strong relationships and supporting each other in faith and life.",
    },
    {
      icon: BookOpenIcon,
      title: "Biblical Teaching",
      description: "Committed to sound biblical teaching and spiritual growth.",
    },
  ],
  mission: {
    title: "Our Mission",
    content:
      "To know, enjoy, and express the love of Jesus through authentic worship, meaningful relationships, and service to our community.",
    stats: [
      { number: "1000+", label: "Members" },
      { number: "50+", label: "Ministries" },
      { number: "20+", label: "Years of Service" },
    ],
  },
  team: {
    title: "Leadership Team",
    description: "Meet the dedicated individuals who help guide our community.",
    members: [
      {
        name: "Pastor John Doe",
        role: "Senior Pastor",
        image: "/assets/icons/new-placeholder.svg",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gray-900 -mt-[104px] md:-mt-[112px]">
        <div className="absolute inset-0">
          <Image
            src={aboutContent.hero.backgroundImage || "/assets/icons/new-placeholder.svg"}
            alt=""
            fill
            className="object-cover object-center opacity-60"
            priority
            quality={100}
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
                {aboutContent.hero.title}
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className={components.sections.default}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-darkMossGreen mb-4">
                {aboutContent.story.title}
              </h2>
              <p className="text-base md:text-lg text-pakistanGreen/80 mb-6">
                {aboutContent.story.content}
              </p>
              <Link href={aboutContent.story.button.href}>
                <button
                  className={`${components.buttons.primary} w-full md:w-auto`}>
                  {aboutContent.story.button.text}
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={aboutContent.story.image}
                alt="Our Story"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={components.sections.dark}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {aboutContent.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5">
                <value.icon className="w-10 h-10 md:w-12 md:h-12 text-earthYellow mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-white/80">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Stats Section */}
      <section className={components.sections.default}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-darkMossGreen mb-4">
              {aboutContent.mission.title}
            </h2>
            <p className="text-base md:text-lg text-pakistanGreen/80">
              {aboutContent.mission.content}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {aboutContent.mission.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/50">
                <div className="text-3xl md:text-4xl font-bold text-earthYellow mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-pakistanGreen">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={components.sections.dark}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {aboutContent.team.title}
            </h2>
            <p className="text-base md:text-lg text-white/80">
              {aboutContent.team.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {aboutContent.team.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={components.cards.default}>
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-darkMossGreen mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-pakistanGreen/80">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
