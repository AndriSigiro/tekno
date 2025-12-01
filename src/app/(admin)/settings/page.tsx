"use client";

import { motion } from "framer-motion";
import SettingsForm from "@/app/components/SettingsForm";
import { Settings, Shield, Bell, Palette } from "lucide-react";

export default function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto space-y-12"
    >

      {/* Header */}
      <div className="relative text-center">
        {/* Glow */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full -z-10" />
        </div>

        <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 shadow-xl mb-6">
          <Settings className="w-12 h-12 text-white animate-spin-slow" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Pengaturan Sistem
        </h1>
        <p className="text-lg md:text-xl text-cyan-200 mt-3">
          Konfigurasi dan keamanan aplikasi TOBA TRIP
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Shield, title: "Keamanan", desc: "Password, login & autentikasi" },
          { icon: Bell, title: "Notifikasi", desc: "Email, pesan & push alert" },
          { icon: Palette, title: "Tampilan", desc: "Tema, warna & branding" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl p-6 text-center border border-white/20 bg-white/5 backdrop-blur-xl shadow-xl hover:bg-white/10 transition"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 opacity-0 hover:opacity-100 transition" />

            <item.icon className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
            <h3 className="font-semibold text-lg text-white">{item.title}</h3>
            <p className="text-cyan-300 text-sm mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Settings Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl shadow-2xl p-8"
      >
        <SettingsForm />
      </motion.div>

    </motion.div>
  );
}
