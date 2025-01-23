import { fetchAnime, fetchAnimeHero } from "@/actions/actions";
import { AnimeCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import EmptyList from "./EmptyList";
import Link from "next/link";
import AnimeContainerInfo from "./AnimeContainerInfo";
import SummerAnime from "./SummerAnime";
import FallAnime from "./FallAnime";
import SpringAnime from "./SpringAnime";
import WinterAnime from "./WinterAnime";
import AnimeList from "./AnimeList";
import TopAnime from "./TopAnime";

const AnimeContainer = async ({
  search,
  genre,
}: {
  search?: string;
  genre?: string;
}) => {
  let anime: AnimeCardProps[] = [];
  let animeHero: AnimeCardProps[] = [];
  try {
    anime = await fetchAnime({ search, genre }) as any;
    animeHero = await fetchAnimeHero() as any;
  } catch (error) {
    console.error("Failed to fetch anime data:", error);
  }
  return (
    <section className="mb-10">
      <div>
        <Hero anime={animeHero} />
      </div>
      <div className="">
        {anime.length === 0 ? (
          <EmptyList heading="No results found" btnText="Clear Filters" />
        ) : (
          <div className="">
            <TopAnime anime={anime} />
            <div className="border p-3">
              <div className="flex">
                <div className="py-5 text-2xl">
                  <h1>Summer Anime</h1>
                  <SummerAnime anime={anime} />
                </div>
              </div>
            </div>
            <div className="border p-3">
              <div className="py-5 text-2xl">
                <h1>Fall Anime</h1>
                <FallAnime anime={anime} />
              </div>
            </div>
            <div className="border p-3">
              <div className="py-5 text-2xl">
                <h1>Spring Anime</h1>
                <SpringAnime anime={anime} />
              </div>
            </div>
            <div className="border p-3">
              <div className="py-5 text-2xl">
                <h1>Winter Anime</h1>
                <WinterAnime anime={anime} />
              </div>
            </div>
            <div className="border p-3">
              <div className="py-5 text-2xl">
                <h1>Anime List</h1>
                <AnimeList anime={anime} />
              </div>
            </div>
            <div className="flex justify-center my-5 p-5">
              <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:shadow-lg">
                <Link href="category/">ดูทั้งหมด</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default AnimeContainer;
