import prisma from "@/lib/db";
import ProductCard from "./product-card";

const NewProducts = async () => {
  const ads = await prisma.ad.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
  });
  return (
    <div className=" flex items-center mt-2">
      <div className="container px-1.5 sm:px-3 max-w-7xl mx-auto w-full py-10">
        <h1 className="text-white text-xl md:text-3xl text-center font-bold">
          New Products
        </h1>
        <div className="mt-8  gap-x-2  gap-y-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ads.map((item) => (
            <ProductCard
              createdAt={item.createdAt}
              imageUrl={item.images[0]}
              location={item.location}
              name={item.title}
              price={item.price}
              isLiked
              isNew
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
