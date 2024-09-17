"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Car, Bus, Train } from "lucide-react";
import { locationConfig } from "../config/LocationConfig";
import { useRouter } from "next/navigation";

export default function ChurchLocation() {
  const [activeTab, setActiveTab] = useState("car");
  const router = useRouter();
  const handleClick = (link:string) => {
    router.push(link);
  }


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 space-y-16">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
          {locationConfig.title}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div variants={itemVariants}>
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
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe
                    src={locationConfig.location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"></iframe>
                </div>
                <Button onClick={()=> handleClick(locationConfig.location.direction)} className="w-full bg-darkMossGreen text-white hover:bg-earthYellow">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {locationConfig.whatToExpect.enabled && (
            <motion.div variants={itemVariants} className="space-y-8">
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

          <motion.div variants={itemVariants} className="space-y-8">
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

            {locationConfig.directions.enabled && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800">
                    How to Get Here
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="car">
                        <Car className="mr-2 h-4 w-4" />
                        Car
                      </TabsTrigger>
                      <TabsTrigger value="bus">
                        <Bus className="mr-2 h-4 w-4" />
                        Bus
                      </TabsTrigger>
                      <TabsTrigger value="train">
                        <Train className="mr-2 h-4 w-4" />
                        Train
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="car" className="mt-4">
                      <p className="text-darkMossGreen">
                        {locationConfig.directions.car}
                      </p>
                    </TabsContent>
                    <TabsContent value="bus" className="mt-4">
                      <p className="text-darkMossGreen">
                        {locationConfig.directions.bus}
                      </p>
                    </TabsContent>
                    <TabsContent value="train" className="mt-4">
                      <p className="text-darkMossGreen">
                        {locationConfig.directions.train}
                      </p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
