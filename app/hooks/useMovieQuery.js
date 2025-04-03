import useSWR from "swr";

const useMovieQuery = (search) => {
    return useSWR(`movie-query-${search}`, async () => {
        if(search.length < 3) {
            throw new Error ("Minimum 3 car.");
        }

        const apiKey = localStorage.getItem("omdbApiKey");
        console.log("apKey =", apiKey)
        if(!apiKey){
            throw new Error ("Invalid API KEY");
        }

        const url = new URL("http://www.omdbapi.com");
        url.searchParams.set("s", search);
        url.searchParams.set("apiKey", apiKey);

        const json = await fetch(url.toString()).then((res) => res.json());
        return json;
    })
}
export default useMovieQuery;
