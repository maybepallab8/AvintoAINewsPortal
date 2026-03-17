import type { Metadata } from "next"

import { LikedPostsSection } from "@/components/profile/liked-posts-section"
import { ProfileDetails } from "@/components/profile/profile-details"
import { ProfileImageUpload } from "@/components/profile/profile-image-upload"
import { likedPosts, profileUser } from "@/services/profile"

export const metadata: Metadata = {
  title: "Profile | Newspaper-AI",
}

export default function ProfilePage(): React.JSX.Element {
  return (
    <main className="min-h-svh bg-white px-4 py-6 text-black md:px-6 md:py-10 dark:bg-black dark:text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="space-y-4 border-4 border-black bg-white p-6 shadow-[10px_10px_0_#000] dark:border-white dark:bg-black dark:shadow-[10px_10px_0_#fff]">
          <p className="text-xs font-black uppercase tracking-[0.32em]">
            User profile
          </p>
          <h1 className="max-w-3xl text-4xl font-black uppercase tracking-tight md:text-6xl">
            Profile page
          </h1>
          <p className="max-w-3xl text-sm leading-6 font-medium md:text-base">
            View profile details, upload a locally stored profile image, and
            browse liked posts from across the news categories.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
          <ProfileImageUpload />

          <div className="grid gap-6">
            <ProfileDetails user={profileUser} />
            <LikedPostsSection posts={likedPosts} />
          </div>
        </div>
      </div>
    </main>
  )
}
