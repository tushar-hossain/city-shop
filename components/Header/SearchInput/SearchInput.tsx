"use client";
import { useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  return (
    <div className="hidden md:inline-flex flex-1 h-10 relative">
      <input
        className="w-full h-full border-2 border-brand-themeColor px-4 outline-none"
        type="text"
        placeholder="Search products here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
    </div>
  );
}
