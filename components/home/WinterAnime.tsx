"use client"
import { AnimeCardProps } from "@/utils/types";
import AnimeSeasonCard from "../card/SeasonalAnime/AnimeSeasonCard";
import { useRef } from "react";

const WinterAnime = ({ anime }: { anime: AnimeCardProps[] }) => {
  const winterAnime = anime.filter((animeItem) =>
    animeItem.premiered?.toLowerCase().includes("winter")
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="">
      <div className="relative">
        {winterAnime.length > 0 && (  
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 z-10"
            onClick={() => scroll("left")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-6 px-6 py-4 scrollable-container scrollbar-hide"
        >
          {winterAnime.length > 0 ? (
            <div
              className="flex-shrink-0 w-[180px] md:w-[220px] lg:w-[250px] transition-transform duration-300 hover:scale-105"
            >
              {winterAnime.map((anime) => (
                <AnimeSeasonCard anime={anime} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <p className="text-center text-red-500">ไม่มีอนิเมะในฤดูนี้</p>
            </div>
          )}
        </div>
        {winterAnime.length > 0 && (
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 z-10"
            onClick={() => scroll("right")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};
export default WinterAnime;
