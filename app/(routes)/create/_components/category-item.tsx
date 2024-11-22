"use client";

import Image from "next/image";

interface CategoryItemProps {
  name: string;
  imageUrl: string;
}
const CategoryItem = ({ name, imageUrl }: CategoryItemProps) => {
  const handleSelect = () => {
    console.log();
  };

  return (
    <div
      onClick={() => handleSelect()}
      className="p-3 cursor-pointer rounded-md border flex items-center gap-x-2 hover:bg-gray-100"
    >
      <div className="p-2 rounded-full relative border w-[40px] h-[40px]">
        <Image alt="logo" src={imageUrl} fill className="bg-center" />
      </div>
      <p className="text-sm md:text-lg font-bold">{name}</p>
    </div>
  );
};

export default CategoryItem;
