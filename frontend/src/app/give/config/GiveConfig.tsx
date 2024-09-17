import { CreditCard, Smartphone, Gift } from "lucide-react";

export const giveConfig = {
  hero: {
    title: "Support Our Ministry",
    subtitle:
      "Your generosity helps us spread the message of God's love, support our community, and make a difference in people's lives.",
  },
  whyWeGive: {
    title: "Why We Give",
    content:
      "Every contribution, no matter the size, is deeply appreciated and goes towards furthering our mission.",
    quote: {
      text: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
      source: "2 Corinthians 9:7",
    },
  },
  testimonials: [
    {
      text: "Giving to our church has been such a blessing. It's amazing to see how our contributions help transform lives in our community.",
      author: "Sarah M.",
    },
    {
      text: "I've seen firsthand how our donations support vital programs. It's a joy to be part of this mission.",
      author: "John D.",
    },
  ],
  giveNow: {
    title: "Give Now",
    oneTime: {
      label: "One-Time Gift",
      buttonText: "Give Now",
    },
    recurring: {
      label: "Recurring Gift",
      buttonText: "Set Up Recurring Gift",
      frequencies: ["Weekly", "Monthly", "Quarterly"],
    },
  },
  otherWays: {
    title: "Other Ways to Give",
    methods: [
      {
        icon: CreditCard,
        text: "By Credit Card: Call our office at (123) 456-7890",
      },
      {
        icon: Smartphone,
        text: "Text-to-Give: Send 'GIVE' to 55555",
      },
      {
        icon: Gift,
        text: "Mail a Check: 123 Church St, City, State 12345",
      },
    ],
  },
  digitalPayments: {
    title: "Digital Payment Options",
    options: ["Cash App", "Zelle", "PayPal"],
    qrCodes: [
      {
        app: "Cash App",
        qrCode: "/assets/dummyqr.png",
      },
      {
        app: "Zelle",
        qrCode: "/assets/dummyqr.png",
      },
      {
        app: "PayPal",
        qrCode: "/assets/dummyqr.png",
      },
    ],
  },
};
