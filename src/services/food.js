import API_BASE_URL from "./common"

//creating new food item
export const createFoodItemService = async (data) => {
    try {

        const createRes = await fetch(`${API_BASE_URL}/api/createitem`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                description: data.description,
                foodname: data.foodname,
                foodprice: data.foodprice,
                fooddiscount: data.fooddiscount,
                foodfinalprice: data.finalprice
            })
        })
        console.log("data response", createRes)
        return createRes

    } catch (err) {
        console.log("error", err)
    }
}

//To get All the Food items
export const getFoodItem = async () => {
    try {
        const getRes = await fetch(`${API_BASE_URL}/api/getfooditem`, {
            mathod: "GET",
            headers: {
                "Content-Type": "application/json"

            },
        })
        const foodItems = await getRes.json()
        return foodItems
    } catch (err) {

    }
}


