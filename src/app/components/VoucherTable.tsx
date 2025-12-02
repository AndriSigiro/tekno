"use client";

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
import { Edit, Trash, Copy, Eye, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";

const vouchers = [
  {
    id: 1,
    code: "TOBA2025",
    name: "New Year Promo",
    type: "Percentage",
    discount: "20%",
    used: 45,
    limit: 100,
    validUntil: "31 Des 2025",
    status: "Active",
  },
  {
    id: 2,
    code: "WELCOME50",
    name: "Welcome Discount",
    type: "Fixed",
    discount: "Rp 50,000",
    used: 128,
    limit: 500,
    validUntil: "31 Mar 2025",
    status: "Active",
  },
  {
    id: 3,
    code: "FAMILY30",
    name: "Family Package",
    type: "Percentage",
    discount: "30%",
    used: 67,
    limit: 200,
    validUntil: "15 Feb 2025",
    status: "Active",
  },
  {
    id: 4,
    code: "SUMMER24",
    name: "Summer Sale",
    type: "Percentage",
    discount: "25%",
    used: 200,
    limit: 200,
    validUntil: "31 Ags 2024",
    status: "Expired",
  },
];

export default function VoucherTable() {
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`Kode "${code}" berhasil disalin!`);
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100">
            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider">
              Kode Voucher
            </TableHead>
            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider">
              Nama
            </TableHead>
            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider">
              Tipe
            </TableHead>
            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider">
              Diskon
            </TableHead>
            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider">
              Penggunaan
            </TableHead>
            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider">
              Berlaku Hingga
            </TableHead>
            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider">
              Status
            </TableHead>
            <TableHead className="text-right font-bold text-gray-700 text-xs uppercase tracking-wider">
              Aksi
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {vouchers.map((voucher, index) => (
            <motion.tr
              key={voucher.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="group border-b border-gray-100 hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-transparent transition-all duration-200"
            >
              <TableCell>
                <div className="flex items-center gap-2">
                  <code className="font-bold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200">
                    {voucher.code}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopyCode(voucher.code)}
                    className="h-7 w-7 hover:bg-purple-100 hover:text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copy code"
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </TableCell>

              <TableCell>
                <p className="font-semibold text-gray-900">{voucher.name}</p>
              </TableCell>

              <TableCell>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                  {voucher.type}
                </span>
              </TableCell>

              <TableCell>
                <span className="font-bold text-green-600 text-base">
                  {voucher.discount}
                </span>
              </TableCell>

              <TableCell>
                <div>
                  <p className="font-semibold text-gray-900">
                    {voucher.used} / {voucher.limit}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div
                      className={`h-1.5 rounded-full ${
                        voucher.used >= voucher.limit
                          ? "bg-red-500"
                          : "bg-blue-500"
                      }`}
                      style={{
                        width: `${(voucher.used / voucher.limit) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </TableCell>

              <TableCell>
                <p className="text-sm text-gray-600">{voucher.validUntil}</p>
              </TableCell>

              <TableCell>
                <Badge
                  className={`${
                    voucher.status === "Active"
                      ? "bg-green-100 text-green-700 border border-green-200 hover:bg-green-200"
                      : "bg-red-100 text-red-700 border border-red-200 hover:bg-red-200"
                  } font-semibold px-3 py-1 shadow-sm transition-all duration-200`}
                >
                  {voucher.status}
                </Badge>
              </TableCell>

              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:scale-110"
                    title="View Details"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:scale-110"
                    title="Edit Voucher"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-red-50 hover:text-red-600 transition-all duration-200 hover:scale-110"
                    title="Delete Voucher"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200"
                    title="More Options"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}