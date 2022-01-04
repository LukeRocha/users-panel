import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [apiData, setApiData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setApiData(result);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { apiData };
};
