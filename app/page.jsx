"use client";
import SearchBar from "./components/SearchBar";
import useDebounceValue from "./hooks/useDebounceValue";
import useMovieQuery from "./hooks/useMovieQuery";
import useQueryState from "./hooks/useQueryState";
import useRequiredApiKey from "./hooks/useRequiredApiKey";

export default function Home() {
  const [search, setSearch] = useQueryState("s", "");
  const debouncedSearch = useDebounceValue(search, 500);
  useRequiredApiKey();
  const { data, error, isLoading } = useMovieQuery(debouncedSearch);

  console.log("data : ", data);

  return (
    <div className="flex flex-col gap-4 py-8 max-w-4xl m-auto px-4">
      <header>
        <h1 className="text-4xl font-hold text-center">Movies finder</h1>
      </header>
      <SearchBar search={search} setSearch={setSearch} />
      <main>
        {error ? <p>Error : {error.message}</p> : null}
        <div className="grid grid-cols-3 gap-10">
          {isLoading ? <p>...Loading</p> : null}
          {data?.Search?.length > 3
            ? data.Search.map((movie) => (
                <div key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title}'s poster`} 
                  className="w-full h-full object-cover overflow-hidden"
                  />
                  <div>
                    <p className="text-sm font-medium">{movie.Title}</p>
                    <p className="text-xs text-neutral-content font-medium">{movie.Year} | {movie.Type}</p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </main>
    </div>
  );
}
