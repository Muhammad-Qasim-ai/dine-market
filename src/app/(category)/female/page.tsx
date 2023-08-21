// 'use client'

import Navbar from '../../../components/navbar'
import Footer from '../../../components/footer'
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from '../../../../sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

export const productData = async () => {
    const res = await client.fetch(`*[_type=='product' && classification._ref == '71bb77ff-95f7-4d32-a4c0-84439e5ff9c5']{
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

export default async function Female() {
    
    const data: IProduct[] = await productData();
    // console.log(data);




    return (
        <>
            {/* <Navbar /> */}
                <div className='  mx-auto 2xl:mx-[8rem] my-[8rem] sm:my-[4rem] grid sm:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,1fr] 2xl:grid-cols-[1fr,1fr,1fr,1fr] sm:justify-between justify-center items-center gap-[4rem]'>
                    {data.map((item: IProduct) => (
                    
                            <Link href={item.ref} key={item.id} className=' min-w-[12.5rem] md:min-w-[15.625rem] max-w-[12.5rem] md:max-w-[15.625rem]   text-[1.05rem] mx-auto font-[600] leading-[24px] text-[#212121] md:min-h-[full] min-h-[331.81px]'> 
                                <Image 
                        src={urlForImage(item.image).url()} 
                        alt="product" 
                        width={'380'} 
                        height={'380'} 
                        className="w-full h-full" />
                            <p className='text-[1.05rem] mt-[0.5rem] font-[600] leading-[24px] text-[#212121]'>{item.title}</p>
                            <p className='font-[600] text-[15px] leading-[15px] text-[#888] mt-[0.5rem]'>{item.category}</p>
                            <p className='text-[1.25rem] mt-4'>${item.price}.00</p>

                            </Link>
                        
                    ))}
                </div>



            
        </>
    )
}