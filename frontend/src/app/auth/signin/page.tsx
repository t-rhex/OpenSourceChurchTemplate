import { Metadata } from "next";
import SignInForm from "./sign-in-form";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 px-4 py-12">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <SignInForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
