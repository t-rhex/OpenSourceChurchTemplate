import {
  User,
  Users,
  MapPin,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";

export const experienceConfig = {
  title: "Something for everyone.",
  sections: {
    userTypes: {
      enabled: true,
      items: [
        { icon: User, text: "New Here?", href: "#" },
        { icon: Users, text: "I'm a part of eFam", href: "#" },
        {
          icon: MapPin,
          text: "I'm already a part of a campus community",
          href: "#",
        },
      ],
    },
    getInvolved: {
      enabled: false,
      title: "Get Involved",
      description: "See what God can do through you.",
      items: ["Giving", "Groups", "Volunteer", "Outreach", "eFam"],
    },
    forYourFamily: {
      enabled: true,
      title: "For Your Family",
      description: "See what God can do through your family.",
      items: ["Children's Ministry", "Youth"],
    },
    reflect: {
      enabled: true,
      imageSrc: "/assets/placeholder.svg",
      imageAlt: "Reflect Ladies Night",
    },
    eTeamConnect: {
      enabled: false,
      title: "eTEAM CONNECT",
      subtitle: "SIGN UP TO SERVE.",
      description:
        "Attend e101 and learn more about serving on a team at your local campus or online.",
    },
    myElevation: {
      enabled: true,
      title: "MyElevation",
      description:
        "Keep up to date with your giving history, eGroups, and more.",
      buttonText: "Sign In",
    },
    socialMedia: {
      enabled: true,
      title: "Follow On Social",
      items: [
        { name: "YouTube", icon: Youtube },
        { name: "Instagram", icon: Instagram },
        { name: "Facebook", icon: Facebook },
      ],
    },
  },
};
