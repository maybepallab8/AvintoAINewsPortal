"use client"

import { useRouter } from "next/navigation"
import { UserPlus } from "lucide-react"
import { toast } from "sonner"

import { PasswordInput } from "@/components/auth/password-input"
import { useRegisterForm } from "@/hooks/use-register-form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const formFields = [
  {
    label: "Username",
    name: "username",
    placeholder: "Choose a unique username",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "user@example.com",
    type: "email",
  },
  {
    label: "First name",
    name: "first_name",
    placeholder: "First name",
    type: "text",
  },
  {
    label: "Last name",
    name: "last_name",
    placeholder: "Last name",
    type: "text",
  },
  {
    label: "Password",
    name: "password",
    placeholder: "Enter password",
    type: "password",
  },
  {
    label: "Confirm password",
    name: "password_confirm",
    placeholder: "Re-enter password",
    type: "password",
  },
] as const

export function RegisterForm(): React.JSX.Element {
  const router = useRouter()
  const {
    errorMessage,
    formValues,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    successMessage,
  } = useRegisterForm()

  return (
    <Card className="mx-auto w-full max-w-4xl border-4 border-black bg-white text-black shadow-[10px_10px_0_#000] dark:border-white dark:bg-black dark:text-white dark:shadow-[10px_10px_0_#fff]">
      <CardHeader className="border-b-4 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black">
        <CardTitle className="text-3xl font-black uppercase tracking-tight">
          Create account
        </CardTitle>
        <p className="text-sm font-medium text-white dark:text-black">
          Register a new reader account and store the access and refresh tokens
          in local storage after a successful response.
        </p>
      </CardHeader>

      <CardContent>
        <form
          className="grid gap-5"
          onSubmit={async (event) => {
            const result = await handleSubmit(event)

            if (result.response) {
              toast.success("Registration successful. Tokens saved locally.")
              router.push("/")
            } else if (result.errorMessage) {
              toast.error(result.errorMessage)
            }
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {formFields.map((field) => (
              <label className="grid gap-2" key={field.name}>
                <span className="text-xs font-black uppercase tracking-[0.24em]">
                  {field.label}
                </span>
                {field.type === "password" ? (
                  <PasswordInput
                    inputClassName="h-12 border-4 border-black bg-white px-3 font-bold shadow-[4px_4px_0_#000] placeholder:font-medium dark:border-white dark:bg-black dark:shadow-[4px_4px_0_#fff]"
                    name={field.name}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    required
                    value={formValues[field.name]}
                  />
                ) : (
                  <Input
                    className="h-12 border-4 border-black bg-white px-3 font-bold shadow-[4px_4px_0_#000] placeholder:font-medium dark:border-white dark:bg-black dark:shadow-[4px_4px_0_#fff]"
                    name={field.name}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    required
                    type={field.type}
                    value={formValues[field.name]}
                  />
                )}
              </label>
            ))}
          </div>

          {errorMessage ? (
            <div className="border-4 border-black bg-black px-4 py-3 text-sm font-black text-white dark:border-white dark:bg-white dark:text-black">
              {errorMessage}
            </div>
          ) : null}

          {successMessage ? (
            <div className="border-4 border-black bg-white px-4 py-3 text-sm font-black uppercase dark:border-white dark:bg-black">
              {successMessage}
            </div>
          ) : null}

          <Button
            className="h-12 border-4 border-black bg-white font-black uppercase text-black shadow-[6px_6px_0_#000] hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:shadow-[6px_6px_0_#fff] dark:hover:bg-white dark:hover:text-black"
            disabled={isSubmitting}
            type="submit"
          >
            <UserPlus />
            {isSubmitting ? "Registering..." : "Register user"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
