"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const bibleData = {
  title: "The Simple Truth",
  description: "What the Bible says about salvation",
  sections: [
    {
      title: "We are all sinners by nature and by choice.",
      quotes: [
        {
          text: "For everyone has sinned; we all fall short of God's glorious standard.",
        },
      ],
    },
    {
      title: "We receive eternal life as a free gift.",
      quotes: [
        {
          text: "For the wages of sin is death, but the free gift of God is eternal life through Christ Jesus our Lord.",
        },
      ],
    },
    {
      title: "God demonstrated His love for us, His enemies.",
      quotes: [
        {
          text: "But God showed his great love for us by sending Christ to die for us while we were still sinners.",
        },
        {
          text: "For this is how God loved the world: He gave his one and only Son Jesus Christ so that everyone who believes in him will not perish but have eternal life.",
          source: "John 3:16",
        },
      ],
    },
    {
      title:
        "We must trust and surrender to Jesus as Lord & Our assurance of salvation is through Jesus",
      quotes: [
        {
          text: "If you openly declare that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved. For it is by believing in your heart that you are made right with God, and it is by openly declaring your faith that you are saved.",
        },
        {
          text: "For 'Everyone who calls on the name of the Lord will be saved.'",
        },
      ],
    },
  ],
  prayer: {
    title: "Pray this prayer out loud...",
    text: "Heavenly Father, in Jesus' name I repent of my sins and open my heart to let Jesus come inside of me. Jesus, you are my Lord and Savior. I believe you died for my sins and you were raised from the dead. Fill me with your Holy Spirit. Thank you Father for saving me in Jesus name. Amen",
  },
};

export default function WhyJesusModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-darkMossGreen text-white text-lg">
          Why Jesus?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            {bibleData.title}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {bibleData.description}
          </DialogDescription>
        </DialogHeader>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 mt-4">
              {bibleData.sections.map((section, index) => (
                <Section key={index} title={section.title}>
                  {section.quotes.map((quote, quoteIndex) => (
                    <Quote
                      key={quoteIndex}
                      text={quote.text}
                      source={quote.source}
                    />
                  ))}
                </Section>
              ))}

              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  {bibleData.prayer.title}
                </h3>
                <p className="italic text-muted-foreground">
                  {bibleData.prayer.text}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          className="absolute right-4 top-4"
          onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-l-4 border-primary pl-4">
      <h2 className="text-lg font-semibold mb-2 text-primary">{title}</h2>
      {children}
    </motion.div>
  );
}

function Quote({ text, source }: { text: string; source?: string }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="pl-4 border-l-2 border-muted italic text-muted-foreground">
      {text}
      {source && (
        <span className="block mt-1 text-sm font-medium">- {source}</span>
      )}
    </motion.blockquote>
  );
}
