"use client";

import React, { useState } from 'react';
import { Star, Filter, Search, Calendar, User, MapPin, TrendingUp, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function RatingPage() {
  const [filterRating, setFilterRating] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Data dummy rating dari guest
  const [ratings] = useState([
    {
      id: 1,
      guestName: 'Budi Santoso',
      roomNumber: '101',
      checkInDate: '2024-11-15',
      checkOutDate: '2024-11-18',
      rating: 5,
      review: 'Pelayanan sangat memuaskan! Kamar bersih dan pemandangan Danau Toba yang indah. Staff ramah dan helpful.',
      submittedAt: '2024-11-18',
      verified: true
    },
    {
      id: 2,
      guestName: 'Siti Aminah',
      roomNumber: '205',
      checkInDate: '2024-11-16',
      checkOutDate: '2024-11-17',
      rating: 4,
      review: 'Overall bagus, tapi breakfast bisa ditingkatkan lagi. Lokasi strategis dekat dengan objek wisata.',
      submittedAt: '2024-11-17',
      verified: true
    },
    {
      id: 3,
      guestName: 'Ahmad Hidayat',
      roomNumber: '312',
      checkInDate: '2024-11-14',
      checkOutDate: '2024-11-20',
      rating: 5,
      review: 'Pengalaman menginap yang luar biasa! Fasilitas lengkap, kebersihan terjaga, dan staff yang sangat membantu. Highly recommended!',
      submittedAt: '2024-11-20',
      verified: true
    },
    {
      id: 4,
      guestName: 'Rina Wijaya',
      roomNumber: '108',
      checkInDate: '2024-11-17',
      checkOutDate: '2024-11-19',
      rating: 3,
      review: 'Kamar cukup nyaman tapi AC agak kurang dingin. Untuk harga segini masih worth it.',
      submittedAt: '2024-11-19',
      verified: false
    },
    {
      id: 5,
      guestName: 'Doni Prasetyo',
      roomNumber: '201',
      checkInDate: '2024-11-18',
      checkOutDate: '2024-11-21',
      rating: 5,
      review: 'Tempat yang sempurna untuk liburan keluarga. Anak-anak sangat menyukai kolam renangnya. Terima kasih TOBA TRIP!',
      submittedAt: '2024-11-21',
      verified: true
    },
    {
      id: 6,
      guestName: 'Lina Kusuma',
      roomNumber: '410',
      checkInDate: '2024-11-19',
      checkOutDate: '2024-11-20',
      rating: 4,
      review: 'View dari kamar bagus sekali. Sarapan enak dan bervariasi. Cuma parkir agak terbatas.',
      submittedAt: '2024-11-20',
      verified: true
    }
  ]);

  // Calculate statistics
  const totalRatings = ratings.length;
  const averageRating = (ratings.reduce((acc, r) => acc + r.rating, 0) / totalRatings).toFixed(1);
  const ratingDistribution = {
    5: ratings.filter(r => r.rating === 5).length,
    4: ratings.filter(r => r.rating === 4).length,
    3: ratings.filter(r => r.rating === 3).length,
    2: ratings.filter(r => r.rating === 2).length,
    1: ratings.filter(r => r.rating === 1).length,
  };

  // Filter ratings
  const filteredRatings = ratings.filter(rating => {
    const matchesFilter = filterRating === 'all' || rating.rating === parseInt(filterRating);
    const matchesSearch = rating.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          rating.roomNumber.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  const StarRating = ({ rating, size = 'small' }) => {
    const sizeClass = size === 'large' ? 'w-6 h-6' : 'w-4 h-4';
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClass} ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">Guest Rating</h1>
            <p className="text-sm text-gray-500 mt-1">Kelola dan lihat semua rating dari guest</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Rating</p>
                <p className="text-3xl font-bold text-blue-900 mt-1">{totalRatings}</p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Rating Rata-rata</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-3xl font-bold text-blue-900">{averageRating}</p>
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <div className="bg-yellow-100 rounded-full p-3">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Rating 5 Bintang</p>
                <p className="text-3xl font-bold text-blue-900 mt-1">{ratingDistribution[5]}</p>
              </div>
              <div className="bg-green-100 rounded-full p-3">
                <Star className="w-6 h-6 text-green-600 fill-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Verified Reviews</p>
                <p className="text-3xl font-bold text-blue-900 mt-1">
                  {ratings.filter(r => r.verified).length}
                </p>
              </div>
              <div className="bg-purple-100 rounded-full p-3">
                <User className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Distribusi Rating</h2>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-20">
                  <span className="font-medium text-gray-700">{star}</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-yellow-400 h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${totalRatings > 0 ? (ratingDistribution[star] / totalRatings) * 100 : 0}%`
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12 text-right font-medium">
                  {ratingDistribution[star]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter and Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari nama guest atau nomor kamar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500 w-5 h-5" />
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
              >
                <option value="all">Semua Rating</option>
                <option value="5">5 Bintang</option>
                <option value="4">4 Bintang</option>
                <option value="3">3 Bintang</option>
                <option value="2">2 Bintang</option>
                <option value="1">1 Bintang</option>
              </select>
            </div>
          </div>
        </div>

        {/* Ratings List */}
        <div className="space-y-4">
          {filteredRatings.map((rating) => (
            <div key={rating.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="ring-2 ring-blue-500">
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                        {rating.guestName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg text-blue-900">{rating.guestName}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>Kamar {rating.roomNumber}</span>
                        {rating.verified && (
                          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 mt-3 md:mt-0">
                  <StarRating rating={rating.rating} size="large" />
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{rating.submittedAt}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mb-3 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">{rating.review}</p>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Check-in: {rating.checkInDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Check-out: {rating.checkOutDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRatings.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center border border-gray-100">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Tidak ada rating yang ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}