"use client";

import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AccountInfo() {
  const { data: session } = useSession();
  
  if (!session?.user) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Account Holder</p>
            <p className="text-lg font-medium">{session.user.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Account Balance</p>
            <p className="text-2xl font-bold">
             {(session.user.balance ?? 0).toLocaleString("en-US", {
                style: "currency",
                currency: session.user.currency || "USD"
              })}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}