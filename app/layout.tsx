import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import TopInfo from "@/components/app/top-info";
import NavBar from "@/components/app/nav-bar";
import Footer from "@/components/app/footer";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Slab({
  variable: "--font-roboto-slab",
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
      className={`${robotoSans.variable} ${robotoMono.variable} h-full antialiased`}
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
