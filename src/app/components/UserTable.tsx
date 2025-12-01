// src/components/UserTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash, User, Mail, ShieldCheck } from "lucide-react";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
];

// Style badge status
function statusStyle(status: string) {
  return status === "Active"
    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
    : "bg-rose-100 text-rose-800 border border-rose-300";
}

export default function UserTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
          <User className="h-5 w-5 text-blue-600" />
          Daftar Pengguna
        </h2>
        <span className="text-sm text-gray-500">
          Total: {users.length} user
        </span>
      </div>

      {/* Table */}
      <Table>

        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold">ID</TableHead>
            <TableHead className="font-semibold gap-2">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" /> Nama
              </div>
            </TableHead>
            <TableHead className="font-semibold">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email
              </div>
            </TableHead>
            <TableHead className="font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Role
              </div>
            </TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold text-center">Aksi</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              className="hover:bg-blue-50 transition"
            >
              <TableCell className="font-mono text-gray-600">
                #{user.id}
              </TableCell>

              <TableCell className="font-medium text-gray-800">
                {user.name}
              </TableCell>

              <TableCell className="text-gray-600">
                {user.email}
              </TableCell>

              <TableCell className="font-semibold text-blue-700">
                {user.role}
              </TableCell>

              <TableCell>
                <Badge className={`rounded-full px-3 py-1 text-xs ${statusStyle(user.status)}`}>
                  {user.status === "Active" ? "Aktif" : "Nonaktif"}
                </Badge>
              </TableCell>

              <TableCell className="text-center">
                <div className="flex justify-center gap-2">

                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-blue-100 text-blue-600"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-red-100 text-red-600"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>

                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  );
}
