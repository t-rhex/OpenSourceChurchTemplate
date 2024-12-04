import ResourcesPage from "./components/ResourcesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Revival Center",
  description: "Access spiritual resources, devotionals, and church documents",
};

export default function Resources() {
  return <ResourcesPage />;
} 