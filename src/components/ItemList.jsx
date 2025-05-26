import React from 'react'
import Item from './Item'
function ItemList({food ,loading}) {
  return (
    <div>
        {loading ? <p>Loading...</p> :  food.extendedIngredients.map((item)=>
           <Item item={item}/> )
           }
     
    </div>
  )
}

export default ItemList
