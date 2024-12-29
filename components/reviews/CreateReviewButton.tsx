import { auth } from '@clerk/nextjs/server';
import React from 'react'
import { SignInCardButton } from '../form/Buttons';
import CreateReview from './CreateReview';

const CreateReviewButton = async() => {
    const { userId } = await auth();

    if (!userId) {
        return <SignInCardButton />;
    }

    return <CreateReview animeId="ad" animeName="someAnimeName" />
}

export default CreateReviewButton