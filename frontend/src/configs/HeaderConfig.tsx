import ConnectionForm from "../components/ConnectionForm";
import ContactModal from "../components/ui/ContactModal";

export const headerConfig = {
  logo: {
    src: "/assets/logos/tlbc-logo.svg",
    alt: "SFTLBC Logo",
    enName: "SFTLBC",
    zhName: "真光浸信會",
  },
  navItems: [
    { ename: "Home", zname: "首頁", href: "/" },
    {
      ename: "Ministries",
      zname: "教會事工",
      href: "/ministries",
      dropdown: [
        {
          ename: "English Bible Study",
          zname: "英語查經",
          href: "/ministries/english",
        },
        {
          ename: "Sunday School",
          zname: "成人主日學",
          href: "/ministries/school",
        },
        { ename: "Praying Group", zname: "禱告小組", href: "/ministries/pray" },
        {
          ename: "Fellowship Group",
          zname: "團契小組",
          href: "/ministries/fellowship",
        },
        {
          ename: "Children's Ministry",
          zname: "兒童事工",
          href: "/ministires/children",
        },
        {
          ename: "Mission Outreach",
          zname: "宣教事工",
          href: "/ministries/mission",
        },
      ],
    },
    {
      ename: "Events & Testimonies",
      zname: "活動見證",
      href: "/events",
      dropdown: [
        { ename: "Testimony", zname: "見證分享", href: "/events/testimony" },
        {
          ename: "Event Gallery",
          zname: "活動相簿",
          href: "/events/gallery",
        },
      ],
    },
    {
      ename: "Newcomer's Guide",
      zname: "新人指南",
      href: "/new",
      dropdown: [
        { ename: "Welcome", zname: "歡迎", href: "/new/welcome" },
        { ename: "What to Expect", zname: "期待什麼", href: "/new/expect" },
        { ename: "Get Involved", zname: "如何參與", href: "/new/involved" },
      ],
    },
    {
      ename: "Resources",
      zname: "資源",
      href: "/resources",
      dropdown: [
        {
          ename: "Daily Bread",
          zname: "每日靈糧",
          href: "/resources/devotional",
        },
        {
          ename: "Church Resources",
          zname: "教會資源",
          href: "/resources/church-resources",
        },
      ],
    },
  ],
  buttons: [
    {
      enabled: true,
      ename: "",
      zname: "Connection Form",
      component: ConnectionForm,
      className:
        "bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-lg transition duration-300",
    },
    {
      enabled: true,
      ename: "",
      zname: "Contact Us",
      component: ContactModal,
      className:
        "bg-darkMossGreen text-white hover:bg-primary px-4 py-2 rounded-lg transition duration-300 ml-2",
    },
  ],
  subheader: {
    ename: "Welcome to SFTLBC",
    zname: "欢迎来到真光浸信会",
    enabled: false,
    className:
      "bg-primary text-white text-center py-2 font-medium tracking-wide",
  },
};
