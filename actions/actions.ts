"use server";
import {
  imageSchema,
  animeSchema,
  profileSchema,
  reviewSchema,
  validateWithZod,
  characterSchema
} from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";
import { uploadFile } from "@/utils/supabase";
import { revalidatePath } from "next/cache";
import { profile } from "console";
import { NextResponse } from "next/server";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in!");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};


const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "An unexpected error occurred!",
  };
};


export const createProfileAction = async (prevState: any, formData: FormData) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please log in!");

    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validateField,
      },
    });
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/");
};



export const fetchProfileDetail = async (clerkId: string | undefined) => {
  try {
    // Validate the input
    if (!clerkId) {
      throw new Error("Invalid clerkId: clerkId is undefined or empty.");
    }

    // Query the profile with detailed information
    const profile = await db.profile.findUnique({
      where: {
        clerkId,
      },
      include: {
        // user: true, // Assuming you have a relation to fetch user details
        reviews: true, // Assuming you have a relation to fetch user reviews
        favorites: true, // Assuming you have a relation to fetch user favorites
      },
    });

    if (!profile) {
      throw new Error("Profile not found for the given clerkId.");
    }
    console.log("Profile:", profile);
    return profile;
  } catch (error: any) {
    return renderError(error);
  }
};




export const createAnimeAction = async (prevState: any, formData: FormData) => {
  try {
    const user = await getAuthUser();
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    if (!file) {
      throw new Error("Anime image is required!");
    }
    const genre = rawData.genre
      ? Array.isArray(rawData.genre)
        ? rawData.genre
        : JSON.parse(rawData.genre as string)
      : [];
    const producers = rawData.producers
      ? (rawData.producers as string).split(",").map((p) => p.trim())
      : [];
    const licensors = rawData.licensors
      ? (rawData.licensors as string).split(",").map((l) => l.trim())
      : [];
    const studios = rawData.studios
      ? (rawData.studios as string).split(",").map((s) => s.trim())
      : [];

    const validatedFile = validateWithZod(imageSchema, { image: file });


    const validateField = validateWithZod(animeSchema, {
      ...rawData,
      genre,
      producers,
      licensors,
      studios,
      releaseDate: new Date(rawData.releaseDate as string),
    });

    const fullPath = await uploadFile(validatedFile.image);

    await db.anime.create({
      data: {
        ...validateField,
        image: fullPath,
        createdBy: user.id,
        favorites: undefined,
      },
    });

    redirect("/");
  } catch (error: any) {
    console.error("Error in createAnimeAction:", error.message);
    return renderError(error);
  }
};


export const fetchAnime = async ({ search, genre }: { search?: string; genre?: string }) => {
  try {

    const where: any = {};

    if (genre) {
      where.genre = {
        has: genre,
      };
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { synopsis: { contains: search, mode: "insensitive" } },
      ];
    }

    const anime = await db.anime.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    });

    return anime;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};


export const fetchAnimeDetail = async ({ id }: { id: string }) => {
  try {
    const anime = await db.anime.findUnique({
      where: { id },
      include: {
        characters: true,
        reviews: {
          include: {
            profile: true,
          },
        },
      },
    });

    if (!anime) throw new Error("Anime not found!");

    return anime;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch anime.");
  }
};


