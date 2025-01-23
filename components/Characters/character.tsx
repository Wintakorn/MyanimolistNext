import React from "react";
import { fetchCharactersByAnimeId } from "@/actions/actions";
import Link from "next/link";

export const truncateWords = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};
const Character = async ({ id }: { id: string }) => {
  const characters = await fetchCharactersByAnimeId(id);
  return (
    <div className="mt-5">
      <div className="mt-3">
        <div className="flex justify-between items-center border-b py-2 mb-3 text-1xl">
          <div className="">
            <h2 className="font-semibold">Characters & Voice Actors</h2>
          </div>
          <div className="">
            {/* <Link href={`/manga/${id}/characters`} className="hover:underline text-blue-500">
              View all Characters
            </Link> */} 
          </div>
        </div>
        {characters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-6 mb-5">
            {characters.map((character) => (
              <Link href={'/'}>
                <div key={character.id} className="shadow-md w-100 h-auto mx-1 hover:text-red-500">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="px-2 pb-4">
                    <h3 className="text-lg font-bold">{character.name}</h3>
                    <p className="text-sm">{character.role}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>  
        ) : (
          <p className="text-gray-500 mb-10">No characters added yet.</p>
        )}
      </div>
    </div >
  );
};

export default Character;
