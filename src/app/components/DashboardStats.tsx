// src/components/DashboardStats.tsx
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Package, DollarSign } from "lucide-react";

export default function DashboardStats() {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Active Packages",
      value: "56",
      icon: Package,
      gradient: "from-green-500 to-emerald-400",
    },
    {
      title: "Total Revenue",
      value: "Rp 150M",
      icon: DollarSign,
      gradient: "from-yellow-500 to-orange-400",
    },
    {
      title: "Growth",
      value: "+15%",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Glow */}
          <div
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-20 blur-2xl`}
          />

          <CardContent className="relative p-6">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.gradient} shadow-lg mb-4`}
            >
              <stat.icon className="h-6 w-6 text-white" />
            </div>

            <p className="text-sm text-gray-300">{stat.title}</p>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              {stat.value}
            </h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
