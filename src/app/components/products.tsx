'use client'

import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import {Cart} from './productCart'

export const getproductData = async () => {
   const res =  await client.fetch(`*[_type=='product']{
    title,
    price,
    image,
    category,
    id,
    _id,
    ref
    
   }`)
   return res
}

export interface IProduct {
    title: string,
    category: string,
    price: number,
    image: IImage,
    id: number,
    _id: string,
    ref: string

}

export default async function Products() {

    const data: IProduct[] = await getproductData();

    return (
        <>
            <h1 className=" text-sm mb-2 text-center tracking-wider font-extrabold text-promo1 font-sora">PROMOTIONS</h1>
                <h1 className=" tracking-wider text-center text-3xl font-extrabold ">Our Promotion Events</h1>
        
            <div className="flex overflow-x-scroll overflow-y-hidden xl:mx-28 lg:mx-2 3md:mx-7 mx-3   my-16 no-scrollbar gap-3">
                
                {
                
                
                data.map((item) => (
                    <Cart key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}