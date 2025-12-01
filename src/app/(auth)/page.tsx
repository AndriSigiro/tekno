"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LogIn, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("tobaTripAdminLoggedIn", "true");
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-cyan-900 flex items-center justify-center p-6">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500/10 blur-3xl"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 80, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              top: `${10 + i * 12}%`,
              left: `${5 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-blue-600/90 to-cyan-600/90 p-8 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <motion.div
              initial={{ scale: 0.5, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="relative mx-auto w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-white/50 shadow-2xl mb-4"
            >
              <img
                src="/logo.jpg"
                alt="TOBA TRIP"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-black text-white tracking-tight"
            >
              TOBA TRIP
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-cyan-100 font-medium mt-1"
            >
              Admin Panel
            </motion.p>
          </div>

          {/* Form Section */}
          <div className="p-8 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-1">
                Selamat Datang
              </h2>
              <p className="text-cyan-200 text-sm">Masuk ke dashboard admin</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-cyan-200">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400" />
                  <Input
                    type="email"
                    placeholder="admin@tobatrip.com"
                    required
                    className="h-12 pl-11 bg-white/10 border-white/20 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-cyan-500 backdrop-blur-md"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-cyan-200">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    className="h-12 pl-11 pr-11 bg-white/10 border-white/20 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-cyan-500 backdrop-blur-md"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-cyan-200 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-white/20 bg-white/10"
                  />
                  Ingat saya
                </label>
                <Link
                  href="/forgot-password"
                  className="text-cyan-300 hover:text-cyan-200 font-medium"
                >
                  Lupa password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg flex items-center justify-center gap-2 group transition-all duration-200 hover:scale-[1.02]"
              >
                {loading ? (
                  "Memuat..."
                ) : (
                  <>
                    <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Masuk Dashboard
                  </>
                )}
              </Button>
            </form>

            {/* Register Link */}
            <div className="text-center pt-4 border-t border-white/10">
              <p className="text-sm text-gray-300">
                Belum punya akun?{" "}
                <Link
                  href="/register"
                  className="text-cyan-300 hover:text-cyan-200 font-bold"
                >
                  Daftar Sekarang
                </Link>
              </p>
            </div>
          </div>
        </Card>

        {/* Kelompok Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-cyan-300/70 text-xs mt-4">
            © 2025 TOBA TRIP • Final Project Sistem Informasi
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
