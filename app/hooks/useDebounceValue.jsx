"use client";

import { useState, useEffect } from "react";

// Sert à retarder la mise à jour de debouncedSearch.
// Évite que l'URL change à chaque frappe de touche.
const useDebounceValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounceValue;
