import { fetchAnimeDetail, fetchCharactersByAnimeId, fetchReviews } from "@/actions/actions";
import AnimeContent from "@/components/anime/AnimeContent";
import AnimeInfo from "@/components/anime/AnimeInfo";
import Breadcrums from "@/components/anime/Breadcrums";
import Description from "@/components/anime/Description";
import ImageContainer from "@/components/anime/ImageContainer";
import Character from "@/components/Characters/character";
import Footer from "@/components/footer/footer";
import CreateReview from "@/components/reviews/CreateReview";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const AnimeDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const anime = await fetchAnimeDetail({ id });
  if (!anime) redirect("/");
  const characters = await fetchCharactersByAnimeId(id);
  const reviews = await fetchReviews(id);

  return (
    <section>
      <Breadcrums name={anime.title} />
      <header className="flex justify-between mt-4 items-center">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">{anime.title}</h1>
          <p className="text-3xl font-bold ml-3">
            : {anime.status} - {anime.episodes || "N/A"} Episodes
          </p>
        </div>
      </header>
      <nav className="py-3">
        <Link href={`/anime/`} className="hover:underline">Anime</Link>
        <span className="mx-2">/</span>
        <Link href={`/anime/${id}/characters`} className="hover:underline">Characters</Link>
        <span className="mx-2">/</span>
        <Link href={`/anime/${id}/reviews`} className="hover:underline">Reviews</Link>
        <span className="mx-2">/</span>
        <Link href={`/anime/${id}/reviews`} className="hover:underline">Community</Link>
      </nav>

      <div className="flex mt-2">
        <div className="w-1/3 border">
          <ImageContainer mainImage={anime.image || "/placeholder.jpg"} name={anime.title} />
          <AnimeInfo id={id} />
        </div>
        <div className="w-2/3 px-4 flex flex-col border">
          <h2 className="text-2xl font-semibold">Description</h2>
          <div className="flex items-center py-5 border-b">
            <div className="text-center">
              <p className="text-lg font-semibold">SCORE</p>
              <h1 className="text-lg font-semibold">{anime.score}</h1>
              <p>{anime.favorite} users</p>
            </div>
            <p className="text-lg font-semibold ml-10">
              Ranked: #{anime.ranked || "N/A"}
            </p>
            <p className="text-lg font-semibold ml-10">
              Popularity: #{anime.popularity || "N/A"}
            </p>
            <p className="text-lg font-semibold ml-10">
              Members: {anime.favorite || "N/A"}
            </p>
          </div>
          <div className="py-10">
            <Description description={anime.synopsis || "No synopsis available."} />
            <div className="mt-3 border-b mb-3">
              <span className="text-lg text-blue-600">{anime.genre?.join(", ") || "N/A"}</span>
            </div>
            <AnimeContent id={id} />
            <Character id={id} />
            <div className="mt-10 mb-10">
              <div className="flex justify-between items-center border-b py-1">
                <h2 className="text-2xl font-semibold">Reviews</h2>
                <Link href={""}>
                  <h3 className="font-semibold">View all</h3>
                </Link>
              </div>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div key={review.id} className="border-gray-500 border-b py-3 border-gray-300">
                    <div className="flex items-center mb-2">
                      <img
                        src={review.profile.profileImage || "/avatar-placeholder.jpg"}
                        alt={review.profile.userName}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-bold">{review.profile.userName}</p>
                        <p className="text-sm text-gray-600">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p>{review.content}</p>
                    <p className="text-yellow-500 font-bold mt-2">Rating: {review.rating}/10</p>
                  </div>
                ))
              ) : (
                <p className="text-red-500 mt-3 text-center">No reviews yet. Be the first to leave a review!</p>
              )}
              <CreateReview animeName={anime.title} animeId={id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeDetail;

