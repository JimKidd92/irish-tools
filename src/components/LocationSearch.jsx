// Shared search bar for weather tools: a town input, a check button and a
// "use my location" button. Purely presentational - the parent owns the state.
export default function LocationSearch({ query, setQuery, onSearch, useMyLocation, placeholder }) {
  return (
    <form className="loc-search" onSubmit={onSearch}>
      <input
        type="text"
        className="loc-search__input"
        placeholder={placeholder || 'Enter your town… (e.g. Galway)'}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Town or place name"
      />
      <button type="submit" className="btn btn--primary">
        Check
      </button>
      <button type="button" className="btn btn--ghost" onClick={useMyLocation}>
        📍 Use my location
      </button>
    </form>
  )
}
