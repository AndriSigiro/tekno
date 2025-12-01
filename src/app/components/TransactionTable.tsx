// src/components/TransactionTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CreditCard, User, Package2 } from "lucide-react";

const transactions = [
  {
    id: 1234,
    user: "John Doe",
    package: "Paket Keluarga",
    amount: "Rp 2.000.000",
    status: "Completed",
  },
  {
    id: 1235,
    user: "Jane Smith",
    package: "Paket Backpacker",
    amount: "Rp 800.000",
    status: "Pending",
  },
  {
    id: 1236,
    user: "Siti Aisyah",
    package: "Paket Honeymoon",
    amount: "Rp 3.500.000",
    status: "Cancelled",
  },
];

// Utility style status badge
function statusStyle(status: string) {
  switch (status) {
    case "Completed":
      return "bg-emerald-100 text-emerald-800 border border-emerald-300";
    case "Pending":
      return "bg-amber-100 text-amber-800 border border-amber-300";
    case "Cancelled":
      return "bg-rose-100 text-rose-800 border border-rose-300";
    default:
      return "bg-gray-100 text-gray-800 border";
  }
}

export default function TransactionTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b">
        <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-blue-600" />
          Riwayat Transaksi
        </h2>
        <span className="text-sm text-gray-500">
          Total: {transactions.length} transaksi
        </span>
      </div>

      {/* Table */}
      <Table>

        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold text-gray-600">ID</TableHead>
            <TableHead className="font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" /> Pengguna
              </div>
            </TableHead>
            <TableHead className="font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <Package2 className="h-4 w-4" /> Paket
              </div>
            </TableHead>
            <TableHead className="font-semibold text-gray-600 text-right">
              Jumlah
            </TableHead>
            <TableHead className="font-semibold text-gray-600">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {transactions.map((tx) => (
            <TableRow
              key={tx.id}
              className="hover:bg-blue-50 transition"
            >
              <TableCell className="font-mono text-gray-600">
                #{tx.id}
              </TableCell>
              <TableCell className="font-medium text-gray-800">
                {tx.user}
              </TableCell>
              <TableCell className="text-gray-700">
                {tx.package}
              </TableCell>
              <TableCell className="text-right font-semibold text-blue-600">
                {tx.amount}
              </TableCell>
              <TableCell>
                <Badge className={`rounded-full px-3 py-1 text-xs ${statusStyle(tx.status)}`}>
                  {tx.status === "Completed" && "Selesai"}
                  {tx.status === "Pending" && "Menunggu"}
                  {tx.status === "Cancelled" && "Dibatalkan"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  );
}
