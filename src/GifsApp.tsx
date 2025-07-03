import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["dragon ball z"]);

  const handleTermClick = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string) => {
    query = query.toLowerCase().trim();

    if (query === "") return;
    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].slice(0, 8));

    console.log({ query });
  };

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />

      <PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClick}
      />

      <GifList gifs={mockGifs} />
    </>
  );
};
