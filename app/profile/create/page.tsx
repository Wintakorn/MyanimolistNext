import { createProfileAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateProfile = async () => {
  const user = await currentUser();
  if (user?.privateMetadata.hasProfile) redirect("/");

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Profile</h1>
      <div className="border p-8 rounded-md shadow-md">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstName"
              labelText="First Name"  
              type="text"
              placeholder="Enter your first name"
            />
            <FormInput
              name="lastName"
              labelText="Last Name"
              type="text"
              placeholder="Enter your last name"

            />
            <FormInput
              name="userName"
              labelText="Username"
              type="text"
              placeholder="Choose a username"

            />
          </div>
          <SubmitButton className="mt-6" text="Create Profile" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfile;
