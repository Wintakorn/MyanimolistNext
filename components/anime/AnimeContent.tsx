import React from 'react'
import SimpleAnime from './SimpleAnime'
import { fetchAnimeDetail } from '@/actions/actions'
import { redirect } from "next/navigation";
import Link from 'next/link';


const AnimeContent = async ({ id }: { id: string }) => {
    const anime = await fetchAnimeDetail({ id });
    if (!anime) redirect("/");
    return (
        <div className="">
            <div className="">
                <div className="">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h1 className=''>Related Entries</h1>
                        </div>
                        <Link href={`/manga/createRelatedEntries/?animeId=${id}`} className="text-blue-500 hover:underline">
                            Edit
                        </Link>
                    </div>
                    <div className="" style={{ borderBottom: '1px solid #e0e0e0' }}></div>
                    <div className="flex py-2 gap-3 border-b">
                        {/* First Item */}
                        <div className="flex w-2/3 items-start">
                            <div className="w-24 h-32 flex-shrink-0">
                                <img
                                    src={anime.image}
                                    alt=""
                                    className="object-cover w-full h-full "
                                />
                            </div>
                            <div className="px-2 text-sm">
                                <p className="text-gray-500">TV</p>
                                <p className="font-semibold break-words">Title: {anime.title}</p>
                            </div>
                        </div>

                        {/* Second Item */}
                        <div className="flex w-2/3 items-start">
                            <div className="w-24 h-32 flex-shrink-0">
                                <img
                                    src={anime.image}
                                    alt=""
                                    className="object-cover w-full h-full "
                                />
                            </div>
                            <div className="px-2 text-sm">
                                <p className="text-gray-500">Manga</p>
                                <p className="font-semibold  break-words">Title: {anime.title}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="">
                    <h1 className='text-lg'>Anime Music</h1>
                    <div className="" style={{ borderBottom: '1px solid #e0e0e0' }}></div>
                </div>
                <div className="text-center mt-4">
                    <SimpleAnime id={id} />
                    <p>Simple</p>
                </div>
            </div>
        </div>
    )
}

export default AnimeContent;