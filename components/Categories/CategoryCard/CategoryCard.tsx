import { CategoryWithMeta } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  category: CategoryWithMeta;
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/products?category=${category?.slug}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 duration-300 flex flex-col"
    >
      {/* image */}
      <div className="relative h-36 sm:h-40 bg-brand-lightBg overflow-hidden">
        {category?.image && (
          <Image
            className="w-full h-full object-cover group-hover:scale-110 duration-300"
            src={category?.image}
            alt={category?.name}
            width={300}
            height={300}
          />
        )}
        <span className="absolute top-3 left-3 bg-brand-skyColor text-white text-xs font-semibold py-1 px-2.5 rounded-full">
          {category?.count} items
        </span>
      </div>
      {/* details */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-base">{category?.name}</h3>
        <p className="text-sm text-brand-lightText line-clamp-2">
          Explore our {category?.name?.toLowerCase()} collection
        </p>
        <div className="mt-auto pt-3 flex items-center justify-between text-xs text-brand-lightText">
          <span>View Products</span>
          <span className="w-7 h-7 rounded-full bg-brand-skyColor/10 text-brand-skyColor flex items-center justify-center group-hover:bg-brand-skyColor group-hover:text-white duration-200">
            <FaArrowRight />
          </span>
        </div>
      </div>
    </Link>
  );
}
