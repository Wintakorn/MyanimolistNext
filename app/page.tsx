import { Suspense } from "react";
import LoadingCard from "@/components/card/LoadingCard";
import AnimeContainer from "@/components/home/AnimeContainer";

const Page = async ({ searchParams }: { searchParams: { search?: string; genre?: string } }) => {
  const { search, genre } = await searchParams;

  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <AnimeContainer search={search} genre={genre} />
      </Suspense>
    </section>
  );
};

export default Page;
