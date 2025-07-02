interface Props {
  searches: string[];
}

export const PreviousSearches = ({ searches }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((searchTerm) => (
          <li key={searchTerm}>{searchTerm}</li>
        ))}
      </ul>
    </div>
  );
};
