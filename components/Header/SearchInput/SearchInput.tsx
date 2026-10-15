"use client";
import GetData from "@/helpers";
import { Product } from "@/type";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const singleProducts = await GetData(`https://dummyjson.com/products`);
        setProducts(singleProducts?.products);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products?.filter((item: Product) => {
      return item?.title?.toLowerCase()?.includes(search?.toLowerCase());
    });
    setFilterProducts(filtered);
  }, [search, products]);

  useEffect(() => {
    const handelClickedOutSide = (e: MouseEvent) => {
      if (
        searchContainerRef &&
        // @ts-ignore
        !searchContainerRef.current.contains(e.target)
      ) {
        setIsInputFocused(false);
      }
    };
    document.addEventListener("mousedown", handelClickedOutSide);
    return () => {
      document.removeEventListener("mousedown", handelClickedOutSide);
    };
  }, []);

  return (
    <div
      ref={searchContainerRef}
      className="hidden md:inline-flex flex-1 h-10 relative"
    >
      <input
        className="w-full h-full border-2 border-brand-themeColor px-4 outline-none"
        type="text"
        placeholder="Search products here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsInputFocused(true)}
      />
      {search && (
        <RiCloseLine
          onClick={() => setSearch("")}
          className="text-xl absolute top-2.5 right-12 hover:text-red-500 cursor-pointer duration-200"
        />
      )}
      <span className="w-10 h-10 bg-brand-themeColor/80 absolute right-0 top-0 flex items-center justify-center text-white cursor-pointer border border-brand-themeColor hover:bg-brand-themeColor duration-200">
        <RiSearchLine />
      </span>
      {isInputFocused && search && (
        <div className=" absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black">
          {filterProducts?.length > 0 ? (
            <div>
              {filterProducts?.map((item: Product) => (
                <Link
                  onClick={() => setSearch("")}
                  className="flex items-center gap-x-2 text-base font-medium hover:bg-brand-lightText/30 px-3 py-1.5"
                  key={item.id}
                  href={{
                    pathname: `/products/${item?.id}`,
                    query: { id: item?.id },
                  }}
                >
                  {" "}
                  <CiSearch className="text-lg" /> {item?.title}
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-10 px-5">
              <p className="text-base">
                Nothing matched with{" "}
                <span className="font-semibold underline underline-offset-2 decoration-1">
                  {search}
                </span>
                {"-"}
                please try again.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
