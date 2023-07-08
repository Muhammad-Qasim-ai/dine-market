import Image  from "next/image"

export  default function Promo(){
    return (
        <>
            <div className="3xl:pl-[20rem] flex flex-col xl:mx-28 lg:mx-2 3md:mx-7 mx-3   my-16 ">
                <h1 className=" text-sm mb-2 text-center tracking-wider font-extrabold text-promo1 font-sora">PROMOTIONS</h1>
                <h2 className=" tracking-wider text-center text-3xl font-extrabold ">Our Promotion Events</h2>
                <div className=" mt-10 overflow-hidden lg:max-h-434 gap-8 flex lg:flex-row flex-col
                 w-full ">
                    <div className=" gap-4 flex flex-col lg:w-63.5 ">
                        <div className=" h-auto 3md:h-52 border border-blue w-full  3md:flex-row flex-col flex px-8 overflow-hidden justify-between bg-promobg1 items-center">
                            <div className="mt-4 3md:mt-0">
                            <h1 className="text-2xl font-bold items-center gap-2">GET UP TO <span className="text-4xl font-extrabold"> 60%</span></h1>
                            <h1 className="font-medium text-lg">For the Summer Season</h1>
                            </div>

                            <Image width={'260'} height={'300'} src="/promo1.jpg" alt="" className="h-52" />
                            
                        </div>
                        <div className=" h-52 w-full flex justify-center flex-col bg-promobg2 text-startcol items-center">
                            <h1 className="text-3xl mb-3 font-extrabold tracking-wide">GET 30% Off</h1>
                            <h2 className="text-sm">USE PROMO CODE</h2>
                            <div className="w-80 p-1 font-bold text-center rounded-md   bg-red-600 tracking-widiest mt-1">DINEWEEKENDSALE
                            </div>
                        </div>
                    </div>
                    <div className="flex 3md:flex-row flex-col items-center gap-4 justify-center lg-justify-normal">
                        <div className="flex flex-col  w-72 bg-promobg3">
                            <h1 className="pt-6 ml-6">Flex Sweatshirt</h1>
                            <div className="flex">
                            <div className="ml-6">$100.00
                                <div className=" w-16 -mt-0.85 border-opacity-70 border-black border"></div>   
                                                        
                            </div>
                            <p className="ml-2 font-bold">$256.00</p>
                            </div>

                            <Image width={'280'} height={'340'} src="/promo2.jpg" alt="" />
                        </div>
                        <div className="flex flex-col  w-72 bg-promobg1 ">
                        <h1 className="pt-6 ml-6">Flex Push Button Bomber</h1>
                            <div className="flex">
                            <div className="ml-6">$100.00
                                <div className=" w-16 -mt-0.85 border-opacity-70 border-black border"></div> 
                                                          
                            </div>
                            <p className="ml-2 font-bold">$256.00</p>
                            </div>

                            <Image width={'280'} height={'340'} src="/promo3.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}