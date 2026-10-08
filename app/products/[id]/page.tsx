import Container from "@/components/Container/Container";
import AddToCartButton from "@/components/Products/AddToCartButton/AddToCartButton";
import PriceFormate from "@/components/Products/PriceFormate/PriceFormate";
import ProductsImages from "@/components/Products/ProductsImages/ProductsImages";
import ProductsPrice from "@/components/Products/ProductsPrice/ProductsPrice";
import GetData from "@/helpers";
import { paymentImage } from "@/public/assets/Image";
import { Product } from "@/type";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { MdStar } from "react-icons/md";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductsDetails({ params }: Props) {
  const { id } = await params;
  const singleProducts: Product = await GetData(
    `https://dummyjson.com/products/${id}`,
  );

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* products image */}
      <ProductsImages singleProducts={singleProducts?.images} />
      {/* products details */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-3xl">{singleProducts?.title}</h2>
        <div className="flex items-center justify-between gap-5">
          <ProductsPrice product={singleProducts} />
          <div className="flex items-center gap-1">
            <div className="text-base text-brand-lightText flex items-center">
              {Array?.from({ length: 5 })?.map((_, index) => {
                const filled = index + 1 <= Math.floor(singleProducts?.rating);
                const halfFilled =
                  index + 1 > Math.floor(singleProducts?.rating) &&
                  index < Math.ceil(singleProducts?.rating);
                return (
                  <MdStar
                    key={index}
                    className={`${filled ? "text-[#fa8900]" : halfFilled ? "text-[#f7ca00]" : "text-brand-lightText"}`}
                  />
                );
              })}
              <p>{`(${singleProducts?.rating}) reviews`}</p>
            </div>
          </div>
        </div>
        <p className="flex items-center">
          <FaRegEye className="mr-1" />{" "}
          <span className=" font-semibold mr-1">250+</span>peoples are viewing
          this right now
        </p>
        <p>
          You are saving{" "}
          {<PriceFormate amount={singleProducts?.discountPercentage / 100} />}{" "}
          upon purchase
        </p>
        <div>
          <p className="text-sm tracking-wide">{singleProducts?.description}</p>
          <p className="text-base font-bold mt-2">
            {singleProducts?.warrantyInformation}
          </p>
        </div>
        <p>
          Brand: <span className="font-bold">{singleProducts?.brand}</span>
        </p>
        <p>
          Category:{" "}
          <span className="font-bold capitalize">
            {singleProducts?.category}
          </span>
        </p>
        <p>
          Tags:{" "}
          <span className="font-bold capitalize">
            {singleProducts?.tags?.map((tag, index) => (
              <span key={index}>
                {tag}
                {index < singleProducts?.tags?.length - 1 && ", "}
              </span>
            ))}
          </span>
        </p>
        <AddToCartButton
          product={singleProducts}
          className="rounded-md uppercase font-bold"
        />
        <div className="bg-[#f7f2f2] p-4 flex flex-col items-center rounded-md">
          <Image
            src={paymentImage}
            alt="payment image"
            className="object-cover"
            width={250}
            height={250}
          />
          <p className="font-bold mt-1">Guaranteed safe & secure checkout</p>
        </div>
      </div>
      {/* products review */}
      <div className="p-10 bg-[#f7f2f2] md:col-span-2 flex items-center gap-10">
        {singleProducts?.reviews?.map((review) => (
          <div
            className="bg-white/80 p-5 border border-brand-amazonOrangeDark/50 hover:bg-white duration-200 flex rounded-md hover:border-brand-amazonOrangeDark flex-col gap-1"
            key={review?.reviewerName}
          >
            <p className="text-base font-semibold">{review?.comment}</p>
            <div className="text-xs">
              <p className="font-semibold">{review?.reviewerName}</p>
              <p>{review?.reviewerEmail}</p>
            </div>
            <div className="flex items-center">
              {Array?.from({ length: 5 })?.map((_, index) => (
                <MdStar
                  key={index}
                  className={`${index < review?.rating ? "text-yellow-500" : "text-brand-lightText"}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
