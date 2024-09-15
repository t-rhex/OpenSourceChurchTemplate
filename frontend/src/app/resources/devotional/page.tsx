import ResourceDevotionalComponent from "./ResourceDevotionalComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devotional",
};

export default function ResourceDevotional() {
  return <ResourceDevotionalComponent />;
}
