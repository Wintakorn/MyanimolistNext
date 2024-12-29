"use client";
import { useState } from "react";
import FormContainer from "@/components/form/FormContainer";
import { createReviewAction } from "@/actions/actions";
import { SubmitButton } from "../form/Buttons";
import AnimeRating from "../card/AnimeRating";
import ReviewInputFrom from "./ReviewFrom";

const CreateReview = ({ animeId, animeName }: { animeId: string; animeName: string }) => {
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <FormContainer action={createReviewAction}>
      <div className="py-5">
        <div className="">
          <h1 className="text-2xl font-semibold mb-3 capitalize">
            Create Review for Anime: {animeName}
          </h1>
          <input type="hidden" name="animeId" value={animeId} />
          <div className="items-center gap-4 mb-6">
            <ReviewInputFrom
              name="content"
              labelText="Comments"
              placeholder="Write a description of the anime"
              minLength={10}
              maxLength={1000}
              required
            />
            <div className="flex justify-between w-full md:w-auto">
              <SubmitButton className="w-full md:w-auto" text="Create Review" size="lg" />
              <div className="flex items-center gap-4">
                <label htmlFor="rating" className="text-gray-500 font-medium">
                  Rating (1-10)
                </label>
                <AnimeRating onChange={handleRatingChange} />
              </div>
            </div>
          </div>
        </div>
        {/* Rating Section */}

        {/* Hidden Rating */}
        <input type="hidden" name="rating" value={rating} />
      </div>
    </FormContainer>
  );
};

export default CreateReview;
