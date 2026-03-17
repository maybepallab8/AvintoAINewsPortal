"use client"

import { useCallback, useEffect, useState } from "react"

import {
  fileToDataUrl,
  getStoredProfileImage,
  removeStoredProfileImage,
  setStoredProfileImage,
} from "@/utils/profile-image-storage"

interface UseProfileImageResult {
  error: string | null
  imageSrc: string | null
  isLoading: boolean
  removeImage: () => void
  uploadImage: (file: File) => Promise<boolean>
}

export function useProfileImage(): UseProfileImageResult {
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setImageSrc(getStoredProfileImage())
    setIsLoading(false)
  }, [])

  const uploadImage = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file.")
      return false
    }

    try {
      const dataUrl = await fileToDataUrl(file)

      setStoredProfileImage(dataUrl)
      setImageSrc(dataUrl)
      setError(null)
      return true
    } catch {
      setError("Could not upload the image. Please try again.")
      return false
    }
  }, [])

  const removeImage = useCallback(() => {
    removeStoredProfileImage()
    setImageSrc(null)
    setError(null)
  }, [])

  return {
    error,
    imageSrc,
    isLoading,
    removeImage,
    uploadImage,
  }
}
