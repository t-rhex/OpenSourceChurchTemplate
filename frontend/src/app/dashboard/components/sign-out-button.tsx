'use client';

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <Button 
      variant="ghost" 
      className="w-full justify-start gap-2 text-red-600 hover:bg-red-50 hover:text-red-700"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </Button>
  );
}
