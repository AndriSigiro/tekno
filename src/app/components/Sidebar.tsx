// src/components/Sidebar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Users,
  CreditCard,
  Settings,
  LogOut,
  Ticket,
  Star, // Ganti Rating dengan Star
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Packages", href: "/packages", icon: Package },
  { name: "Users", href: "/users", icon: Users },
  { name: "Transactions", href: "/transactions", icon: CreditCard },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Vouchers", href: "/vouchers", icon: Ticket },
  { name: "Rating", href: "/rating", icon: Star }, // Ganti icon menjadi Star
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-3 p-6 border-b border-gray-100">
        <Avatar className="ring-2 ring-blue-500">
          <AvatarImage src="/logo.jpg" alt="TOBA TRIP Logo" />
          <AvatarFallback>TT</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-lg font-extrabold text-blue-900">
            TOBA TRIP
          </span>
          <span className="text-xs text-gray-400">Admin Panel</span>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link key={item.name} href={item.href}>
              <div
                className={`flex items-center gap-3 px-4 py-2 rounded-xl transition 
                ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    active ? "text-white" : "text-gray-400"
                  }`}
                />
                <span
                  className={`font-medium ${active ? "font-semibold" : ""}`}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-5 border-t border-gray-100">
        <Button
          variant="outline"
          className="w-full flex items-center gap-3 text-red-600 border-red-200 hover:bg-red-50"
          onClick={() => {
            localStorage.removeItem("tobaTripAdminLoggedIn");
            window.location.href = "/";
          }}
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
}