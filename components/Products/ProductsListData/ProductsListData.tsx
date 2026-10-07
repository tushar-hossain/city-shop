import { Product } from "@/type";
import Container from "../../Container/Container";
import ProductsCard from "../ProductsCard/ProductsCard";

interface Props {
  products: Product[];
}

export default function ProductsListData({ products }: Props) {
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {products?.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </Container>
  );
}
