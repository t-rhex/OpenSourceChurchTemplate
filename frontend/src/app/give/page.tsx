import GiveComponent from "./components/GiveComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give | Your Church Name",
  description: "Support our ministry and make a difference in our community",
};

export default function Give() {
  return <GiveComponent />;
}
