'use client';
import { useSearchParams } from 'next/navigation';
import { createCharacterAction } from '@/actions/actions';
import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInput from '@/components/form/ImageInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import SelectInput from '@/components/form/SelectInput';

const CreateCharacter = () => {
  const searchParams = useSearchParams();
  const animeId = searchParams.get('animeId') || '';
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Character</h1>
      <div className="border p-8 rounded-md  shadow-sm">
        <FormContainer action={createCharacterAction}>
          <input type="hidden" name="animeId" value={animeId} />
          <FormInput
            name="name"
            labelText="Character Name"
            type="text"
            placeholder="Enter the character name"
            required
          />
          <SelectInput
            name="role"
            label="Role"
            options={[
              { value: 'Main', label: 'Main' },
              { value: 'Supporting', label: 'Supporting' },
            ]}
            placeholder="Select the character's role"
            required
          />
          <TextAreaInput
            name="description"
            labelText="Description"
            placeholder="Write a description of the character"
            required
          />
          <ImageInput name="image" label="Upload Character Image" required />
          <SubmitButton className="mt-8" text="Create Character" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateCharacter;
