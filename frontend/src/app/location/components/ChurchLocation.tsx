"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Car, Bus, Train } from "lucide-react";
import { locationConfig } from "../config/LocationConfig";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ChurchLocation() {
  const [activeTab, setActiveTab] = useState("car");
  const router = useRouter();
  
  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gray-900 -mt-[104px] md:-mt-[112px]">
        <div className="absolute inset-0">
          <Image
            src={locationConfig.hero?.backgroundImage || "/images/location-header.jpg"}
            alt=""
            fill
            className="object-cover object-center opacity-60"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 pt-[104px] md:pt-[112px]">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                {locationConfig.title}
              </h1>
              <p className="mt-6 text-xl sm:text-2xl text-white/90 font-medium">
                {locationConfig.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold text-gray-800">
                  <MapPin className="mr-2 h-6 w-6 text-earthYellow" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4 text-darkMossGreen">
                  {locationConfig.location.address}
                </p>
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src={locationConfig.location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy" />
                </div>
                <Button 
                  onClick={() => handleClick(locationConfig.location.direction)} 
                  className="w-full bg-darkMossGreen text-white hover:bg-earthYellow">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-semibold text-gray-800">
                    <Clock className="mr-2 h-6 w-6 text-earthYellow" />
                    Service Times
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {locationConfig.serviceTimes.map((service, index) => (
                      <li key={index} className="flex justify-between">
                        <span className="font-medium text-darkMossGreen">
                          {service.day}
                        </span>
                        <span className="text-darkMossGreen">{service.time}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {locationConfig.whatToExpect.enabled && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-semibold text-gray-800">
                      <Clock className="mr-2 h-6 w-6 text-earthYellow" />
                      {locationConfig.whatToExpect.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-4 text-darkMossGreen">
                      {locationConfig.whatToExpect.description}
                    </p>
                    <ul className="space-y-2">
                      {locationConfig.whatToExpect.items.map((item, index) => (
                        <li key={index} className="flex justify-between">
                          <span className="text-lg text-darkMossGreen">
                            {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
