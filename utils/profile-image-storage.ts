const PROFILE_IMAGE_STORAGE_KEY = "newspaper-ai.profile-image"

export function getStoredProfileImage(): string | null {
  if (typeof window === "undefined") {
    return null
  }

  try {
    return window.localStorage.getItem(PROFILE_IMAGE_STORAGE_KEY)
  } catch {
    return null
  }
}

export function setStoredProfileImage(imageDataUrl: string): void {
  window.localStorage.setItem(PROFILE_IMAGE_STORAGE_KEY, imageDataUrl)
}

export function removeStoredProfileImage(): void {
  window.localStorage.removeItem(PROFILE_IMAGE_STORAGE_KEY)
}

export async function fileToDataUrl(file: File): Promise<string> {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const result = reader.result

      if (typeof result === "string") {
        resolve(result)
        return
      }

      reject(new Error("Failed to read the selected image."))
    }

    reader.onerror = () => {
      reject(new Error("Failed to read the selected image."))
    }

    reader.readAsDataURL(file)
  })
}
