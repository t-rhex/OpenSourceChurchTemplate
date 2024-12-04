import { DefaultSession, DefaultUser } from "next-auth"

type UserRole = "ADMIN" | "MEMBER" | "USER"

declare module "next-auth" {
  interface Session {
    user: {
      role?: UserRole
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    role?: UserRole
  }
}
