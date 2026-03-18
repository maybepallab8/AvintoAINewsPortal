import { NextResponse } from "next/server"

const API_BASE_URL = process.env["NEXT_PUBLIC_API_URL"]

export async function GET(request: Request): Promise<NextResponse> {
  if (!API_BASE_URL) {
    return NextResponse.json(
      { message: "NEXT_PUBLIC_API_URL is not configured." },
      { status: 500 }
    )
  }

  const authorizationHeader = request.headers.get("authorization")

  if (!authorizationHeader) {
    return NextResponse.json(
      { message: "Authorization header is required." },
      { status: 401 }
    )
  }

  const response = await fetch(
    `${API_BASE_URL.replace(/\/$/, "")}/auth/profile/`,
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
