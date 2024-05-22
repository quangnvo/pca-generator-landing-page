import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


// Import global components
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PCA Generator",
  description: "This tool is designed to help you generate a Principal Component Analysis (PCA) plot from your data.",

  // This is the favicon of the website
  // The /favicon.ico is the public path of the favicon
  // So the favicon is located at "public/favicon.ico"
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
