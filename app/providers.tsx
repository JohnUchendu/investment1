"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
// import type {  ThemeProviderProps } from "next-themes/dist/types";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children}: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}