import type { Metadata } from "next";
import HeroSection from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";

export const metadata: Metadata = {
  title: 'Welcome to Revival Center Minnesota',
  description: 'Experience the power of worship and community at Revival Center Minnesota. Join us for inspiring services, meaningful fellowship, and impactful outreach programs.',
  openGraph: {
    title: 'Welcome to Revival Center Minnesota',
    description: 'Experience the power of worship and community at Revival Center Minnesota',
    images: [
      {
        url: '/assets/icons/new-placeholder.svg',
        width: 800,
        height: 600,
        alt: 'Revival Center Minnesota Welcome',
      },
    ],
  },
  twitter: {
    title: 'Welcome to Revival Center Minnesota',
    description: 'Experience the power of worship and community at Revival Center Minnesota',
    images: ['/assets/icons/new-placeholder.svg'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}
