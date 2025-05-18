// // app/(auth)/login/LoginPageClient.tsx
// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { signIn } from "next-auth/react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { AlertCircle } from "lucide-react";

// const formSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
// });

// export default function LoginPageClient() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const error = searchParams.get("error");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "demo@forex.com",
//       password: "forex123",
//     },
//   });

//   const onSubmit = async (data: { email: string; password: string }) => {
//     const result = await signIn("credentials", {
//       redirect: false,
//       email: data.email,
//       password: data.password,
//     });

//     if (result?.error) {
//       router.push("/login?error=true");
//     } else {
//       router.push("/dashboard");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-2xl">Login to Your Account</CardTitle>
//           <CardDescription>
//             Enter your credentials to access your dashboard
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           {error && (
//             <Alert variant="destructive" className="mb-4">
//               <AlertCircle className="h-4 w-4" />
//               <AlertDescription>Invalid email or password</AlertDescription>
//             </Alert>
//           )}
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="demo@forex.com"
//                 {...register("email")}
//               />
//               {errors.email && (
//                 <p className="text-sm text-red-500">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="••••••••"
//                 {...register("password")}
//               />
//               {errors.password && (
//                 <p className="text-sm text-red-500">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>
//             <Button type="submit" className="w-full">
//               Sign In
//             </Button>
//           </form>
//           <div className="mt-4 text-center text-sm">
//             Demo credentials: demo@forex.com / forex123
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function LoginPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "demo@forex.com",
      password: "forex123",
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      router.push("/login?error=true");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md p-6 shadow-md bg-blue-700 rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Login to Your Account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>Invalid email or password</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="demo@forex.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full pointer">
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Demo credentials: demo@forex.com / forex123
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
