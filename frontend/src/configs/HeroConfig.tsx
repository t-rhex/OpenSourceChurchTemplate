import { Calendar, MapPin, Heart } from "lucide-react";
import { FeatureConfig } from "@/types/FeatureConfig";

export const heroConfig = {
  title: "Welcome to Revival Center Minnesota",
  subtitle:
    "Join us in worship, fellowship, and service as we grow together in faith and love.",
  buttons: [
    {
      text: "Join Us",
      href: "#services",
      className:
        "mt-4 inline-block bg-darkMossGreen hover:bg-earthYellow text-white font-semibold py-2 px-4 rounded transition duration-300",
    },
    {
      text: "Learn More",
      href: "#about",
      className:
        "mt-4 inline-block bg-darkMossGreen hover:bg-earthYellow text-white font-semibold py-2 px-4 rounded transition duration-300",
    },
  ],
  image: {
    src: "/assets/icons/new-placeholder.svg",
    alt: "Church gathering",
    width: 600,
    height: 400,
  },
  nextService: {
    text: "Next Service",
    time: "Sunday, 10:00 AM",
  },
  features: [
    {
      icon: Calendar,
      title: "Upcoming Events",
      description:
        "Join us for special services, community outreach, and fellowship gatherings.",
      button: {
        text: "View Events",
        href: "/events",
        className:
          "mt-4 inline-block bg-darkMossGreen hover:bg-earthYellow text-white font-semibold py-2 px-4 rounded transition duration-300",
      },
      backgroundImage: "/assets/icons/new-placeholder.svg",
    },
    {
      icon: MapPin,
      title: "Find Us",
      description:
        "Located in the heart of our community, we're here to serve and welcome you.",
      button: {
        text: "Get Directions",
        href: "/location",
        className:
          "mt-4 inline-block bg-darkMossGreen hover:bg-earthYellow text-white font-semibold py-2 px-4 rounded transition duration-300",
      },
      backgroundImage: "/assets/icons/new-placeholder.svg",
    },
    {
      icon: Heart,
      title: "Our Mission",
      description:
        "Spreading love, hope, and compassion through faith and community service.",
      button: {
        text: "Learn More",
        href: "/about/aboutus",
        className:
          "mt-4 inline-block bg-darkMossGreen hover:bg-earthYellow text-white font-semibold py-2 px-4 rounded transition duration-300",
      },
      backgroundImage: "/assets/icons/new-placeholder.svg",
    },
  ] as FeatureConfig[],
};
