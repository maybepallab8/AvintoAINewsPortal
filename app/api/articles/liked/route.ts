import { NextResponse } from "next/server"

const LIKE_API_BASE_URL =
  process.env["NEXT_PUBLIC_LIKES_API_URL"] ??
  "https://loppy-nonpersistently-verdie.ngrok-free.dev/api"

export async function GET(request: Request): Promise<NextResponse> {
  const authorizationHeader = request.headers.get("authorization")

  if (!authorizationHeader) {
    return NextResponse.json(
      { message: "Authorization header is required." },
      { status: 401 }
    )
  }

  const response = await fetch(
    `${LIKE_API_BASE_URL.replace(/\/$/, "")}/articles/liked/`,
    {
      headers: new Headers({
        Authorization: authorizationHeader,
        "ngrok-skip-browser-warning": "true",
      }),
      method: "GET",
      cache: "no-store",
    }
  )

  const data = (await response.json()) as unknown

  return NextResponse.json(data, { status: response.status })
}
