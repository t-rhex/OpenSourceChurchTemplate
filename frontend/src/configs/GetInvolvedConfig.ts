import { HandHeartIcon, UsersIcon, HandshakeIcon } from "lucide-react";

export const getInvolvedContent = {
  hero: {
    title: "Get Involved",
    image: "/assets/icons/new-placeholder.svg",
  },
  opportunities: [
    {
      id: 1,
      title: "Serve with Us",
      description: "Use your gifts to serve others and make a lasting impact in our community",
      icon: HandHeartIcon,
      link: "/get-involved/serve",
    },
    {
      id: 2,
      title: "Connect Groups",
      description: "Join a small group to build meaningful relationships and grow in your faith journey",
      icon: UsersIcon,
      link: "/get-involved/groups",
    },
    {
      id: 3,
      title: "Next Steps",
      description: "Discover your next step in your spiritual journey with us",
      icon: HandshakeIcon,
      link: "/get-involved/next-steps",
    },
  ],
  callToAction: {
    title: "Ready to Make a Difference?",
    description: "Take the first step towards making an impact in our community",
    primaryButton: {
      text: "Get Started Today",
      link: "/contact",
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
    },
  },
};
