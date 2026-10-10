"use client";
import { addToCart, addToFavorite } from "@/redux/CityShopSlice";
import { Product, StateType } from "@/type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar({ product }: { product: Product }) {
  const { cart, favorit } = useSelector((state: StateType) => state?.cityShop);
  const dispatch = useDispatch();
  const [isExistingProduct, setIsExistingProduct] = useState<Product | null>(
    null,
  );
  const [isExistingFavorite, setIsExistingFavorite] = useState<Product | null>(
    null,
  );
  console.log(favorit);
  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setIsExistingProduct(availableProduct);
    }
  }, [cart, product]);

  // Favorite product
  useEffect(() => {
    const availableFavoriteProduct = favorit?.find(
      (item) => item?.id === product?.id,
    );
    if (availableFavoriteProduct) {
      setIsExistingFavorite(availableFavoriteProduct);
    }
  }, [favorit, product, dispatch, isExistingFavorite]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success(
        `${product?.title.substring(0, 10)}... Added Successfully!`,
      );
    }
  };

  const handleAddToFavorite = () => {
    dispatch(addToFavorite(product));
    if (isExistingFavorite) {
      toast.success(`Remove from favaroite successfully!`);
    } else {
      toast.success(`Added favaroite successfully!`);
    }
  };

  return (
    <div className=" absolute right-2 bottom-44 border flex flex-col text-2xl border-brand-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300">
      <button
        onClick={handleAddToCart}
        className="cursor-pointer p-2 hover:bg-brand-skyColor/20 hover:text-brand-skyColor duration-200"
      >
        <FaShoppingCart />
      </button>
      <button
        onClick={() => {}}
        className="cursor-pointer p-2 hover:bg-brand-skyColor/20 hover:text-brand-skyColor duration-200 border-y border-y-brand-borderColor"
      >
        <LuEye />
      </button>
      <button
        onClick={handleAddToFavorite}
        className="cursor-pointer p-2 hover:bg-brand-skyColor/20 hover:text-brand-skyColor duration-200"
      >
        {isExistingFavorite ? (
          <MdFavorite className="text-brand-skyColor" />
        ) : (
          <MdFavoriteBorder />
        )}
      </button>
    </div>
  );
}
