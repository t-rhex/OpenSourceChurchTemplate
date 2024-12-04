import ChurchResourcesPage from "./components/ChurchResourcesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church Resources | Revival Center",
  description: "Access important church documents, forms, and resources",
};

export default function ChurchResources() {
  return <ChurchResourcesPage />;
}
