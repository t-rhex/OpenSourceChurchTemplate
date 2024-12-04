"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: string;
  streamTitle: string;
}

export default function CountdownTimer({ targetDate, streamTitle }: CountdownTimerProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate, mounted]);

  if (!mounted) {
    return null;  // Don't render anything on the server side
  }

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold text-earthYellow mb-1">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm text-gray-500 uppercase">{label}</div>
    </div>
  );

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <Card className="overflow-hidden bg-white shadow-sm border border-gray-100">
        <CardHeader className="bg-gray-50/50 text-center">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            Next Live Stream
          </CardTitle>
          <p className="text-gray-600">{streamTitle}</p>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex justify-center gap-8">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
          <p className="text-center mt-6 text-gray-600">
            {new Date(targetDate).toLocaleDateString(undefined, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
} 