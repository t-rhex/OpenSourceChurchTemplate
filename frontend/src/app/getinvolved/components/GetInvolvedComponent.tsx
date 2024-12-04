"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getInvolvedContent } from "../config/GetInvolvedConfig";
import { Heart, ArrowRight } from "lucide-react";

export default function GetInvolvedComponent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gray-900 -mt-[104px] md:-mt-[112px]">
        <div className="absolute inset-0">
          <Image
            src={getInvolvedContent.hero.backgroundImage || "/images/get-involved-header.jpg"}
            alt=""
            fill
            className="object-cover object-center opacity-60"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
        </div>

        {/* Hero Content - Updated padding to match Watch and About pages */}
        <div className="relative min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 pt-[104px] md:pt-[112px]">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                {getInvolvedContent.hero.title}
              </h1>
              <p className="mt-6 text-xl sm:text-2xl text-white/90 font-medium">
                {getInvolvedContent.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        {/* Opportunities Grid */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-darkMossGreen"
          >
            Ways to Get Involved
          </motion.h2>
          
          <div className={`grid gap-8 ${
            getInvolvedContent.opportunities.length === 1 
              ? 'md:grid-cols-1 max-w-lg mx-auto' 
              : getInvolvedContent.opportunities.length === 2 
                ? 'md:grid-cols-2 max-w-3xl mx-auto'
                : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {getInvolvedContent.opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={opportunity.image}
                      alt={opportunity.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-darkMossGreen">
                      {opportunity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-pakistanGreen/80 mb-6">
                      {opportunity.description}
                    </p>
                    <Button 
                      className="w-full bg-darkMossGreen hover:bg-earthYellow text-white"
                      onClick={() => window.location.href = opportunity.link}
                    >
                      Get Involved
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center bg-darkMossGreen/5 rounded-2xl p-12"
        >
          <Heart className="w-12 h-12 text-earthYellow mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-darkMossGreen mb-4">
            {getInvolvedContent.callToAction.title}
          </h2>
          <p className="text-lg text-pakistanGreen/80 mb-8">
            {getInvolvedContent.callToAction.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-darkMossGreen hover:bg-earthYellow text-white"
              onClick={() => window.location.href = getInvolvedContent.callToAction.primaryButton.link}
            >
              {getInvolvedContent.callToAction.primaryButton.text}
            </Button>
            <Button 
              variant="outline"
              className="border-darkMossGreen text-darkMossGreen hover:bg-darkMossGreen hover:text-white"
              onClick={() => window.location.href = getInvolvedContent.callToAction.secondaryButton.link}
            >
              {getInvolvedContent.callToAction.secondaryButton.text}
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 