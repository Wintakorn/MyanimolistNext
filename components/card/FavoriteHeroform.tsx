'use client'
import { toggleFavoriteAction } from "@/actions/actions";
import { usePathname } from "next/navigation";
import FormContainer from "../form/FormContainer";
import { CardSubmitButton, HeroSubmitBtn } from "../form/Buttons";

const FavoriteHeroform = ({
    favoriteId,
    animeId,
}: {
    favoriteId: string | null;
    animeId: string;
}) => {
    const pathname = usePathname();
    const toggleAction = toggleFavoriteAction.bind(null, {
        favoriteId,
        animeId,
        pathname,
    });
    return (
        <>
            <FormContainer action={toggleAction}>
                <HeroSubmitBtn isFavorite={favoriteId ? true : false} />
            </FormContainer>
        </>
    );
};

export default FavoriteHeroform;
