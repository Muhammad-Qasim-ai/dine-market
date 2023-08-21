'use client'

import { IProduct } from "@/components/products"
import CartContainer from "../cart/cartContainer"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"

export default function Quantity({id}: {id: string}) {
    const [quan, setQuan] = useState(1)
    return(
        <CartContainer quan={2}>
            {({handleIncQuantity, handleDecQuantity}: {handleIncQuantity: any, handleDecQuantity: any}) =>{
                return(
                    <div className="flex items-center ">
            

                            <AiOutlineMinus onClick={() => handleDecQuantity(id)} className="mr-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] " />
                            <span className="">{quan}</span>
                            <AiOutlinePlus onClick={() => handleIncQuantity(id)}className="ml-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] border-2 border-black" />
            
                        </div>
                )
            }

            }
        

        </CartContainer>
        
    )
}