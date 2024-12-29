    'use client'
    import { toggleFavoriteAction } from "@/actions/actions";
    import { usePathname } from "next/navigation";
    import FormContainer from "../form/FormContainer";
    import { CardSubmitButton } from "../form/Buttons";

    const FavoriteToggleForm = ({
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
                    <CardSubmitButton isFavorite={favoriteId ? true : false} />
                </FormContainer>
            </>
        );
    };

    export default FavoriteToggleForm;
