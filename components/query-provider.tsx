"use client"

import * as React from "react"
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

interface QueryProviderProps {
  children: React.ReactNode
}

export function QueryProvider({
  children,
}: QueryProviderProps): React.JSX.Element {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
