import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ModalProvider } from "@/providers/modal-provider";
import { Toaster } from "@/components/ui/sonner"
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "E-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider/>
        <Toaster
        position="top-center"
        />
        <Navbar/>
        {children}
        <Analytics />
        <Footer/>
        </body>
    </html>
  );
}
