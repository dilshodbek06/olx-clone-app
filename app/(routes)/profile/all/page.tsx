import EmptyState from "@/components/shared/empty-state";
import ProductCard from "@/components/shared/product-card";
import { getUser } from "@/lib/dal";
import prisma from "@/lib/db";

const Page = async () => {
  const user = await getUser();

  const allAds = await prisma.ad.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      favorites: true,
    },
  });

  if (allAds.length <= 0) {
    return (
      <div className="flex items-center justify-center mt-12">
        <EmptyState />
      </div>
    );
  }

  return (
    <div className=" flex items-center">
      <div className="container px-1.5 sm:px-3 max-w-7xl mx-auto w-full py-1">
        <div className="mt-8  gap-x-2  gap-y-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allAds.map((item) => (
            <ProductCard
              createdAt={item.createdAt}
              imageUrl={item.images[0]}
              location={item.location}
              name={item.title}
              price={item.price}
              isLiked={item.favorites && item?.favorites[0]?.adId === item.id}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
