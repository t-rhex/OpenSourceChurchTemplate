"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Facebook, Youtube } from "lucide-react";

const sermons = [
  {
    title: "Finding Peace in Troubled Times",
    date: "June 5, 2023",
    speaker: "Pastor John Doe",
    description:
      "In this powerful message, Pastor John explores how we can find peace even in the midst of life's storms.",
    youtubeId: "dQw4w9WgXcQ",
    facebookId: "2143425785743720",
  },
  {
    title: "The Power of Faith",
    date: "May 29, 2023",
    speaker: "Pastor Jane Smith",
    description:
      "Pastor Jane shares inspiring stories of faith and how it can move mountains in our lives.",
    youtubeId: "dQw4w9WgXcQ",
    facebookId: "2143425785743720",
  },
  // Add more sermon objects as needed
];

export default function SermonPages() {
  const [currentSermonIndex, setCurrentSermonIndex] = useState(0);
  const currentSermon = sermons[currentSermonIndex];

  const nextSermon = () => {
    setCurrentSermonIndex((prevIndex) => (prevIndex + 1) % sermons.length);
  };

  const prevSermon = () => {
    setCurrentSermonIndex(
      (prevIndex) => (prevIndex - 1 + sermons.length) % sermons.length
    );
  };

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
          Our Sermons
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-3xl font-semibold text-gray-800">
                {currentSermon.title}
              </CardTitle>
              <p className="text-xl text-gray-600">
                {currentSermon.date} | {currentSermon.speaker}
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6 text-lg">
                {currentSermon.description}
              </p>
              <Tabs defaultValue="youtube" className="w-full">
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
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://www.youtube.com/embed/${currentSermon.youtubeId}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh]"></iframe>
                  </div>
                </TabsContent>
                <TabsContent value="facebook" className="mt-0">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F${currentSermon.facebookId}%2F&show_text=false`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh]"></iframe>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <div className="flex justify-between items-center mb-12">
          <Button
            onClick={prevSermon}
            variant="outline"
            className="flex items-center text-lg">
            <ChevronLeft className="mr-2 h-5 w-5" /> Previous Sermon
          </Button>
          <Button
            onClick={nextSermon}
            variant="outline"
            className="flex items-center text-lg">
            Next Sermon <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            More Sermons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermons.map((sermon, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {sermon.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    {sermon.date} | {sermon.speaker}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 line-clamp-2">
                    {sermon.description}
                  </p>
                  <Button
                    className="mt-4 w-full text-lg"
                    onClick={() => setCurrentSermonIndex(index)}>
                    Watch Sermon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
