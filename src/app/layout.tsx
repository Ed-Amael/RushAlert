import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RushAlert - AI-Powered Stampede Prevention for India's Events",
  description: "RushAlert uses existing CCTV and drones to predict crowd risks in real-time, reducing response times by 50% and preventing 200-300 annual fatalities.",
  keywords: ["RushAlert", "AI", "crowd safety", "stampede prevention", "event security", "CCTV", "drones", "India events", "Kumbh Mela", "public safety"],
  authors: [{ name: "Vellore Institute of Technology, Andhra Pradesh" }],
  openGraph: {
    title: "RushAlert - AI-Powered Stampede Prevention",
    description: "Preventing stampedes at large Indian events with AI-powered crowd monitoring and real-time alerts.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RushAlert - AI-Powered Stampede Prevention",
    description: "Preventing stampedes at large Indian events with AI-powered crowd monitoring and real-time alerts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Deploy to Netlify: Drag and drop the dist folder to Netlify or connect your GitHub repository */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
