"use client";

import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

