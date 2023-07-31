'use client'

import { FC } from "react";
import { LuShoppingCart } from "react-icons/lu";

export const Cart: FC<{ item: any }> = ({item}) => {
    
    const handleAddToCart = async () => {
        const res = await fetch('http://localhost:3000/api/cart', {
           method: 'POST',
           body: JSON.stringify({
               product_id: item._id,
           })
    
    
        })
    
        const result = await res.json()
        
        console.log(result);

        
    }
    return (
        <button onClick={handleAddToCart} className="w-[40%] p-3 text-base font-semibold bg-startbg flex items-center justify-center gap-2 text-startcol tracking-wider">
                                    <LuShoppingCart className='text-2xl' />
                                Add to Cart</button>
    )
}