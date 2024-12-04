import { CreditCard, Smartphone, Gift } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface GivingMethod {
  id: string;
  name: string;
  description: string;
  link?: string;
  icon: LucideIcon;
}

export interface PaymentOption {
  id: string;
  name: string;
  qrCode: string;
  isActive: boolean;
}

export const giveConfig = {
  header: {
    title: "Support Our Ministry",
    description: "Your generosity helps us spread the message of God's love and make a difference in people's lives.",
    backgroundImage: "/images/give-header.jpg",
  },
  scripture: {
    verse: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
    reference: "2 Corinthians 9:7",
  },
  mainGivingLink: "https://rcminn.churchcenter.com/giving?open-in-church-center-modal=true",
  givingMethods: [
    {
      id: "online",
      name: "Online Giving",
      description: "Give securely online through our Church Center platform",
      link: "https://rcminn.churchcenter.com/giving",
      icon: CreditCard,
    },
    {
      id: "text",
      name: "Text to Give",
      description: "Text 'GIVE' to 55555",
      icon: Smartphone,
    },
    {
      id: "mail",
      name: "Mail a Check",
      description: "123 Church St, City, State 12345",
      icon: Gift,
    },
  ] as GivingMethod[],
  paymentOptions: [
    {
      id: "cashapp",
      name: "Cash App",
      qrCode: "/assets/cashapp-qr.png",
      isActive: true,
    },
    {
      id: "zelle",
      name: "Zelle",
      qrCode: "/assets/zelle-qr.png",
      isActive: true,
    },
    {
      id: "paypal",
      name: "PayPal",
      qrCode: "/assets/paypal-qr.png",
      isActive: true,
    },
  ] as PaymentOption[],
};
