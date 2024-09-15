import type { Metadata } from "next";
import Aboutus from "./components/Aboutus";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  return <Aboutus />;
}
