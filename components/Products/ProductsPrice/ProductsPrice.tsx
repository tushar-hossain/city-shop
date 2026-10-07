import { Product } from "@/type";
import PriceFormate from "../PriceFormate/PriceFormate";
interface Props {
  product: Product;
}
export default function ProductsPrice({ product }: Props) {
  const regularPrice = product?.price;
  const discountedPrice = product?.price + product?.discountPercentage / 100;

  return (
    <div className="flex items-center gap-2">
      <PriceFormate
        className="text-gray-500 line-through font-normal"
        amount={discountedPrice}
      />
      <PriceFormate
        className="font-semibold text-brand-skyColor"
        amount={regularPrice}
      />
    </div>
  );
}
