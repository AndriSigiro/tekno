import UserTable from "@/app/components/UserTable";
import { Button } from "@/components/ui/button";
import { Plus, Users } from "lucide-react";

export default function UsersPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kelola Pengguna
            </h1>
          </div>
          <p className="text-gray-500 mt-1">
            Atur akun, role, dan akses pengguna
          </p>
        </div>

        <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-xl shadow-lg transition">
          <Plus size={18} />
          Tambah User
        </Button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <UserTable />
      </div>

    </div>
  );
}
