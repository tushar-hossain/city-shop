import CartProducts from "@/components/CartPage/CartProducts";
import Container from "@/components/Container/Container";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function CartPage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <Container className="py-10">
      <CartProducts />
    </Container>
  );
}
