"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Ticket,
  Tag,
  Percent,
  DollarSign,
  Users,
  Calendar,
  FileText,
  Sparkles,
} from "lucide-react";

interface VoucherFormProps {
  mode: "create" | "edit";
  initialData?: any;
}

export default function VoucherForm({ mode, initialData }: VoucherFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    code: initialData?.code || "",
    name: initialData?.name || "",
    type: initialData?.type || "percentage",
    discountValue: initialData?.discountValue || "",
    minPurchase: initialData?.minPurchase || "",
    maxDiscount: initialData?.maxDiscount || "",
    usageLimit: initialData?.usageLimit || "",
    validFrom: initialData?.validFrom || "",
    validUntil: initialData?.validUntil || "",
    description: initialData?.description || "",
    status: initialData?.status || "active",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Voucher data:", formData);
      setLoading(false);
      router.push("/vouchers");
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateCode = () => {
    const code = `TOBA${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    handleChange("code", code);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Ticket className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Informasi Voucher</h3>
            <p className="text-sm text-gray-600">Detail dasar voucher diskon</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Voucher Code */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="code" className="text-sm font-semibold text-gray-700">
              Kode Voucher <span className="text-red-500">*</span>
            </Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="code"
                  value={formData.code}
                  onChange={(e) => handleChange("code", e.target.value.toUpperCase())}
                  className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500 font-mono uppercase"
                  placeholder="TOBA2025"
                  required
                />
              </div>
              <Button
                type="button"
                onClick={generateCode}
                variant="outline"
                className="border-gray-300 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Generate
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              Kode unik yang akan digunakan pelanggan. Huruf besar, tanpa spasi.
            </p>
          </div>

          {/* Voucher Name */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
              Nama Voucher <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                placeholder="New Year Promo 2025"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Discount Settings */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
          <div className="p-2 bg-green-100 rounded-lg">
            <Percent className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Pengaturan Diskon</h3>
            <p className="text-sm text-gray-600">Atur tipe dan nilai diskon</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Discount Type */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700">
              Tipe Diskon <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.type}
              onValueChange={(value) => handleChange("type", value)}
            >
              <SelectTrigger className="border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="percentage">Persentase (%)</SelectItem>
                <SelectItem value="fixed">Nominal Tetap (Rp)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Discount Value */}
          <div className="space-y-2">
            <Label htmlFor="discountValue" className="text-sm font-semibold text-gray-700">
              Nilai Diskon <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              {formData.type === "percentage" ? (
                <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              ) : (
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              )}
              <Input
                id="discountValue"
                type="number"
                value={formData.discountValue}
                onChange={(e) => handleChange("discountValue", e.target.value)}
                className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                placeholder={formData.type === "percentage" ? "20" : "50000"}
                required
              />
            </div>
            <p className="text-xs text-gray-500">
              {formData.type === "percentage"
                ? "Masukkan nilai persentase (1-100)"
                : "Masukkan nominal dalam Rupiah"}
            </p>
          </div>

          {/* Min Purchase */}
          <div className="space-y-2">
            <Label htmlFor="minPurchase" className="text-sm font-semibold text-gray-700">
              Minimum Pembelian
            </Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="minPurchase"
                type="number"
                value={formData.minPurchase}
                onChange={(e) => handleChange("minPurchase", e.target.value)}
                className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                placeholder="500000"
              />
            </div>
            <p className="text-xs text-gray-500">
              Opsional: Minimal transaksi untuk menggunakan voucher
            </p>
          </div>

          {/* Max Discount */}
          {formData.type === "percentage" && (
            <div className="space-y-2">
              <Label htmlFor="maxDiscount" className="text-sm font-semibold text-gray-700">
                Maksimal Diskon
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="maxDiscount"
                  type="number"
                  value={formData.maxDiscount}
                  onChange={(e) => handleChange("maxDiscount", e.target.value)}
                  className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="100000"
                />
              </div>
              <p className="text-xs text-gray-500">
                Opsional: Batas maksimal diskon dalam Rupiah
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Usage & Validity */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Penggunaan & Validitas</h3>
            <p className="text-sm text-gray-600">Atur batas penggunaan dan periode berlaku</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Usage Limit */}
          <div className="space-y-2">
            <Label htmlFor="usageLimit" className="text-sm font-semibold text-gray-700">
              Batas Penggunaan <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="usageLimit"
                type="number"
                value={formData.usageLimit}
                onChange={(e) => handleChange("usageLimit", e.target.value)}
                className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                placeholder="100"
                required
              />
            </div>
            <p className="text-xs text-gray-500">
              Jumlah maksimal voucher dapat digunakan
            </p>
          </div>

          {/* Valid From */}
          <div className="space-y-2">
            <Label htmlFor="validFrom" className="text-sm font-semibold text-gray-700">
              Berlaku Dari <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
              <Input
                id="validFrom"
                type="date"
                value={formData.validFrom}
                onChange={(e) => handleChange("validFrom", e.target.value)}
                className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          {/* Valid Until */}
          <div className="space-y-2">
            <Label htmlFor="validUntil" className="text-sm font-semibold text-gray-700">
              Berlaku Hingga <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
              <Input
                id="validUntil"
                type="date"
                value={formData.validUntil}
                onChange={(e) => handleChange("validUntil", e.target.value)}
                className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
          <div className="p-2 bg-orange-100 rounded-lg">
            <FileText className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Deskripsi</h3>
            <p className="text-sm text-gray-600">Informasi tambahan tentang voucher</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="text-sm font-semibold text-gray-700">
            Deskripsi Voucher
          </Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 resize-none min-h-[100px]"
            placeholder="Jelaskan syarat dan ketentuan penggunaan voucher..."
          />
        </div>
      </div>

      {/* Status */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
          <div className="p-2 bg-pink-100 rounded-lg">
            <Tag className="w-5 h-5 text-pink-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Status</h3>
            <p className="text-sm text-gray-600">Atur status voucher</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-semibold text-gray-700">
            Status Voucher <span className="text-red-500">*</span>
          </Label>
          <Select
            value={formData.status}
            onValueChange={(value) => handleChange("status", value)}
          >
            <SelectTrigger className="border-gray-300 focus:border-purple-500 focus:ring-purple-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active (Dapat Digunakan)</SelectItem>
              <SelectItem value="draft">Draft (Belum Aktif)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
        <Button
          type="submit"
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2.5 shadow-md transition-all duration-200 hover:scale-105"
        >
          {loading ? "Menyimpan..." : mode === "create" ? "Buat Voucher" : "Simpan Perubahan"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/vouchers")}
          className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-2.5"
        >
          Batal
        </Button>
      </div>
    </form>
  );
}