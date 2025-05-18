import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-white text-black mt-10">
      <div className="max-w-7xl mx-auto w-full px-6 py-12 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        
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
          <h2 className="text-lg font-semibold">SevenPointsTrading</h2>
         
        </div>

        {/* Center: Quick Links */}
        <div className="text-left space-y-1 text-sm">
          <span className="font-medium block mb-1">Quick Links</span>
          <a href="/" className="hover:underline block">Home</a>
          <a href="/Home" className="hover:underline block">Contact</a>
          <a href="/careers" className="hover:underline block">Careers</a>
        </div>

        {/* Right: Contact Info */}
        <div className="text-left space-y-1 text-sm">
          <span className="font-medium block mb-1">Contact</span>
          <p>New York City 150 East 52nd Street, 3rd Floor, New York, NY 10022</p>
          <p>Phone: +1 (772) 308-4681</p>
        </div>
 <p className="text-sm text-center text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} SevenPointsTrading. All rights reserved.
          </p>
      </div>
    </footer>
  );
}