export const fetchReviews = async (animeId: string) => {
  try {
    const reviews = await db.review.findMany({
      where: { animeId },
      include: {
        profile: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error("Failed to fetch reviews.");
  }
};


export const fetchFavorites = async () => {
  try {
    const user = await getAuthUser();

    const profile = await db.profile.findUnique({
      where: { clerkId: user.id },
    });

    if (!profile) {
      console.warn("No profile found for the logged-in user.");
      return [];
    }

    const favorites = await db.favorite.findMany({
      where: { profileId: profile.id },
      include: { anime: true },
    });

    return favorites.map((favorite) => favorite.anime);
  } catch (error) {
    console.error("Error in fetchFavorites:", error);
    return [];
  }
};


export const fetchAnimeHero = async () => {
  try {
    const heroAnime = await db.anime.findMany({
      orderBy: {
        score: "desc",
      },
      take: 5,
    });

    return heroAnime;
  } catch (error) {
    console.error("Failed to fetch hero anime:", error);
    return [];
  }
};



export const fetchFavoriteId = async ({ animeId }: { animeId: string }) => {
  const user = await getAuthUser();
  // console.log("User ID:", user.id);

  const profile = await db.profile.findUnique({
    where: { clerkId: user.id },
  });

  if (!profile) {
    console.error("Profile not found for User ID:", user.id);
    throw new Error("Profile does not exist.");
  }
  const favorite = await db.favorite.findFirst({
    where: {
      animeId: animeId,
      profileId: profile.id,
    },
    select: {
      id: true,
    },
  });
  return favorite?.id || null;
};





export const createCharacterAction = async (prevState: any, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    if (!file) {
      throw new Error("Character image is required!");
    }
    const validatedFile = validateWithZod(imageSchema, { image: file });
    const validateField = validateWithZod(characterSchema, rawData);
    const fullPath = await uploadFile(validatedFile.image);

    await db.character.create({
      data: {
        name: validateField.name,
        role: validateField.role,
        description: validateField.description,
        image: fullPath,
        animeId: validateField.animeId,
      },
    });

    redirect("/characters");
  } catch (error: any) {
    console.error("Error in createCharacterAction:", error.message);
    return renderError(error);
  }
};


export const fetchCharactersByAnimeId = async (animeId: string) => {
  try {
    const characters = await db.character.findMany({
      where: { animeId },
      include: {
        anime: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return characters;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw new Error("Failed to fetch characters.");
  }
};

export const toggleFavoriteAction = async (prevState: {
  favoriteId: string | null;
  animeId: string;
  pathname: string;
}) => {
  const { favoriteId, animeId, pathname } = prevState;
  const user = await getAuthUser();

  if (!user || !user.id) {
    throw new Error("User is not authenticated.");
  }

  const profile = await db.profile.findUnique({
    where: { clerkId: user.id },
  });

  if (!profile) {
    throw new Error("Profile does not exist for the current user.");
  }

  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: { id: favoriteId },
      });

      await db.anime.update({
        where: { id: animeId },
        data: {
          favorite: { decrement: 1 },
        },
      });
    } else {

      await db.favorite.create({
        data: {
          animeId,
          profileId: profile.id,
        },
      });

      await db.anime.update({
        where: { id: animeId },
        data: {
          favorite: { increment: 1 },
        },
      });
    }

    revalidatePath(pathname);

    return {
      message: favoriteId ? "Removed from Favorites" : "Added to Favorites",
    };
  } catch (error: any) {
    if (error.code === "P2002") {
      console.error("Duplicate favorite entry:", error.message);
      return { message: "Already in favorites." };
    }
    console.error("Error in toggleFavoriteAction:", error.message);
    throw new Error("Failed to toggle favorite.");
  }
};



export const createReviewAction = async (prevState: any, formData: FormData) => {
  try {

    const user = await getAuthUser();
    if (!user || !user.id) {
      throw new Error("User is not authenticated or profile ID is missing.");
    }

    const rawData = Object.fromEntries(formData);

    if (!rawData.animeId) {
      throw new Error("Anime ID is missing.");
    }

    const validateField = validateWithZod(reviewSchema, rawData);

    const anime = await db.anime.findUnique({
      where: { id: rawData.animeId as string },
    });

    if (!anime) {
      throw new Error("Invalid anime ID. Anime not found.");
    }

    const profile = await db.profile.findUnique({
      where: { clerkId: user.id },
    });

    if (!profile) {
      throw new Error("Profile not found for the authenticated user.");
    }

    await db.review.create({
      data: {
        ...validateField,
        profileId: profile.id,
        animeId: rawData.animeId as string,

      },
    });
    
    // console.log(anime?.id);
    await updateAnimeScore(rawData.animeId as string);
    await updateAnimeRanked();
    await updateAnimePopularity();
    return redirect(`/manga/`);
  } catch (error) {
    console.error("Error creating review:", error);
    return renderError(error);
  }
};

export const updateAnimeScore = async (animeId: string) => {
  try {
    if (!animeId) {
      throw new Error("Anime ID is required.");
    }

    const reviews = await db.review.findMany({
      where: { animeId },
    });

    if (reviews.length === 0) {
      console.log("No reviews found for this anime.");
      const result = await db.anime.update({
        where: { id: animeId },
        data: { score: 0 },
      });
      return result;
    }

    const validReviews = reviews.filter((review) => review.rating !== null);

    if (validReviews.length === 0) {
      console.log("No valid reviews found for this anime.");
      const result = await db.anime.update({
        where: { id: animeId },
        data: { score: 0 },
      });
      return result;
    }

    const avgScore = parseFloat(
      (validReviews.reduce((acc, review) => acc + review.rating!, 0) / validReviews.length).toFixed(2)
    );

    const result = await db.anime.update({
      where: { id: animeId },
      data: { score: avgScore },
    });

    // console.log("Anime score updated:", result);
    return result;
  } catch (error) {
    console.error("Error updating anime score:", error);
    throw new Error("Failed to update anime score.");
  }
};

export const updateAnimeRanked = async () => {
  try {
    // ดึงรายการอนิเมะทั้งหมดเรียงตามคะแนน (score)
    const animes = await db.anime.findMany({
      orderBy: { score: "desc" }, // เรียงจากคะแนนมากไปน้อย
    });
    for (let i = 0; i < animes.length; i++) {
      await db.anime.update({
        where: { id: animes[i].id },
        data: { ranked: (i + 1).toString() }, // ลำดับเริ่มต้นจาก 1
      });
    }

    // console.log("Ranked updated for all animes.");
  } catch (error) {
    console.error("Error updating ranked:", error);
  }
};
export const updateAnimePopularity = async () => {
  try {

    const animes = await db.anime.findMany({
      orderBy: { favorite: "desc" }, // เรียงจากจำนวนสมาชิกมากไปน้อย
    });

    // อัปเดตอันดับ (popularity) ให้แต่ละอนิเมะ
    for (let i = 0; i < animes.length; i++) {
      await db.anime.update({
        where: { id: animes[i].id },
        data: { popularity: i + 1 }, // ลำดับเริ่มต้นจาก 1
      });
    }

    // console.log("Popularity updated for all animes.");
  } catch (error) {
    console.error("Error updating popularity:", error);
  }
};
