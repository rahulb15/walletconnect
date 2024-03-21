"use client";

import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Lines from "@/src/components/Lines";
import ScrollToTop from "@/src/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { ClientContextProvider } from "../providers/ClientContextProvider";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ClientContextProvider>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
        </ClientContextProvider>
      </body>
    </html>
  );
}
