"use client";
import { addToCart, addToFavorite, resetFavorite } from "@/redux/CityShopSlice";
import { Product, StateType } from "@/type";
import Link from "next/link";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlineShoppingBag, MdRefresh } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ProductsCard from "../../Products/ProductsCard/ProductsCard";

export default function FavoriteProducts() {
  const { favorite, cart } = useSelector((state: StateType) => state?.cityShop);
  const dispatch = useDispatch();

  const notInCart = favorite?.filter(
    (product) => !cart?.some((item) => item?.id === product?.id),
  );

  const handleAddAllToCart = () => {
    notInCart?.forEach((product) => dispatch(addToCart(product)));
    toast.success(`${notInCart?.length} products added to cart!`);
  };

  const handleClearAll = () => {
    dispatch(resetFavorite());
    toast.success("Wishlist cleared!");
  };

  const handleRemove = (product: Product) => {
    dispatch(addToFavorite(product));
    toast.success(`${product?.title.substring(0, 20)}... removed from wishlist`);
  };

  if (!favorite?.length) {
    return (
      <div className="bg-white rounded-lg shadow-md py-16 px-6 flex flex-col items-center text-center gap-4">
        <span className="w-24 h-24 rounded-full bg-brand-skyColor/10 text-brand-skyColor text-5xl flex items-center justify-center">
          <MdFavoriteBorder />
        </span>
        <h1 className="text-2xl md:text-3xl font-bold">Your wishlist is empty</h1>
        <p className="max-w-md text-brand-lightText">
          Tap the heart on any product to save it here, so you can find it
          again later.
        </p>
        <Link
          href="/products"
          className="mt-2 bg-brand-skyColor/90 text-white px-8 py-3 rounded-md hover:bg-brand-skyColor duration-200 text-sm font-semibold uppercase tracking-wide"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-5 mb-6 border-b border-brand-borderColor">
        <div>
          <div className="text-xs flex items-center gap-2 mb-2">
            <Link href="/" className="text-brand-lightText hover:text-brand-themeColor">
              Home
            </Link>
            <span className="text-brand-lightText">/</span>
            <span className="font-medium">Wishlist</span>
          </div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            My Wishlist
            <span className="text-xs font-semibold bg-brand-skyColor text-white px-2.5 py-1 rounded-full">
              {favorite.length} {favorite.length === 1 ? "item" : "items"}
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAddAllToCart}
            disabled={!notInCart?.length}
            className="flex items-center gap-2 text-sm font-medium bg-brand-skyColor/90 text-white px-4 py-2 rounded-md hover:bg-brand-skyColor duration-200 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <MdOutlineShoppingBag className="text-base" /> Add All to Cart
          </button>
          <button
            onClick={handleClearAll}
            className="flex items-center gap-1 text-sm font-medium text-red-500 border border-red-200 px-4 py-2 rounded-md hover:bg-red-50 duration-200 cursor-pointer"
          >
            <MdRefresh className="text-base" /> Clear All
          </button>
        </div>
      </div>

      {/* products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {favorite.map((product) => (
          <div key={product.id} className="relative">
            <ProductsCard product={product} />
            <button
              onClick={() => handleRemove(product)}
              aria-label="Remove from wishlist"
              title="Remove from wishlist"
              className="absolute top-2 left-2 z-10 w-8 h-8 rounded-full bg-white border border-brand-borderColor shadow text-gray-600 flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 duration-200 cursor-pointer"
            >
              <IoClose />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
