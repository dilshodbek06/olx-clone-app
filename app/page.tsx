import Categories from "@/components/shared/categories";
import Header from "@/components/shared/header";
import NewProducts from "@/components/shared/new-products";
import SearchMenu from "@/components/shared/search-menu";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <SearchMenu />
      <Categories />
      <NewProducts />
    </div>
  );
}
