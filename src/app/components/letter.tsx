export default function Letter() {
    return(
        <>
            <div className="py-[10rem] px-[3rem] sm:px-[8rem] flex flex-col justify-center items-center text-center relative z-[1]">
                <div className="absolute z-[-1] text-[#f2f3f7] leading-[151px] text-[4rem] sm:text-[6rem] 2md:text-[7.5rem]
                font-[800] 2md:tracking-widest">Newsletter</div>
                <h1 className="mb-4 font-[700] text-[2rem] leading-[40px] tracking-[0.03em] text-[#212121]">Subscribe Our Newsletter</h1>
                <p className="mb-8 font-[300] text-[1rem] leading[26px] text-[#212121]">Get the latest information and promo offers directly</p>
                 <div>
                    <input type="email" placeholder="Input email address" className="pb-[10px]  sm:pr-[120px] pt-[10px] pl-[20px] bg-[#fcfcfc] border border-gray-200" />
                    <button className=" mt-6 md:mt-0 py-[10px] px-[20px] ml-[10px] bg-[#000] text-[#fff] font-[600] text-[0.9rem] leading-[16px]"> Get Started</button>
                 </div>
            </div>
        </>
    )
}