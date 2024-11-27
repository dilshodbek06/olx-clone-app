import EmptyState from "@/components/shared/empty-state";
import ProductCard from "@/components/shared/product-card";
import prisma from "@/lib/db";
import { verifySession } from "@/lib/session";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await verifySession();
  if (!session?.userId) {
    return redirect("/");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId as string },
  });

  const favorites = await prisma.favorite.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      ad: true,
    },
  });

  const transformedAds = favorites.map((favorite) => ({
    id: favorite.adId,
    title: favorite.ad.title,
    images: favorite.ad.images,
    location: favorite.ad.location,
    createdAt: favorite.createdAt,
    price: favorite.ad.price,
  }));

  if (transformedAds.length <= 0) {
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
          {transformedAds.map((item) => (
            <ProductCard
              createdAt={item.createdAt}
              imageUrl={item.images[0]}
              location={item.location}
              name={item.title}
              price={item.price}
              isLiked
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
