// 'use client'

import { client } from "@/lib/sanityClient"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { LuShoppingCart } from "react-icons/lu"






export default async function Products({params}:{params: {products: string} }) {

    const params2 = params.products
    // console.log(params2)
    
    
    
    
    const productData = async () => {
        const res = await client.fetch(`*[_type == "product" && ref == '${params2}']{
            title,
            price,
            image,
            category,
            id,
            _id,
            ref
            
           }`)
        // console.log(res);
        return res
        
    }
    interface IProduct {
        title: string,
        category: string,
        price: number,
        image: IImage,
        ref: string,
        id: number,
        _id: string
    
    }
    // console.log(productData());
    
    const data: IProduct[] = await productData()
    // console.log(data);
    
    
    return (
        <>
        <Navbar />
            <div className="mt-[6.8rem] mb-[5rem]">
                {data.map((item: IProduct) => (
                    <div key={item.id} className="py-[4] xl:px-[8rem] md:px-[4rem] px-4">
                        <div className="lg:flex-row flex-col flex justify-between ">
                            <div className="flex flex-2 gap-8">
                                <div className="flex flex-col gap-4">
                                    <img className="h-[60px] min-w-[60px] md:min-w-[100px] md:h-[100px] cursor-pointer" src={urlForImage(item.image).url()} alt="" />
                                </div>
                                <div className="min-w-[65%] xl:w-[80%] h-full">
                                    <img className="w-full h-full" src={urlForImage(item.image).url()}  alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 gap-10 mt-[4rem]">
                                <div>
                                    <h3 className="font-[400] text-[1.625rem] leading-[33px] tracking-[0.05em] text-[#212121]">{item.title}</h3>
                                    <span className="font-[600] text-[1.3rem] opacity-[0.3]">{item.category}</span>
                                </div>
                                <div>
                                    <p className="font-[700] text-[0.9rem] leading-[16px] tracking-[0.05em]">SELECT SIZE</p>
                                    <ul className="flex mt-4 gap-4">
                                        <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">XS</li>
                                        <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">S</li>
                                        <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">M</li>
                                        <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">L</li>
                                        <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">XL</li>
                                    </ul>
                                </div>
                                <div className="flex gap-8">
                                    <h4 className="">Quantity: </h4>
                                    <div className="flex items-center ">
                                        <AiOutlineMinus className="mr-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] " />
                                        <span className="">1</span>
                                        <AiOutlinePlus className="ml-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] border-2 border-black" />
                                    </div>

                                </div>
                                <div className="flex items-center gap-4">
                                <button className="w-[40%] p-3 text-base font-semibold bg-startbg flex items-center justify-center gap-2 text-startcol tracking-wider">
                                    <LuShoppingCart className='text-2xl' />
                                Add to Cart</button>
                        <p className="  font-[700] text-[1.5rem] leading-[30px] tracking-[0.1em]">${item.price}.00</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>

            <Footer />
        </>
    )
}

