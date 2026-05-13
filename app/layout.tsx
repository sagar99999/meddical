import type { Metadata } from "next";
import { Yeseva_One, Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"
import NextTopLoader from 'nextjs-toploader';

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const yesevaOne = Yeseva_One({
  weight: "400",
  variable: "--font-yeseva-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meddical",
  description: "online medical service hospital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${yesevaOne.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning>
        <NextTopLoader showSpinner={false} color="#1f2b6c" height={3} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
