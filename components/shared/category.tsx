import Image from "next/image";

interface CategoryProps {
  imageUrl: string;
  name: string;
}
const Category = ({ imageUrl, name }: CategoryProps) => {
  return (
    <div className="flex flex-col items-center gap-y-2 md:gap-y-4 cursor-pointer group">
      <div className="w-28 h-28 rounded-full relative border overflow-hidden">
        <Image alt="name" src="./next.svg" fill className="" />
      </div>
      <b className="max-w-[120px] text-white text-lg md:text-xl group-hover:text-gray-300 text-wrap truncate text-center line-clamp-3">
        Xobbi, dam olish, sport
      </b>
    </div>
  );
};

export default Category;
