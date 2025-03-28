"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import useDebounceValue from "./useDebounceValue";

const useQueryState = (key, initialValue) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryValue = searchParams.get(key) || initialValue;
  const [querState, setQueryState] = useState(queryValue);
  const debouncedState = useDebounceValue(querState, 1000); // Ajout du debounce


  useEffect(() => {
    setQueryState(queryValue);
  }, [queryValue]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedState) {
      params.set(key, debouncedState);
    } else {
      params.delete(key);
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [debouncedState]);

  return [querState, setQueryState];
};

export default useQueryState;
