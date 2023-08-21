'use client'

import { IProduct } from "@/components/products";
import { cartAction } from "@/store/features/cartSlice";
import { useAppDispatch } from "@/store/store";
import { FC } from "react";
import { toast } from "react-hot-toast";
import { LuShoppingCart } from "react-icons/lu";

export const Cart: FC<{ item: IProduct }> = ({item}) => {
    const handleAddToCart = async () => {
        const res = await fetch('/api/cart', {
           method: 'POST',
           body: JSON.stringify({
               product_id: item._id,
           })
           
    
        })
        toast.success('Product Added Succesfully')
        
        const result = await res.json()
        
        console.log(result);

        
    }
    return (
        <button onClick={handleAddToCart} className="w-[40%] p-3 text-base font-semibold bg-startbg flex items-center justify-center gap-2 text-startcol tracking-wider">
                                    <LuShoppingCart className='text-2xl' />
                                Add to Cart</button>
    )
}