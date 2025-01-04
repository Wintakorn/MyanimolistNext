'use client'

import { createAnimeAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import GenreInput from "@/components/form/GenreInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import SelectInput from "@/components/form/SelectInput";
import { producers, licensors, studios } from "@/utils/options";

const CreateAnime =  () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Anime</h1>
      <div className="border p-8 rounded-md shadow-sm mb-5">
        <FormContainer action={createAnimeAction}>
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
          <TextAreaInput
            name="synopsis"
            labelText="Description"
            placeholder="Write a description of the anime"
            required
          />
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

            />
            <FormInput
              name="premiered"
              labelText="Premiered"
              type="text"
              placeholder="E.g., Fall 2023"
              required
            />
          </div>
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
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <SelectInput
              name="producers"
              label="Producers"
              options={producers.map((producer) => ({
                value: producer.value,
                label: producer.label,
              }))}
              // isMulti={true} // เปิดใช้งาน Multi-Select
              // onChange={(value) => console.log("Selected Licensors:", value)}
              required
            />
            <SelectInput
              name="licensors"
              label="Licensors"
              options={licensors.map((licensor) => ({
                value: licensor.value,
                label: licensor.label,
              }))}
              // isMulti={true} // เปิดใช้งาน Multi-Select
              // onChange={(value) => console.log("Selected Licensors:", value)}
              required
            />
            <SelectInput
              name="studios"
              label="Studios"
              options={studios.map((studio) => ({
                value: studio.value,
                label: studio.label,
              }))}
              // isMulti
              // onChange={(value) => console.log("Selected Licensors:", value)}
              required
            />
          </div>
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

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="releaseDate"
              labelText="Release Date"
              type="date"
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
          <SubmitButton className="mt-8" text="Create Anime" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateAnime;
