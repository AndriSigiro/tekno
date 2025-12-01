// src/components/SettingsForm.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, MapPin, BadgeCheck } from "lucide-react";

export default function SettingsForm() {
  return (
    <div className="max-w-3xl">

      {/* Title */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          General Settings
        </h2>
        <p className="text-cyan-300 text-sm mt-1">
          Informasi utama perusahaan dan branding
        </p>
      </div>

      <form className="space-y-6">

        {/* Company Name */}
        <div className="space-y-2">
          <Label htmlFor="companyName" className="text-cyan-200">
            Company Name
          </Label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-400" />
            <Input
              id="companyName"
              defaultValue="PT Toba Teknologi Wisata"
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-cyan-200 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Tagline */}
        <div className="space-y-2">
          <Label htmlFor="tagline" className="text-cyan-200">
            Tagline
          </Label>
          <div className="relative">
            <BadgeCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-400" />
            <Input
              id="tagline"
              defaultValue="Discover Toba, Feel the Journey"
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-cyan-200 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label htmlFor="address" className="text-cyan-200">
            Address
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-400" />
            <Input
              id="address"
              defaultValue="Sitoluama, Laguboti, Sumatera Utara, 22381"
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-cyan-200 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Action */}
        <div className="pt-4">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg transition">
            Save Changes
          </Button>
        </div>

      </form>

    </div>
  );
}
