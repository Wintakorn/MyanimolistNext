import { fetchAnimeDetail } from '@/actions/actions';
import React from 'react'
import { redirect } from "next/navigation";
import ShareButton from '../landmark/ShareButton';
import FavoriteToggleButton from '../card/FavoriteToggleButton';


const AnimeInfo = async ({ id }: { id: string }) => {
    const anime = await fetchAnimeDetail({ id });
    if (!anime) redirect("/");
    return (
        <div className=" px-3">
            <div className="">
                <FavoriteToggleButton animeId={id} />
                {/* <ShareButton animeId={id} name="Anime Name"/> */}
            </div>
            <div className="py-3">
                <h1 className='text-lg border-b-2'>Information</h1>
                <p>Status: {anime.status} </p>
                <h3>Episodes: {anime.episodes}Ep</h3>
                <h3>Aired: {anime.aired}</h3>
                <h3>Premiered: {anime.premiered} </h3>
                <h3>Broadcast: {anime.broadcast} </h3>
                <h3>Producers: {anime.producers} </h3>
                <h3>Licensors: {anime.licensors}</h3>
                <h3>Studios: {anime.studios}</h3>
                <h3>Source: {anime.source}</h3>
                <h3>Genres: {anime.genre.join(', ')}</h3>
                <h3>Demographic: {anime.demographic}</h3>
                <h3>Duration: {anime.duration}</h3>
                <h3>Rating: {anime.rating}</h3>
                <h3>Favorite: {anime.favorite} users</h3>
            </div>
            <div className="py-3">
                <h1 className='text-lg border-b-2'>Statistics</h1>
                <h3>Score: {anime.score} (score by {anime.reviews.length} users)</h3>
                <h3>Ranked: #{anime.ranked}</h3>
                <h3>Popularity: #{anime.popularity}</h3>
                <h3>Favorite: {anime.favorite} users</h3>
            </div>
        </div>
    )
}

export default AnimeInfo