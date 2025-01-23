import { fetchAnime } from '@/actions/actions';
import AnimeList from '@/components/home/AnimeList';
import CategoriesList from '@/components/home/CategoriesList';
import { AnimeCardProps } from '@/utils/types';
import React from 'react'

const page = async () => {
    const anime: AnimeCardProps[] = await fetchAnime({});
    return (
        <main className='mb-5'>
            <CategoriesList/>
            <AnimeList anime={anime} />
        </main>
    )
}

export default page