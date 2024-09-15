import SermonComponent from "./components/SermonComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons",
};

export default function Sermons() {
  return <SermonComponent />;
}
