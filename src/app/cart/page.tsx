"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { IProduct } from "@/components/products";
import { useState, useEffect } from "react";
// import { delete2 } from "./cartContainer";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import CartContainer from "./cartContainer";
import { useAppDispatch } from "@/store/store";
import { cartAction } from "@/store/features/cartSlice";

export default function Cart() {
  

  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setDataLoaded(true);
    }, 2000);
  }, []);

  return (
    <CartContainer>
      {({
        productData2,
        setProductData2,
        handleDelete2,
        handleDecQuantity,
        handleIncQuantity,
        totalSubtotal,
        handleCheckout,
      }: {
        productData2: IProduct[];
        setProductData2: React.Dispatch<React.SetStateAction<IProduct[]>>;
        handleDelete2: any;
        handleDecQuantity: any;
        handleIncQuantity: any;
        totalSubtotal: number;
        handleCheckout: any;
      }) => {
        return (
          <div>
            <Toaster position="top-center" reverseOrder={true} />

            <>
              <h2 className=" font-bold block text-[1.5em]  xl:mx-32 sm:mx-8 mx-4 lg:p-12 ">
                Shopping Cart
              </h2>
              <div className="mb-16 xl:mx-32 sm:mx-8 mx-4 lg:p-12  flex md:flex-row flex-col justify-between">
                <div className="flex flex-col justify-between gap-16  -red-600 md:w-[60%] w-full">
                  {dataLoaded ? (
                    <>
                      {productData2.length === 0 ? (
                        <div className="flex flex-col justify-center items-center">
                          <BiShoppingBag className="w-[9.375rem] h-[9.375rem]"/>
                          <h1 className="text-[2em] font-bold">Your shopping bag is empty</h1>
                        </div>
                      ) : (
                        productData2.map((item: IProduct) => {
                          return (
                            <div
                              key={item.id}
                              className="sm:items-stretch items-center sm:flex-row flex-col flex gap-4  -black w-full "
                            >
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
                                    <RiDeleteBinLine
                                      onClick={() => handleDelete2(item._id)}
                                    />
                                    {/* {isDeleting === true && <div>Loading...</div>} */}
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
                                    <AiOutlineMinus
                                      onClick={() =>
                                        handleDecQuantity(item._id)
                                      }
                                      className="mr-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] "
                                    />
                                    <span className="">{item.quantity}</span>
                                    <AiOutlinePlus
                                      onClick={() =>
                                        handleIncQuantity(item._id)
                                      }
                                      className="ml-[10px] cursor-pointer bg-[#f1f1f1] rounded-[50%] p-1 w-[30px] h-[30px] -2 -black"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </>
                  ) : (
                    <>
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
                    </>
                  )}
                </div>
                <div className="p-8 bg-[#fbfcff] flex flex-col flex-1 gap-8 max-w-[30rem]  min-h-[20rem] max-h-[20rem]">
                  <h3 className="text-[1.17em] ">Order Summary</h3>
                  <div className="flex space-between gap-16">
                    <p>Quantity</p>
                    <span>{productData2.length} Product</span>
                  </div>

                  {/* Display the total sum of all subtotals */}
                  <div className="flex space-between gap-16">
                    <p>Total Subtotal</p>
                    <span>${totalSubtotal}.00</span>
                  </div>
                  <div className="flex space-between gap-16">
                    <button
                      onClick={handleCheckout}
                      className="w-full p-4 text-base font-semibold bg-startbg flex items-center justify-center gap-2 text-startcol"
                    >
                      Proccess to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          </div>
        );
      }}
    </CartContainer>
  );
}
