"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { giveConfig } from "../config/GiveConfig";
import type { GivingMethod, PaymentOption } from "../config/GiveConfig";
import PageHeader from "@/components/sections/PageHeader";
import { CreditCard } from "lucide-react";

export default function GiveComponent() {
  const [mounted, setMounted] = useState(false);
  const [givingMethods, setGivingMethods] = useState<GivingMethod[]>([]);
  const [paymentOptions, setPaymentOptions] = useState<PaymentOption[]>([]);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchGivingData = async () => {
      try {
        const response = await fetch("/api/giving-methods");
        const data = await response.json();
        setGivingMethods(data.givingMethods);
        setPaymentOptions(data.paymentOptions);
      } catch (error) {
        console.error("Failed to fetch giving methods:", error);
      }
    };

    fetchGivingData();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <PageHeader {...giveConfig.header} />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Scripture Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center">
            <blockquote className="text-xl italic text-gray-700">
              &quot;{giveConfig.scripture.verse}&quot;
              <footer className="mt-2 text-gray-600">
                - {giveConfig.scripture.reference}
              </footer>
            </blockquote>
          </motion.div>

          {/* Main Giving Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12">
            <Button
              size="lg"
              className="w-full py-8 text-xl"
              onClick={() => router.push(giveConfig.mainGivingLink)}>
              Give Now
            </Button>
          </motion.div>

          {/* Giving Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {givingMethods.map((method) => {
              const IconComponent = CreditCard; // Fallback to CreditCard if no icon
              return (
                <Card
                  key={method.id}
                  className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IconComponent className="h-5 w-5 text-earthYellow" />
                      {method.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{method.description}</p>
                    {method.link && (
                      <Button
                        variant="link"
                        className="mt-4 p-0"
                        onClick={() => router.push(method.link!)}>
                        Learn More →
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>

          {/* Digital Payment Options */}
          {paymentOptions.some((opt) => opt.isActive) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid md:grid-cols-3 gap-6">
              {paymentOptions
                .filter((opt) => opt.isActive)
                .map((option) => (
                  <Card key={option.id}>
                    <CardHeader>
                      <CardTitle className="text-center">
                        {option.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <div className="relative w-32 h-32">
                        <Image
                          src={option.qrCode}
                          alt={`${option.name} QR Code`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
