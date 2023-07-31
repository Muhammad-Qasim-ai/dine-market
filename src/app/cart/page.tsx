"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { IProduct } from "@/components/products";
import { useState, useEffect } from "react";
import { productData, result } from "./cartProducts";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Cart() {
  const [productData2, setProductData2] = useState<IProduct[]>([]);
  let [quantity, setQuantity] = useState(1)
  const subTotal = productData2.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    result.then((filteredProductId: any) => {
        // console.log(filteredProductId);
        
      productData(filteredProductId).then((data: IProduct[]) => {
        // console.log(data);
        
        setProductData2(data);
        
          
      });
    });
  }, []);

  console.log(productData2);
  
  if(quantity < 1){
    setQuantity(1)
  }

  const handleIncQuantity = () => {
    setQuantity(quantity + 1)
  }
  const handleDecQuantity = () => {
    setQuantity(quantity - 1)
  }

  

  return (
    <>
      <div>
        

        <h2 className=" font-bold block text-[1.5em]  xl:mx-32 sm:mx-8 mx-4 lg:p-12 ">Shopping Cart</h2>
        <div className="mb-16 xl:mx-32 sm:mx-8 mx-4 lg:p-12  flex md:flex-row flex-col justify-between">
          
          <div className="flex flex-col justify-between gap-16  -red-600 md:w-[60%] w-full">
            

            
        {productData2.length === 0 ? (
          <p>Loading...</p>
        ) : (
          productData2.map((item: IProduct) => {
          

          return (
            
            <div key={item.id} className="sm:items-stretch items-center sm:flex-row flex-col flex gap-4  -black w-full "> 
              <Image
                src={urlForImage(item.image).url()}
                alt="product"
                width={"380"}
                height={"380"}
                className="sm:w-[15rem] w-[11rem]  max-w-[15rem] max-h-[14rem] rounded-[9px]   "
              />

              <div className="flex flex-col justify-between w-[80%]">
                <div className="flex justify-between">
                  <h3 className="font-[300] text-[1.3rem] leading-[25px] text-[#212121]">
                    {item.title}
                  </h3>
                  <button className=" bg-transparent">
                    <RiDeleteBinLine />
                  </button>
                </div>
                <p className="leading-[16px] text-[#666] text-[1rem] font-[600]">
                  {item.category}
                </p>
                <p className="font-[600] text-[1rem] leading-[22px] text-[#212121]">
                  Delivery Estimation
                </p>
                <p className="font-[600] text-[1rem] leading-[22px] text-[#ffc700]">
                  5 Working Days
                </p>
                <div className="flex justify-between">
                  <span className="font-[700] text-[1.1rem] leading-[20px] tracking-[0.1em] text-[#212121]">
                    ${item.price}
                  </span>
                  <div className="flex items-center ">
                    <AiOutlineMinus onClick={handleDecQuantity} className="mr-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] " />
                    <span className="">{quantity}</span>
                    <AiOutlinePlus onClick={handleIncQuantity} className="ml-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] -2 -black" />
                  </div>
                </div>
              </div>

              
            </div>
          )})
        )}

          </div>
        <div className="p-8 bg-[#fbfcff] flex flex-col flex-1 gap-8 max-w-[30rem]  min-h-[20rem] max-h-[20rem]">
                <h3 className="text-[1.17em] ">Order Summary</h3>
                <div className="flex space-between gap-16">
                  <p>Quantity</p>
                  <span>{productData2.length} Product</span>  
                </div>
                <div className="flex space-between gap-16">
                  <p>Sub Total</p>
                  {productData2.map((item: IProduct) => {
                    const totalProductPrice = item.price * quantity
            
          return (
            <span key={item.id}>{totalProductPrice}</span>
            )
          })}    
                </div>
                <div className="flex space-between gap-16">
                  <button className="w-full p-4 text-base font-semibold bg-startbg flex items-center justify-center gap-2 text-startcol">
                    Proccess to Checkout
                  </button>
                </div>
              </div>
              
        </div>
       
      </div>
    </>
  );
}
