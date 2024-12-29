import { createAnimeAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import GenreInput from "@/components/form/GenreInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import SelectInput from "@/components/form/SelectInput";

const CreateAnime = async () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Anime</h1>
      <div className="border p-8 rounded-md shadow-sm mb-5">
        <FormContainer action={createAnimeAction}>
          {/* Anime Title and Genre */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="title"
              labelText="Anime Title"
              type="text"
              placeholder="Enter the anime title"
              required
            />
            <GenreInput
              name="genre"
              label="Genre"
              options={["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Romance"]}
              required
            />
          </div>

          {/* Synopsis */}
          <TextAreaInput
            name="synopsis"
            labelText="Description"
            placeholder="Write a description of the anime"
            required
          />

          {/* Episodes, Status, and Premiere Info */}
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <FormInput
              name="episodes"
              labelText="Episodes"
              type="number"
              placeholder="Total number of episodes"
              required
            />
            <SelectInput
              name="status"
              label="Status"
              options={[
                { value: "Airing", label: "Airing" },
                { value: "Completed", label: "Completed" },
                { value: "Upcoming", label: "Upcoming" },
              ]}
              placeholder="Select the anime's status"
              required
            />
            <FormInput
              name="premiered"
              labelText="Premiered"
              type="text"
              placeholder="E.g., Fall 2023"
              required
            />
          </div>

          {/* Airing, Broadcast, and Duration */}
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <FormInput
              name="aired"
              labelText="Aired"
              type="text"
              placeholder="E.g., Sep 29, 2023 to Mar 22, 2024"
              required
            />
            <FormInput
              name="broadcast"
              labelText="Broadcast"
              type="text"
              placeholder="E.g., Fridays at 23:00 (JST)"
            />
            <FormInput
              name="duration"
              labelText="Duration"
              type="text"
              placeholder="E.g., 24 min. per ep."
              required
            />
          </div>

          {/* Producers, Licensors, Studios */}
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <SelectInput
              name="producers"
              label="Producers"
              options={[
                { value: "Aniplex", label: "Aniplex" },
                { value: "Dentsu", label: "Dentsu" },
                { value: "Shueisha Productions", label: "Shueisha Productions" },
                { value: "Crunchyroll", label: "Crunchyroll" },
              ]}
              placeholder="Select Producers"
              // isMulti // Allow multi-selection
              required
            />
            <SelectInput
              name="licensors"
              label="Licensors"
              options={[
                { value: "Crunchyroll", label: "Crunchyroll" },
                { value: "Funimation", label: "Funimation" },
              ]}
              placeholder="Select Licensors"
            // isMulti // Allow multi-selection
            />
            <SelectInput
              name="studios"
              label="Studios"
              options={[
                { value: "Madhouse", label: "Madhouse" },
                { value: "Studio Pierrot", label: "Studio Pierrot" },
                { value: "Toei Animation", label: "Toei Animation" },
              ]}
              placeholder="Select Studios"
              // isMulti // Allow multi-selection
              required
            />
          </div>

          {/* Source, Demographic, and Rating */}
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <FormInput
              name="source"
              labelText="Source"
              type="text"
              placeholder="E.g., Manga"
              required
            />
            <FormInput
              name="demographic"
              labelText="Demographic"
              type="text"
              placeholder="E.g., Shounen"
            />
            <FormInput
              name="rating"
              labelText="Rating"
              type="text"
              placeholder="E.g., PG-13"
              required
            />
          </div>

          {/* Release Date and Image Upload */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="releaseDate"
              labelText="Release Date"
              type="date"
              placeholder="Select the release date"
              required
            />
            <ImageInput name="image" label="Upload Anime Image" required />
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="animeSimpleUrl"
              labelText="Anime Simple URL"
              type="text"
              placeholder="Enter the anime simple URL"
              required
            />
          </div>
          {/* Submit Button */}
          <SubmitButton className="mt-8" text="Create Anime" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateAnime;
