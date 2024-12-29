import { useState } from "react";
import { Star } from "lucide-react";

const AnimeRating = ({ onChange }: { onChange: (rating: number) => void }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleClick = (rating: number) => {
    setSelectedRating(rating);
    onChange(rating);
  };

  return (
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
        <Star
          key={rating}
          className={`w-6 h-6 cursor-pointer ${
            selectedRating >= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => handleClick(rating)}
        />
      ))}
    </div>
  );
};

export default AnimeRating;
