import { fetchAnime, fetchAnimeHero } from "@/actions/actions";
import AnimeList from "./AnimeList";
import { AnimeCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import EmptyList from "./EmptyList";
import CategoriesList from "./CategoriesList";
import GenreFilter from "./GenreFilter";
import { auth } from "@clerk/nextjs/server";


const AnimeContainer = async ({
  search,
  genre,
}: {
  search?: string;
  genre?: string;
}) => {

  let anime: AnimeCardProps[] = [];
  let animeHero: AnimeCardProps[] = [];
  const user = auth();
  try {
    anime = await fetchAnime({ search, genre });
    animeHero = await fetchAnimeHero();
  } catch (error) {
    console.error("Failed to fetch anime data:", error);
  }
  return (
    <div className="mb-10">
      {!user ? (
        <div className="">
          <p>login</p>
        </div>
      ) : (
        <div className="">
          <Hero anime={animeHero} />
        </div>
      )}
      <GenreFilter genre={genre} />
      {/* <CategoriesList search={search} /> */}
      {anime.length === 0 ? (
        <EmptyList heading="No results found" btnText="Clear Filters" />
      ) : (
        <div className="">
          <div className="py-5 text-2xl">
            <h1>Top animo</h1>
          </div>
          <div className="">
            <AnimeList anime={anime} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeContainer;
