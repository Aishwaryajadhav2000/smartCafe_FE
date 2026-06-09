import React, { useEffect } from 'react'
import { getFoodItem } from '../services/food';

export default function AllFoodItems() {

  useEffect(()=>{
    getFoodItems();
  })
  const getFoodItems = async(e)=>{
    
    const getItem =  await getFoodItem();
    console.log("data" , getItem)
  }

  return (
    <div>AllFoodItems</div>
  )
}
