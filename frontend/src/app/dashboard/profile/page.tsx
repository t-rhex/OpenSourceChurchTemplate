import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Profile</h2>
        <p className="mt-2 text-sm text-gray-600">
          View and manage your profile information
        </p>
      </div>

      <Card className="border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">Your Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">Email</Label>
            <Input
              disabled
              value={session?.user?.email || ""}
              className="bg-gray-50 text-gray-600"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">Name</Label>
            <Input
              disabled
              value={session?.user?.name || ""}
              className="bg-gray-50 text-gray-600"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-900">Role</Label>
            <Input
              disabled
              value={session?.user?.role || "User"}
              className="bg-gray-50 text-gray-600"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
