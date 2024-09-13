import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const footerConfig = {
  sections: [
    {
      title: "About",
      enabled: true,
      links: [
        { label: "Beliefs", href: "#" },
        { label: "Values", href: "#" },
        { label: "Leadership", href: "#" },
      ],
    },
    {
      title: "Media",
      enabled: true,
      links: [
        { label: "Sermons", href: "#" },
        { label: "Watch Online", href: "#" },
        { label: "Elevation Store", href: "#" },
        { label: "Worship", href: "#" },
        { label: "Podcast", href: "#" },
      ],
    },
    {
      title: "Ministries",
      enabled: true,
      links: [
        { label: "eGroups", href: "#" },
        { label: "eKidz", href: "#" },
        { label: "Youth", href: "#" },
        { label: "Outreach", href: "#" },
      ],
    },
    {
      title: "Opportunities",
      enabled: true,
      links: [
        { label: "Jobs", href: "#" },
        { label: "Internships", href: "#" },
        { label: "Apprenticeships", href: "#" },
      ],
    },
    {
      title: "Join Us",
      enabled: true,
      links: [
        { label: "Find a Location", href: "#" },
        { label: "Watch Parties", href: "#" },
        { label: "Events", href: "#" },
      ],
    },
    {
      title: "Finance",
      enabled: true,
      links: [
        { label: "Giving", href: "#" },
        { label: "Personal", href: "#" },
        { label: "MyElevation", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
  ],
  contactInfo: {
    address: "11416 E. Independence Blvd, Suite N. Matthews, NC, 28105",
    phone: "(704) 246-0800",
  },
  socialMedia: [
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ],
  legalInfo: {
    copyright: "© 2024 Elevation Church. All Rights Reserved",
    links: [
      { label: "Terms Of Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Preferences", href: "#" },
    ],
    additionalText:
      "This site is protected by reCAPTCHA and the Google Privacy Policy & Terms Of Service apply.",
  },
};
