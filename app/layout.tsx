import type { Metadata } from "next";
import { Yeseva_One, Work_Sans } from "next/font/google";
import "./globals.css";
import TopInfo from "@/components/app/top-info";
import NavBar from "@/components/app/nav-bar";
import Footer from "@/components/app/footer";

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
        <div className="sticky top-0 z-50 shadow-2xl">
          <TopInfo />
          <NavBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
