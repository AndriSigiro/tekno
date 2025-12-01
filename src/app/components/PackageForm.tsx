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
  Package,
  DollarSign,
  Calendar,
  Users,
  MapPin,
  FileText,
  Image as ImageIcon,
  Tag,
} from "lucide-react";

interface PackageFormProps {
  mode: "create" | "edit";
  initialData?: any;
}

export default function PackageForm({ mode, initialData }: PackageFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    category: initialData?.category || "",
    price: initialData?.price || "",
    duration: initialData?.duration || "",
    maxParticipants: initialData?.maxParticipants || "",
    location: initialData?.location || "",
    description: initialData?.description || "",
    includes: initialData?.includes || "",
    status: initialData?.status || "draft",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi API call
    setTimeout(() => {
      console.log("Form data:", formData);
      setLoading(false);
      router.push("/packages");
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Package className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Informasi Dasar</h3>
            <p className="text-sm text-gray-600">Detail utama paket wisata</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Package Name */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
              Nama Paket <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Contoh: Paket Keluarga Danau Toba"
                required
              />
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-semibold text-gray-700">
              Kategori <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
              <Select
                value={formData.category}
                onValueChange={(value) => handleChange("category", value)}
              >
                <SelectTrigger className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="honeymoon">Honeymoon</SelectItem>
                  <SelectItem value="backpacker">Backpacker</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <Label htmlFor="price" className="text-sm font-semibold text-gray-700">
              Harga (Rp) <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="2000000"
                required
              />
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <Label htmlFor="duration" className="text-sm font-semibold text-gray-700">
              Durasi <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) => handleChange("duration", e.target.value)}
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="3 Hari 2 Malam"
                required
              />
            </div>
          </div>

          {/* Max Participants */}
          <div className="space-y-2">
            <Label htmlFor="maxParticipants" className="text-sm font-semibold text-gray-700">
              Maksimal Peserta
            </Label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="maxParticipants"
                type="number"
                value={formData.maxParticipants}
                onChange={(e) => handleChange("maxParticipants", e.target.value)}
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="10"
              />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="location" className="text-sm font-semibold text-gray-700">
              Lokasi <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Danau Toba, Sumatera Utara"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
          <div className="p-2 bg-purple-100 rounded-lg">
            <FileText className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Deskripsi & Detail</h3>
            <p className="text-sm text-gray-600">Informasi lengkap tentang paket</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-semibold text-gray-700">
              Deskripsi Paket <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none min-h-[120px]"
              placeholder="Jelaskan detail paket wisata, keunggulan, dan pengalaman yang akan didapat..."
              required
            />
          </div>

          {/* Includes */}
          <div className="space-y-2">
            <Label htmlFor="includes" className="text-sm font-semibold text-gray-700">
              Yang Termasuk
            </Label>
            <Textarea
              id="includes"
              value={formData.includes}
              onChange={(e) => handleChange("includes", e.target.value)}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none min-h-[100px]"
              placeholder="- Transportasi AC&#10;- Hotel bintang 4&#10;- Makan 3x sehari&#10;- Tour guide&#10;- Tiket masuk objek wisata"
            />
            <p className="text-xs text-gray-500">Pisahkan setiap item dengan enter baris baru</p>
          </div>
        </div>
      </div>

      {/* Image Upload */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
          <div className="p-2 bg-green-100 rounded-lg">
            <ImageIcon className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Media & Gambar</h3>
            <p className="text-sm text-gray-600">Upload foto paket wisata</p>
          </div>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
          <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-sm font-medium text-gray-700 mb-1">
            Klik untuk upload atau drag & drop
          </p>
          <p className="text-xs text-gray-500">PNG, JPG atau JPEG (Maks. 5MB)</p>
        </div>
      </div>

      {/* Status */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Tag className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Status Publikasi</h3>
            <p className="text-sm text-gray-600">Atur status paket wisata</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-semibold text-gray-700">
            Status <span className="text-red-500">*</span>
          </Label>
          <Select
            value={formData.status}
            onValueChange={(value) => handleChange("status", value)}
          >
            <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft (Tidak Ditampilkan)</SelectItem>
              <SelectItem value="active">Active (Dipublikasikan)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
        <Button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 shadow-md transition-all duration-200 hover:scale-105"
        >
          {loading ? "Menyimpan..." : mode === "create" ? "Tambah Paket" : "Simpan Perubahan"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/packages")}
          className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-2.5"
        >
          Batal
        </Button>
      </div>
    </form>
  );
}