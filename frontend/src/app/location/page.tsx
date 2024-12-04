import ChurchLocation from "./components/ChurchLocation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location | Your Church Name",
  description: "Find our church location and service times",
};

export default function Location() {
  return <ChurchLocation />;
}
