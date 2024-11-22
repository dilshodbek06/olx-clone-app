"use client";

import { Camera } from "lucide-react";

const ImagesForm = () => {
  return (
    <div>
      <h2 className="text-white font-bold text-lg">Images</h2>
      <div className=" mt-2 flex gap-2 gap-x-3 md:gap-4 flex-wrap justify-center md:justify-normal max-w-4xl">
        <div className="p-2 rounded-sm w-full max-w-[150px] min-h-[140px] md:max-w-[200px] md:min-h-[160px] border flex items-center justify-center bg-gray-600">
          <p className="text-white tracking-wider underline underline-offset-8 font-bold">
            Add photo
          </p>
        </div>
        <div className="p-2 rounded-sm w-full max-w-[150px] min-h-[140px] md:max-w-[200px] md:min-h-[160px] border flex items-center justify-center">
          <Camera className="size-6 text-white" />
        </div>
        <div className="p-2 rounded-sm w-full max-w-[150px] min-h-[140px] md:max-w-[200px] md:min-h-[160px] border flex items-center justify-center">
          <Camera className="size-6 text-white" />
        </div>
        <div className="p-2 rounded-sm w-full max-w-[150px] min-h-[140px] md:max-w-[200px] md:min-h-[160px] border flex items-center justify-center">
          <Camera className="size-6 text-white" />
        </div>
        <div className="p-2 rounded-sm w-full max-w-[150px] min-h-[140px] md:max-w-[200px] md:min-h-[160px] border flex items-center justify-center">
          <Camera className="size-6 text-white" />
        </div>
        <div className="p-2 rounded-sm w-full max-w-[150px] min-h-[140px] md:max-w-[200px] md:min-h-[160px] border flex items-center justify-center">
          <Camera className="size-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ImagesForm;
