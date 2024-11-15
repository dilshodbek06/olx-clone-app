"use client";

import Category from "./category";

const Categories = () => {
  return (
    <div className="min-h-[300px] bg-slate-600 flex items-center">
      <div className="container max-w-6xl mx-auto w-full py-10">
        <h1 className="text-white text-xl md:text-3xl text-center font-bold">
          Main Categories
        </h1>
        <div className="mt-8 min-h-[200px] flex items-center gap-x-6  gap-y-4 flex-wrap justify-evenly">
          <Category imageUrl="" name="" />
          <Category imageUrl="" name="" />
          <Category imageUrl="" name="" />
          <Category imageUrl="" name="" />
          <Category imageUrl="" name="" />
          <Category imageUrl="" name="" />
          <Category imageUrl="" name="" />
          <Category imageUrl="" name="" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
