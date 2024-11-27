"use client";

import { formatDate, getImage } from "@/helpers";
import axios from "axios";
import { Heart, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ProductCardProps {
  imageUrl: string;
  createdAt: Date;
  name: string;
  price: number;
  isLiked: boolean;
  location: string;
  isNew?: boolean;
  id: string;
}

const ProductCard = ({
  createdAt,
  imageUrl,
  location,
  name,
  price,
  isLiked,
  isNew,
  id,
}: ProductCardProps) => {
  const router = useRouter();

  const [likedLoading, setLikedLoading] = useState(false);

  const handleLike = async (
    event: React.MouseEvent<HTMLDivElement>,
    id: string,
    isLiked: boolean
  ) => {
    try {
      event.stopPropagation();
      setLikedLoading(true);
      if (isLiked) {
        await axios.post("/api/ad/unlike", { id });
      } else {
        await axios.post("/api/ad/like", { id });
      }
      router.refresh();
      setLikedLoading(false);
    } catch (error) {
      toast.error("Something went wrong", error!);
      setLikedLoading(false);
    }
  };

  return (
    <div
      onClick={() => router.push(`/detail/${id}`)}
      className="cursor-pointer mx-auto rounded-md min-h-[240px] md:min-h-[300px] max-w-[300px] border w-full group"
    >
      {/* header */}
      <div
        style={{ backgroundImage: `url(${getImage(imageUrl)})` }}
        className="h-[150px] md:h-[220px] border-b bg-cover bg-center rounded-t-sm relative"
      >
        {/* background image or img */}
        {isNew && (
          <span className="absolute top-2 right-2 flex px-2 sm:px-3 py-[2px] md:py-1 text-[10px] sm:text-xs font-medium text-gray-200 animate-background-shine items-center justify-center rounded-full border bg-violet-600">
            NEW
          </span>
        )}
      </div>
      {/* body */}
      <div className=" p-2 md:p-3 bg-slate-600 rounded-b-md">
        <div className="flex items-center justify-between">
          <p className="text-white line-clamp-1 font-bold group-hover:underline underline-offset-[3px] transition-all">
            {name}
          </p>
          {likedLoading ? (
            <div>
              <LoaderCircle className="size-5 animate-spin text-white" />{" "}
            </div>
          ) : (
            <div onClick={(event) => handleLike(event, id, isLiked)}>
              <Heart
                className={`size-6 text-white cursor-pointer hover:scale-105 transition ${
                  isLiked && "fill-red-500 text-red-500"
                }`}
              />
            </div>
          )}
        </div>
        <div className="mt-2">
          <p className="text-white text-sm sm:text-base">
            {price.toLocaleString()} UZS
          </p>

          <p className="text-gray-300 text-sm mt-3 sm:mt-4">
            {location.charAt(0) + location.slice(1).toLowerCase()}
          </p>

          <span className="inline-flex mt-1 h-full px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-gray-200 animate-background-shine items-center justify-center rounded-full bg-[linear-gradient(110deg,#3b4655,45%,#475569,55%,#3b4655)] bg-[length:250%_100%]">
            {formatDate(createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
