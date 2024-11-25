import EmptyState from "@/components/shared/empty-state";
import ProductCard from "@/components/shared/product-card";
import { Ad } from "@prisma/client";

interface AdsDataProps {
  items: Ad[];
}

const AdsData = ({ items = [] }: AdsDataProps) => {
  return (
    <div className=" flex items-center mt-2">
      <div className="container px-1.5 sm:px-3 max-w-7xl mx-auto w-full py-10">
        <h1 className="text-white text-xl md:text-3xl text-center font-bold">
          Products
        </h1>
        {items.length <= 0 ? (
          <div className="flex justify-center items-center h-96">
            <EmptyState />
          </div>
        ) : (
          <div className="mt-8 w-full gap-x-2 gap-y-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <ProductCard
                createdAt={item.createdAt}
                imageUrl={item.images[0]}
                location={item.location}
                name={item.title}
                price={item.price}
                isNew
                key={item.id}
                id={item.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdsData;
