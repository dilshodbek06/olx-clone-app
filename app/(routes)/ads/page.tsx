import prisma from "@/lib/db";
import AdsData from "./_components/ads-data";
import Filters from "./_components/filters";

import { Category, Location } from "@prisma/client";

interface ProductsPageProps {
  searchParams: { [key: string]: string | undefined };
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const { name, category, location } = searchParams;

  const categoryEnum = category as keyof typeof Category | undefined;
  const locationEnum = location as keyof typeof Location | undefined;

  const filteredAds = await prisma.ad.findMany({
    where: {
      ...(categoryEnum && { category: categoryEnum }),
      ...(locationEnum && { location: locationEnum }),
      ...(name
        ? {
            title: {
              contains: name,
              mode: "insensitive",
            },
          }
        : {}),
    },
  });

  return (
    <div>
      <div className="container max-w-6xl mx-auto">
        <Filters />
        <AdsData items={filteredAds} />
      </div>
    </div>
  );
};

export default ProductsPage;
