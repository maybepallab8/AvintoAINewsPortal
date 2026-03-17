import type { Metadata } from "next"
import Link from "next/link"

import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Login | Newspaper-AI",
}

export default function LoginPage(): React.JSX.Element {
  return (
    <main className="min-h-svh bg-white px-4 py-6 text-black md:px-6 md:py-10 dark:bg-black dark:text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="space-y-4 border-4 border-black bg-white p-6 shadow-[10px_10px_0_#000] dark:border-white dark:bg-black dark:shadow-[10px_10px_0_#fff]">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.32em]">
                Auth
              </p>
              <h1 className="max-w-3xl text-4xl font-black uppercase tracking-tight md:text-6xl">
                Login
              </h1>
              <p className="max-w-3xl text-sm font-medium leading-6 md:text-base">
                Sign in using the provided auth endpoint. The UI sends the login
                payload and stores the returned access and refresh tokens in
                local storage after success.
              </p>
            </div>

            <Link
              className="inline-flex h-12 items-center justify-center border-4 border-black bg-black px-5 text-sm font-black uppercase text-white shadow-[6px_6px_0_#000] transition-colors hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:shadow-[6px_6px_0_#fff] dark:hover:bg-black dark:hover:text-white"
              href="/register"
            >
              Don&apos;t have an account? Register
            </Link>
          </div>
        </header>

        <LoginForm />
      </div>
    </main>
  )
}
