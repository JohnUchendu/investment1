"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { AccountInfo } from "@/components/dashboard/AccountInfo";
import { CurrencyPairs } from "@/components/dashboard/CurrencyPairs";
// import { TradingChart } from "@/components/dashboard/TradingChart";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid gap-8">
        <div className="grid gap-4 md:grid-cols-2">
          <AccountInfo />
          <CurrencyPairs />
        </div>
        <div className="grid gap-4">
          {/* <TradingChart /> */}
        </div>
      </div>
    </div>
  );
}