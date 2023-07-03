'use client'

import React from 'react'
import { LuShoppingCart } from 'react-icons/lu'
import { useState } from "react";
import { FiSearch } from 'react-icons/fi'
import { RiMenu3Line } from 'react-icons/ri'
import { VscChromeClose }  from 'react-icons/vsc'
import { HiMenu } from "react-icons/hi";
import { AiOutlineArrowDown, AiOutlineClose } from "react-icons/ai";
import { RxOpenInNewWindow} from "react-icons/rx"
import Link from 'next/link';

export default function Navbar() {
    return(
        <>
        <div className="hidden h-10 xl:mx-32 my-8 mx-8  lg:flex justify-between items-center">
            <Link href="./"><img src="./logo.jpg" alt="logo" className="" /></Link>
            
            
                <ul className="flex gap-12">
                <Link href='/female'>Female</Link>
                   <Link href='/male'>Male</Link>
                   <Link href='/kids'>Kids</Link>
                   <Link href='/all'>All Products</Link>
                </ul>
            <div className="border border-inputcolor w-3.5/12 flex px-2 p-1 rounded-md">
                <FiSearch className='mr-2' />
                <input type="text" placeholder="What you looking for?" className=" text-xs" />
            </div>
            <button className="border  rounded-full w-12 p-3 bg-cartbg h-12 flex justify-center items-center font-bold">
                <LuShoppingCart className={` text-3xl`} />
            <span className='text-xs absolute mb-4 text-center bg-red-500 rounded-full h-4 ml-4 w-3'>0</span>
            </button>
        </div>
        <MobileNav />
        </>
    )
}

function MobileNav(){
    const [navbar, setnavbar] = useState(false)

    return (
        <>
        <div className='lg:hidden'>
            <div className='flex m-10 justify-between items-center'>
            <img src="./logo.jpg" alt="logo" className="" />
            <button className='' onClick={() => setnavbar(!navbar)}>
                {navbar ? (
                    <VscChromeClose className='text-3xl' />
                    ) : (
                    <RiMenu3Line className='text-3xl' />
                )}
                
            </button>

                
            </div>
            <div className=' m-16 -mt-5'>
                {navbar && (
                   <ul className='text-xl flex flex-col justify-center items-center gap-3'>
                   <a href='/female'>Female</a>
                   <a href='/male'>Male</a>
                   <a href='/kids'>Kids</a>
                   <a href='/all'>All Products</a>
                   <button className="border  rounded-full w-12 p-3 bg-cartbg h-12 flex justify-center items-center font-bold">
                <LuShoppingCart className={` text-3xl`} />
            <span className='text-xs absolute mb-4 text-center bg-red-500 rounded-full h-4 ml-4 w-3'>0</span>
            </button>
               </ul>     
               
                )}
                
            </div>
        </div>

        </>
    )
}