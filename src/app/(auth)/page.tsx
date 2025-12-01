// src/app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MotionConfig, motion } from "framer-motion";
import { LogIn } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("tobaTripAdminLoggedIn", "true");
    router.push("/dashboard");
  };

  return (
    <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-cyan-900 flex items-center justify-center p-6">
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -100, 80, 0],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-lg"
        >
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-b from-blue-900/90 to-indigo-900/90 p-10 text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mx-auto w-40 h-40 rounded-full overflow-hidden ring-8 ring-white/30 shadow-2xl mb-6 backdrop-blur-md"
              >
                <img
                  src="/logo.jpg"
                  alt="TOBA TRIP Logo"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.h1
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-black text-white tracking-tight"
              >
                TOBA TRIP
              </motion.h1>
              <motion.p
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-cyan-200 font-medium mt-2"
              >
                Discover Toba, Feel the Journey
              </motion.p>
            </div>

            {/* Form Section */}
            <div className="p-10 space-y-8 bg-gradient-to-b from-transparent to-white/5">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white">Admin Panel</h2>
                <p className="text-cyan-200 mt-1">PT. Toba Teknologi Wisata</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Input
                    type="email"
                    placeholder="Email admin"
                    required
                    className="h-14 text-lg bg-white/10 border-white/20 placeholder:text-gray-400 text-white focus:ring-4 focus:ring-cyan-500/50 backdrop-blur-md"
                  />
                </motion.div>

                <motion.div whileTap={{ scale: 0.98 }}>
                  <Input
                    type="password"
                    placeholder="Password"
                    required
                    className="h-14 text-lg bg-white/10 border-white/20 placeholder:text-gray-400 text-white focus:ring-4 focus:ring-cyan-500/50 backdrop-blur-md"
                  />
                </motion.div>

                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl flex items-center justify-center gap-3 group"
                >
                  <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  MASUK KE DASHBOARD
                </Button>
              </form>

              {/* Demo Info & Kelompok */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center space-y-5 text-sm"
              >
                <p className="font-bold text-cyan-300 bg-cyan-900/30 px-4 py-2 rounded-full inline-block">
                  Demo: Ketik apa saja → langsung masuk!
                </p>

                <div className="text-gray-300 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <p className="font-bold text-cyan-200 text-lg mb-3">Kelompok 02</p>
                  <div className="space-y-1 text-left max-w-xs mx-auto">
                    <p>11323012 • Kevin Christian Rumapea</p>
                    <p>11323022 • Andri Agung Exaudi Sigiro</p>
                    <p>11323032 • Rizky Apryadi</p>
                    <p>11323042 • Junita Mareska Sihombing</p>
                    <p>11323052 • Lasro Pesta Natalia Tamba</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Card>

          {/* Footer Credit */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-cyan-300/70 text-sm mt-8"
          >
            © 2025 TOBA TRIP — Final Project Sistem Informasi
          </motion.p>
        </motion.div>
      </div>
    </MotionConfig>
  );
}