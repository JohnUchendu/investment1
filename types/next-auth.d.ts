import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    balance: number;
    currency: string;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      balance: number;
      currency: string;
    };
  }
}