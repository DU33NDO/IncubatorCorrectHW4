"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { AuthProvider } from "./AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";


const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-60">
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <NavBar />
              {children}
            </AuthProvider>
          </QueryClientProvider>
        </div>
      </body>
    </html>
  );
}
