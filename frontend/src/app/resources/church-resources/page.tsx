import ResourceComponent from "./ResourceDocuments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forms and Documents",
};

const ResourcesPage = () => {
  return <ResourceComponent />;
};

export default ResourcesPage;
