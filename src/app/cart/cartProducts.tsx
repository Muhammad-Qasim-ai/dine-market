import { cookies } from "next/dist/client/components/headers"
// import  Cookies  from "js-cookie";
import { client } from "../../../sanity/lib/client"
// import { useState } from "react"
// import cart from '../api/cart'



interface IProduct {
    title: string,
        category: string,
        price: number,
        // image: IImage,
        ref: string,
        id: number,
        _id: string
        
    }
    
    export let productData2: IProduct[] = [] 


    
 
    
    
    
    const handleAddToCart = async () => {
        const cookieStore =  cookies()
        const userId = cookieStore.get('user_id')
        // console.log(userId)

        const res = await fetch('http://localhost:3000/api/cart', {
           method: 'GET',
           
        })
        const result = await res.json()
        
        const filteredOrders = result.res.filter((order: any) => order.user_id === userId?.value)
        const filteredProductId = filteredOrders.map((item: any) => item.product_id)
        // console.log(filteredProductId);
        return filteredProductId
    }
    
    export const result: Promise<any> = handleAddToCart();
