import AnimeCard from "../card/AnimeCard";
import { AnimeCardProps } from "@/utils/types";

const AnimeList = ({ anime }: { anime: AnimeCardProps[] }) => {
  return (
    <section
      className="grid sm:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4"
    >
      {anime.map((animeItem) => {
        return <AnimeCard key={animeItem.id} anime={animeItem} />;
      })}
    </section>
  );
};

export default AnimeList;
