"use client";
import { twMerge } from "tailwind-merge";

export default function AddToCartButton() {
  return (
    <div className="px-4">
      <button
        className={twMerge(
          "w-full cursor-pointer bg-transparent border border-brand-skyColor text-black rounded-full py-1.5 hover:bg-brand-skyColor hover:text-white duration-300 my-2",
        )}
      >
        Add to Cart
      </button>
    </div>
  );
}
