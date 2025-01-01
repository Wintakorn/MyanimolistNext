// Action Function Type
export type ActionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

// Anime Card Props
export type AnimeCardProps = {
  id: string;
  anime: string
  title: string;
  synopsis: string;
  image: string;
  genre: string[];
  episodes: number;
  status: "Airing" | "Completed" | "Upcoming";
  releaseDate: string; 
  raked: string
};


export type CurrentSlideData = {
  data: AnimeCardProps;
  index: number;
};

// Character Type
export type CharacterProps = {
  id: string;
  name: string;
  role: "Main" | "Supporting";
  description: string;
  image: string;
  animeId: string; 
};

// Review Type
export type ReviewProps = {
  id: string;
  content: string;
  rating: number; 
  createdAt: string; 
  updatedAt: string; 
  profile: {
    id: string;
    userName: string;
    profileImage: string;
  }; 
};

// Profile Type
export type ProfileProps = {
  id: string;
  clerkId: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  profileImage: string;
  favorites: FavoriteProps[];
  reviews: ReviewProps[];
};

// Favorite Type
export type FavoriteProps = {
  id: string;
  anime: AnimeCardProps; 
  profileId: string;
};
