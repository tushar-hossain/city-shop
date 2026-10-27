import Container from "@/components/Container/Container";
import FavoriteProducts from "@/components/Favorite/FavoriteProducts/FavoriteProducts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites | City Shop",
};

export default function FavoritePage() {
  return (
    <Container className="py-10">
      <FavoriteProducts />
    </Container>
  );
}
