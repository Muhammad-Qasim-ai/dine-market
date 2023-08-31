"use client";

import { useState } from "react";
import { urlForImage } from "../../../sanity/lib/image";

export default function Image2({ item }: { item: any }) {
  const [data, setData] = useState(item.image);

  return (
    <>
      <div className="flex flex-2 gap-8">
        <div className="flex flex-col gap-4">
          <img
            className="h-[60px] min-w-[60px] md:min-w-[100px] md:h-[100px] cursor-pointer"
            src={urlForImage(item.image).url()}
            alt=""
            onClick={() => setData(item.image)}
          />
          <img
            className={`h-[60px] min-w-[60px] md:min-w-[100px] md:h-[100px] cursor-pointer ${ 
              urlForImage(item.image).url() === urlForImage(item.image2).url()
                ? "opacity-0"
                : "opacity-100"
            }`}
            src={urlForImage(item.image2).url()}
            alt=""
            onClick={() => setData(item.image2)}
          />
          <img
            className={`h-[60px] min-w-[60px] md:min-w-[100px] md:h-[100px] cursor-pointer ${
              urlForImage(item.image).url() === urlForImage(item.image3).url()
                ? "opacity-0"
                : "opacity-100"
            }`}
            src={urlForImage(item.image3).url()}
            alt=""
            onClick={() => setData(item.image3)}
          />
          <img
            className={`h-[60px] min-w-[60px] md:min-w-[100px] md:h-[100px] cursor-pointer ${
              urlForImage(item.image).url() === urlForImage(item.image4).url()
                ? "opacity-0"
                : "opacity-100"
            }`}
            src={urlForImage(item.image4).url()}
            alt=""
            onClick={() => setData(item.image4)}
          />
        </div>
        <div className="min-w-[65%] xl:w-[80%] h-full">
          <img className="w-full h-full" src={urlForImage(data).url()} alt="" />
        </div>
      </div>
    </>
  );
}
