"use client";

import { Button } from "@/components/ui/button";
import useAdStore from "@/store/use-ad-store";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

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
    price,
  } = useAdStore();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSaveData = async () => {
    const obj = {
      title,
      description,
      images,
      location,
      category,
      email,
      personName,
      phoneNumber,
      price: parseInt(price),
    };
    try {
      setLoading(true);
      await axios.post("/api/ad", obj);
      toast.success("Created success.");
      router.refresh();
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      onClick={handleSaveData}
      className="bg-slate-700 hover:bg-slate-500 w-full md:w-auto md:px-8 md:py-6  md:text-lg text-base"
    >
      {loading && <LoaderCircle className="size-5 mr-2 animate-spin" />}{" "}
      {loading ? "Loading..." : "Save data"}
    </Button>
  );
};

export default SaveForm;
