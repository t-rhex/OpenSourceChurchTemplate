import { Heart, Users, Calendar, Mic, Book, Globe } from "lucide-react";

export const getInvolvedConfig = {
  hero: {
    title: "Get Involved",
    subtitle:
        "There are many ways to get involved in our church community. Whether you're looking to serve, connect, or grow, we have a place for you!",
  },
  opportunities: [
    {
      title: "Volunteer",
      icon: Heart,
      description:
          "Serve in various ministries and make a difference in our community.",
      options: [
        "Greeting Team",
        "Children's Ministry",
        "Worship Team",
        "Tech Team",
      ],
      link:"resources/church-resources"
    },
    {
      title: "Join a Group",
      icon: Users,
      description:
          "Connect with others and grow in your faith through our small groups.",
      options: [
        "Bible Study",
        "Prayer Groups",
        "Young Adults",
        "Seniors Fellowship",
      ],
      link:"resources/church-resources"
    },
    {
      title: "Attend Events",
      icon: Calendar,
      description: "Participate in our church events and build relationships.",
      options: [
        "Sunday Services",
        "Midweek Prayer",
        "Community Outreach",
        "Special Conferences",
      ],
      link:"events"
    },
  ],
  upcomingOpportunities: {
    title: "Upcoming Opportunities",
    thisWeek: [
      {
        icon: Mic,
        title: "Worship Team Practice",
        time: "Tuesday, 7:00 PM",
      },
      {
        icon: Book,
        title: "Bible Study Group",
        time: "Wednesday, 6:30 PM",
      },
      {
        icon: Globe,
        title: "Community Outreach",
        time: "Saturday, 10:00 AM",
      },
    ],
  },
  callToAction: {
    title: "Ready to Get Started?",
    subtitle:
        "We'd love to help you find the perfect place to serve and connect.",
    buttonText: "Contact Us",
  },
};
