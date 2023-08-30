import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr,1fr] px-[2rem] md:px-[4rem] md:py-[8rem]">
        <div className="flex flex-col justify-between w-[80%] md:gap-y-0 gap-y-10">
          <img src="/logo.jpg" alt="" className="w-[180px] h-[30px]" />
          <p className="font-[400] text-[1rem] leading-[22px] text-[#666]">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="gap-[1rem] flex ">
            <div className="px-[10px] py-[12px] bg-[#f1f1f1] rounded-[10px] cursor-pointer">
              <AiOutlineTwitter />
            </div>
            <div className="px-[10px] py-[12px] bg-[#f1f1f1] rounded-[10px] cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="px-[10px] py-[12px] bg-[#f1f1f1] rounded-[10px] cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="md:my-0 my-10">
          <h3 className="font-[700] text-[1.2rem] leading-[19px] tracking-[0.02em] text-[#666]">
            Company
          </h3>
          <ul className="font-[400] text-base leading-[22px] text-[#666]   ">
            <li className="mt-[25px]">About</li>
            <li className="mt-[25px]">Terms of Use</li>
            <li className="mt-[25px]">Privacy Policy</li>
            <li className="mt-[25px]">How it Works</li>
            <li className="mt-[25px]">Contact Us</li>
          </ul>
        </div>
        <div className="md:my-0 my-10">
          <h3 className="font-[700] text-[1.2rem] leading-[19px] tracking-[0.02em] text-[#666]">
            Support
          </h3>
          <ul className="font-[400] text-base leading-[22px] text-[#666]   ">
            <li className="mt-[25px]">Support Carrier</li>
            <li className="mt-[25px]">24h service</li>
            <li className="mt-[25px]">Quick Chat</li>
          </ul>
        </div>
        <div className="md:my-0 my-10">
          <h3 className="font-[700] text-[1.2rem] leading-[19px] tracking-[0.02em] text-[#666]">
            Contact
          </h3>
          <ul className="font-[400] text-base leading-[22px] text-[#666]   ">
            <li className="mt-[25px]">Support</li>
            <li className="mt-[25px]">Whatsapp 24h</li>
          </ul>
        </div>
      </div>
    </>
  );
}
