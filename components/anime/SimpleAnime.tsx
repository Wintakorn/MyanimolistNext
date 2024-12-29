import React from 'react';
import { fetchAnimeDetail } from '@/actions/actions';
import { Link } from 'lucide-react';

const SimpleAnime = async ({ id }: { id: string }) => {
    try {
        const anime = await fetchAnimeDetail({ id });
        // console.log('Anime Details:', anime);

 
        if (!anime) {
            throw new Error('Anime details not found.');
        }
        const videoUrl = anime.animeSimpleUrl
            ? anime.animeSimpleUrl.includes('youtube.com')
                ? anime.animeSimpleUrl.replace('watch?v=', 'embed/')
                : anime.animeSimpleUrl
            : null;

        if (!videoUrl) {
            throw new Error('Video URL is missing or invalid.');
        }

        // console.log('Processed Video URL:', videoUrl);

        return (
            <div className="video-container" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                <iframe
                    width="100%"
                    height="515"
                    src={videoUrl}
                    title="Anime video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="shadow-md"
                ></iframe>
            </div>
        );
    } catch (error: any) {
        // console.error('Error:', error.message);
        return (
            <div className="text-center p-4 text-red-500">
                <h2 className="text-lg font-semibold">Oops! Something went wrong.</h2>
                <p className="mt-2">We couldn't load the anime video. Please try again later.</p>
                <p className="mt-2 text-sm text-gray-500">
                    {error.message || 'An unknown error occurred.'}
                </p>
                <div className="mt-4">
                    <Link
                        href="/"
                        className="text-indigo-500 hover:text-indigo-700 underline"
                    >
                        Go back to the homepage
                    </Link>
                </div>
            </div>
        );
    }
};

export default SimpleAnime;
