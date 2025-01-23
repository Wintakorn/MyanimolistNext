import { auth } from "@clerk/nextjs/server";
import { fetchFavoriteId } from "@/actions/actions";
import { SignInCardButton } from "../form/Buttons";
import FavoriteHeroform from "./FavoriteHeroform";

const FavoriteHerotoggleBtn = async ({ animeId }: { animeId: string }) => {
    const { userId } = await auth();

    if (!userId) {
        return <SignInCardButton />;
    }

    try {
        const favoriteId = await fetchFavoriteId({ animeId });

        if (!animeId) {
            throw new Error("Anime ID is missing in FavoriteToggleButton.");
        }

        return <FavoriteHeroform animeId={animeId} favoriteId={favoriteId} />;
    } catch (error) {
        console.error("Error in FavoriteToggleButton:", error);
        return <p className="text-red-500">Error loading favorite state.</p>;
    }
};

export default FavoriteHerotoggleBtn;