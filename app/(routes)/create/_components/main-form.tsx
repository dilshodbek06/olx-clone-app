"use client";

import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import CategoryModal from "./modal/category-modal";
import { useState } from "react";

const MainForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h2 className="text-white font-bold text-lg">Main information</h2>
      <div className="mt-3">
        <label htmlFor="title" className="text-white">
          Please provide a title *
        </label>
        <Input
          className="rounded-sm py-6 text-xl text-white mt-1 placeholder:text-lg max-w-[53rem]"
          id="title"
          placeholder="enter the title..."
        />
      </div>
      <div className="mt-4">
        <label htmlFor="title" className="text-white">
          Category *
        </label>
        <div
          onClick={() => setIsOpen(true)}
          className="mt-1 flex justify-between items-center relative bg-slate-500 hover:opacity-90 min-h-[50px] max-w-md px-3"
        >
          <p className="text-white">Select category</p>
          <ChevronDown className="size-7 absolute right-3 text-gray-100" />
        </div>
      </div>
      <CategoryModal
        handleClose={() => setIsOpen(false)}
        open={isOpen}
        setIsOpen={() => setIsOpen(false)}
      />
    </div>
  );
};

export default MainForm;
