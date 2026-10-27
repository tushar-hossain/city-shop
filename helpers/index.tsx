import { Category, CategoryWithMeta, Product } from "@/type";

export default async function GetData(endpoint: string) {
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
}

export async function getCategoriesWithMeta(): Promise<{
  categories: CategoryWithMeta[];
  totalProducts: number;
  totalBrands: number;
}> {
  const [categoryList, { products }]: [
    Category[],
    { products: Pick<Product, "category" | "thumbnail" | "brand">[] },
  ] = await Promise.all([
    GetData("https://dummyjson.com/products/categories"),
    GetData("https://dummyjson.com/products?limit=0&select=category,thumbnail,brand"),
  ]);

  const categories = categoryList?.map((category) => {
    const items = products?.filter((item) => item.category === category.slug);
    return {
      ...category,
      count: items?.length ?? 0,
      image: items?.[0]?.thumbnail ?? "",
    };
  });

  const totalBrands = new Set(
    products?.map((item) => item.brand).filter(Boolean),
  ).size;

  return { categories, totalProducts: products?.length ?? 0, totalBrands };
}
