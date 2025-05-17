"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useSession, signOut } from "next-auth/react";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b rounded bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">SevenPointsTrading</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link href="/" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            {/* <Link href="/" className="transition-colors hover:text-foreground/80">
              Pricing
            </Link> */}
          </nav>
          <div className="ml-4">
            {session ? (
              <Button onClick={() => signOut()} variant="outline">
                Sign Out
              </Button>
            ) : (
              <Link href="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}