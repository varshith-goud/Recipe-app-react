import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Search.module.css";

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "542df4034b764548adf2c8d2b45b8e88";
function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(
        `${API_URL}?query=${query}&apiKey=${API_KEY}`
      );

      const data = await response.json();
      
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.search_container}>
      <input className={styles.search_input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
