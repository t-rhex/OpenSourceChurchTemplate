"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, DollarSign, Gift } from "lucide-react";
import Image from "next/image";
import { giveConfig } from "../config/GiveConfig";
import { useRouter } from "next/navigation";

export default function GiveComponent() {
  const [amount, setAmount] = useState("");
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
          <motion.section variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              {giveConfig.hero.title}
            </h1>
            <p className="text-xl text-darkMossGreen max-w-2xl mx-auto">
              {giveConfig.hero.subtitle}
            </p>
          </motion.section>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-semibold text-gray-800">
                    <Heart className="mr-2 h-6 w-6 text-earthYellow" />
                    {giveConfig.whyWeGive.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-darkMossGreen mb-4">
                    {giveConfig.whyWeGive.content}
                  </p>
                  <blockquote className="border-l-4 border-earthYellow pl-4 italic text-darkMossGreen">
                    &ldquo;{giveConfig.whyWeGive.quote.text}&rdquo;
                    <footer className="text-right">
                      - {giveConfig.whyWeGive.quote.source}
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-semibold text-gray-800">
                    <Gift className="mr-2 h-6 w-6 text-earthYellow" />
                    Testimonials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {giveConfig.testimonials.map((testimonial, index) => (
                        <p key={index} className="text-darkMossGreen italic">
                          &ldquo;{testimonial.text}&rdquo; - {testimonial.author}
                        </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-semibold text-gray-800">
                    <DollarSign className="mr-2 h-6 w-6 text-earthYellow" />
                    {giveConfig.giveNow.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="one-time" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="one-time">
                        {giveConfig.giveNow.oneTime.label}
                      </TabsTrigger>
                      <TabsTrigger value="recurring">
                        {giveConfig.giveNow.recurring.label}
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="one-time" className="mt-4">
                      <form className="space-y-4">
                        <div>
                          <Label htmlFor="amount">Amount</Label>
                          <Input
                              id="amount"
                              type="number"
                              placeholder="Enter amount"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                        <Button onClick={()=> handleClick("https://rcminn.churchcenter.com/giving?open-in-church-center-modal=true")} className="w-full bg-darkMossGreen text-white hover:bg-earthYellow">
                          Give Now
                        </Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="recurring" className="mt-4">
                      <form className="space-y-4">
                        <div>
                          <Label htmlFor="recurring-amount">Amount</Label>
                          <Input
                              id="recurring-amount"
                              type="number"
                              placeholder="Enter amount"
                          />
                        </div>
                        <div>
                          <Label htmlFor="frequency">Frequency</Label>
                          <select
                              id="frequency"
                              className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-earthYellow focus:ring focus:ring-earthYellow focus:ring-opacity-50">
                            {giveConfig.giveNow.recurring.frequencies.map(
                                (frequency) => (
                                    <option key={frequency}>{frequency}</option>
                                )
                            )}
                          </select>
                        </div>
                        <Button onClick={()=> handleClick("https://rcminn.churchcenter.com/giving?open-in-church-center-modal=true")} className="w-full bg-darkMossGreen text-white hover:bg-earthYellow">
                          {giveConfig.giveNow.recurring.buttonText}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-semibold text-gray-800">
                    {giveConfig.otherWays.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {giveConfig.otherWays.methods.map((method, index) => (
                        <li key={index} className="flex items-center">
                          <method.icon className="mr-2 h-5 w-5 text-earthYellow" />
                          <span className="text-darkMossGreen">{method.text}</span>
                        </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-semibold text-gray-800">
                    {giveConfig.digitalPayments.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {giveConfig.digitalPayments.options.map((app) => (
                        <div key={app} className="text-center">
                          <h3 className="font-semibold mb-2 text-darkMossGreen">
                            {app}
                          </h3>
                          <div className="bg-white p-2 rounded-lg shadow-md inline-block">
                            <Image
                                src={
                                    giveConfig.digitalPayments.qrCodes.find(
                                        (qr) => qr.app === app
                                    )?.qrCode || "/assets/dummyqr.png"
                                }
                                alt={`${app} QR Code`}
                                width={100}
                                height={100}
                            />
                          </div>
                          <p className="mt-2 text-sm text-darkMossGreen">
                            Scan to donate via {app}
                          </p>
                        </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
  );
}
