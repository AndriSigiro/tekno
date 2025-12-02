"use client";

import React, { useState } from "react";
import {
  Star,
  Filter,
  Search,
  Calendar,
  User,
  MapPin,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function RatingPage() {
  const [filterRating, setFilterRating] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy data
  const [ratings] = useState([
    {
      id: 1,
      guestName: "Budi Santoso",
      roomNumber: "101",
      checkInDate: "2024-11-15",
      checkOutDate: "2024-11-18",
      rating: 5,
      review:
        "Pelayanan sangat memuaskan! Kamar bersih dan pemandangan Danau Toba yang indah. Staff ramah dan helpful.",
      submittedAt: "2024-11-18",
      verified: true,
    },
    {
      id: 2,
      guestName: "Siti Aminah",
      roomNumber: "205",
      checkInDate: "2024-11-16",
      checkOutDate: "2024-11-17",
      rating: 4,
      review:
        "Overall bagus, tapi breakfast bisa ditingkatkan lagi. Lokasi strategis dekat dengan objek wisata.",
      submittedAt: "2024-11-17",
      verified: true,
    },
    {
      id: 3,
      guestName: "Ahmad Hidayat",
      roomNumber: "312",
      checkInDate: "2024-11-14",
      checkOutDate: "2024-11-20",
      rating: 5,
      review:
        "Pengalaman menginap luar biasa! Fasilitas lengkap dan staff sangat membantu.",
      submittedAt: "2024-11-20",
      verified: true,
    },
    {
      id: 4,
      guestName: "Rina Wijaya",
      roomNumber: "108",
      checkInDate: "2024-11-17",
      checkOutDate: "2024-11-19",
      rating: 3,
      review: "Kamar nyaman tapi AC agak kurang dingin.",
      submittedAt: "2024-11-19",
      verified: false,
    },
    {
      id: 5,
      guestName: "Doni Prasetyo",
      roomNumber: "201",
      checkInDate: "2024-11-18",
      checkOutDate: "2024-11-21",
      rating: 5,
      review:
        "Tempat sempurna untuk liburan keluarga. Anak-anak sangat suka kolam renangnya.",
      submittedAt: "2024-11-21",
      verified: true,
    },
    {
      id: 6,
      guestName: "Lina Kusuma",
      roomNumber: "410",
      checkInDate: "2024-11-19",
      checkOutDate: "2024-11-20",
      rating: 4,
      review: "View kamar sangat bagus. Sarapan enak dan bervariasi.",
      submittedAt: "2024-11-20",
      verified: true,
    },
  ]);

  // Calculate stats
  const totalRatings = ratings.length;
  const averageRating = (
    ratings.reduce((acc, r) => acc + r.rating, 0) / totalRatings
  ).toFixed(1);

  // FIX: memberi tipe yang benar
  const ratingDistribution: Record<number, number> = {
    5: ratings.filter((r) => r.rating === 5).length,
    4: ratings.filter((r) => r.rating === 4).length,
    3: ratings.filter((r) => r.rating === 3).length,
    2: ratings.filter((r) => r.rating === 2).length,
    1: ratings.filter((r) => r.rating === 1).length,
  };

  const filteredRatings = ratings.filter((rating) => {
    const matchesFilter =
      filterRating === "all" || rating.rating === Number(filterRating);
    const matchesSearch =
      rating.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rating.roomNumber.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  // Component Star Rating
  const StarRating = ({
    rating,
    size = "small",
  }: {
    rating: number;
    size?: "small" | "large";
  }) => {
    const sizeClass = size === "large" ? "w-6 h-6" : "w-4 h-4";
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClass} ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="p-8 bg-gray-50">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <p className="text-gray-500 text-sm">Total Rating</p>
          <p className="text-3xl mt-1 font-bold">{totalRatings}</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <p className="text-gray-500 text-sm">Rating Rata-rata</p>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold">{averageRating}</p>
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <p className="text-gray-500 text-sm">Rating 5 Bintang</p>
          <p className="text-3xl mt-1 font-bold">{ratingDistribution[5]}</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <p className="text-gray-500 text-sm">Verified Reviews</p>
          <p className="text-3xl mt-1 font-bold">
            {ratings.filter((r) => r.verified).length}
          </p>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="bg-white rounded-xl p-6 shadow-sm border mb-8">
        <h2 className="text-xl font-bold mb-4">Distribusi Rating</h2>

        <div className="space-y-3">
          {( [5, 4, 3, 2, 1] as const ).map((star) => (
            <div key={star} className="flex items-center gap-4">
              <div className="w-20 flex items-center gap-1">
                <span className="font-medium">{star}</span>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>

              <div className="flex-1 bg-gray-100 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-yellow-400 h-full"
                  style={{
                    width: `${
                      totalRatings > 0
                        ? (ratingDistribution[star] / totalRatings) * 100
                        : 0
                    }%`,
                  }}
                ></div>
              </div>

              <span className="w-12 text-right font-medium">
                {ratingDistribution[star]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* List Ratings */}
      <div className="space-y-4">
        {filteredRatings.map((rating) => (
          <div
            key={rating.id}
            className="bg-white rounded-xl p-6 shadow-sm border"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarFallback>
                    {rating.guestName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="font-bold text-lg">{rating.guestName}</h3>
                  <p className="text-gray-500 text-sm">
                    Kamar {rating.roomNumber}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <StarRating rating={rating.rating} size="large" />
                <p className="text-gray-500 text-sm mt-1">
                  {rating.submittedAt}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border mt-3">
              <p className="text-gray-700">{rating.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
