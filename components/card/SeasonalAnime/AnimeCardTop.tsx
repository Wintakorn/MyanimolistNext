import React from "react";
import { AnimeCardProps } from "@/utils/types";
import Link from "next/link";

const AnimeCardTop = ({ anime }: { anime: AnimeCardProps }) => {
  const { id, ranked, title, image } = anime;

  return (
    <div className="relative border rounded-lg shadow-md hover:shadow-lg transition bg-white overflow-hidden">
      <div className="absolute top-2 right-2 bg-yellow-500 text-white text-lg font-semibold px-3 py-1 rounded-full shadow-md">
        #{ranked}
      </div>
      <Link href={`/manga/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover"
        />
        <h2 className="text-lg font-bold p-3 truncate text-gray-800">
          {title}
        </h2>
      </Link>
    </div>
  );
};

export default AnimeCardTop;
