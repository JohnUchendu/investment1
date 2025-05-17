export function Footer() {
  return (
    <footer className="border-t bg-white text-black">
      <div className="container flex flex-col justify-between gap-8 py-10 md:flex-row md:items-start md:py-12">
        
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold">SevenPointTrading</h2>
          <p className="text-sm text-muted-foreground mt-2 text-center md:text-left">
            &copy; {new Date().getFullYear()} SevenPointTrading. All rights reserved.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-col items-center gap-2 text-sm md:items-start">
          <span className="font-medium">Quick Links</span>
          <a href="/" className="hover:underline">Home</a>
          <a href="/Home" className="hover:underline">Contact</a>
          <a href="/careers" className="hover:underline">Careers</a>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col items-center gap-2 text-sm md:items-start">
          <span className="font-medium">Contact</span>
          <p>Email: contact@sevenpointstrading.com</p>
          <p>Address: 123 Wall Street, Baltimore, USA</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

      </div>
    </footer>
  );
}
