import { currentUser } from "@clerk/nextjs/server";

import db from "@/utils/db";
import { ProfileProps } from "@/utils/types";
import { AppSidebar } from "./profileDataSidebar";




const AppSidebarData = async () => {
  const user = await currentUser();

  if (!user) {
    return (
      <p className="text-center text-red-500">
        You must be logged in to view this page.
      </p>
    );
  }


  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    include: {
      favorites: {
        include: {
          anime: true, 
        },
      },
      reviews: true,
    },
  });

  if (!profile) {
    return (
      <p className="text-center text-red-500">
        No profile found. Please create your profile first.
      </p>
    );
  }

  const profileData: ProfileProps = {
    id: profile.id,
    clerkId: profile.clerkId,
    firstName: profile.firstName,
    lastName: profile.lastName,
    userName: profile.userName,
    email: profile.email,
    profileImage: profile.profileImage,
    favorites: profile.favorites?.map((fav) => ({
      id: fav.id,
      anime: {
        id: fav.anime.id,
        title: fav.anime.title,
        synopsis: fav.anime.synopsis,
        image: fav.anime.image,
        genre: fav.anime.genre,
        episodes: fav.anime.episodes,
        status: fav.anime.status,
        releaseDate: fav.anime.releaseDate,
        ranked: fav.anime.ranked,
        premiered: fav.anime.premiered,
      },
      profileId: fav.profileId,
    })) as any || [],
    reviews: profile.reviews as any || [],
  };

  return <AppSidebar profile={profileData}/>
};

export default AppSidebarData;