import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const result = await response.json();
    setApiData(result);
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { apiData, isLoading };
};
