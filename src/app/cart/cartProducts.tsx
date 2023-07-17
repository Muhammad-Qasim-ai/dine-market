import Cookies from "js-cookie";

import { client } from "../../../sanity/lib/client"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"




interface IProduct {
    title: string,
        category: string,
        price: number,
        // image: IImage,
        ref: string,
        id: number,
        _id: string
        
    }
    
    let productData2: IProduct[] = [] 
    const handleAddToCart = async () => {
        // const cookieStore =  cookies()
        const userId = Cookies.get('user_id');
        console.log(userId)

        const res = await fetch('http://localhost:3000/api/cart', {
           method: 'GET',
           
        })
        const result = await res.json()
        
        const filteredOrders = result.res.filter((order: any) => order.user_id === userId)
        const filteredProductId = filteredOrders.map((item: any) => item.product_id)
        // console.log(filteredProductId);
        return filteredProductId
    }
    export const result: Promise<any> = handleAddToCart();

    
    export const productData = async (product_id: string[]) => {
        const productIds = JSON.stringify(product_id);
        let query = `*[_type=='product' && _id in ${productIds}] {
            title,
            price,
            image,
            category,
            id,
            _id,
            ref
            
           }`
        const res = await client.fetch(query)
    //    console.log(product_id)
       return res
    }
    
    
    




    