import Products from "@/components/Products/ProductsListData/ProductsListData";
import GetData from "@/helpers";

export default async function Product() {
  const { products } = await GetData("https://dummyjson.com/products");

  return <Products products={products} />;
}
