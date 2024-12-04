"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Announcement {
  id: number;
  message: string;
  link?: string;
  isActive: boolean;
}

// This will later be replaced with API data
const demoAnnouncements: Announcement[] = [
  {
    id: 1,
    message: "JOIN US FOR WORSHIP THIS SUNDAY AT 1:00 PM IN-PERSON OR VIA LIVESTREAM",
    isActive: true
  },
  {
    id: 2,
    message: "SPECIAL PRAYER MEETING THIS WEDNESDAY AT 7:00 PM",
    link: "/events/prayer-meeting",
    isActive: true
  }
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // This will be replaced with an API call
    setAnnouncements(demoAnnouncements.filter(a => a.isActive));
  }, []);

  useEffect(() => {
    if (announcements.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000); // Change announcement every 5 seconds

    return () => clearInterval(timer);
  }, [announcements.length]);

  if (!announcements.length) return null;

  return (
    <div className="bg-darkMossGreen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="py-2 text-center"
          >
            {announcements[currentIndex].link ? (
              <a
                href={announcements[currentIndex].link}
                className="text-sm font-medium text-white/90 hover:text-white
                         inline-flex items-center gap-2 transition-colors duration-300"
              >
                {announcements[currentIndex].message}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ) : (
              <span className="text-sm font-medium text-white/90">
                {announcements[currentIndex].message}
              </span>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Indicators for multiple announcements */}
        {announcements.length > 1 && (
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
            {announcements.map((_, index) => (
              <div
                key={index}
                className={`w-1 h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-earthYellow w-2' 
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        )}

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2
                   text-white/80 hover:text-white transition-colors duration-300"
        >
          <span className="sr-only">Close announcement</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
} 