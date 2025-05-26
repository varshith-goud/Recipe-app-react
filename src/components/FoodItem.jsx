import React from 'react'
import styles from './FoodItem.module.css'
function FoodItem({food,setFoodId}) {
  return (
    <div className={styles.foodItem}>
        <img className={styles.item_img} src={food.image} alt={food.title} />
        <div className={styles.itemContent}>
           <p className={styles.itemName}>{food.title}</p>
           </div>
     <div className={styles.ButtonContainer}>
       <button onClick={()=>{console.log(food.id);
        setFoodId(food.id)
       }} className={styles.itemButton}> view recipe
        </button>    
     </div>
     
        </div>
  )
}

export default FoodItem
