// "use client";

// import { useSession } from "next-auth/react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// export function AccountInfo() {
//   const { data: session } = useSession();
  
//   if (!session?.user) return null;

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Account Information</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           <div>
//             <p className="text-sm text-gray-500">Account Holder</p>
//             <p className="text-lg font-medium">{session.user.name}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Account Balance</p>
//             <p className="text-2xl font-bold">
//              {(session.user.balance ?? 0).toLocaleString("en-US", {
//                 style: "currency",
//                 currency: session.user.currency || "USD"
//               })}
//             </p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }


// "use client";

// interface User {
//   name?: string;
//   balance?: number;
//   currency?: string;
// }

// interface AccountInfoProps {
//   user: User;
// }

// export default function AccountInfo({ user }) {
//   return (
//     <div className="bg-blue-900 p-4 rounded-lg mb-6">
//       <div className="flex items-center space-x-3 mb-3">
//         <div className="bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center">
//           <span className="text-lg font-medium">
//             {user?.name?.charAt(0).toUpperCase()}
//           </span>
//         </div>
//         <div>
//           <h3 className="font-medium">{user?.name}</h3>
//           <p className="text-xs text-blue-200">Account Holder</p>
//         </div>
//       </div>
//       <div className="bg-blue-950 p-3 rounded-lg">
//         <p className="text-xs text-blue-300 mb-1">Account Balance</p>
//         <p className="text-xl font-bold">
//           {user?.balance?.toLocaleString('en-US', {
//             style: 'currency',
//             currency: user?.currency || 'USD'
//           })}
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

interface User {
  name?: string;
  balance?: number;
  currency?: string;
}

interface AccountInfoProps {
  user: User;
}

export default function AccountInfo({ user }: AccountInfoProps) {
  return (
    <div className="bg-blue-900 p-3 md:p-4 rounded-lg mb-6">
      <div className="flex items-center space-x-3 mb-3">
        <div className="bg-blue-700 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
          <span className="text-sm md:text-lg font-medium">
            {user?.name?.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="overflow-hidden">
          <h3 className="font-medium truncate">{user?.name}</h3>
          <p className="text-xs text-blue-200">Account Holder</p>
        </div>
      </div>
      <div className="bg-blue-950 p-2 md:p-3 rounded-lg">
        <p className="text-xs text-blue-300 mb-1">Account Balance</p>
        <p className="text-lg md:text-xl font-bold truncate">
          {user?.balance?.toLocaleString('en-US', {
            style: 'currency',
            currency: user?.currency || 'USD'
          })}
        </p>
      </div>
    </div>
  );
}