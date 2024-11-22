"use client";

import { Button } from "@/components/ui/button";
import useAdStore from "@/store/use-ad-store";

const SaveForm = () => {
  const {
    title,
    description,
    images,
    location,
    category,
    email,
    personName,
    phoneNumber,
  } = useAdStore();

  const handleSaveData = () => {
    console.log({
      title,
      description,
      images,
      location,
      category,
      email,
      personName,
      phoneNumber,
    });
  };

  return (
    <Button
      onClick={handleSaveData}
      className="bg-slate-700 hover:bg-slate-500 w-full md:w-auto md:px-8 md:py-6  md:text-lg text-base"
    >
      Save data
    </Button>
  );
};

export default SaveForm;
