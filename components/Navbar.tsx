// "use client";

// import Link from "next/link";
// import { Button } from "./ui/button";
// import { useSession, signOut } from "next-auth/react";

// export function Navbar() {
//   const { data: session } = useSession();

//   return (
//     <header className="sticky top-0 z-50 w-full border-b rounded-b-2xl bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-14 items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="font-bold text-lg">
//           SevenPointsTrading
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-6">
//           <nav className="flex items-center space-x-6 text-sm font-medium">
//             <Link href="/" className="transition-colors hover:text-foreground/80">
//               Home
//             </Link>
//             <Link href="/about" className="transition-colors hover:text-foreground/80">
//               About
//             </Link>
//           </nav>
//           {session ? (
//             <Button onClick={() => signOut()} variant="outline">
//               Sign Out
//             </Button>
//           ) : (
//             <Link href="/login">
//               <Button variant="outline">Sign In</Button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full z-50 text-gray-400 rounded-3xl  bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - visible on all screens */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <div className="flex items-center">
                {/* Replace this with your actual logo component */}
                <div className="relative h-8 w-8">
                  <Image
                    src="/seven.png" // Update with your logo path
                    alt="seven points trading Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="ml-2 text-xl font-semibold hidden sm:inline">
                  Seven Points Trading
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - unchanged links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/about"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              About
            </Link>
            <Link
              href="/careers"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/careers"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Careers
            </Link>
          </div>

          {/* Sign In Button - unchanged */}
          <div className="hidden md:flex items-center">
            <Link
              href="/login"
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Main menu"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link
            href="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === "/"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === "/about"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            About
          </Link>
          <Link
            href="/careers"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === "/careers"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Careers
          </Link>
          <Link
            href="/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
