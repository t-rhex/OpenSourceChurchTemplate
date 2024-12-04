import { NextResponse } from "next/server";
import type { Sermon } from "@/app/watch/configs/WatchConfig";

export async function GET() {
  const mockSermons: Sermon[] = [
    {
      id: "sermon-1",
      title: "The Foundation of Faith",
      date: "2024-01-07",
      speaker: "Pastor John Doe",
      description:
        "Understanding the core principles that build a strong faith foundation.",
      platform: "youtube",
      videoId: "abc123xyz",
      seriesId: "faith-foundations",
      thumbnailUrl: "/assets/icons/new-placeholder.svg",
    },
    {
      id: "sermon-2",
      title: "Walking in Faith",
      date: "2024-01-14",
      speaker: "Pastor Jane Smith",
      description: "Practical steps to living out your faith in daily life.",
      platform: "facebook",
      videoId: "987654321",
      seriesId: "faith-foundations",
      thumbnailUrl: "/assets/icons/new-placeholder.svg",
    },
    {
      id: "sermon-3",
      title: "The Power of Persistent Prayer",
      date: "2024-03-03",
      speaker: "Pastor John Doe",
      description:
        "Discovering how persistence in prayer can transform your life.",
      platform: "youtube",
      videoId: "ghi789rst",
      seriesId: "power-of-prayer",
      thumbnailUrl: "/assets/icons/new-placeholder.svg",
    },
    {
      id: "sermon-4",
      title: "Kingdom Principles",
      date: "2024-05-05",
      speaker: "Pastor Jane Smith",
      description: "Understanding the fundamental principles of God's Kingdom.",
      platform: "facebook",
      videoId: "jkl012mno",
      seriesId: "kingdom-living",
      thumbnailUrl: "/assets/icons/new-placeholder.svg",
    },
  ];

  return NextResponse.json(mockSermons);
}
