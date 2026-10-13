import { Product } from "@/type";
import Image from "next/image";
import Link from "next/link";
import PriceFormate from "../Products/PriceFormate/PriceFormate";
import AddToCartButton from "../Products/AddToCartButton/AddToCartButton";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/CityShopSlice";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";


export default function CartProduct({ product }: { product: Product }) {
  const dispatch = useDispatch()

  const handleRemoveProduct = () => {
    dispatch(removeFromCart(product?.id))
    toast.success(`${product?.title.substring(0, 80)} delete successfully!`)
  }

  return (
    <div className="flex py-6 sm:py-10">
      <Link
        href={{
          pathname: `/products/${product?.id}`,
          query: { id: product?.id },
        }}
        className="h-24 w-24 sm:h-48 sm:w-48 border border-skyColor/30 hover:border-skyColor overflow-hidden flex items-center justify-center rounded-md"
      >
        <Image
          src={product?.images[0]}
          alt="productImage"
          width={300}
          loading="eager"
          height={300}
          className="h-full w-full p-2 rounded-md object-contain bg-[#f7f7f7] hover:scale-110 duration-200"
        />
      </Link>
      {/* details */}
      <div className="ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:pr-0">
          <div className="flex flex-col gap-1 col-span-5">
            <h2 className="text-base font-semibold w-full">{product?.title.substring(0, 80)}</h2>
            <p className="text-xs">Brand: <span className="font-medium">{product?.brand}</span></p>
            <p className="text-xs">Category: <span className="font-medium">{product?.category}</span></p>
            <div className="flex items-center gap-6 mt-2">
              <PriceFormate amount={product.price * product.quantity!} />
              <AddToCartButton product={product} />
            </div>
            <div className="mt-4 sm:pr-9 sm:mt-0">
              <div className="absolute right-0 top-0">
                <button onClick={handleRemoveProduct} className="p-2 text-gray-700 bg-gray-100 cursor-pointer hover:bg-gray-200 hover:text-red-700 rounded-md"><IoClose /></button>
              </div>
            </div>
          </div>
          <div>
            {product?.availabilityStatus && (
              <p className="flex space-x-2 text-sm text-gray-500"><FaCheck className="text-lg text-green-500" /> <span>IN Stock</span> </p>
            )}
            <p className="">You are saving {<PriceFormate amount={product?.price * (product?.discountPercentage/100) * product.quantity!} className="text-green-500" />} upon purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
