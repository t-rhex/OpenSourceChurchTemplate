import { NextResponse } from "next/server";
import type { SermonSeries } from "@/app/watch/configs/WatchConfig";

export async function GET() {
  // This is where you'll implement your actual database query
  // For now, returning mock data
  const mockSermonSeries: SermonSeries[] = [
    {
      id: "faith-foundations",
      title: "Faith Foundations",
      description: "A deep dive into the fundamental principles of our faith",
      thumbnailUrl: "/assets/icons/new-placeholder.svg",
      startDate: "2024-01-01",
      endDate: "2024-02-28",
    },
    {
      id: "power-of-prayer",
      title: "The Power of Prayer",
      description: "Exploring the transformative power of prayer in our daily lives",
      thumbnailUrl: "/assets/icons/new-placeholder.svg",
      startDate: "2024-03-01",
      endDate: "2024-04-30",
    },
    {
      id: "kingdom-living",
      title: "Kingdom Living",
      description: "Understanding and applying Kingdom principles in modern life",
      thumbnailUrl: "/assets/icons/new-placeholder.svg",
      startDate: "2024-05-01",
      endDate: "2024-06-30",
    },
  ];

  return NextResponse.json(mockSermonSeries);
} 