import ChurchLocation from "./components/ChurchLocation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location",
};

export default function Location() {
  return (
    <div>
      <ChurchLocation />
    </div>
  );
}
