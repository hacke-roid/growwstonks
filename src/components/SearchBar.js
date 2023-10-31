import React, { useState } from "react";
import searchStock from "../utils/api.mjs";
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (event) => {
    const query = event.target.value;
    setTerm(query);
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    try {
      setIsLoading(true);
      const data = await searchStock(query);
      if (data && data.bestMatches) {
        setSuggestions(data.bestMatches);
        console.log(data);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching stock suggestions:", error);
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div>
      <span>Grow Stonck</span>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" value={term} onChange={handleChange} />
        </form>
        {isLoading && <p>Loading...</p>}
        {suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map((stock, index) => (
              <div key={index}>{stock["2. name"]}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
