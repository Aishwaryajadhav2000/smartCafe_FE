import React, { useEffect, useState } from 'react'
import './AddFood.css'
import { createFoodItemService } from '../services/food';
import { useNavigate } from "react-router-dom";

export default function AddFood() {

  // const navigate = useNavigate()
  const [description , setDescription] = useState("");
  const [foodname , setFoodname] = useState("");
  const [foodprice , setFoodprice] = useState("");
  const [fooddiscount , setFooddiscount] = useState("")
  const [finalprice , setFinalprice] = useState("")

  useEffect(()=>{
    const price = Number(foodprice);
    const discount = Number(fooddiscount)

    if(!price){
      setFinalprice(0);
      return;
    }

    const discountedPrice = price - (price * discount) / 100;
    setFinalprice(discountedPrice);
  },[foodprice , fooddiscount]);


  const createItem = async (e) =>{
    e.preventDefault();

    const foodData = {description , foodname , foodprice , fooddiscount , finalprice}
    const saveFood = await createFoodItemService(foodData)
    console.log(foodData)
    if(saveFood.status == 201){
      // navigate("/")
    }
    const data = await saveFood.json()
    console.log("data" , data)

  }


  return (
    <>

      <section>
        <article>
          <form action="" onSubmit={createItem}>
            <div>
              <h1 className='text-sm'>Add New Item</h1>
            </div>

            <div className='foodbox'>
              <input type="text" placeholder='Food name' onChange={(e)=> setFoodname(e.target.value)}/>
            </div>

            <div>
              <textarea name="" id="" onChange={(e)=>setDescription(e.target.value)}></textarea>
            </div>

            <div className='foodbox'>
              <input type="text" placeholder='Price' onChange={(e)=>setFoodprice(e.target.value)}/>
            </div>

            <div className='foodbox'>
              <input type="text" placeholder='descount %' onChange={(e)=>setFooddiscount(e.target.value)}/>
            </div>

            <div className='foodbox'>
              Final Price : {finalprice}
            </div>

            <div className=''>
              <button type='submit'>Submit</button>
            </div>

          </form>
        </article>
      </section>
    
    </>
  )
}
