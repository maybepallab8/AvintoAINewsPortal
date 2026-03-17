"use client"

import type { ChangeEvent } from "react"

import { Trash2, UserCircle2 } from "lucide-react"
import { toast } from "sonner"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useProfileImage } from "@/hooks/use-profile-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function ProfileImageUpload(): React.JSX.Element {
  const { error, imageSrc, isLoading, removeImage, uploadImage } =
    useProfileImage()

  async function handleFileChange(
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const didUpload = await uploadImage(file)

    if (didUpload) {
      toast.success("Profile image updated successfully.")
    }

    event.target.value = ""
  }

  return (
    <Card className="border-4 border-black bg-white text-black shadow-[8px_8px_0_#000] dark:border-white dark:bg-black dark:text-white dark:shadow-[8px_8px_0_#fff]">
      <CardHeader className="border-b-4 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black">
        <CardTitle className="text-2xl font-black uppercase tracking-tight">
          Profile image
        </CardTitle>
        <p className="text-sm font-medium text-white dark:text-black">
          Upload an image and keep it saved in local storage on this device.
        </p>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center gap-5 border-4 border-dashed border-black bg-white p-6 text-center dark:border-white dark:bg-black">
          <Avatar className="size-32 border-4 border-black bg-white dark:border-white dark:bg-black" size="lg">
            <AvatarImage alt="Profile preview" src={imageSrc ?? undefined} />
            <AvatarFallback>
              <UserCircle2 className="size-16 text-black dark:text-white" />
            </AvatarFallback>
          </Avatar>

          {isLoading ? (
            <p className="border-2 border-black bg-black px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white dark:border-white dark:bg-white dark:text-black">
              Loading saved image...
            </p>
          ) : (
            <p className="max-w-xs text-sm font-semibold leading-6">
              {imageSrc
                ? "Your uploaded image is stored locally in this browser."
                : "No profile image uploaded yet."}
            </p>
          )}

          <div className="w-full space-y-3">
            <Input
              accept="image/*"
              className="border-4 border-black bg-white font-bold file:font-black dark:border-white dark:bg-black"
              onChange={handleFileChange}
              type="file"
            />
            <div className="flex justify-center">
              <Button
                className="border-4 border-black bg-white font-black uppercase text-black shadow-[4px_4px_0_#000] hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:shadow-[4px_4px_0_#fff] dark:hover:bg-white dark:hover:text-black"
                disabled={!imageSrc}
                onClick={() => {
                  removeImage()
                  toast.info("Stored profile image removed.")
                }}
                size="sm"
                type="button"
                variant="outline"
              >
                <Trash2 />
                Remove image
              </Button>
            </div>
          </div>

          {error ? (
            <p className="border-2 border-black bg-black px-3 py-2 text-sm font-black text-white dark:border-white dark:bg-white dark:text-black">
              {error}
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
