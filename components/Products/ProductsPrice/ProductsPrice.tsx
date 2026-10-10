"use client";
import { Product, StateType } from "@/type";
import PriceFormate from "../PriceFormate/PriceFormate";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
interface Props {
  product: Product;
}
export default function ProductsPrice({ product }: Props) {
  const regularPrice = product?.price;
  const discountedPrice = product?.price + product?.discountPercentage / 100;
  const { cart } = useSelector((state: StateType) => state?.cityShop);
  const [isExistingProduct, setIsExistingProduct] = useState<Product | null>(
    null,
  );

  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setIsExistingProduct(availableProduct);
    }
  }, [cart, product]);

  return (
    <div className="flex items-center gap-2">
      <PriceFormate
        className="text-gray-500 line-through font-normal"
        amount={
          isExistingProduct
            ? discountedPrice * isExistingProduct.quantity!
            : discountedPrice
        }
      />
      <PriceFormate
        className="font-semibold text-brand-skyColor"
        amount={
          isExistingProduct
            ? regularPrice * isExistingProduct.quantity!
            : regularPrice
        }
      />
    </div>
  );
}
