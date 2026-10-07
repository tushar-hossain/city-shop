import { Product } from "@/type";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";
import ProductsPrice from "../ProductsPrice/ProductsPrice";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

interface Props {
  product: Product;
}

export default function ProductsCard({ product }: Props) {
  return (
    <div className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-300 rounded-md group overflow-hidden relative">
      {/* image */}
      <Link href={"/products"}>
        <Image
          className="w-full h-64 object-contain hover:scale-110 duration-200"
          src={product?.images[0]}
          alt="product image"
          width={500}
          height={500}
        />
        <p className="absolute top-2 right-2 bg-red-500 text-white py-1 px-2 text-xs rounded-lg">
          {product?.discountPercentage}$
        </p>
      </Link>
      {/* sidebar */}
      <Sidebar />
      {/* details */}
      <div className="border-t border-t-brand-borderColor py-2 px-4 flex justify-between h-25">
        <div>
          <p className="text-sm font-semibold text-brand-lightText capitalize">
            {product?.category}
          </p>
          <h2 className="font-semibold text-base line-clamp-2">
            {product?.title}
          </h2>
          <ProductsPrice product={product} />
        </div>
      </div>
      {/* card button */}
      <AddToCartButton />
    </div>
  );
}
