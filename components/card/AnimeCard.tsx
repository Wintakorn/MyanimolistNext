import React from "react";
import { AnimeCardProps } from "@/utils/types";
import Link from "next/link";
import FavoriteToggleButton from "./FavoriteToggleButton";
import { fetchAnimeDetail } from "@/actions/actions";

const AnimeCard = async({ anime }: { anime: AnimeCardProps }) => {
  const { id } = await anime;
  const animedetail = await fetchAnimeDetail({ id });
  // console.log("Anime Details:", animedetail);
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition relative">
      {/* Favorite Button */}
      <div className="absolute top-2 right-2 z-10">
        <FavoriteToggleButton animeId={id} />
      </div>

      {/* Anime Card Content */}
      <Link href={`/manga/${id}`}>
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-lg font-bold mt-2 truncate">{anime.title}</h2>
        <p className="text-sm text-gray-600 mt-1 line-clamp-3">
          {anime.synopsis.substring(0, 60) + "..."}
        </p>

        {/* Genre and Episode Count */}
        <div className="mt-2 text-sm text-gray-500">
          <span>{anime.genre.join(", ")}</span>
          <div className="flex justify-between">
            <div>{anime.episodes} Episodes</div>
            <div className="">Favorite: {animedetail.favorite}</div>
          </div>
        </div>

        {/* Status */}
        <div
          className={`mt-2 text-xs font-medium px-2 py-1 rounded-md ${anime.status === "Airing"
            ? "bg-green-100 text-green-700"
            : anime.status === "Completed"
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
            }`}
        >
          {anime.status}
        </div>
      </Link>
    </div>
  );
};

export default AnimeCard;
