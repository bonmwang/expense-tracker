import { FaSearch } from "react-icons/fa";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search expenses..."
        className="search-input"
      />
      {searchTerm && (
        <button 
          className="clear-search" 
          onClick={() => setSearchTerm("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}