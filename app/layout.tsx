import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './main.css'
import Sidebar from "@/app/ui/sidebar/sidebar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full">
          <Sidebar />
          <main className="relative mx-auto py-12 w-2/3 xl:w-3/5 2xl:w-2/5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
