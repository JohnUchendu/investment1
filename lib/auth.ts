// import { NextAuthOptions } from "next-auth";
// import Credentials from "next-auth/providers/credentials";



// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//     balance: number;
//     currency: string;
//   }
// }

// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         // Hardcoded credentials for demo
//         const hardcodedUser = {
//           id: "1",
//           name: "Frank Muller",
//           email: "demo@forex.com",
//           password: "forex123",
//           balance: 1200.75,
//           currency: "USD"
//         };

//         if (
//           credentials?.email === hardcodedUser.email &&
//           credentials?.password === hardcodedUser.password
//         ) {
//           return hardcodedUser;
//         }

//         return null;
//       }
//     })
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.balance = user.balance;
//         token.currency = user.currency;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       return {
//         ...session,
//         user: {
//           ...session.user,
//           id: token.id,
//           balance: token.balance,
//           currency: token.currency
//         }
//       };
//     }
//   },
//   pages: {
//     signIn: "/login",
//     error: "/login?error=true"
//   }
// };


import { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Extend the User type
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

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Hardcoded credentials for demo
        const hardcodedUser = {
          id: "1",
          name: "Frank Muller",
          email: "admin@sevenpointstrading.vercel.app",
          password: "forex123",
          balance: 1938200.75,
          currency: "USD"
        };

        if (
          credentials?.email === hardcodedUser.email &&
          credentials?.password === hardcodedUser.password
        ) {
          return hardcodedUser;
        }

        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.balance = user.balance;
        token.currency = user.currency;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          balance: token.balance,
          currency: token.currency
        }
      };
    }
  },
  pages: {
    signIn: "/login",
    error: "/login?error=true"
  }
};