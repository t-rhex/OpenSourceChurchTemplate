"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook, Youtube } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import { watchConfig } from "../configs/WatchConfig";
import type {
  LivestreamStatus,
  SermonSeries,
  Sermon,
} from "../configs/WatchConfig";
import CountdownTimer from "./CountdownTimer";
import SermonsSection from "./SermonsSection";
import Image from "next/image";

export default function WatchComponent() {
  const [mounted, setMounted] = useState(false);
  const [livestreamStatus, setLivestreamStatus] = useState<LivestreamStatus>(
    watchConfig.livestream
  );
  const [sermonSeries, setSermonSeries] = useState<SermonSeries[]>([]);
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Fetch livestream status
        const livestreamResponse = await fetch("/api/livestream-status");
        const livestreamData = await livestreamResponse.json();
        setLivestreamStatus(livestreamData);

        // Fetch sermon series
        const seriesResponse = await fetch("/api/sermon-series");
        const seriesData = await seriesResponse.json();
        setSermonSeries(seriesData);

        // Fetch sermons
        const sermonsResponse = await fetch("/api/sermons");
        const sermonsData = await sermonsResponse.json();
        setSermons(sermonsData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(() => fetchData(), 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  const LivestreamBadge = () => (
    <div className="flex items-center gap-2 mb-4">
      <div className="relative flex items-center">
        <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-ping" />
        <div className="relative w-3 h-3 bg-red-500 rounded-full" />
      </div>
      <span className="text-red-500 font-semibold">LIVE NOW</span>
    </div>
  );

  const LiveStreamContent = () => {
    if (!livestreamStatus.currentStreamUrl) {
      return (
        <div className="p-8 text-center">
          <p className="text-gray-600">
            Stream URL not available. Please check back later.
          </p>
        </div>
      );
    }

    return (
      <div className="aspect-video">
        <iframe
          src={livestreamStatus.currentStreamUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <PageHeader {...watchConfig.header} />
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gray-900 -mt-[104px] md:-mt-[112px]">
        <div className="absolute inset-0">
          <Image
            src={watchConfig.header.backgroundImage}
            alt="Watch"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
        </div>

        <div className="relative min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 pt-[104px] md:pt-[112px]">
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                {watchConfig.header.title}
              </motion.h1>

            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        {livestreamStatus.isLive ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <LivestreamBadge />
                <CardTitle className="text-3xl font-semibold text-gray-800">
                  Live Service
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs
                  defaultValue={livestreamStatus.platform || "youtube"}
                  className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger
                      value="youtube"
                      className="flex items-center justify-center text-lg">
                      <Youtube className="mr-2 h-5 w-5" />
                      YouTube
                    </TabsTrigger>
                    <TabsTrigger
                      value="facebook"
                      className="flex items-center justify-center text-lg">
                      <Facebook className="mr-2 h-5 w-5" />
                      Facebook
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="youtube" className="mt-0">
                    <LiveStreamContent />
                  </TabsContent>
                  <TabsContent value="facebook" className="mt-0">
                    <LiveStreamContent />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <>
            {/* Countdown Timer */}
            {livestreamStatus.nextStreamDate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12">
                <CountdownTimer
                  targetDate={livestreamStatus.nextStreamDate}
                  streamTitle={livestreamStatus.nextStreamTitle || "Upcoming Service"}
                />
              </motion.div>
            )}

            {/* Sermons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}>
              <SermonsSection series={sermonSeries} sermons={sermons} />
            </motion.div>
          </>
        )}
      </section>
    </div>
  );
}
