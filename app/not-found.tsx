// src/app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaChartLine, FaArrowRight } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6 border border-gray-200">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="bg-blue-600 p-3 rounded-lg inline-flex">
            <FaChartLine className="text-white text-2xl" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button asChild className="w-full">
            <Link href="/" className="flex items-center gap-2">
              Go to Homepage
              <FaArrowRight className="text-sm" />
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/dashboard" className="flex items-center gap-2">
              Back to Dashboard
              <FaArrowRight className="text-sm" />
            </Link>
          </Button>
        </div>

        {/* Additional Help */}
        <div className="pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}