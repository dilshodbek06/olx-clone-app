import prisma from "@/lib/db";
import AboutUserCard from "./_components/about-user-card";
import ContactCard from "./_components/contact-card";
import DescriptionCard from "./_components/description-card";
import ImageCarousel from "./_components/image-carousel";
import LocationCard from "./_components/location-card";
import PriceCard from "./_components/price-card";
import { redirect } from "next/navigation";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const currentAd = await prisma.ad.findUnique({
    where: {
      id,
    },
    include: {
      favorites: true,
      User: true,
    },
  });

  if (!currentAd) {
    return redirect("/");
  }

  return (
    <div className="min-h-[33rem]">
      <div className="container md:px-3 py-5 md:py-12 max-w-6xl mx-auto flex flex-col md:flex-row gap-3 md:gap-5">
        {/* left side */}
        <div className="px-3 w-full md:w-2/3 rounded-sm">
          {/* image section */}
          <div className="py-4 min-h-[14rem] bg-slate-600 rounded-sm">
            <ImageCarousel images={currentAd.images ?? []} />
          </div>
          <div className="mt-3 min-h-[200px] bg-slate-600 px-4 py-5 rounded-sm">
            <DescriptionCard description={currentAd.description} />
          </div>
          <div className="mt-3 min-h-[100px] bg-slate-600 px-4 py-5 rounded-sm">
            <ContactCard
              createdAt={currentAd.createdAt}
              personName={currentAd.personName}
              phoneNumber={currentAd.phoneNumber}
              imageUrl={currentAd.User?.profileImage || ""}
            />
          </div>
        </div>
        {/* right side */}
        <div className="w-full md:w-1/3">
          <div className="min-h-[100px] bg-slate-600 rounded-sm py-4 px-3">
            <PriceCard
              phoneNumber={currentAd.phoneNumber}
              createdAt={currentAd.createdAt}
              name={currentAd.title}
              price={currentAd.price}
              isLiked={
                currentAd.favorites &&
                currentAd?.favorites[0]?.adId === currentAd.id
              }
            />
          </div>
          <div className="min-h-[100px] mt-3 bg-slate-600 rounded-sm py-2 px-3">
            <AboutUserCard />
          </div>
          <div className="min-h-[100px] mt-3 bg-slate-600 rounded-sm py-2 px-3">
            <LocationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
