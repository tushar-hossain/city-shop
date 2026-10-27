import { useEffect, useState } from "react";
import PriceFormate from "../Products/PriceFormate/PriceFormate";
import Title from "../Title/Title";
import { Product } from "@/type";
import Button from "../Button/Button";
import { useSession } from "next-auth/react";

export default function CartSummary({ cart }: { cart: Product[] }) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    let amt = 0;
    let discount = 0;
    cart?.map((item) => {
      amt += item.price * item.quantity!;
      discount += ((item.price * item.quantity!) / 100) * item.quantity!;
    });
    setTotalAmount(amt);
    setDiscountAmount(discount);
  }, [cart]);

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart,
          email: session?.user?.email,
        }),
      });

      const checkoutSession = await response.json();

      if (!response.ok) {
        throw new Error(checkoutSession.error || "Checkout failed");
      }

      if (!checkoutSession.url) {
        throw new Error("Checkout URL not found");
      }

      window.location.href = checkoutSession.url;
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 mt-10 lg:mt-0">
      <Title>Cart Summary</Title>
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex items-center justify-between">
          <Title>Sub Total</Title>
          <PriceFormate amount={totalAmount} />
        </div>
        <div className="flex items-center justify-between">
          <Title>Discount</Title>
          <PriceFormate amount={discountAmount} />
        </div>
        <div className="flex items-center justify-between">
          <Title>Payable Amonut</Title>
          <PriceFormate
            amount={totalAmount - discountAmount}
            className="text-lg font-bold"
          />
        </div>
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </div>
  );
}
