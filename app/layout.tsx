import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ATECONE Real Estate | Buy & Rent Properties in Rwanda",
  description:
    "ATECONE is Rwanda's trusted real estate company. Find houses, villas, apartments, and land for sale or rent across Kigali and beyond.",
  keywords: "real estate Rwanda, property Kigali, house for sale Rwanda, apartment rent Kigali, ATECONE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
