import React from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";


const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext)
  return (
   <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {
          food_list.map((item,index)=>{
            if(category==="All"|| category===item.category){
              //Category===All isliye kiya hai taaki jab ham initally page load karein toh hamein sab cards dikhein as initially toh category set hogi nahi wo toh click karne par hi hogi
              return <FoodItem key={item._id} id={item._id} name=   {item.name} description={item.description}
              price={item.price}
              image={item.image}
              />
            }
           
          })
        }
      </div>
   </div>
  )
}

export default FoodDisplay