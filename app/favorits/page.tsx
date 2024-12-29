import { fetchFavorites } from "@/actions/actions";
import EmptyList from "@/components/home/EmptyList";
import AnimeList from "@/components/home/AnimeList";

const FavoritesPage = async () => {
  try {
    const favorites = await fetchFavorites();
    if (!favorites || favorites.length === 0) {
      return <EmptyList heading="No items in Favorites" btnText="Browse Anime" />;
    }
    return <AnimeList anime={favorites} />;
  } catch (error) {
    console.error("Error rendering FavoritesPage:", error);
    return <p>Failed to load favorites. Please try again later.</p>;
  }
};

export default FavoritesPage;
