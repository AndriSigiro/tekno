// src/components/DashboardStats.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Package, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardStats() {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12.5%",
      icon: Users,
      gradient: "from-blue-500 to-cyan-400",
      bgColor: "from-blue-50/80 to-cyan-50/80",
      iconBg: "bg-blue-500",
    },
    {
      title: "Active Packages",
      value: "56",
      change: "+8.2%",
      icon: Package,
      gradient: "from-green-500 to-emerald-400",
      bgColor: "from-green-50/80 to-emerald-50/80",
      iconBg: "bg-green-500",
    },
    {
      title: "Total Revenue",
      value: "Rp 150M",
      change: "+23.1%",
      icon: DollarSign,
      gradient: "from-orange-500 to-yellow-400",
      bgColor: "from-orange-50/80 to-yellow-50/80",
      iconBg: "bg-orange-500",
    },
    {
      title: "Growth",
      value: "+15%",
      change: "This month",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50/80 to-pink-50/80",
      iconBg: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Card
            className={`group relative overflow-hidden border border-gray-200 bg-gradient-to-br ${stat.bgColor} backdrop-blur-sm shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300`}
          >
            {/* Glow effect on hover */}
            <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${stat.gradient} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`} />
            
            <CardContent className="relative p-6">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.iconBg} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                
                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>

              <p className="text-sm text-gray-600 font-medium mb-1">
                {stat.title}
              </p>
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                {stat.value}
              </h3>

              {/* Progress bar */}
              <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${stat.gradient}`}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}