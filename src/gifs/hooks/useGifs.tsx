import { useState } from "react";
import { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClick = async (term: string) => {
    setGifs(await getGifsByQuery(term));
  };

  const handleSearch = async (query: string) => {
    query = query.toLowerCase().trim();

    if (query === "") return;
    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].slice(0, 8));

    setGifs(await getGifsByQuery(query));
  };

  return {
    previousTerms,
    gifs,
    handleTermClick,
    handleSearch,
  };
};
