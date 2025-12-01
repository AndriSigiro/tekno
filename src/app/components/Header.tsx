// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      {/* Search Bar */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            className="pl-10 w-64 focus:ring-2 focus:ring-blue-500"
            placeholder="Search anything..."
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User Avatar */}
        <Avatar className="cursor-pointer hover:opacity-80 transition">
          <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>

        {/* Logout Button */}
        <Button
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-50 transition"
          onClick={() => {
            localStorage.removeItem("tobaTripAdminLoggedIn");
            window.location.href = "/";
          }}
        >
          Logout
        </Button>
      </div>
    </header>
  );
}
