"use client";
import Container from "@/components/Container/Container";
import { resetCart } from "@/redux/CityShopSlice";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get(`session_id`);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionId) {
      dispatch(resetCart());
      toast.success(`Payment received successfully!`);
    }
  }, [sessionId, dispatch]);

  if (!sessionId) {
    return redirect("/");
  }

  return (
    <Container className="py-10">
      <div className="min-h-100 flex flex-col items-center justify-center gap-3">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Your Payment accepted by city shop
        </h2>
        <p>You can view your orders or continue shopping with us.</p>
        <div className="flex items-center gap-x-5">
          <Link href={"/orders"}>
            <button className="bg-brand-themeColor/90 text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-brand-themeColor duration-300">
              View Orders
            </button>
          </Link>
          <Link href={"/"}>
            <button className="bg-brand-themeColor/90 text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-brand-themeColor duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
