"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getInvolvedConfig } from "../config/GetInvolvedConfig";
import { useRouter } from "next/navigation";

export default function GetInvolvedComponent() {
  const router = useRouter();
  const handleClick = (link:string) => {
    router.push(link);
  }
  return (
      <div className="bg-gradient-to-b from-white to-green-50 min-h-screen">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-16">
          <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
            {getInvolvedConfig.hero.title}
          </motion.h1>

          <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-center text-darkMossGreen mb-12 max-w-2xl mx-auto">
            {getInvolvedConfig.hero.subtitle}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {getInvolvedConfig.opportunities.map((opportunity, index) => (
                <motion.div
                    key={opportunity.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * (index + 3), duration: 0.5 }}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl font-semibold text-gray-800">
                        <opportunity.icon className="mr-2 h-6 w-6 text-earthYellow" />
                        {opportunity.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-darkMossGreen mb-4">
                        {opportunity.description}
                      </p>
                      <ul className="space-y-2">
                        {opportunity.options.map((option, optionIndex) => (
                            <li
                                key={optionIndex}
                                className="flex items-center text-darkMossGreen">
                              <opportunity.icon className="mr-2 h-4 w-4 text-earthYellow" />
                              {option}
                            </li>
                        ))}
                      </ul>
                      <Button onClick={()=> handleClick(opportunity.link)} className="w-full mt-4 bg-darkMossGreen text-white hover:bg-earthYellow">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  {getInvolvedConfig.upcomingOpportunities.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="this-week" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="this-week">This Week</TabsTrigger>
                    <TabsTrigger value="this-month">This Month</TabsTrigger>
                    <TabsTrigger value="special-events">
                      Special Events
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="this-week" className="mt-4">
                    <ul className="space-y-2">
                      {getInvolvedConfig.upcomingOpportunities.thisWeek.map(
                          (event, index) => (
                              <li
                                  key={index}
                                  className="flex items-center justify-between">
                          <span className="flex items-center">
                            <event.icon className="mr-2 h-4 w-4 text-earthYellow" />
                            {event.title}
                          </span>
                                <span className="text-darkMossGreen">
                            {event.time}
                          </span>
                              </li>
                          )
                      )}
                    </ul>
                  </TabsContent>
                  <TabsContent value="this-month" className="mt-4">
                    <p className="text-darkMossGreen">
                      View opportunities for the entire month here.
                    </p>
                  </TabsContent>
                  <TabsContent value="special-events" className="mt-4">
                    <p className="text-darkMossGreen">
                      Check out our upcoming special events and conferences.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {getInvolvedConfig.callToAction.title}
            </h2>
            <p className="text-xl text-darkMossGreen mb-8">
              {getInvolvedConfig.callToAction.subtitle}
            </p>
            <Button
                size="lg"
                className="bg-darkMossGreen text-white hover:bg-earthYellow">
              {getInvolvedConfig.callToAction.buttonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
  );
}
