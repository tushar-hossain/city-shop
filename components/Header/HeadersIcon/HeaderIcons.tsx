"use client";
import { StateType } from "@/type";
import Link from "next/link";
import { MdFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";

export default function HeaderIcons() {
  const { cart, favorite } = useSelector((state: StateType) => state?.cityShop);

  return (
    <>
      <Link className="relative" href="/favorite">
        <MdFavoriteBorder className="text-2xl" />
        <span className="absolute -top-1 -right-1 text-[10px] font-medium text-white rounded-full flex items-center  w-4 h-4 bg-brand-themeColor justify-center">
          {favorite?.length > 0 ? favorite?.length : "0"}
        </span>
      </Link>
      <Link className="relative" href="/cart">
        <MdOutlineShoppingBag className="text-2xl" />
        <span className="absolute -top-1 -right-1 text-[10px] font-medium text-white rounded-full flex items-center  w-4 h-4 bg-brand-themeColor justify-center">
          {cart?.length > 0 ? cart?.length : "0"}
        </span>
      </Link>
    </>
  );
}
