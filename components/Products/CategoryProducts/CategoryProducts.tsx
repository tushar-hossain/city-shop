import { Category, Product } from "@/type";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Container from "../../Container/Container";
import Title from "../../Title/Title";
import ProductsCard from "../ProductsCard/ProductsCard";

interface Props {
  groups: { category: Category; products: Product[] }[];
}

export default function CategoryProducts({ groups }: Props) {
  return (
    <Container className="py-10 flex flex-col gap-12">
      {groups?.map(({ category, products }) => (
        <section key={category.slug}>
          <div className="flex items-center justify-between border-b border-brand-borderColor pb-3 mb-5">
            <Title>{category.name}</Title>
            <Link
              href={`/products?category=${category.slug}`}
              className="text-sm font-medium text-brand-skyColor hover:text-brand-themeColor flex items-center gap-1 duration-200"
            >
              View All <FaArrowRight className="text-xs" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </Container>
  );
}
