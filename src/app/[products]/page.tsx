import { client } from "@/lib/sanityClient";
import { Cart } from "./addtoCart";
import { Toaster } from "react-hot-toast";
import { IProduct } from "@/components/products";
import Image2 from "./image";

export default async function Products({
  params,
}: {
  params: { products: string };
}) {
  const params2 = params.products;

  const productData = async () => {
    const res =
      await client.fetch(`*[_type == "product" && ref == '${params2}']{
            title,
            price,
            image,
            image2,
            image3,
            image4,
            category,
            id,
            _id,
            ref
            
           }`);

    return res;
  };

  const data: IProduct[] = await productData();
  console.log(data);

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div className="mt-[6.8rem] mb-[5rem]">
        {data.map((item: IProduct) => (
          <div key={item.id} className="py-[4] xl:px-[8rem] md:px-[4rem] px-4">
            <div className="lg:flex-row flex-col flex justify-between ">
              <Image2 item={item} />
              <div className="flex flex-col flex-1 gap-10 mt-[4rem]">
                <div>
                  <h3 className="font-[400] text-[1.625rem] leading-[33px] tracking-[0.05em] text-[#212121]">
                    {item.title}
                  </h3>
                  <span className="font-[600] text-[1.3rem] opacity-[0.3]">
                    {item.category}
                  </span>
                </div>
                <div>
                  <p className="font-[700] text-[0.9rem] leading-[16px] tracking-[0.05em]">
                    SELECT SIZE
                  </p>
                  <ul className="flex mt-4 gap-4">
                    <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">
                      XS
                    </li>
                    <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">
                      S
                    </li>
                    <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">
                      M
                    </li>
                    <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">
                      L
                    </li>
                    <li className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] cursor-pointer text-[#666] text-[1rem]">
                      XL
                    </li>
                  </ul>
                </div>
                <Cart item={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
