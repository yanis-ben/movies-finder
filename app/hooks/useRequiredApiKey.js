import { useEffect } from "react";

const useRequiredApiKey = () => {
  useEffect(() => {
    let isMounted = true;
    const localStorageApiKey = localStorage.getItem("omdbApiKey");

    console.log("localStorageApiKey =", apiKey);

    if (!localStorageApiKey && isMounted) {
      apiKey = prompt("Quelle est ton API Key ?");
      if (apiKey) {
        localStorage.setItem("omdbApiKey", apiKey);
        console.log("Clé API enregistrée :", apiKey);
      }
    }
    return () => {
      isMounted = false;
    }
  }, []);
};

export default useRequiredApiKey;
