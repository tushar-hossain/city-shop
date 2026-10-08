"use client";
import { Product } from "@/type";
import { twMerge } from "tailwind-merge";

export default function AddToCartButton({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <div className="px-4">
      <button
        className={twMerge(
          "w-full cursor-pointer bg-transparent border border-brand-skyColor text-black rounded-full py-1.5 hover:bg-brand-skyColor hover:text-white duration-300 my-2",
          className,
        )}
      >
        Add to Cart
      </button>
    </div>
  );
}
