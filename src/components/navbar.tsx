"use client";

import React, { useEffect } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";

import { IProduct } from "./products";
import CartContainer from "@/app/cart/cartContainer";


export default function Navbar() {
  return (
    <>
      <CartContainer>
        {({ productData2 }: { productData2: IProduct[] }) => {
          return (
            <div className="hidden h-10 xl:mx-32 my-8 mx-8  lg:flex justify-between items-center ">
              <Link href="./">
                <img src="./logo.jpg" alt="logo" className="" />
              </Link>

              <ul className="flex gap-12">
                <Link href="/female">Female</Link>
                <Link href="/male">Male</Link>
                <Link href="/kids">Kids</Link>
                <Link href="/all">All Products</Link>
              </ul>
              <div className="border border-inputcolor w-3.5/12 flex px-2 p-1 rounded-md">
                <FiSearch className="mr-2" />
                <input
                  type="text"
                  placeholder="What you looking for?"
                  className=" text-xs"
                />
              </div>
              <a
                href={"/cart"}
                className="border  rounded-full w-12 p-3 bg-cartbg h-12 flex justify-center items-center font-bold"
              >
                <LuShoppingCart className={` text-3xl`} />
                <span className="text-xs absolute mb-4 text-center bg-red-500 rounded-full h-4 ml-4 w-3">
                  {productData2.length === 0 ? (
                    <span>0</span>
                  ) : (
                    <span>{productData2.length}</span>
                  )}
                </span>
              </a>
            </div>
          );
        }}
      </CartContainer>
      <MobileNav />
    </>
  );
}

function MobileNav() {
  const [navbar, setnavbar] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      <CartContainer>
        {({ productData2 }: { productData2: IProduct[] }) => {
          return (
            <div className="lg:hidden">
              <div className="flex m-10 justify-between items-center">
                <Link href="./">
                  <img src="./logo.jpg" alt="logo" className="" />
                </Link>
                <button className="" onClick={() => setnavbar(!navbar)}>
                  {navbar ? (
                    <VscChromeClose className="text-3xl" />
                  ) : (
                    <RiMenu3Line className="text-3xl" />
                  )}
                </button>
              </div>
              <div className=" m-16 -mt-5">
                {navbar && (
                  <ul className="text-xl flex flex-col justify-center items-center gap-3">
                    <a href="/female">Female</a>
                    <a href="/male">Male</a>
                    <a href="/kids">Kids</a>
                    <a href="/all">All Products</a>
                    <a
                      href={"/cart"}
                      className="border  rounded-full w-12 p-3 bg-cartbg h-12 flex justify-center items-center font-bold"
                    >
                      <LuShoppingCart className={` text-3xl`} />
                      <span className="text-xs absolute mb-4 text-center bg-red-500 rounded-full h-4 ml-4 w-3">
                        {productData2.length}
                      </span>
                    </a>
                  </ul>
                )}
              </div>
            </div>
          );
        }}
      </CartContainer>
    </>
  );
}
