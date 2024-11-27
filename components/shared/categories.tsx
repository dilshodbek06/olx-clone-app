import { categories } from "@/helpers/dummy-data";
import Category from "./category";

const Categories = () => {
  return (
    <div className="bg-slate-600 flex items-center mt-24 md:mt-3">
      <div className="container max-w-6xl mx-auto w-full py-10 px-2">
        <h1 className="text-white text-xl md:text-3xl text-center font-bold">
          Main Categories
        </h1>
        <div className="mt-8 gap-2 sm:gap-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((item, ind) => (
            <Category
              value={item.value}
              whiteIcon={item.whiteIcon}
              name={item.name}
              key={ind}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
