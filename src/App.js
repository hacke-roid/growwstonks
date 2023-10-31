import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar.js";
import StockCard from "./components/StockCard.js";
//import StockCard from "./components/StockCard.js";
import { getTopGainers } from "./utils/api.mjs";

function App() {
  const [gainers, setGainers] = useState([]);

  const handleSubmit = (term) => {
    console.log("form submit", term);
  };

  const fetchGainers = async () => {
    try {
      const gainersData = await getTopGainers();
      if (gainersData && gainersData.bestMatches) {
        setGainers(gainersData.bestMatches);
      }
    } catch (error) {
      console.error('Error fetching top gainers:', error);
    }
  };

  useEffect(() => {
    fetchGainers();
  })

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <div>
        <section>
          <a>Top Gainers</a>
          {gainers.map((stock, index) => (
            <StockCard key={index} stock={stock} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
