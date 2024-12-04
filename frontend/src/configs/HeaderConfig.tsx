import ConnectionForm from "../components/ConnectionForm";
import ContactModal from "../components/ui/ContactModal";

export const headerConfig = {
  logo: {
    src: "/assets/logos/rcmn-logo.svg",
    alt: "RCMN Logo",
  },
  navItems: [
    { name: "Watch", href: "/watch" },
    { name: "Locations", href: "/location" },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "About Us", href: "/about/aboutus" },
        { name: "Ministries", href: "/about/ministries" },
      ],
    },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Give", href: "/give" },
    {
      name: "Resources",
      href: "/resources",
      dropdown: [
        { name: "Devotionals", href: "/resources/devotional" },
        { name: "Church Resources", href: "/resources/church-resources" },
      ],
    },
  ],
  buttons: [
    {
      enabled: true,
      name: "Connection Form",
      component: ConnectionForm,
      className:
        "bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-lg transition duration-300",
    },
    {
      enabled: true,
      name: "Contact Us",
      component: ContactModal,
      className:
        "bg-darkMossGreen text-white hover:bg-primary px-4 py-2 rounded-lg transition duration-300 ml-2",
    },
  ],
  subheader: {
    name: "JOIN US FOR WORSHIP THIS SUNDAY AT 1:00 PM IN-PERSON OR VIA LIVESTREAM",
    enabled: true,
    className:
      "bg-primary text-white text-center py-2 font-medium tracking-wide",
  },
};
