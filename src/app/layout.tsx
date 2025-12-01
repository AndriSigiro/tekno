// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: { default: "TOBA TRIP • Admin Panel", template: "%s | TOBA TRIP" },
  description: "Sistem Manajemen Wisata Danau Toba • Kelompok 02",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="light">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#0c4a6e" />
      </head>

      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}