import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddFood from '../pages/AddFood'
import AllFoodItems from '../pages/AllFoodItems'

export default function Food() {

    const navigate = useNavigate()
    const [createitem, setCreateItem] = useState(false)
    const[displayFood , setDisplayFood] = useState(false)

    return (
        <>
            <header>
                <section className='flex gap-5 ml-5 mt-5'>
                    <article><button onClick={()=>[setDisplayFood(true) , setCreateItem(false)]}>All Food</button></article>

                    <article><button onClick={() => [setCreateItem(true) , setDisplayFood(false)]}>Create Food</button></article>

                    <article><button>Edit</button></article>
                </section>
            </header>

            {
                displayFood && (
                    <section>
                        <AllFoodItems></AllFoodItems>
                    </section>
                )
            }

            {
                createitem && (
                    <section>
                        <AddFood></AddFood>
                    </section>
                )
            }




        </>
    )
}
