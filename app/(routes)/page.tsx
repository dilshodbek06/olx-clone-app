import Categories from "@/components/shared/categories";
import Footer from "@/components/shared/footer";
import NewProducts from "@/components/shared/new-products";
import SearchMenu from "@/components/shared/search-menu";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SearchMenu />
      <Categories />
      <NewProducts />
      <hr className="mt-6" />
      <Footer />
    </div>
  );
}
