import type { Metadata } from "next";
import EventComponent from "./components/EventComponent";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <div>
      <EventComponent />
    </div>
  );
}
