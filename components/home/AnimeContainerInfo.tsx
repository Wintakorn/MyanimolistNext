import React from 'react'
import TopAnime from './TopAnime'
import SummerAnime from './SummerAnime'
import FallAnime from './FallAnime'
import SpringAnime from './SpringAnime'
import WinterAnime from './WinterAnime'
import AnimeList from './AnimeList'
import { AnimeCardProps } from '@/utils/types'
import { fetchAnime, fetchAnimeHero } from '@/actions/actions'
const AnimeContainerInfo = async ({
    search,
    genre,
}: {
    search?: string;
    genre?: string;
}) => {
    let anime: AnimeCardProps[] = [];

    try {
        anime = await fetchAnime({ search, genre });
    } catch (error) {
        console.error("Failed to fetch anime data:", error);
    }
    return (
        <section className=''>
            <div className=''>
                <TopAnime anime={anime} />
            </div>
            <div className="no-auto">
                <div className="">
                    {/* Section: Summer Anime */}
                    <div className="border p-3">
                        <div className="flex">
                            <div className="">
                                <div className="py-5 text-2xl">
                                    <h1>Summer Anime</h1>
                                    <SummerAnime anime={anime} />
                                </div>
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

                    {/* Section: Anime List */}
                    <div className="border p-3">
                        <div className="py-5 text-2xl">
                            <h1>Anime List</h1>
                            <AnimeList anime={anime} />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <h1>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi maxime nostrum, assumenda ex impedit alias amet aliquid velit obcaecati facere.
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnimeContainerInfo