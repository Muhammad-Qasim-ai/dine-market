'use client'

import { IProduct } from "@/components/products";
import { cartAction } from "@/store/features/cartSlice";
import { useAppDispatch } from "@/store/store";
import { FC, useState } from "react";
import { toast } from "react-hot-toast";
import { LuShoppingCart } from "react-icons/lu";
// import  PostQuantity  from './postquantity';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


export const Cart: FC<{ item: IProduct }> = ({item}) => {
    const [quan, setQuan] = useState(1)
    const handleIncQuantity = (productId: string) => {
        if(item._id === productId){
            setQuan(quan + 1)
        }
    }
    const handleDecQuantity = (productId: string) => {
        if(item._id === productId && quan > 1){
            setQuan(quan - 1)
        }
    }
    const handleAddToCart = async () => {
       const res = await fetch('/api/cart', {
          method: 'POST',
          body: JSON.stringify({
              product_id: item._id,
              quantity: quan,                       
          })
          
   
       })
       toast.success('Product Added Succesfully')
       
       const result = await res.json()
       
       console.log(result);

       
   }
    return (
        
                
                
                    <>
                    <div className="flex gap-8">
                                    <h4 className="">Quantity: </h4>
                                    <div className="flex items-center ">
            

                            <AiOutlineMinus onClick={() => handleDecQuantity(item._id)} className="mr-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] " />
                            <span className="">{quan}</span>
                            <AiOutlinePlus onClick={() => handleIncQuantity(item._id)}className="ml-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] border-2 border-black" />
            
                        </div>

                                </div>
                                <div className="flex items-center gap-4">
                                <button onClick={handleAddToCart} className="w-[40%] p-3 text-base font-semibold bg-startbg flex items-center justify-center gap-2 text-startcol tracking-wider">
                                                <LuShoppingCart className='text-2xl' />
                                            Add to Cart</button>
                        <p className="  font-[700] text-[1.5rem] leading-[30px] tracking-[0.1em]">${item.price}.00</p>
                                </div>
                    </>
                
            
    )
   
}