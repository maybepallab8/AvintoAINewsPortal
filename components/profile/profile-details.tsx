import type { ProfileUser } from "@/types/profile"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProfileDetailsProps {
  user: ProfileUser
}

export function ProfileDetails({
  user,
}: ProfileDetailsProps): React.JSX.Element {
  return (
    <Card className="border-4 border-black bg-white text-black shadow-[8px_8px_0_#000] dark:border-white dark:bg-black dark:text-white dark:shadow-[8px_8px_0_#fff]">
      <CardHeader className="border-b-4 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black">
        <CardTitle className="text-2xl font-black uppercase tracking-tight">
          Profile details
        </CardTitle>
        <p className="text-sm font-medium text-white dark:text-black">
          Profile information loaded from the authenticated API.
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="border-4 border-black bg-white p-4 dark:border-white dark:bg-black">
            <p className="text-xs font-black uppercase tracking-[0.24em]">
              Name
            </p>
            <p className="mt-2 text-xl font-black uppercase wrap-break-word">
              {user.name}
            </p>
          </div>

          <div className="border-4 border-black bg-white p-4 dark:border-white dark:bg-black">
            <p className="text-xs font-black uppercase tracking-[0.24em]">
              Username
            </p>
            <p className="mt-2 text-base font-bold break-all">{user.username}</p>
          </div>

          <div className="border-4 border-black bg-white p-4 dark:border-white dark:bg-black">
            <p className="text-xs font-black uppercase tracking-[0.24em]">
              Email
            </p>
            <p className="mt-2 text-base font-bold break-all">{user.email}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
