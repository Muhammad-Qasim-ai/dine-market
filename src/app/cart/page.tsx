

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
    
    let productData2: IProduct[] = [] 

export default async function Cart() {
    
 
    


    const handleAddToCart = async () => {
        const cookieStore =  cookies()
        const userId = cookieStore.get('user_id')
        // console.log(userId)

        const res = await fetch('../api/cart', {
           method: 'GET',
           
        })
        const result = await res.json()
        
        const filteredOrders = result.res.filter((order: any) => order.user_id === userId?.value)
        const filteredProductId = filteredOrders.map((item: any) => item.product_id)
        // console.log(filteredProductId);
        return filteredProductId
    }
    const result: Promise<any> = handleAddToCart();

    
    const productData = async (product_id: string[]) => {
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
    
    result.then(async (filteredProductId) => {
      console.log(filteredProductId);
    
      productData2 = await productData(filteredProductId);
      console.log(productData2);

    
    })
    




    return (

        <>
            <div>           
                aasd
                {productData2.map((item: IProduct) => (
                    
                    <a href={item.ref} key={item.id} className=' border border-black min-w-[12.5rem] md:min-w-[15.625rem] max-w-[12.5rem] md:max-w-[15.625rem]   text-[1.05rem] mx-auto font-[600] leading-[24px] text-[#212121] md:min-h-[full] min-h-[331.81px]'>                    
                    <p className='text-[1.05rem] mt-[0.5rem] font-[600] leading-[24px] text-[#212121]'>{item.title}</p>
                    <p className='font-[600] text-[15px] leading-[15px] text-[#888] mt-[0.5rem]'>{item.category}</p>
                    <p className='text-[1.25rem] mt-4'>${item.price}.00</p>

                    </a>
                
            ))}
            </div>
        </>
    )

}