// src/components/PackageTable.tsx
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
import { Edit, Trash } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Paket Keluarga",
    type: "Family",
    price: "Rp 2,000,000",
    status: "Active",
  },
  {
    id: 2,
    name: "Paket Backpacker",
    type: "Backpacker",
    price: "Rp 800,000",
    status: "Draft",
  },
  {
    id: 3,
    name: "Paket Honeymoon",
    type: "Honeymoon",
    price: "Rp 3,500,000",
    status: "Active",
  },
];

export default function PackageTable() {
  return (
    <div className="overflow-x-auto">
      <Table>

        {/* Header */}
        <TableHeader className="bg-slate-50">
          <TableRow>
            <TableHead className="font-semibold">ID</TableHead>
            <TableHead className="font-semibold">Nama Paket</TableHead>
            <TableHead className="font-semibold">Kategori</TableHead>
            <TableHead className="font-semibold">Harga</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="text-right font-semibold">Aksi</TableHead>
          </TableRow>
        </TableHeader>

        {/* Body */}
        <TableBody>
          {packages.map((pkg) => (
            <TableRow
              key={pkg.id}
              className="hover:bg-slate-50 transition"
            >
              <TableCell className="font-medium text-gray-600">
                #{pkg.id}
              </TableCell>
              <TableCell className="font-semibold text-slate-900">
                {pkg.name}
              </TableCell>
              <TableCell className="text-gray-500">
                {pkg.type}
              </TableCell>
              <TableCell className="font-medium text-green-600">
                {pkg.price}
              </TableCell>
              <TableCell>

                {/* Status Badge */}
                <Badge
                  className={`${
                    pkg.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {pkg.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right space-x-2">

                {/* Edit */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-100 text-blue-600"
                >
                  <Edit className="h-4 w-4" />
                </Button>

                {/* Delete */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-red-100 text-red-600"
                >
                  <Trash className="h-4 w-4" />
                </Button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  );
}