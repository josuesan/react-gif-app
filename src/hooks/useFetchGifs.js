import { useState, useEffect, useCallback } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  const handleGifs = useCallback(async () => {
    const gifs = await getGifs(category);
    setState({
      data: gifs,
      loading: false
    });
  }, [category]);

  useEffect(() => {
    handleGifs();
  }, [handleGifs]);

  return state;
};
