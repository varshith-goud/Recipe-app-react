import React, { useState, useEffect } from "react";
import styles from "./FoodDetails.module.css";
import ItemList from "./ItemList";









function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "542df4034b764548adf2c8d2b45b8e88";
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchFood();
  }, [foodId, URL, API_KEY]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>

        <img className={styles.recipeImage} src={food.image} alt={food.title} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️{food.readyInMinutes} Minutes</strong>
          </span>
          <span><strong>{food.vegetarian ? "🥗 Vegetarian" : "🍖 Non-Vegetarian"}</strong></span>
          <span>
            <storng> 👪 serves {food.servings}</storng>
          </span>
          <span>{food.vegan ? "🐮 vegan" : ""}</span>
        </div>
        <div>
          <strong>💲<span>{food.pricePerServing / 100} per serving</span></strong>
        </div>
     <h2>Ingredients</h2>
     <ItemList food={food}  loading={loading}/>
      
        <h2>Instructions</h2>
        <div className={styles.instructions}>
          <ol>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
        </ol>
      </div>
       </div>
    </div>
  );
}

export default FoodDetails;
