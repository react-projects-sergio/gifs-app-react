import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const [previousTermers, setPreviousTermers] = useState(["dragon ball z"]);

  const handleTermClick = (term: string) => {
    console.log({ term });
  };

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      <SearchBar placeholder="Buscar gifs" />

      <PreviousSearches
        searches={previousTermers}
        onLabelClick={handleTermClick}
      />

      <GifList gifs={mockGifs} />
    </>
  );
};
