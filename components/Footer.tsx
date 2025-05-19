import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className=" grid grid-cols-1 border-t border-amber-200 p-20 bg-blue-500 pt- text-gray-200 mt-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* Left: Brand */}
        <div className="text-left">
          <div className="relative h-8 w-8">
            <Image
              src="/seven.png" // Update with your logo path
              alt="seven points trading"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            SevenPointsTrading
          </h2>
        </div>

        {/* Center: Quick Links */}
        <div className="text-left space-y-1 ">
          <span className="font-medium text-2xl block mb-1">Quick Links</span>
          <Link href="/" className="hover:underline block">
            {" "}
            Home{" "}
          </Link>
          <Link href="/contact" className="hover:underline block">
            {" "}
            Contact{" "}
          </Link>
          <Link href="/careers" className="hover:underline block">
            {" "}
            Careers{" "}
          </Link>
        </div>

        {/* Right: Contact Info */}
        <div className="text-left space-y-1 text-sm">
          <span className="font-medium block mb-1 text-2xl">Contact</span>
          <p>
            New York City 150 East 52nd Street, 3rd Floor, New York, NY 10022
          </p>
          <p>Phone: +1 (772) 308-4681</p>
        </div>
        <p className="text-sm text-center text-white-500 mt-2">
          &copy; {new Date().getFullYear()} SevenPointsTrading. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
