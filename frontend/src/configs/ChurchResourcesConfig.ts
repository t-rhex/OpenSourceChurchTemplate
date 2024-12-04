import { FileText,  Users, Heart } from "lucide-react";

export const churchResourcesConfig = {
  hero: {
    title: "Church Resources",
    subtitle: "Access Important Church Documents and Forms",
    description: "Find all the resources you need to get involved and stay connected with our church community",
    backgroundImage: "/assets/icons/new-placeholder.svg",
  },
  categories: [
    {
      id: "membership",
      title: "Membership",
      icon: Users,
      resources: [
        {
          id: 1,
          title: "Membership Application",
          description: "Form for new members to join our church community",
          type: "form",
          downloadUrl: "/forms/membership-application.pdf",
        },
        {
          id: 2,
          title: "Statement of Faith",
          description: "Our church's core beliefs and doctrines",
          type: "document",
          downloadUrl: "/documents/statement-of-faith.pdf",
        },
      ],
    },
    {
      id: "ministry",
      title: "Ministry",
      icon: Heart,
      resources: [
        {
          id: 3,
          title: "Volunteer Application",
          description: "Application for those interested in serving",
          type: "form",
          downloadUrl: "/forms/volunteer-application.pdf",
        },
        {
          id: 4,
          title: "Ministry Guidelines",
          description: "Guidelines for serving in various ministries",
          type: "document",
          downloadUrl: "/documents/ministry-guidelines.pdf",
        },
      ],
    },
    {
      id: "events",
      title: "Events",
      icon: FileText,
      resources: [
        {
          id: 5,
          title: "Event Request Form",
          description: "Form to request use of church facilities for events",
          type: "form",
          downloadUrl: "/forms/event-request.pdf",
        },
        {
          id: 6,
          title: "Baptism Request",
          description: "Request form for those seeking baptism",
          type: "form",
          downloadUrl: "/forms/baptism-request.pdf",
        },
      ],
    },
  ],
  callToAction: {
    title: "Need Help Finding a Resource?",
    description: "Our team is here to help you find what you need",
    button: {
      text: "Contact Us",
      link: "/contact",
    },
  },
}; 