import { LuShoppingCart } from 'react-icons/lu'

export default function Hero() {
    return (
        <>
            <div className=" tracking-wider 3xl:pl-[20rem] xl:mx-32 2md:mx-auto mx-7  2md:ml-8 my-16 flex justify-between gap-16 relative pt-14 pb-6 xl:overflow-visible overflow-hidden  k">
                <div className='flex flex-col justify-between 2md:min-w-544 max-w-600'>
                    <div className='flex flex-col gap-10'>

                    <div className="flex justify-center items-center w-32 h-10 rounded-md text-blue-700 font-semibold bg-salecolor">Sale 70%</div>
                    <h1 className=" text-5xl 2md:text-6xl font-bold">An Industrial Take on Streetwear</h1>
                    <p className='w-8/12 text-base'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                    <button className="w-64 2md:w-4/12 p-4 text-base font-semibold bg-startbg flex items-center justify-center gap-2 text-startcol">
                    <LuShoppingCart className='text-2xl' />
                        Start Shopping</button>
                    </div>
                    <div className='flex flex-wrap gap-4 mt-14 mb-20 '>
                        <img src="/bazaar.jpg" alt="" />
                        <img src="/bustle.jpg" alt="" />
                        <img src="/versace.jpg" alt="" />
                        <img src="/instyle.jpg" alt="" />
                    </div>
                </div>
                <div className="hidden lg:flex lg:flex-1 ml-0 xl:ml-12">
                    <div className=" w-600 h-600  rounded-full -mt-8   justify-center items-center bg-picbg ">
                        <img src="main1.jpg" alt="" className='absolute  h-650   top-5-5 ' />
                
                    </div>
                </div>
            </div>
        </>
    )
}