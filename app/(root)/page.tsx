import SearchForm from "../components/SearchForm";

type HomeProps = {
  searchParams: {
    query?: string;
  };
};

export default function Home({ searchParams }: HomeProps) {
  const query = searchParams.query ?? "";

  return (
    <section className="flex flex-col items-center justify-center bg-pink">
      <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] 
        sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
        Home
      </h1>

      <SearchForm query={query} />
    </section>
  );
}
