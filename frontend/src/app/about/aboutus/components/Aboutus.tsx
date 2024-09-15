"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { aboutConfig } from "../../config/AboutConfig";
import WhyJesusModal from "@/components/Modal/whyjesus";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-white to-green-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4">
            {aboutConfig.hero.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl  max-w-2xl mx-auto text-darkMossGreen">
            {aboutConfig.hero.subtitle}
          </motion.p>
          <div className="mt-4 flex justify-center items-center">
            <WhyJesusModal />
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              {aboutConfig.story.title}
            </h2>
            <p className="text-lg text-darkMossGreen mb-6">
              {aboutConfig.story.content}
            </p>
            <Button className="group bg-darkMossGreen text-white">
              {aboutConfig.story.buttonText}
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src={aboutConfig.story.image}
              alt={aboutConfig.story.imageAlt}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
            {aboutConfig.mission.title}
          </h2>
          <p className="text-lg text-darkMossGreen text-center">
            {aboutConfig.mission.content}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
            What We Believe
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutConfig.values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <value.icon className="mx-auto h-12 w-12 text-earthYellow mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-darkMossGreen">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
