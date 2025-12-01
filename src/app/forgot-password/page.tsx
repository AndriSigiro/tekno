"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, KeyRound, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi kirim email
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-cyan-900 flex items-center justify-center p-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500/10 blur-3xl"
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -80, 60, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 16 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${200 + i * 40}px`,
              height: `${200 + i * 40}px`,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 12}%`,
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
          {sent ? (
            // Success State
            <>
              <div className="bg-gradient-to-br from-green-600/90 to-emerald-600/90 p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                  className="relative mx-auto w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-4 ring-white/50 shadow-2xl mb-4"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-black text-white"
                >
                  Email Terkirim!
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-green-100 font-medium mt-1"
                >
                  Cek inbox Anda
                </motion.p>
              </div>

              <div className="p-8 space-y-6 text-center">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <p className="text-white font-medium mb-2">
                    Link reset password telah dikirim ke:
                  </p>
                  <p className="text-cyan-300 font-bold text-lg break-all">
                    {email}
                  </p>
                </div>

                <div className="space-y-3 text-sm text-gray-300">
                  <p>
                    Silakan cek email Anda dan klik link yang dikirimkan untuk mereset password.
                  </p>
                  <p className="text-xs text-gray-400">
                    Link akan kadaluarsa dalam 1 jam.
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <Button
                    onClick={() => router.push("/")}
                    className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold"
                  >
                    Kembali ke Login
                  </Button>

                  <button
                    onClick={() => setSent(false)}
                    className="w-full text-sm text-cyan-300 hover:text-cyan-200 font-medium"
                  >
                    Tidak menerima email? Kirim ulang
                  </button>
                </div>
              </div>
            </>
          ) : (
            // Form State
            <>
              <div className="bg-gradient-to-br from-orange-600/90 to-amber-600/90 p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2" />

                <motion.div
                  initial={{ scale: 0.5, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                  className="relative mx-auto w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center ring-4 ring-white/50 shadow-2xl mb-4"
                >
                  <KeyRound className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-black text-white tracking-tight"
                >
                  Lupa Password?
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-orange-100 font-medium mt-1"
                >
                  Jangan khawatir, kami akan bantu!
                </motion.p>
              </div>

              <div className="p-8 space-y-6">
                <div className="text-center">
                  <p className="text-gray-300 text-sm">
                    Masukkan email Anda dan kami akan mengirimkan link untuk reset password
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 pl-11 bg-white/10 border-white/20 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-orange-500 backdrop-blur-md"
                      />
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                          <Mail className="w-4 h-4 text-cyan-400" />
                        </div>
                      </div>
                      <div className="text-xs text-cyan-200 space-y-1">
                        <p className="font-semibold">Pastikan email Anda benar</p>
                        <p className="text-cyan-300/80">
                          Kami akan mengirim link reset ke email yang terdaftar di sistem
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 text-base font-bold bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Mengirim...
                      </span>
                    ) : (
                      "Kirim Link Reset Password"
                    )}
                  </Button>
                </form>

                {/* Back to Login */}
                <div className="text-center pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-300">
                    Ingat password Anda?{" "}
                    <Link href="/" className="text-orange-300 hover:text-orange-200 font-bold">
                      Kembali ke Login
                    </Link>
                  </p>
                </div>
              </div>
            </>
          )}
        </Card>

        <p className="text-cyan-300/70 text-xs mt-4 text-center">
          © 2025 TOBA TRIP • Final Project Sistem Informasi
        </p>
      </motion.div>
    </div>
  );
}