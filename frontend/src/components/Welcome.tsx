"use client";

import { motion } from "framer-motion";
import { welcomeConfig } from "../configs/WelcomeConfig";
import { Card, CardContent } from "@/components/ui/card";

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

        <div>
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Card className="h-full border-none shadow-none bg-transparent">
              <CardContent className="space-y-4 text-center">
                <p className="text-darkMossGreen text-xl leading-relaxed">
                  {welcomeConfig.message}
                </p>
                <p className="text-pakistanGreen text-md font-semibold italic">
                  {welcomeConfig.signature}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
