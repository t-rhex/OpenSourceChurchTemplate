import WatchComponent from "./components/WatchComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch | Your Church Name",
  description: "Watch our live services and previous messages",
};

export default function Watch() {
  return <WatchComponent />;
}
