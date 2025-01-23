import { fetchAnimeDetail, fetchCharactersByAnimeId, fetchReviews } from "@/actions/actions";
import AnimeContent from "@/components/anime/AnimeContent";
import AnimeInfo from "@/components/anime/AnimeInfo";
import Breadcrums from "@/components/anime/Breadcrums";
import Description from "@/components/anime/Description";
import ImageContainer from "@/components/anime/ImageContainer";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import Character from "@/components/Characters/character";
import Footer from "@/components/footer/footer";
import ShareButton from "@/components/landmark/ShareButton";
import CreateReview from "@/components/reviews/CreateReview";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


const page = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const anime = await fetchAnimeDetail({ id });
    if (!anime) redirect("/");
    const characters = await fetchCharactersByAnimeId(id);
    const reviews = await fetchReviews(id);
    return (
        <section>
            <Breadcrums name={anime.title} />
            <header className="flex justify-between mt-4 items-center border py-3">
                <div className="flex items-center">
                    <h1 className="text-4xl font-bold">{anime.title}</h1>
                    <p className="text-3xl font-bold ml-3">
                        : {anime.status} - {anime.episodes || "N/A"} Episodes
                    </p>
                </div>
                <div className="px-5">
                    <ShareButton animeId={id} name="Anime Name" />
                </div>
            </header>
            <div className="flex">
                <div className="w-1/3 border">
                    <ImageContainer mainImage={anime.image || "/placeholder.jpg"} name={anime.title} />
                    <AnimeInfo id={id} />
                </div>
                <div className="w-2/3 px-4 flex flex-col border">
                    <nav className="py-2 border-b ">
                        <Link href={`/manga/${id}/`} className="hover:text-red-500">AnimeDetail</Link>
                        <span className="mx-2">/</span>
                        <Link href={`/manga/${id}/review`} className="hover:text-red-500">Reviews</Link>
                        <span className="mx-2">/</span>
                        <Link href={`/anime/${id}/characters`} className="hover:text-red-500">Characters</Link>
                        <span className="mx-2">/</span>
                        <Link href={`/anime/${id}/reviews`} className="hover:text-red-500">Community</Link>
                    </nav>

                    <div className="">
                        <Character id={id} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;

