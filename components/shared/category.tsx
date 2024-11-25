"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface CategoryProps {
  imageUrl: string;
  name: string;
  value: string;
}
const Category = ({ imageUrl, name, value }: CategoryProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/ads?category=${value}`)}
      className="p-3 cursor-pointer rounded-md border flex items-center gap-x-2 hover:bg-slate-700 "
    >
      <div className="p-2 rounded-full relative border w-[40px] h-[40px]">
        <Image alt="logo" src={imageUrl} fill className="bg-center" />
      </div>
      <p className="text-sm md:text-lg font-bold text-white">{name}</p>
    </div>
  );
};

export default Category;
