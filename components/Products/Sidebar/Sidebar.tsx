import { FaShoppingCart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className=" absolute right-2 bottom-44 border flex flex-col text-2xl border-brand-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300">
      <button className="cursor-pointer p-2 hover:bg-brand-skyColor/20 hover:text-brand-skyColor duration-200">
        <FaShoppingCart />
      </button>
      <button className="cursor-pointer p-2 hover:bg-brand-skyColor/20 hover:text-brand-skyColor duration-200 border-y border-y-brand-borderColor">
        <LuEye />
      </button>
      <button className="cursor-pointer p-2 hover:bg-brand-skyColor/20 hover:text-brand-skyColor duration-200">
        <MdFavoriteBorder />
      </button>
    </div>
  );
}
