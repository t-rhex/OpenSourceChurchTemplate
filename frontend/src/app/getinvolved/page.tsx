import GetInvolvedComponent from "./components/GetInvolvedComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | Your Church Name",
  description: "Find ways to serve and connect with our church community",
};

export default function GetInvolved() {
  return <GetInvolvedComponent />;
} 