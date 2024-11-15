"use client";

import { Heart } from "lucide-react";

interface ProductCardProps {
  imageUrl: string;
  createdAt: Date;
  name: string;
  price: number;
  isLiked?: boolean;
  location: string;
  isNew?: boolean;
}

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleTimeString("ru-RU", options);
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("uz-UZ", { style: "currency", currency: "UZS" }).format(
    price
  );

const ProductCard = () => {
  return (
    <div className="cursor-pointer mx-auto rounded-md min-h-[240px] md:min-h-[300px] max-w-[300px] border w-full group">
      {/* header */}
      <div className="h-[150px] md:h-[220px] border-b bg-cover bg-center relative">
        {/* background image or img */}
        <span className="absolute top-2 right-2 flex px-2 sm:px-3 py-[2px] md:py-1 text-[10px] sm:text-xs font-medium text-gray-200 animate-background-shine items-center justify-center rounded-full border bg-green-500">
          NEW
        </span>
      </div>
      {/* body */}
      <div className=" p-2 md:p-3 bg-slate-600">
        <div className="flex items-center justify-between">
          <h5 className="text-white line-clamp-1 font-bold group-hover:underline underline-offset-[3px] transition-all">
            Lorem ipsum dolor sit amet consectetur.
          </h5>
          <div>
            <Heart className="size-6 text-white cursor-pointer hover:scale-105 transition" />
          </div>
        </div>
        <div className="mt-2">
          <h4 className="text-white text-sm sm:text-base">120 000 UZS</h4>

          <p className="text-gray-300 text-sm mt-3 sm:mt-4">Ташкент</p>

          <span className="inline-flex mt-1 h-full px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-gray-200 animate-background-shine items-center justify-center rounded-full bg-[linear-gradient(110deg,#3b4655,45%,#475569,55%,#3b4655)] bg-[length:250%_100%]">
            Сегодня в 08:04
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
