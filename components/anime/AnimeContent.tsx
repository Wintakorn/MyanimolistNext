import React from 'react'
import SimpleAnime from './SimpleAnime'
import { fetchAnimeDetail } from '@/actions/actions'
import { redirect } from "next/navigation";


const AnimeContent = async ({ id }: { id: string }) => {
    const anime = await fetchAnimeDetail({ id });
    if (!anime) redirect("/");
    return (
        <div className="">
            <div className="">
                <div className="">
                    <h1 className=''>Related Entries</h1>
                    <div className="" style={{ borderBottom: '1px solid #e0e0e0' }}></div>
                    <div className="flex py-2 ">
                        <div className="flex">
                            <div className="px-3">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhI_5tyJVut2f2z1_APncTJAF5PUeM_txGPZf9A3oQ_6X7pyGyGokkl7qayMA2wPcsdsc&usqp=CAU" alt="" />
                            </div>
                            <div className="">
                                <p>A eligendi nulla, sed illo nam neque temporibus.</p>
                            </div>
                        </div>
                        <div className="px-3">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhI_5tyJVut2f2z1_APncTJAF5PUeM_txGPZf9A3oQ_6X7pyGyGokkl7qayMA2wPcsdsc&usqp=CAU" alt="" />
                        </div>
                        <div className="">
                            <p>A eligendi nulla, sed illo nam neque temporibus.</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className='text-lg'>Anime Music</h1>
                    <div className="" style={{ borderBottom: '1px solid #e0e0e0' }}></div>
                </div>
                <div className="text-center mt-4">
                    <SimpleAnime id={id}/>
                    <p>Simple</p>
                </div>
            </div>
        </div>
    )
}

export default AnimeContent