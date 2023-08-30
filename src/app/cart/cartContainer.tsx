import { useState, useEffect } from "react";
import { IProduct } from "@/components/products";
import { handleDelete, productData, result } from "./cartProducts";
import toast from "react-hot-toast";
import getStripePromise from "@/lib/stripe";

export default function CartContainer({
  children,
  quan,
}: {
  children: any;
  quan?: number;
}) {
  const [productData2, setProductData2] = useState<IProduct[]>([]);
  const [cartQuan, setCartQuan] = useState(0);
  useEffect(() => {
    result.then((cartItems: any) => {
      const productIds = cartItems.map((item: any) => item.product_id);
      productData(productIds).then(async (data: IProduct[]) => {
        try {
          const productsWithQuantity = data.map((product) => {
            const cartItem = cartItems.find(
              (item: any) => item.product_id === product._id
            );
            return {
              ...product,
              quantity: cartItem.quantity,
            };
          });

          setProductData2(productsWithQuantity);
        } catch (error) {}
      });
    });
  }, []);

  console.log(productData2);

  const handleCheckout = async () => {
    const stripe = await getStripePromise();
    const response = await fetch("/api/stripeSession", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(productData2),
    });
    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  const handleIncQuantity = (productId: string) => {
    setProductData2((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecQuantity = (productId: string) => {
    setProductData2((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const calculateTotalProductPrice = (item: IProduct) => {
    return item.price * item.quantity;
  };

  const totalSubtotal = productData2.reduce(
    (acc, item) => acc + calculateTotalProductPrice(item),
    0
  );

  const handleDelete2 = async (productId: string) => {
    try {
      toast.promise(handleDelete(productId), {
        loading: "Deleting...",
        success: <b>Deleted Successfully!</b>,
        error: <b>Could not Delete.</b>,
      });
      setProductData2((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
    }
  };

  return children({
    productData2,
    setProductData2,
    handleDelete2,
    handleDecQuantity,
    handleIncQuantity,
    totalSubtotal,
    handleCheckout,
  });
}
