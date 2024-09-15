import { LucideIcon } from "lucide-react";

export interface FeatureConfig {
  icon: LucideIcon;
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
    className: string;
  };
  backgroundImage: string; // Add this line
  animationDelay?: string;
}
