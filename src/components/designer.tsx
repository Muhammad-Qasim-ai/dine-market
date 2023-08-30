export default function Designer() {
  return (
    <>
      <div className="3xl:pl-[13rem] xl:mx-28 lg:mx-8 3md:mx-8 mx-3   my-16 ">
        <div className="flex justify-end pb-[2rem] 2xl:px-[7rem]  gradientbg">
          <h1 className="  font-[1000] text-[2.75rem] tracking-[0.03em] text-[#212121]  w-full 2xl:w-[48%] leading-[55px]">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>

        <div className="flex 2lg:flex-row flex-col   bg-[#fbfcff]">
          <div className="grid items-center  relative grid-cols-[1fr,1fr] 2lg:max-w-[50.75rem] min-h-[21.875rem]">
            <div className="absolute opacity-[0.07] text-[#212121] font-[800] text-[4rem] sm:text-[6.875rem] 2lg:w-[36.028rem] leading-[110px] tracking-wider ">
              Different from others
            </div>
            <div className="2lg:w-[70%] z-10">
              <h1 className="font-[600] text-[1.125rem] leading-[20px] tracking-[0.03em] mb-4">
                Using Good Quality Materials
              </h1>
              <p className="font-[300] text-[1rem] leading-[22px] tracking-[0.05em]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className=" 2lg:w-[70%] z-10">
              <h1 className="font-[600] text-[1.125rem] leading-[20px] tracking-[0.03em] mb-4">
                Using Good Quality Materials
              </h1>
              <p className="font-[300] text-[1rem] leading-[22px] tracking-[0.05em]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="2lg:w-[70%] z-10">
              <h1 className="font-[600] text-[1.125rem] leading-[20px] tracking-[0.03em] mb-4">
                Using Good Quality Materials
              </h1>
              <p className="font-[300] text-[1rem] leading-[22px] tracking-[0.05em]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="2lg:w-[70%] z-10">
              <h1 className="font-[600] text-[1.125rem] leading-[20px] tracking-[0.03em] mb-4">
                Using Good Quality Materials
              </h1>
              <p className="font-[300] text-[1rem] leading-[22px] tracking-[0.05em]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between">
            <img
              src="/designer.jpg"
              alt=""
              className="min-h-[21.875rem] max-w-[17.774rem]"
            />
            <div className="flex flex-col  justify-center p-6 md:items-start items-center">
              <p className="max-w-[30.477rem] min-h-[6.5rem]">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <button className="w-[16rem] p-3 text-base font-semibold bg-startbg flex items-center justify-center gap-2 text-startcol tracking-wider">
                See All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
