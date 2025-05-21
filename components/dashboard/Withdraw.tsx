// import React from 'react'
// import MaintenancePage from './Maintenance'

// const Withdraw = () => {
//   return (
//     <div><MaintenancePage/></div>
//   )
// }

// export default Withdraw

// // src/components/dashboard/Withdraw.tsx
// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { FiArrowUpRight, FiClock, FiDollarSign, FiBank } from "react-icons/fi";

// export default function Withdraw() {
//   const [amount, setAmount] = useState("");
//   const [method, setMethod] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Mock withdrawal methods
//   const withdrawalMethods = [
//     { id: "bank", name: "Bank Transfer", processing: "1-3 business days" },
//     { id: "crypto", name: "Crypto Wallet", processing: "Instant" },
//     { id: "paypal", name: "PayPal", processing: "Instant" },
//   ];

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // Simulate API call
//     setTimeout(() => {
//       alert(`Withdrawal request for $${amount} submitted successfully!`);
//       setAmount("");
//       setMethod("");
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <Card className="w-full max-w-2xl mx-auto">
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2">
//           <FiArrowUpRight className="text-blue-600" />
//           Withdraw Funds
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Available Balance */}
//           <div className="bg-blue-50 p-4 rounded-lg">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2 text-sm">
//                 <FiDollarSign className="text-blue-600" />
//                 <span className="text-gray-600">Available Balance:</span>
//               </div>
//               <div className="font-bold">$12,450.75</div>
//             </div>
//           </div>

//           {/* Amount Input */}
//           <div className="space-y-2">
//             <Label htmlFor="amount">Amount (USD)</Label>
//             <Input
//               id="amount"
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="Enter withdrawal amount"
//               required
//             />
//             <p className="text-xs text-gray-500">
//               Minimum withdrawal: $50.00
//             </p>
//           </div>

//           {/* Withdrawal Method */}
//           <div className="space-y-2">
//             <Label>Withdrawal Method</Label>
//             <Select onValueChange={setMethod} value={method} required>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select withdrawal method" />
//               </SelectTrigger>
//               <SelectContent>
//                 {withdrawalMethods.map((method) => (
//                   <SelectItem key={method.id} value={method.id}>
//                     <div className="flex items-center justify-between w-full">
//                       <span>{method.name}</span>
//                       <span className="text-xs text-gray-500 flex items-center gap-1">
//                         <FiClock className="h-3 w-3" />
//                         {method.processing}
//                       </span>
//                     </div>
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Bank Details (Conditional) */}
//           {method === "bank" && (
//             <div className="space-y-4 p-4 border rounded-lg">
//               <div className="flex items-center gap-2 text-sm font-medium">
//                 <FiBank className="text-blue-600" />
//                 <span>Bank Account Details</span>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-1">
//                   <Label htmlFor="accountName">Account Name</Label>
//                   <Input
//                     id="accountName"
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <Label htmlFor="accountNumber">Account Number</Label>
//                   <Input
//                     id="accountNumber"
//                     placeholder="1234567890"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <Label htmlFor="bankName">Bank Name</Label>
//                   <Input
//                     id="bankName"
//                     placeholder="Chase Bank"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <Label htmlFor="routingNumber">Routing Number</Label>
//                   <Input
//                     id="routingNumber"
//                     placeholder="021000021"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Crypto Address (Conditional) */}
//           {method === "crypto" && (
//             <div className="space-y-2">
//               <Label htmlFor="walletAddress">Wallet Address</Label>
//               <Input
//                 id="walletAddress"
//                 placeholder="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
//                 required
//               />
//               <p className="text-xs text-gray-500">
//                 Ensure this address matches the selected cryptocurrency network
//               </p>
//             </div>
//           )}

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Processing..." : "Request Withdrawal"}
//           </Button>

//           {/* Disclaimer */}
//           <div className="text-xs text-gray-500">
//             <p>
//               Withdrawals may take 1-5 business days depending on your bank. A
//               1.5% fee applies for crypto withdrawals.
//             </p>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }


// src/components/dashboard/Withdraw.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FiArrowUpRight, 
  FiClock, 
  FiDollarSign,
  FiCreditCard // Replaced FiBank with FiCreditCard
} from "react-icons/fi";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock withdrawal methods
  const withdrawalMethods = [
    { id: "bank", name: "Bank Transfer", processing: "1-3 business days" },
    { id: "crypto", name: "Crypto Wallet", processing: "Instant" },
    { id: "paypal", name: "PayPal", processing: "Instant" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert(`Withdrawal request for $${amount} submitted successfully!`);
      setAmount("");
      setMethod("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FiArrowUpRight className="text-blue-600" />
          Withdraw Funds
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Available Balance */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <FiDollarSign className="text-blue-600" />
                <span className="text-gray-600">Available Balance:</span>
              </div>
              <div className="font-bold">$12,450.75</div>
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (USD)</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter withdrawal amount"
              required
            />
            <p className="text-xs text-gray-500">
              Minimum withdrawal: $50.00
            </p>
          </div>

          {/* Withdrawal Method */}
          <div className="space-y-2">
            <Label>Withdrawal Method</Label>
            <Select onValueChange={setMethod} value={method} required>
              <SelectTrigger>
                <SelectValue placeholder="Select withdrawal method" />
              </SelectTrigger>
              <SelectContent>
                {withdrawalMethods.map((method) => (
                  <SelectItem key={method.id} value={method.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{method.name}</span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <FiClock className="h-3 w-3" />
                        {method.processing}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Bank Details (Conditional) */}
          {method === "bank" && (
            <div className="space-y-4 p-4 border rounded-lg">
              <div className="flex items-center gap-2 text-sm font-medium">
                <FiCreditCard className="text-blue-600" /> {/* Changed from FiBank */}
                <span>Bank Account Details</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="accountName">Account Name</Label>
                  <Input
                    id="accountName"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input
                    id="accountNumber"
                    placeholder="1234567890"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Input
                    id="bankName"
                    placeholder="Chase Bank"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="routingNumber">Routing Number</Label>
                  <Input
                    id="routingNumber"
                    placeholder="021000021"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Crypto Address (Conditional) */}
          {method === "crypto" && (
            <div className="space-y-2">
              <Label htmlFor="walletAddress">Wallet Address</Label>
              <Input
                id="walletAddress"
                placeholder="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
                required
              />
              <p className="text-xs text-gray-500">
                Ensure this address matches the selected cryptocurrency network
              </p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Request Withdrawal"}
          </Button>

          {/* Disclaimer */}
          <div className="text-xs text-gray-500">
            <p>
              Withdrawals may take 1-5 business days depending on your bank. A
              1.5% fee applies for crypto withdrawals.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}