"use client";
import React from "react";
import { ProfileProps } from "@/utils/types";
import Link from "next/link";

const Profile = ({ profile }: { profile: ProfileProps, }) => {

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg my-5">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={profile.profileImage}
          alt={`${profile.firstName} ${profile.lastName}`}
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
        />
        <div>
          <h1 className="text-2xl font-bold">{`${profile.firstName} ${profile.lastName}`}</h1>
          <p className="text-gray-600">username: @{profile.userName}</p>
          <p className="text-gray-500">Mail: {profile.email}</p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Favorites ทั้งหมด: {profile.favorites.length}
        </h2>
        {profile.favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.favorites.map((fav) => (
              <div
                key={fav.id}
                className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <Link href={`/manga/${fav.anime.id}`}>
                  <img
                    src={fav.anime.image}
                    alt={fav.anime.title}
                    className="w-full h-40 object-cover rounded mb-3"
                  />
                  <p className="font-bold text-lg">{fav.anime.title}</p>
                  <p className="text-sm text-gray-600">{fav.anime.synopsis.slice(0, 50)}...</p>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No favorites added yet.</p>
        )}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Reviews ทั้งหมด: {profile.reviews.length}</h2>
        {profile.reviews.length > 0 ? (
          <ul className="space-y-4">
            {profile.reviews.slice(0, 5).map((review) => (
              <li
                key={review.id}
                className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <p className="font-bold text-lg">Rating: {review.rating} / 10</p>
                <p className="text-gray-600 mb-2">{review.content}</p>
                <p className="text-sm text-gray-400">Reviewed on {new Date(review.createdAt).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
