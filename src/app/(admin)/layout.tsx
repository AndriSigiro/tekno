"use client";

import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="p-6 overflow-auto bg-gray-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}