"use client"

import React, { useState } from "react";

type GenreInputProps = {
  name?: string;
  label?: string;
  options: string[];
  required?: boolean;
};

const GenreInput: React.FC<GenreInputProps> = ({
  name = "genre",
  label = "Select Genres",
  options,
  required = false,
}) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleToggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="grid grid-cols-2 gap-2">
        {options.map((genre) => (
          <div key={genre} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`${name}-${genre}`}
              name={name}
              value={genre}
              checked={selectedGenres.includes(genre)}
              onChange={() => handleToggleGenre(genre)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required={required && selectedGenres.length === 0}
            />
            <label
              htmlFor={`${name}-${genre}`}
              className="text-sm font-medium text-gray-700"
            >
              {genre}
            </label>
          </div>
        ))}
      </div>
      <input
        type="hidden"
        name={name}
        value={JSON.stringify(selectedGenres)}
      />
    </div>
  );
};

export default GenreInput;
