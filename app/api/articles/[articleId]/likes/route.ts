import { NextResponse } from "next/server"

const LIKE_API_BASE_URL =
  process.env["NEXT_PUBLIC_LIKES_API_URL"] ??
  "https://loppy-nonpersistently-verdie.ngrok-free.dev/api"

export async function GET(
  request: Request,
  context: { params: Promise<{ articleId: string }> }
): Promise<NextResponse> {
  const { articleId } = await context.params
  const authorizationHeader = request.headers.get("authorization")

  const response = await fetch(
    `${LIKE_API_BASE_URL.replace(/\/$/, "")}/articles/${articleId}/likes/`,
    {
      headers: new Headers({
        ...(authorizationHeader
          ? { Authorization: authorizationHeader }
          : {}),
        "ngrok-skip-browser-warning": "true",
      }),
      method: "GET",
      cache: "no-store",
    }
  )

  const data = (await response.json()) as unknown

  return NextResponse.json(data, { status: response.status })
}
