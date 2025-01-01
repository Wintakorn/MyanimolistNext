import React from "react";
import { AnimeCardProps } from "@/utils/types";
import Link from "next/link";

const AnimeInfo = ({ anime }: { anime: AnimeCardProps }) => {
  const { id } = anime;
  const truncateWords = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };
  return (
    <div className="bg-black bg-opacity-50 p-4 rounded-md text-white h-52">
      <h2 className="text-xl font-bold">{anime.title}</h2>
      <p className="text-sm mt-2">{truncateWords(anime.synopsis, 15)}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm">{anime.genre.join(", ")}</span>
        <span className="text-sm">{anime.episodes} Episodes</span>
      </div>
      <div className="flex gap-4 mt-10">
        <div className="">
          <button className="bg-white text-black px-4 py-2 rounded-md">
            <Link href={`/manga/${id}`}>
              Watch now
            </Link>
          </button>
        </div>
        <div className="">
          <button className="bg-white text-black px-4 py-2 rounded-md">
            <Link href={`/manga/${id}`}>
              Favorite
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
