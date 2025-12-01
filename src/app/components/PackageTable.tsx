// src/components/PackageTable.tsx
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
import { Edit, Trash, Eye, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    id: 1,
    name: "Paket Keluarga",
    type: "Family",
    price: "Rp 2,000,000",
    status: "Active",
    bookings: 24,
  },
  {
    id: 2,
    name: "Paket Backpacker",
    type: "Backpacker",
    price: "Rp 800,000",
    status: "Draft",
    bookings: 0,
  },
  {
    id: 3,
    name: "Paket Honeymoon",
    type: "Honeymoon",
    price: "Rp 3,500,000",
    status: "Active",
    bookings: 18,
  },
];

export default function PackageTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        {/* Header */}
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100">
            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider">
              ID
            </TableHead>
            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider">
              Nama Paket
            </TableHead>
            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider">
              Kategori
            </TableHead>
            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider">
              Harga
            </TableHead>
            <TableHead className="font-bold text-gray-700 text-xs uppercase tracking-wider">
              Status
            </TableHead>
            <TableHead className="text-right font-bold text-gray-700 text-xs uppercase tracking-wider">
              Aksi
            </TableHead>
          </TableRow>
        </TableHeader>

        {/* Body */}
        <TableBody>
          {packages.map((pkg, index) => (
            <motion.tr
              key={pkg.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="group border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent transition-all duration-200"
            >
              <TableCell className="font-semibold text-gray-500 group-hover:text-blue-600 transition-colors">
                #{pkg.id}
              </TableCell>
              
              <TableCell>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {pkg.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {pkg.bookings} bookings
                  </p>
                </div>
              </TableCell>
              
              <TableCell>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                  {pkg.type}
                </span>
              </TableCell>
              
              <TableCell>
                <span className="font-bold text-green-600 text-base">
                  {pkg.price}
                </span>
              </TableCell>
              
              <TableCell>
                <Badge
                  className={`${
                    pkg.status === "Active"
                      ? "bg-green-100 text-green-700 border border-green-200 hover:bg-green-200"
                      : "bg-yellow-100 text-yellow-700 border border-yellow-200 hover:bg-yellow-200"
                  } font-semibold px-3 py-1 shadow-sm transition-all duration-200`}
                >
                  {pkg.status}
                </Badge>
              </TableCell>
              
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                  {/* View Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:scale-110"
                    title="View Details"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>

                  {/* Edit Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:scale-110"
                    title="Edit Package"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>

                  {/* Delete Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-red-50 hover:text-red-600 transition-all duration-200 hover:scale-110"
                    title="Delete Package"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>

                  {/* More Options */}
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