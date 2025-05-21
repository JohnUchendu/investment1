// src/app/maintenance/page.tsx
"use client";

import { FaTools, FaClock, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function MaintenancePage() {
  const router = useRouter();
  
  // Mock maintenance end time (24 hours from now)
  const maintenanceEndTime = new Date();
  maintenanceEndTime.setHours(maintenanceEndTime.getHours() + 24);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-950 flex flex-col items-center justify-center p-6 text-white">
      <div className="max-w-2xl w-full bg-blue-800/50 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-blue-700/30">
        {/* Header */}
        <div className="p-8 text-center">
          <div className="inline-flex items-center justify-center bg-blue-700/20 p-6 rounded-full mb-6">
            <FaTools className="text-4xl text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Scheduled Maintenance</h1>
          <p className="text-blue-200 max-w-md mx-auto">
            We're currently performing scheduled maintenance to improve your trading experience.
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-blue-900/50 border-t border-b border-blue-800/50 p-6">
          <div className="flex items-center space-x-4">
            <FaClock className="text-blue-400 text-xl" />
            <div>
              <h3 className="font-medium">Estimated Completion</h3>
              <p className="text-blue-100">
                {maintenanceEndTime.toLocaleString('en-US', {
                  weekday: 'long',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="prose prose-invert prose-blue max-w-none">
            <p className="mb-6">
              During this maintenance window, you may experience temporary service interruptions. 
              We appreciate your patience as we work to deliver an enhanced trading platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <button
                onClick={() => router.push('mailto:support@sevenpointstrading.com')}
                className="flex items-center justify-center space-x-2 bg-blue-700 hover:bg-blue-600 transition-colors py-3 px-6 rounded-lg"
              >
                <FaEnvelope />
                <span>Contact Support</span>
              </button>
              
              {/* <button
                onClick={() => router.push('https://status.forexpro.com')}
                className="flex items-center justify-center space-x-2 bg-blue-800 hover:bg-blue-700 transition-colors py-3 px-6 rounded-lg"
              >
                <FaExternalLinkAlt />
                <span>Status Page</span>
              </button> */}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-900/30 p-4 text-center text-sm text-blue-300">
          <p>Thank you for choosing Seven Points Trading as your trading partner.</p>
        </div>
      </div>
    </div>
  );
}