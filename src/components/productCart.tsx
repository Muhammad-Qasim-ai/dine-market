'use client'

import Image from "next/image";
import { FC } from "react";
import { urlForImage } from "../../sanity/lib/image";





export const Cart: FC<{ item: any }> = ({item}) => {
    
    const handleAddToCart = async () => {
        const res = await fetch('/api/cart', {
           method: 'POST',
           body: JSON.stringify({
               product_id: item._id,
           })
    
    
        })
    
        const result = await res.json()
        
        console.log(result);
        
    }
   

   return (
    <>
        <div key={item.id}  className="min-w-[100%] 4md:min-w-[50%] xl:min-w-[33%] h-[33rem]  flex flex-col items-center  overflow-y-hidden py-9 ">
                        <Image 
                        src={urlForImage(item.image).url()} 
                        alt="product" 
                        width={'380'} 
                        height={'380'} 
                        className="max-w-[23.75rem] w-[18rem] sm:w-[23.75rem] h-[20rem] sm:h-[25rem]" />
                        <h1 className="text-lg font-bold mt-4 max-w-[23.75rem] w-[18rem] sm:w-[23.75rem]">{item.title}</h1>
                        {/* <h1>{item.category}</h1> */}
                        <h1 className="text-xl font-extrabold max-w-[23.75rem] w-[18rem] sm:w-[23.75rem] ">${item.price}</h1>
                        <button onClick={handleAddToCart} className=" mt-6 md:mt-0 py-[10px] px-[20px] ml-[10px] bg-[#000] text-[#fff] font-[600] text-[0.9rem] leading-[16px]"> Add to Cart</button>
                    </div>
    </>
   )

}



