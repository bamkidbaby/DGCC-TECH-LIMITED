import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AosInitializer from "@/components/aos-initializer";
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
  title: {
    default: "DGCC Tech Limited | Connecting dots in tech",
    template: "%s | DGCC Tech Limited",
  },
  description:
    "Web design, IT support, cyber security, branding, printing and tech training from DGCC Tech Limited.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AosInitializer />
        {children}
      </body>
    </html>
  );
}
