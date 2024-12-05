"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import type { SermonSeries, Sermon } from "../configs/WatchConfig";
import { VideoDialog } from "./VideoDialog";
import { motion } from "framer-motion";

interface SermonsSectionProps {
  series: SermonSeries[];
  sermons: Sermon[];
}

export default function SermonsSection({ series, sermons }: SermonsSectionProps) {
  const [selectedSeries, setSelectedSeries] = useState<string>("all");

  const filteredSermons = selectedSeries === "all" 
    ? sermons 
    : sermons.filter(sermon => sermon.seriesId === selectedSeries);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Sermon Series</h2>
        <Tabs 
          value={selectedSeries} 
          onValueChange={setSelectedSeries}
          className="w-full">
          <div className="overflow-x-auto w-full mb-8">
            <TabsList className="inline-flex min-w-full sm:min-w-0 justify-start sm:justify-center gap-2 p-1">
              <TabsTrigger value="all" className="whitespace-nowrap">
                All Sermons
              </TabsTrigger>
              {series.map((s) => (
                <TabsTrigger key={s.id} value={s.id} className="whitespace-nowrap">
                  {s.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all">
            <SermonGrid sermons={sermons} />
          </TabsContent>

          {series.map((s) => (
            <TabsContent key={s.id} value={s.id}>
              <div className="mb-8">
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden">
                        <Image
                          src={s.thumbnailUrl}
                          alt={s.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                        <p className="text-gray-600">{s.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <SermonGrid sermons={filteredSermons} />
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSermons.map((sermon, index) => (
          <motion.div
            key={sermon.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {sermon.thumbnailUrl && (
                <div className="relative w-full aspect-video">
                  <Image
                    src={sermon.thumbnailUrl}
                    alt={sermon.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {sermon.title}
                </CardTitle>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-gray-600">
                    {new Date(sermon.date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-sm text-gray-600">{sermon.speaker}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 line-clamp-2">
                  {sermon.description}
                </p>
                <VideoDialog 
                  platform={sermon.platform} 
                  videoId={sermon.videoId} 
                  title={sermon.title} 
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SermonGrid({ sermons }: { sermons: Sermon[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sermons.map((sermon) => (
        <Card
          key={sermon.id}
          className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {sermon.thumbnailUrl && (
            <div className="relative w-full aspect-video">
              <Image
                src={sermon.thumbnailUrl}
                alt={sermon.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              {sermon.title}
            </CardTitle>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-600">
                {new Date(sermon.date).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-sm text-gray-600">{sermon.speaker}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 line-clamp-2">
              {sermon.description}
            </p>
            <VideoDialog 
              platform={sermon.platform} 
              videoId={sermon.videoId} 
              title={sermon.title} 
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 