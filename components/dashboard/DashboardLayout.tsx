// "use client";

// import { User } from "next-auth";
// import React, { useState } from "react";
// import AccountInfo from "./AccountInfo";
// import Deposit from "./Deposit";
// import Withdraw from "./Withdraw";
// import BankDetails from "./BankDetails";
// import Verification from "./Verification";
// import Invitation from "./Invitation";
// // import { EditProfile } from "./EditProfile";
// import TradingChart from "./TradingChart";
// import { Menu, X } from "lucide-react"; // optional: install lucide-react for icons

// interface DashboardLayoutProps {
//   user: User;
// }

// export default function DashboardLayout({ user }: DashboardLayoutProps) {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const renderContent = () => {
//     switch (activeTab) {
//       case "dashboard":
//         return <TradingChart />;
//       case "deposit":
//         return <Deposit />;
//       case "withdraw":
//         return <Withdraw />;
//       case "bank":
//         return <BankDetails />;
//       case "verify":
//         return <Verification />;
//       case "invite":
//         return <Invitation />;
//       default:
//         return <TradingChart />;
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row bg-gray-800 h-screen relative">
//       {/* Mobile Hamburger Button */}
//       <div className="md:hidden bg-blue-800 p-4 flex items-center justify-between">
//         <h2 className="text-white text-lg font-bold">Seven Points Trading</h2>
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="text-white"
//         >
//           {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Sidebar Navigation */}
//       <div
//         className={`${
//           sidebarOpen ? "block" : "hidden"
//         } md:block w-full md:w-64 bg-blue-800 text-white p-4 absolute md:relative z-20 md:z-auto h-full md:h-auto`}
//       >
//         <AccountInfo user={user} />

//         <nav className="mt-4 space-y-2">
//           {[
//             ["dashboard", "Trading Dashboard"],
//             ["deposit", "Deposit Funds"],
//             ["withdraw", "Withdraw Funds"],
//             ["bank", "Bank Details"],
//             ["verify", "Verify Account"],
//             ["invite", "Invite Friends"],
//           ].map(([key, label]) => (
//             <button
//               key={key}
//               onClick={() => {
//                 setActiveTab(key);
//                 setSidebarOpen(false); // close sidebar on mobile
//               }}
//               className={`w-full text-left py-3 px-4 rounded-lg ${
//                 activeTab === key ? "bg-blue-600" : "hover:bg-blue-700"
//               }`}
//             >
//               {label}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content Area */}
//       <div className="bg-gray-900 flex-1 p-4 md:p-8 overflow-auto">
//         {renderContent()}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import AccountInfo from "./AccountInfo";
import TradingChart from "./TradingChart";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import MarketTicker from "./MarketTicker";
import EditProfiles from "./EditProfiles";
import Deposits from "./Deposits";
import Verification from "./Verification";
import Invitation from "./Invitation";

interface User {
  name?: string;
  email?: string;
  balance?: number;
  currency?: string;
}

interface DashboardLayoutProps {
  user: User;
}

export default function DashboardLayout({ user }: DashboardLayoutProps) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <TradingChart />;
      case "deposit":
        return <Deposit />;
      case "withdraw":
        return <Withdraw />;
      case "deposits":
        return <Deposits />;
      case "editprofile":
        return <EditProfiles />;
      case "verification":
        return <Verification />;
      case "invitation":
        return <Invitation />;
      // Add other cases...
      default:
        return <TradingChart />;
    }
  };

  return (
    <>
      <MarketTicker />
      <div className="flex flex-col md:flex-row pt-1 bg-gray-100">
        {/* Mobile Header */}
        <div className="md:hidden bg-blue-800 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Welcome Back, Eric!</h2>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        {/* Sidebar Navigation - Hidden on mobile unless menu is open */}
        <div
          className={`
        ${isMobileMenuOpen ? "block" : "hidden"} 
        md:block w-full md:w-64 bg-blue-800 text-white p-4
        fixed md:relative inset-0 z-10 md:z-auto
      `}
        >
          <div className="flex justify-between items-center mb-6 md:mb-8">
            {/* <h2 className="text-xl font-bold hidden md:block">
              Seven Points Trading
            </h2> */}
            {isMobile && (
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 focus:outline-none md:hidden"
              >
                <FiX size={24} />
              </button>
            )}
          </div>

          <AccountInfo user={user} />

          <nav className="mt-8">
            <button
              onClick={() => {
                setActiveTab("dashboard");
                if (isMobile) setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-lg mb-2 ${
                activeTab === "dashboard" ? "bg-blue-600" : "hover:bg-blue-700"
              }`}
            >
              Trading Dashboard
            </button>

            <button
              onClick={() => {
                setActiveTab("deposits");
                if (isMobile) setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-lg mb-2 ${
                activeTab === "deposits" ? "bg-blue-600" : "hover:bg-blue-700"
              }`}
            >
              Deposits
            </button>
            <button
              onClick={() => {
                setActiveTab("editprofile");
                if (isMobile) setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-lg mb-2 ${
                activeTab === "editprofile"
                  ? "bg-blue-600"
                  : "hover:bg-blue-700"
              }`}
            >
              Edit Profile
            </button>
            <button
              onClick={() => {
                setActiveTab("deposit");
                if (isMobile) setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-lg mb-2 ${
                activeTab === "deposit" ? "bg-blue-600" : "hover:bg-blue-700"
              }`}
            >
              Deposit
            </button>
            <button
              onClick={() => {
                setActiveTab("withdraw");
                if (isMobile) setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-lg mb-2 ${
                activeTab === "withdraw" ? "bg-blue-600" : "hover:bg-blue-700"
              }`}
            >
              Withdraw
            </button>
            <button
              onClick={() => {
                setActiveTab("verification");
                if (isMobile) setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-lg mb-2 ${
                activeTab === "verification"
                  ? "bg-blue-600"
                  : "hover:bg-blue-700"
              }`}
            >
              Verification
            </button>

            {/* Other navigation buttons... */}
          </nav>
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 p-4 md:p-8 overflow-auto">{renderContent()}</div>
      </div>
    </>
  );
}
