import { CategoryWithMeta, Product } from "@/type";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { MdRefresh } from "react-icons/md";
import Container from "../../Container/Container";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import ProductsCard from "../ProductsCard/ProductsCard";

interface Props {
  products: Product[];
  total: number;
  categories: CategoryWithMeta[];
  activeCategory?: string;
}

export default function ProductsWithFilter({
  products,
  total,
  categories,
  activeCategory,
}: Props) {
  const activeName =
    categories.find((category) => category.slug === activeCategory)?.name ??
    activeCategory;

  return (
    <Container className="py-6">
      {/* breadcrumb */}
      <div className="text-xs flex items-center gap-2 mb-5">
        <Link href="/" className="text-brand-lightText hover:text-brand-themeColor">
          Home
        </Link>
        <span className="text-brand-lightText">/</span>
        {activeCategory ? (
          <>
            <Link href="/products" className="text-brand-lightText hover:text-brand-themeColor">
              Products
            </Link>
            <span className="text-brand-lightText">/</span>
            <span className="font-medium">{activeName} Products</span>
          </>
        ) : (
          <span className="font-medium">Products</span>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-64 shrink-0">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
          />
        </div>

        <div className="flex-1 flex flex-col gap-5">
          {/* active filters */}
          {activeCategory && (
            <div className="border border-brand-borderColor rounded-md p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Active Filters</p>
                <Link
                  href="/products"
                  className="text-xs text-red-500 flex items-center gap-1 hover:underline"
                >
                  <MdRefresh /> Clear All
                </Link>
              </div>
              <Link
                href="/products"
                className="mt-3 inline-flex items-center gap-2 text-xs bg-brand-skyColor/10 border border-brand-skyColor/30 text-brand-themeColor py-1 px-3 rounded-full hover:bg-brand-skyColor/20 duration-200"
              >
                Category: {activeName}
                <IoClose />
              </Link>
            </div>
          )}

          {/* result count */}
          <div className="border border-brand-borderColor rounded-md px-4 py-3 text-sm text-brand-lightText">
            Showing {products?.length ?? 0} of {total} products
          </div>

          {/* products */}
          {products?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {products.map((product) => (
                <ProductsCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-brand-lightText">
              No products found in this category.
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
