import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cognitive AI Assistant - Privacy-Focused AI Companion",
  description: "Experience the future of AI assistants with our privacy-focused, offline AI companion featuring real-time conversation, smart home control, and intelligent scheduling.",
  keywords: ["AI Assistant", "Privacy", "Offline AI", "Smart Home", "Jetson Nano", "Local LLM", "IoT"],
  authors: [{ name: "Cognitive Assistant Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Cognitive AI Assistant - Privacy-Focused AI Companion",
    description: "Experience the future of AI assistants with our privacy-focused, offline AI companion",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognitive AI Assistant",
    description: "Privacy-focused, offline AI assistant with smart home control",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900`}
      >
        {children}
      </body>
    </html>
  );
}
