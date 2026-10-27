import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";

export default function Cancel() {
  return (
    <Container className="py-10">
          <Title>Your Payment Was Cancelled</Title>
          <p>Your payment was cancelled, and you haven’t been charged. You can return to your cart and try again whenever you’re ready.</p>
          <div className="mt-5 flex items-center gap-x-5">
              <Button href="/" className="rounded-md">Continue Shopping</Button>
              <Button href="/cart" className="rounded-md">Continue Shopping</Button>
          </div>
    </Container>
  )
}
