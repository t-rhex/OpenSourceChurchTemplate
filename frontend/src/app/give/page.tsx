import GiveComponent from "./components/GiveComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give",
};

export default function Give() {
  return <GiveComponent />;
}
