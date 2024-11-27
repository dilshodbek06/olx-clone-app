"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface CategoryProps {
  name: string;
  value: string;
  whiteIcon: string;
}
const Category = ({ name, value, whiteIcon }: CategoryProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/ads?category=${value}`)}
      className="p-3 cursor-pointer rounded-md border flex items-center gap-x-2 hover:bg-slate-700 "
    >
      <div className="p-2 rounded-full relative border border-gray-400 min-w-[50px] min-h-[50px] flex justify-center items-center overflow-hidden">
        <Image alt="logo" src={whiteIcon} fill className="bg-center" />
      </div>
      <p className="text-sm md:text-lg font-bold text-white">{name}</p>
    </div>
  );
};

export default Category;
