import ProductsWithFilter from "@/components/Products/ProductsWithFilter/ProductsWithFilter";
import GetData, { getCategoriesWithMeta } from "@/helpers";

export default async function Product({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category } = await searchParams;
  const activeCategory =
    typeof category === "string" ? category.toLowerCase() : undefined;

  const [{ products, total }, { categories }] = await Promise.all([
    GetData(
      activeCategory
        ? `https://dummyjson.com/products/category/${encodeURIComponent(activeCategory)}`
        : "https://dummyjson.com/products",
    ),
    getCategoriesWithMeta(),
  ]);

  return (
    <ProductsWithFilter
      products={products}
      total={total ?? 0}
      categories={categories}
      activeCategory={activeCategory}
    />
  );
}
