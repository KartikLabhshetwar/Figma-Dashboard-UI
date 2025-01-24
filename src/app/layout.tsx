import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dashboard - Square",
  description: "Modern dashboard interface built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={`${poppins.className} bg-[#FFFAEC] antialiased min-h-screen`} suppressHydrationWarning>
        <div className="flex flex-col lg:flex-row min-h-screen">
          <Sidebar />
          <div className="flex-1 lg:ml-[280px] w-full min-h-screen">
            <Header />
            <main className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
