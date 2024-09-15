"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, Calendar, Clock, Book } from "lucide-react";
import Image from "next/image";

const devotionals = [
  {
    id: 1,
    date: new Date(2023, 5, 15),
    title: "The Power of Faith",
    verse: "Hebrews 11:1, Hebrews 11:6",
    image: "https://picsum.photos/200/300", // Add this line
    summary: "Exploring the transformative power of faith in our daily lives.",
    content: `
      Faith is the substance of things hoped for, the evidence of things not seen. This powerful verse from Hebrews reminds us of the incredible impact faith can have in our lives. When we trust in God's promises, even when we can't see the outcome, we open ourselves to His transformative power.

      In our daily walk, faith acts as a guiding light, helping us navigate through uncertainties and challenges. It's not just about believing; it's about living out that belief in our actions and decisions.

      Today, let's reflect on how we can strengthen our faith:

      1. Spend time in God's Word: Regular Bible study nourishes our faith.
      2. Pray consistently: Communication with God builds our relationship with Him.
      3. Remember past faithfulness: Recall times when God has been faithful to you.
      4. Share your faith: Telling others about God's work in your life can bolster your own faith.

      As we go through this day, let's hold onto our faith, knowing that it has the power to move mountains and transform lives.

      Prayer: Lord, increase our faith. Help us to trust in You more deeply and to see Your hand at work in our lives. Amen.
    `,
    readingTime: 5,
  },
  {
    id: 2,
    date: new Date(2023, 5, 16),
    title: "Living with Gratitude",
    verse: "1 Thessalonians 5:18",
    image: "https://picsum.photos/200/300", // Add this line
    summary:
      "Discovering the joy and power of a thankful heart in all circumstances.",
    content: `
      "Give thanks in all circumstances; for this is God's will for you in Christ Jesus." This verse challenges us to cultivate a heart of gratitude, not just when things are going well, but in all situations.

      Gratitude is a powerful force that can transform our perspective and attitude. When we choose to be thankful, even in difficult times, we open our eyes to God's blessings and presence in our lives.

      Here are some ways we can practice gratitude today:

      1. Start a gratitude journal: Write down three things you're thankful for each day.
      2. Express appreciation to others: Let people know when you're grateful for them or something they've done.
      3. Look for the good: In challenging situations, try to find something positive to focus on.
      4. Pray with thanksgiving: Begin your prayers by thanking God for His blessings.

      Remember, gratitude is not just a feeling, but a choice we make. As we choose to give thanks in all circumstances, we align our hearts with God's will and open ourselves to experience His joy and peace.

      Prayer: Heavenly Father, thank You for Your countless blessings. Help us to cultivate grateful hearts that see Your goodness in all circumstances. In Jesus' name, Amen.
    `,
    readingTime: 4,
  },
  // Add more devotionals as needed
];

// Add this type definition at the top of your file
type Devotional = (typeof devotionals)[number];

export default function ResourceDevotionalComponent() {
  const [selectedDevotional, setSelectedDevotional] =
    useState<Devotional | null>(null);

  // Sort devotionals by latest date
  const sortedDevotionals = [...devotionals].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Daily Devotional
          </h1>
          <p className="text-xl text-gray-600">
            Nourish your soul with daily reflections
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedDevotionals.map((devotional, index) => (
            <motion.div
              key={devotional.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className="h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={devotional.image}
                    alt={devotional.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">
                    {devotional.title}
                  </CardTitle>
                  <CardDescription>
                    {format(devotional.date, "MMMM d, yyyy")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-600 mb-2">
                    {devotional.verse}
                  </p>
                  <p className="text-gray-700">{devotional.summary}</p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full"
                        onClick={() => setSelectedDevotional(devotional)}>
                        Read More <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                      <DialogHeader>
                        <DialogTitle>{selectedDevotional?.title}</DialogTitle>
                        <DialogDescription>
                          {format(
                            selectedDevotional?.date ?? new Date(),
                            "MMMM d, yyyy"
                          )}{" "}
                          | {selectedDevotional?.verse}
                        </DialogDescription>
                      </DialogHeader>
                      <Separator className="my-4" />
                      <ScrollArea className="h-[60vh] pr-4">
                        <div className="space-y-4">
                          {selectedDevotional?.content
                            .split("\n\n")
                            .map((paragraph, index) => (
                              <p key={index} className="text-gray-700">
                                {paragraph}
                              </p>
                            ))}
                        </div>
                      </ScrollArea>
                      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          {format(
                            selectedDevotional?.date ?? new Date(),
                            "MMMM d, yyyy"
                          )}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {selectedDevotional?.readingTime} min read
                        </div>
                        <div className="flex items-center">
                          <Book className="mr-2 h-4 w-4" />
                          {selectedDevotional?.verse}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
