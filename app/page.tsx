import Banner from "@/components/Banner/Banner";
import ProductsListData from "@/components/Products/ProductsListData/ProductsListData";
import GetData from "@/helpers";

export default async function Home() {
  const { products } = await GetData("https://dummyjson.com/products");

  return (
    <main>
      <Banner />
      <ProductsListData products={products} />
    </main>
  );
}
