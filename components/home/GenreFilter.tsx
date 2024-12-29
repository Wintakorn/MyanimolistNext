"use client"
import React from "react";

type GenreFilterProps = {
  genre?: string; // The currently selected genre
  onSelectGenre?: (genre: string | null) => void; // Callback for when a genre is selected
};

const GenreFilter: React.FC<GenreFilterProps> = ({
  
  genre,
  onSelectGenre,
}) => {
  const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Romance",
    "Horror",
    "Sci-Fi",
  ]; // Example genres

  const handleGenreClick = (selectedGenre: string) => {
    if (genre === selectedGenre) {
      onSelectGenre?.(null); // Deselect the genre if it is already selected
    } else {
      onSelectGenre?.(selectedGenre); // Select a new genre
    }
  };

  return (
    <div className="genre-filter">
      <h3 className="text-lg font-semibold mt-4">Genre</h3>
      <div className="flex flex-wrap gap-2">
        {genres.map((g) => (
          <button
            key={g}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              genre === g
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleGenreClick(g)}
          >
            {g}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
