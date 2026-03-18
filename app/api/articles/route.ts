import { NextResponse } from "next/server"

const API_BASE_URL = process.env["NEXT_PUBLIC_API_URL"]

export async function GET(request: Request): Promise<NextResponse> {
  if (!API_BASE_URL) {
    return NextResponse.json(
      { message: "NEXT_PUBLIC_API_URL is not configured." },
      { status: 500 }
    )
  }

  const incomingUrl = new URL(request.url)
  const targetUrl = new URL(`${API_BASE_URL.replace(/\/$/, "")}/articles/`)

  incomingUrl.searchParams.forEach((value, key) => {
    targetUrl.searchParams.set(key, value)
  })

  const response = await fetch(targetUrl.toString(), {
    headers: new Headers({
      "ngrok-skip-browser-warning": "true",
    }),
    method: "GET",
    next: { revalidate: 60 },
  })

  const data = (await response.json()) as unknown

  return NextResponse.json(data, { status: response.status })
}
