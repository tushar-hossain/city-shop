import Container from "@/components/Container/Container";
import ProductsImages from "@/components/Products/ProductsImages/ProductsImages";
import GetData from "@/helpers";
import { Product } from "@/type";

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
      {/* products review */}
    </Container>
  );
}
