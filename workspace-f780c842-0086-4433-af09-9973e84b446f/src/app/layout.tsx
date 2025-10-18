import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RushAlert - Instant Alerts for Critical Decisions",
  description: "Unified real-time notifications to keep you ahead. Free trial now.",
  keywords: ["RushAlert", "real-time alerts", "emergency notifications", "critical alerts", "communication system", "AI alerts", "emergency response", "trading alerts"],
  authors: [{ name: "RushAlert Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "RushAlert - Instant Alerts for Critical Decisions",
    description: "Unified real-time notifications to keep you ahead. Free trial now.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RushAlert - Instant Alerts for Critical Decisions",
    description: "Unified real-time notifications to keep you ahead. Free trial now.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
