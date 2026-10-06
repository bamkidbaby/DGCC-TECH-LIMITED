import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import AosInitializer from "@/components/aos-initializer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
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
      className={`${manrope.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AosInitializer />
        {children}
      </body>
    </html>
  );
}
