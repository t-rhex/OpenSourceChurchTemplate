import { ArrowRight } from "lucide-react";
import ConnectionForm from "../components/ConnectionForm";
import ContactModal from "../components/ui/ContactModal";

export const headerConfig = {
  logo: {
    src: "/assets/rcmn-logo-zip-file/png/rcmn-high-resolution-logo-black-transparent.png",
    alt: "Revival Center Logo",
    //text: "Sunday Service: 1pm CST",
  },
  //   need to add dropdown menus.
  navItems: [
    { name: "Sermons", href: "/sermons" },
    { name: "Locations", href: "/location" },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "About Us", href: "/about/aboutus" },
        { name: "Ministries", href: "/about/ministries" },
      ],
    },
    { name: "Get Involved", href: "/getinvolved" },
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
      enabled: false,
      name: "I'm New",
      href: "/give",
      variant: "primary",
      icon: ArrowRight,
      className:
        "bg-darkMossGreen text-white hover:bg-lightGreen px-4 py-2 rounded transition duration-300",
    },
    {
      enabled: true,
      name: "Connection Form",
      component: ConnectionForm,
    },
    {
      enabled: true,
      name: "Contact Us",
      component: ContactModal,
    },
  ],
  subheader: {
    name: "JOIN US FOR WORSHIP THIS SUNDAY AT 1:00 PM IN-PERSON OR VIA LIVESTREAM",
    enabled: true,
  },
};
