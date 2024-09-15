"use client";

import { motion } from "framer-motion";
import { welcomeConfig } from "../configs/WelcomeConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Welcome() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="py-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}>
      <div className="container mx-auto px-4 space-y-16">
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-pakistanGreen mb-4">
            {welcomeConfig.title}
          </h2>
          <div className="w-24 h-1 bg-earthYellow mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Card className="h-full border-none shadow-none bg-transparent">
              <CardContent className="space-y-4">
                <p className="text-darkMossGreen text-2xl leading-relaxed">
                  {welcomeConfig.message}
                </p>
                <p className="text-pakistanGreen text-md font-semibold italic">
                  {welcomeConfig.signature}
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={containerVariants}>
            <Card className="border-none bg-transparent">
              <CardHeader>
                <CardTitle className="text-3xl ">Get Involved</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {welcomeConfig.involvementAreas.map((area, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Link href={area.href} passHref>
                      <Button
                        variant="outline"
                        className="w-full text-2xl justify-between text-left text-pakistanGreen hover:text-cornsilk hover:bg-pakistanGreen transition-all duration-300 bg-transparent border-none">
                        {area.name}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
