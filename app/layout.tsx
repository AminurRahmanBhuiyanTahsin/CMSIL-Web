import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Added this import to fix your error!

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This section changes your Tab Name and adds your Logo!
export const metadata: Metadata = {
  title: "CMSIL Institute | Engineering & Technology",
  description: "Official Portal - Bridging Academics with Practical Innovation",
  icons: {
    icon: "/college_logo_no_background.webp", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        {/* The Navbar stays at the top */}
        <Navbar />
        
        {/* This div grows to push the footer down if the page is empty */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* The Footer stays at the bottom */}
        <Footer />
      </body>
    </html>
  );
}