"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { UserPlus, Mail, Lock, User, Phone, Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      alert("Registrasi berhasil! Silakan login.");
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-cyan-900 flex items-center justify-center p-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500/10 blur-3xl"
            animate={{
              x: [0, -100, 50, 0],
              y: [0, 100, -80, 0],
              scale: [1, 1.3, 0.7, 1],
            }}
            transition={{
              duration: 18 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${180 + i * 40}px`,
              height: `${180 + i * 40}px`,
              top: `${15 + i * 10}%`,
              right: `${10 + i * 8}%`,
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
        {/* Back Button */}
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-4 text-cyan-200 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Login
          </Button>
        </Link>

        <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-purple-600/90 to-pink-600/90 p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2" />
            
            <motion.div
              initial={{ scale: 0.5, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="relative mx-auto w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center ring-4 ring-white/50 shadow-2xl mb-4"
            >
              <UserPlus className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-black text-white tracking-tight"
            >
              Buat Akun Baru
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-purple-100 font-medium mt-1"
            >
              Bergabung dengan TOBA TRIP Admin
            </motion.p>
          </div>

          {/* Form Section */}
          <div className="p-8 space-y-4">
            <form onSubmit={handleRegister} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-cyan-200">Nama Lengkap</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400" />
                  <Input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="h-11 pl-11 bg-white/10 border-white/20 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-purple-500 backdrop-blur-md"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-cyan-200">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400" />
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="h-11 pl-11 bg-white/10 border-white/20 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-purple-500 backdrop-blur-md"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-cyan-200">Nomor Telepon</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400" />
                  <Input
                    type="tel"
                    placeholder="+62 812 3456 7890"
                    required
                    className="h-11 pl-11 bg-white/10 border-white/20 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-purple-500 backdrop-blur-md"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-cyan-200">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimal 8 karakter"
                    required
                    minLength={8}
                    className="h-11 pl-11 pr-11 bg-white/10 border-white/20 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-purple-500 backdrop-blur-md"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-cyan-200">Konfirmasi Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Ulangi password"
                    required
                    minLength={8}
                    className="h-11 pl-11 pr-11 bg-white/10 border-white/20 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-purple-500 backdrop-blur-md"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-300"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1 rounded border-white/20 bg-white/10"
                />
                <label className="text-xs text-gray-300">
                  Saya setuju dengan{" "}
                  <a href="#" className="text-purple-300 hover:text-purple-200 font-medium">
                    Syarat & Ketentuan
                  </a>{" "}
                  dan{" "}
                  <a href="#" className="text-purple-300 hover:text-purple-200 font-medium">
                    Kebijakan Privasi
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-base font-bold bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white shadow-lg flex items-center justify-center gap-2 group transition-all duration-200 hover:scale-[1.02]"
              >
                {loading ? (
                  "Mendaftar..."
                ) : (
                  <>
                    <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Daftar Sekarang
                  </>
                )}
              </Button>
            </form>

            {/* Login Link */}
            <div className="text-center pt-4 border-t border-white/10">
              <p className="text-sm text-gray-300">
                Sudah punya akun?{" "}
                <Link href="/" className="text-purple-300 hover:text-purple-200 font-bold">
                  Masuk di sini
                </Link>
              </p>
            </div>
          </div>
        </Card>

        <p className="text-cyan-300/70 text-xs mt-4 text-center">
          © 2025 TOBA TRIP • Final Project Sistem Informasi
        </p>
      </motion.div>
    </div>
  );
}