export interface SermonSeries {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  startDate: string;
  endDate: string;
}

export interface Sermon {
  id: string;
  title: string;
  date: string;
  speaker: string;
  description: string;
  platform: "youtube" | "facebook";
  videoId: string;
  seriesId: string;
  thumbnailUrl?: string;
}

export interface LivestreamStatus {
  isLive: boolean;
  platform: "youtube" | "facebook" | null;
  currentStreamUrl: string | null;
  nextStreamDate: string | null;
  nextStreamTitle: string | null;
}

export const watchConfig = {
  header: {
    title: "Watch Live & On-Demand",
    backgroundImage: "/assets/icons/new-placeholder.svg",
  },
  livestream: {
    isLive: false,
    platform: null,
    currentStreamUrl: null,
    nextStreamDate: null,
    nextStreamTitle: null,
  },
  sermonSeries: [
    {
      id: "faith-foundations",
      title: "Faith Foundations",
      description: "A deep dive into the fundamental principles of our faith",
      thumbnailUrl: "/assets/icons/new-placeholder.svg",
      startDate: "2024-01-01",
      endDate: "2024-02-28",
    },
    // Add more series here
  ],
  sermons: [
    {
      id: "sermon-1",
      title: "Finding Peace in Troubled Times",
      date: "June 5, 2023",
      speaker: "Pastor John Doe",
      description:
        "In this powerful message, Pastor John explores how we can find peace even in the midst of life's storms.",
      platform: "youtube",
      videoId: "dQw4w9WgXcQ",
      seriesId: "faith-foundations",
      thumbnailUrl: "/assets/icons/new-placeholder.svg",
    },
    // Add more sermons here
  ],
};
