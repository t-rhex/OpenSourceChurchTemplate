import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  UserCircle, 
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SignOutButton } from "./components/sign-out-button";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  const isAdmin = session.user?.role === "ADMIN";

  return (
    <div className="flex h-screen bg-gray-50/40">
      <aside className="flex w-64 flex-col border-r border-gray-200 bg-white">
        <div className="flex flex-1 flex-col px-6 py-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            <p className="mt-2 text-sm text-gray-600">
              Welcome back, {session.user?.name || session.user?.email}
            </p>
          </div>
          <nav className="flex-1 space-y-1">
            <Link href="/dashboard" className="mb-2">
              <Button 
                variant="ghost" 
                className={cn(
                  "w-full justify-start gap-2 font-medium",
                  "hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <LayoutDashboard className="h-4 w-4" />
                Overview
              </Button>
            </Link>
            <Link href="/dashboard/profile" className="mb-2">
              <Button 
                variant="ghost" 
                className={cn(
                  "w-full justify-start gap-2 font-medium",
                  "hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <UserCircle className="h-4 w-4" />
                Profile
              </Button>
            </Link>
            {isAdmin && (
              <Link href="/dashboard/users" className="mb-2">
                <Button 
                  variant="ghost" 
                  className={cn(
                    "w-full justify-start gap-2 font-medium",
                    "hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <Users className="h-4 w-4" />
                  Manage Users
                </Button>
              </Link>
            )}
          </nav>
          <div className="border-t border-gray-200 pt-4">
            <SignOutButton />
          </div>
        </div>
      </aside>
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto px-8 py-8">
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
