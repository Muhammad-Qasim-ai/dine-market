

import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";


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
    ref: string,
    quantity: number,
    totalPrice: number

}

export default async function Products() {

    const data: IProduct[] = await getproductData();

    return (
        <>
            <h1 className=" text-sm mb-2 text-center tracking-wider font-extrabold text-promo1 font-sora">PRODUCTS</h1>
                <h1 className=" tracking-wider text-center text-3xl font-extrabold ">Check What We Have</h1>
        
            <div className="flex overflow-x-scroll overflow-y-hidden xl:mx-28 lg:mx-2 3md:mx-7 mx-3   my-16 no-scrollbar gap-3">
                
                {
                
                
                data.map((item) => (
                    <Link href={item.ref} key={item.id}  className=" hover:scale-110 transition-[0.5s] ease-in min-w-[100%] 4md:min-w-[50%] xl:min-w-[33%] h-[33rem]  flex flex-col items-center  overflow-y-hidden py-9 ">
                        <Image 
                        src={urlForImage(item.image).url()} 
                        alt="product" 
                        width={'380'} 
                        height={'380'} 
                        className="max-w-[23.75rem] w-[18rem] sm:w-[23.75rem] h-[20rem] sm:h-[25rem]" />
                        <h1 className="text-lg font-bold mt-4 max-w-[23.75rem] w-[18rem] sm:w-[23.75rem]">{item.title}</h1>
                        {/* <h1>{item.category}</h1> */}
                        <h1 className="text-xl font-extrabold max-w-[23.75rem] w-[18rem] sm:w-[23.75rem] ">${item.price}</h1>
                        {/* <button onClick={handleAddToCart} className=" mt-6 md:mt-0 py-[10px] px-[20px] ml-[10px] bg-[#000] text-[#fff] font-[600] text-[0.9rem] leading-[16px]"> Add to Cart</button> */}
                    </Link>
                ))}
            </div>
        </>
    )
}