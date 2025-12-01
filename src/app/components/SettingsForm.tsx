// src/components/SettingsForm.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, MapPin, BadgeCheck, Phone, Mail, Globe } from "lucide-react";
import { useState } from "react";

export default function SettingsForm() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl">
      <form onSubmit={handleSave} className="space-y-6">

        {/* Company Information Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Informasi Perusahaan</h3>
              <p className="text-sm text-gray-600">Detail identitas bisnis Anda</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-sm font-semibold text-gray-700">
                Nama Perusahaan <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="companyName"
                  defaultValue="PT Toba Teknologi Wisata"
                  className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
                  placeholder="Masukkan nama perusahaan"
                />
              </div>
            </div>

            {/* Tagline */}
            <div className="space-y-2">
              <Label htmlFor="tagline" className="text-sm font-semibold text-gray-700">
                Tagline
              </Label>
              <div className="relative">
                <BadgeCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="tagline"
                  defaultValue="Discover Toba, Feel the Journey"
                  className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
                  placeholder="Tagline perusahaan"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-semibold text-gray-700">
              Alamat Lengkap <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Textarea
                id="address"
                defaultValue="Sitoluama, Laguboti, Sumatera Utara, 22381"
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white resize-none"
                rows={3}
                placeholder="Alamat lengkap perusahaan"
              />
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
            <div className="p-2 bg-green-100 rounded-lg">
              <Phone className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Informasi Kontak</h3>
              <p className="text-sm text-gray-600">Detail untuk menghubungi perusahaan</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                Nomor Telepon <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  defaultValue="+62 812 3456 7890"
                  className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
                  placeholder="+62 xxx xxxx xxxx"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  defaultValue="info@tobatrip.com"
                  className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
                  placeholder="email@perusahaan.com"
                />
              </div>
            </div>

            {/* Website */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="website" className="text-sm font-semibold text-gray-700">
                Website
              </Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="website"
                  type="url"
                  defaultValue="https://tobatrip.com"
                  className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
                  placeholder="https://website.com"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
          <Button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 shadow-md transition-all duration-200 hover:scale-105"
          >
            {saved ? "✓ Tersimpan!" : "Simpan Perubahan"}
          </Button>
          <Button 
            type="button"
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2.5"
          >
            Reset
          </Button>
          
          {saved && (
            <span className="text-sm text-green-600 font-medium animate-fade-in">
              Pengaturan berhasil disimpan!
            </span>
          )}
        </div>

      </form>
    </div>
  );
}