"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import VoucherForm from "@/app/components/VoucherForm";

export default function CreateVoucherPage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-md"
      >
        <div className="relative z-10">
          <Button
            onClick={() => router.push("/vouchers")}
            variant="ghost"
            className="mb-4 text-white hover:bg-white/20 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Daftar Voucher
          </Button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Ticket className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Buat Voucher Baru
            </h1>
          </div>
          <p className="text-base text-purple-50/90">
            Buat voucher diskon untuk menarik lebih banyak pelanggan
          </p>
        </div>
      </motion.div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <VoucherForm mode="create" />
      </motion.div>
    </div>
  );
}