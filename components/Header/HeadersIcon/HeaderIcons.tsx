import Link from "next/link";
import { MdFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";

export default function HeaderIcons() {
  return (
    <>
      <Link className="relative" href="/favorite">
        <MdFavoriteBorder className="text-2xl" />
        <span className="absolute -top-1 -right-1 text-[10px] font-medium text-white rounded-full flex items-center  w-4 h-4 bg-brand-themeColor justify-center">
          0
        </span>
      </Link>
      <Link className="relative" href="/cart">
        <MdOutlineShoppingBag className="text-2xl" />
        <span className="absolute -top-1 -right-1 text-[10px] font-medium text-white rounded-full flex items-center  w-4 h-4 bg-brand-themeColor justify-center">
          0
        </span>
      </Link>
    </>
  );
}
