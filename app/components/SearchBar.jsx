"use client";

import { useEffect } from "react";
import useQueryState from "../hooks/useQueryState";
import useDebounceValue from "../hooks/useDebounceValue";
import useRequiredApiKey from "../hooks/useRequiredApiKey";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useQueryState("search", "");
  const debouncedSearch = useDebounceValue(search, 500);
  useRequiredApiKey();

  useEffect(() => {
    onSearch?.(debouncedSearch); // Si une fonction onSearch est passée, on l'appelle
  }, [debouncedSearch, onSearch]);

  return (
    <fieldset className="border p-4 rounded-md">
      <legend className="text-lg font-bold">Search</legend>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered w-full"
      />
    </fieldset>
  );
};

export default SearchBar;
