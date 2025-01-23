"use client";
import { AnimeCardProps } from "@/utils/types";
import AnimeSeasonCard from "../card/SeasonalAnime/AnimeSeasonCard";

const SpringAnime = ({ anime }: { anime: AnimeCardProps[] }) => {
  const springAnime = anime.filter((animeItem) =>
    animeItem.premiered?.toLowerCase().includes("spring")
  );
  const scroll = (direction: "left" | "right") => {
    const container = document.querySelector(".scrollable-container") as HTMLElement;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section className="mt-4">
      <div className="relative">
        {springAnime.length > 0 && (
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
          className="flex overflow-x-auto gap-6 px-6 py-4 scrollable-container scrollbar-hide"
        >
          {springAnime.length > 0 ? (
            <div
              className="flex-shrink-0 w-[180px] md:w-[220px] lg:w-[250px] transition-transform duration-300 hover:scale-105"
            >
              {springAnime.map((animeItem) => (
                <AnimeSeasonCard key={animeItem.id} anime={animeItem} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <p className="text-center text-red-500">ไม่มีอนิเมะในฤดูนี้</p>
            </div>
          )}
        </div>
        {springAnime.length > 0 && (
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
export default SpringAnime;
