import Cookies from "js-cookie";
import { client } from "../../../sanity/lib/client";


interface IProduct {
  title: string;
  category: string;
  price: number;
  // image: IImage,
  ref: string;
  id: number;
  _id: string;
}
interface IData {
  id: number;
  user_id: string;
  product_id: string;
  quantity: number;
}

// let productData2: IProduct[] = []
const handleCart = async () => {
  const userId = Cookies.get("user_id");

  const res = await fetch(
    "https://dine-market-qasim-qasimrafiq2019-gmailcom.vercel.app/api/cart",
    {
      method: "GET",
    }
  );
  const result = await res.json();
  const filteredOrders = result.res.filter(
    (order: any) => order.user_id === userId
  );
  console.log(filteredOrders);

  const cartItems = filteredOrders.map((item: IData) => ({
    product_id: item.product_id,
    quantity: item.quantity,
  }));
  return cartItems;
};
export const result: Promise<any> = handleCart();

export const productData = async (product_id: string[]) => {
  const productIds = JSON.stringify(product_id);
  let query = `*[_type=='product' && _id in ${productIds}] {
            title,
            price,
            image,
            category,
            id,
            _id,
            ref
            
           }`;
  const res = await client.fetch(query);

  return res;
};

export const handleDelete = async (item: any) => {
  const userId = Cookies.get("user_id");

  const res = await fetch("/api/cart", {
    method: "DELETE",
    body: JSON.stringify({
      product_id: item,
      user_id: userId,
    }),
  });
};
