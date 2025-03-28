"use client";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 py-8 max-w-4xl m-auto px-4">
      <header>
        <h1 className="text-4xl font-hold text-center">Movies finder</h1>
      </header>
      <SearchBar />
      <main></main>
    </div>
  );
}
