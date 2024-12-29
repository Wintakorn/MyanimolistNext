// rafce

import { fetchAnime } from "@/actions/actions";
import AnimeList from "@/components/home/AnimeList"
import { AnimeCardProps } from "@/utils/types";

const CampPage = async() => {
  const anime: AnimeCardProps[] = await fetchAnime({});
  return (
    <div>
      <AnimeList anime={anime} />
    </div>
  )
}
export default CampPage