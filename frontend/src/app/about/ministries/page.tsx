import type { Metadata } from "next";
import MinistriesComponent from "./component/MinistriesComponent";

export const metadata: Metadata = {
  title: "Ministries",
};

export default function MinistriesPage() {
  return <MinistriesComponent />;
}
