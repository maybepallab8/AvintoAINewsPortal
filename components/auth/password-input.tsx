"use client"

import * as React from "react"

import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface PasswordInputProps extends Omit<React.ComponentProps<"input">, "type"> {
  inputClassName?: string
}

export function PasswordInput({
  className,
  inputClassName,
  ...props
}: PasswordInputProps): React.JSX.Element {
  const [isVisible, setIsVisible] = React.useState(false)

  return (
    <div className={cn("relative", className)}>
      <Input
        {...props}
        className={cn("pr-14", inputClassName)}
        type={isVisible ? "text" : "password"}
      />

      <Button
        aria-label={isVisible ? "Hide password" : "Show password"}
        className="absolute top-1/2 right-2 size-8 -translate-y-1/2 border-2 border-black bg-white text-black shadow-none hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        onClick={() => {
          setIsVisible((currentValue) => !currentValue)
        }}
        size="icon-sm"
        type="button"
        variant="outline"
      >
        {isVisible ? <EyeOff /> : <Eye />}
      </Button>
    </div>
  )
}
