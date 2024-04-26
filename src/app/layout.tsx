import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import ResponsiveAppBar from "../components/base/Header/Header";
import Footer from "@/components/base/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponsiveAppBar />
        <main>
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
