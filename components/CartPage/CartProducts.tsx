"use client";
import { Product, StateType } from "@/type";
import Link from "next/link";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";

export default function CartProducts() {
  const { cart } = useSelector((state: StateType) => state?.cityShop);

  return (
    <>
      {cart?.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4x1">
            Shopping Cart
          </h1>
          <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
            <section className="lg:col-span-7">
              <div className="divide-y border-t divide-gray-200 border-b border-gray-200">
                {cart?.map((product: Product) => (
                  <CartProduct key={product.id} product={product} />
                ))}
              </div>
            </section>
            {/* card summary */}
            <div className="lg:col-span-5">
              <CartSummary cart={cart} />
            </div>
          </div>
        </>
      ) : (
        <div className=" bg-white h-96 my-10 flex flex-col gap-4 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <p className="text-base max-w-175 text-center text-gray-600 tracking-wide leading-6">
            Your cart is empty. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptate in ab blanditiis officiis deleniti, amet
            omnis esse quisquam voluptates, eveniet, illo magnam error odit modi
            cumque minima a fugit aut.
          </p>
          <Link
            className="bg-brand-skyColor/90 text-gray-100 px-8 py-4 rounded-md hover:bg-brand-skyColor duration-200 uppercase text-sm font-semibold tracking-wide"
            href="/"
          >
            <span> go to shopping</span>
          </Link>
        </div>
      )}
    </>
  );
}
