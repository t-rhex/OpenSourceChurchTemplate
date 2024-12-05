import { BookOpen, FileText, BookOpenText } from "lucide-react";

export const resourcesConfig = {
  hero: {
    title: "Resources",
    backgroundImage: "/assets/icons/new-placeholder.svg",
  },
  categories: [
    {
      id: 1,
      title: "Daily Devotionals",
      description: "Daily spiritual reflections and Bible studies",
      icon: BookOpenText,
      link: "/resources/devotional",
      featured: true,
    },
    {
      id: 2,
      title: "Church Documents",
      description: "Access important forms and church materials",
      icon: FileText,
      link: "/resources/church-resources",
      featured: true,
    },
    {
      id: 3,
      title: "Bible Study Materials",
      description: "In-depth study guides and resources",
      icon: BookOpen,
      link: "/resources/bible-study",
      featured: true,
    },
  ],
  featuredResources: [
    {
      id: 1,
      title: "Weekly Devotional",
      type: "Devotional",
      description: "Start your week with spiritual reflection",
      image: "/assets/icons/new-placeholder.svg",
      link: "/resources/devotional",
    },
    {
      id: 2,
      title: "Membership Forms",
      type: "Document",
      description: "Important forms for church membership",
      image: "/assets/icons/new-placeholder.svg",
      link: "/resources/church-resources",
    },
  ],
  callToAction: {
    title: "Need Spiritual Guidance?",
    description: "Connect with our pastoral team for personal support and prayer",
    button: {
      text: "Contact Us",
      link: "/contact",
    },
  },
}; 