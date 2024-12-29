import { fetchAnimeDetail } from '@/actions/actions';
import React from 'react'
import { redirect } from "next/navigation";
import ShareButton from '../landmark/ShareButton';
import FavoriteToggleButton from '../card/FavoriteToggleButton';
import { Button } from '../ui/button';

const AnimeInfo = async ({ id }: { id: string }) => {
    const anime = await fetchAnimeDetail({ id });
    if (!anime) redirect("/");
    return (
        <div className=" px-3">
            <div className="flex items-center justify-center">
               <button className='w-full my-2' style={{
                 backgroundColor: '#414141',
                 color: '#fff',
                 border: 'none',
                 cursor: 'pointer',
                 fontSize: '18px',
                 padding: '10px 20px',
                 borderRadius: '5px',
                 marginLeft: '15px',
                 marginRight: '15px'
               }}>
                    Add favaorite anime
               </button>    
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
        </div>
    )
}

export default AnimeInfo