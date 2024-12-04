import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export const footerConfig = {
  sections: [
    {
      title: "About",
      enabled: true,
      links: [
        { label: "Beliefs", href: "/about" },
        { label: "Values", href: "/about" },
        { label: "Leadership", href: "/about" },
      ],
    },
    {
      title: "Media",
      enabled: false,
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
        { label: "Youth", href: "/ministries" },
        { label: "Outreach", href: "/ministries" },
      ],
    },
    {
      title: "Opportunities",
      enabled: true,
      links: [
        { label: "Jobs", href: "/get-involved" },
        { label: "Internships", href: "/get-involved" },
        { label: "Apprenticeships", href: "/get-involved" },
      ],
    },
    {
      title: "Join Us",
      enabled: true,
      links: [
        { label: "Find a Location", href: "/location" },
        { label: "Watch Parties", href: "/location" },
        { label: "Events", href: "/events" },
      ],
    },
    {
      title: "Finance",
      enabled: false,
      links: [
        { label: "Giving", href: "#" },
        { label: "Personal", href: "#" },
        { label: "MyElevation", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
  ],
  contactInfo: {
    address: "7305 Afton Rd, Woodbury, MN 55125",
    phone: "(651) 204-3333",
  },
  socialMedia: [
    { icon: YoutubeIcon, label: "YouTube", href: "#" },
    { icon: FacebookIcon, label: "Facebook", href: "#" },
    { icon: InstagramIcon, label: "Instagram", href: "#" },
    { icon: TwitterIcon, label: "Twitter", href: "#" },
  ],
  legalInfo: {
    copyright: " 2024 Revival Church. All Rights Reserved",
    links: [
      { label: "Terms Of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Preferences", href: "/cookie" },
    ],
    additionalText:
      "This site is protected by reCAPTCHA and the Google Privacy Policy & Terms Of Service apply.",
  },
};
