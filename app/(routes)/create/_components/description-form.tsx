"use client";

import DescPicker from "./desc-picker";

const DescriptionForm = () => {
  return (
    <div>
      <h2 className="text-white font-bold text-lg ml-4">Description</h2>
      <div className="mt-3 text-white max-w-[55.2rem]">
        <DescPicker />
      </div>
    </div>
  );
};

export default DescriptionForm;
