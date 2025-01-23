"use client";
import { AnimeCardProps } from "@/utils/types";
import AnimeCardTop from "../card/SeasonalAnime/AnimeCardTop";

const TopAnime = ({ anime }: { anime: AnimeCardProps[] }) => {
    const scroll = (direction: "left" | "right") => {
        const container = document.querySelector(".scrollable-container") as HTMLElement;
        if (container) {
            const scrollAmount = direction === "left" ? -300 : 300;
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };
    const sortedAnimes = [...anime]
        .filter((a) => a.ranked && !isNaN(Number(a.ranked)))
        .sort((a, b) => Number(a.ranked) - Number(b.ranked));
    return (
        <section className="py-10">
            <h2 className="text-2xl font-extrabold mb-6 text-center">
                กำลังมาแรงช่วงนี้
            </h2>
            <div className="relative">
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
                <div
                    className="flex overflow-x-auto gap-6 px-6 py-4 scrollable-container scrollbar-hide"
                >
                    {sortedAnimes.slice(0, 10).map((anime) => (
                        <div
                            key={anime.id}
                            className="flex-shrink-0 w-[180px] md:w-[220px] lg:w-[250px] transition-transform duration-300 hover:scale-105"
                        >
                            <AnimeCardTop key={anime.id} anime={anime} />
                        </div>
                    ))}
                </div>
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
            </div>
        </section>
    );
};

export default TopAnime;

