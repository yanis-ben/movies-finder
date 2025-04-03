"use client";

const SearchBar = ({ search, setSearch }) => {
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
