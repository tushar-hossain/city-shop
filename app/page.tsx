import Banner from "@/components/Banner/Banner";
import CategoryProducts from "@/components/Products/CategoryProducts/CategoryProducts";
import { getProductsByCategory } from "@/helpers";

export default async function Home() {
  const groups = await getProductsByCategory();

  return (
    <main>
      <Banner />
      <CategoryProducts groups={groups} />
    </main>
  );
}
