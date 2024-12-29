import { Suspense } from "react";
import LoadingCard from "@/components/card/LoadingCard";
import AnimeContainer from "@/components/home/AnimeContainer";

const Page = async ({ searchParams }: { searchParams: { search?: string; category?: string } }) => {
  // Await searchParams before using them
  const { search, category } = await searchParams;

  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <AnimeContainer search={search}/>
      </Suspense>
    </section>
  );
};

export default Page;
