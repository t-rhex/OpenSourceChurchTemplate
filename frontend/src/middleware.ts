import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth");
    const isDashboardPage = req.nextUrl.pathname.startsWith("/dashboard");

    // Redirect authenticated users away from auth pages
    if (isAuthPage && token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Handle dashboard access
    if (isDashboardPage) {
      // Redirect non-authenticated users to login
      if (!token) {
        return NextResponse.redirect(new URL("/auth/signin", req.url));
      }

      // Handle user management page access (admin only)
      if (
        req.nextUrl.pathname.startsWith("/dashboard/users") && 
        (token as any)?.role !== "ADMIN"
      ) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    }

    // Handle admin routes
    if (req.nextUrl.pathname.startsWith("/admin") && (token as any)?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Handle member routes
    if (
      req.nextUrl.pathname.startsWith("/member") &&
      !["ADMIN", "MEMBER"].includes((token as any)?.role as string)
    ) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const isAuthPage = req.nextUrl.pathname.startsWith("/auth");
        return isAuthPage || !!token;
      },
    },
  }
);

// Protect all routes under /dashboard and /auth
export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*", "/admin/:path*", "/member/:path*"],
};
