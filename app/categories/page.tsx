import CategoryCard from "@/components/Categories/CategoryCard/CategoryCard";
import Container from "@/components/Container/Container";
import { getCategoriesWithMeta } from "@/helpers";
import Link from "next/link";

export default async function Categories() {
  const { categories, totalProducts, totalBrands } =
    await getCategoriesWithMeta();

  const stats = [
    { value: categories?.length, label: "Total Categories", color: "text-brand-themeColor" },
    { value: `${totalProducts}+`, label: "Products", color: "text-green-600" },
    { value: `${totalBrands}+`, label: "Brands", color: "text-purple-600" },
  ];

  return (
    <Container className="py-10">
      {/* heading */}
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Shop by Categories</h1>
        <p className="mt-3 text-brand-lightText">
          Discover our wide range of product categories. Find exactly what
          you&apos;re looking for with our carefully curated collections.
        </p>
        <div className="mt-4 text-xs flex items-center justify-center gap-2">
          <Link href="/" className="text-brand-lightText hover:text-brand-themeColor">
            Home
          </Link>
          <span className="text-brand-lightText">/</span>
          <span className="font-medium">Categories</span>
        </div>
      </div>

      {/* stats */}
      <div className="mt-8 bg-brand-lightBg rounded-lg py-6 flex items-center justify-center gap-8 md:gap-12">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <p className={`text-2xl md:text-3xl font-bold ${item.color}`}>
              {item.value}
            </p>
            <p className="text-xs md:text-sm text-brand-lightText">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* categories */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {categories?.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </Container>
  );
}
