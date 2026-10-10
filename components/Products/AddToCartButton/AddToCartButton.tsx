"use client";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/CityShopSlice";
import { Product, StateType } from "@/type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

export default function AddToCartButton({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { cart } = useSelector((state: StateType) => state?.cityShop);
  const dispatch = useDispatch();
  const [isExistingProduct, setIsExistingProduct] = useState<Product | null>(
    null,
  );

  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setIsExistingProduct(availableProduct);
    }
  }, [cart, product]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success(
        `${product?.title.substring(0, 10)}... Added Successfully!`,
      );
    }
  };

  return (
    <div className="px-4">
      {isExistingProduct ? (
        <div className="flex self-start items-center justify-around py-2 mb-2">
          <button
            onClick={() => {
              dispatch(
                decreaseQuantity(product?.id),
                toast.success("Quantity decrease successfuly!"),
              );
            }}
            disabled={isExistingProduct.quantity! <= 1}
            className="text-black p-2 border border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 bg-[#f7f7f7] disabled:hover:bg-[#f7f7f7]"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {isExistingProduct?.quantity}
          </p>
          <button
            onClick={() => {
              dispatch(
                increaseQuantity(product?.id),
                toast.success("Quantity increase successfuly!"),
              );
            }}
            className="text-black p-2 border border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 bg-[#f7f7f7] disabled:hover:bg-[#f7f7f7]"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className={twMerge(
            "w-full cursor-pointer bg-transparent border border-brand-skyColor text-black rounded-full py-1.5 hover:bg-brand-skyColor hover:text-white duration-300 my-2",
            className,
          )}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
