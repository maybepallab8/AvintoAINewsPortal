import axios from "axios"

import type { ProfileResponse } from "@/types/auth"
import type { LikedPost, ProfileUser } from "@/types/profile"
import { getStoredAccessToken } from "@/utils/auth-storage"

const PROFILE_ENDPOINT = "/api/auth/profile"

function getDisplayName(firstName: string, lastName: string, username: string): string {
  const fullName = `${firstName} ${lastName}`.trim()

  return fullName.length > 0 ? fullName : username
}

export async function getProfile(): Promise<ProfileUser> {
  const accessToken = getStoredAccessToken()

  if (!accessToken) {
    throw new Error("Please log in to view your profile.")
  }

  const response = await axios.get<ProfileResponse>(PROFILE_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  const user = response.data.data

  return {
    email: user.email,
    name: getDisplayName(user.first_name, user.last_name, user.username),
    username: user.username,
  }
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
