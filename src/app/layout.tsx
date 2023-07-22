import "./globals.css";
import "../../styles/globals.css";
import "../../styles/pos-icon.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/main/Navbar";
const poppins = Poppins({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </head>
      <body className={poppins.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}