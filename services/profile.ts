import type { LikedPost, ProfileUser } from "@/types/profile"

// Placeholder profile data until backend integration is added.
export const profileUser: ProfileUser = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
}

export const likedPosts: LikedPost[] = [
  {
    id: "ai-1",
    title: "How Generative AI Is Reshaping Daily Productivity",
    summary:
      "A look at how AI assistants are changing writing, coding, and research workflows.",
    category: "AI",
    likedAt: "2 hours ago",
  },
  {
    id: "sports-1",
    title: "Championship Race Heats Up After Late Match Winner",
    summary:
      "A dramatic finish keeps the title race wide open heading into the final fixtures.",
    category: "Sports",
    likedAt: "Yesterday",
  },
  {
    id: "world-1",
    title: "Global Leaders Meet to Address Energy Security",
    summary:
      "Officials discuss long-term cooperation, supply stability, and regional impact.",
    category: "World News",
    likedAt: "3 days ago",
  },
]
