// types/auth.d.ts
import { User } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    balance?: number;
    currency?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    balance?: number;
    currency?: string;
  }
}