"use client"

import { LikedPostsSection } from "@/components/profile/liked-posts-section"
import { ProfileDetails } from "@/components/profile/profile-details"
import { ProfileImageUpload } from "@/components/profile/profile-image-upload"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLikedPosts } from "@/hooks/use-liked-posts"
import { useProfile } from "@/hooks/use-profile"

export function ProfileContent(): React.JSX.Element {
  const { errorMessage, isLoading, user } = useProfile()
  const {
    errorMessage: likedPostsErrorMessage,
    isLoading: isLikedPostsLoading,
    posts,
  } = useLikedPosts()

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
      <ProfileImageUpload />

      <div className="grid gap-6">
        {isLoading ? (
          <Card className="border-4 border-black bg-white text-black shadow-[8px_8px_0_#000] dark:border-white dark:bg-black dark:text-white dark:shadow-[8px_8px_0_#fff]">
            <CardHeader className="border-b-4 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black">
              <CardTitle className="text-2xl font-black uppercase tracking-tight">
                Profile details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm font-medium">Loading profile...</div>
            </CardContent>
          </Card>
        ) : null}

        {!isLoading && errorMessage ? (
          <Card className="border-4 border-black bg-white text-black shadow-[8px_8px_0_#000] dark:border-white dark:bg-black dark:text-white dark:shadow-[8px_8px_0_#fff]">
            <CardHeader className="border-b-4 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black">
              <CardTitle className="text-2xl font-black uppercase tracking-tight">
                Profile details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm font-medium">{errorMessage}</div>
            </CardContent>
          </Card>
        ) : null}

        {!isLoading && user ? <ProfileDetails user={user} /> : null}
        <LikedPostsSection
          errorMessage={likedPostsErrorMessage}
          isLoading={isLikedPostsLoading}
          posts={posts}
        />
      </div>
    </div>
  )
}
