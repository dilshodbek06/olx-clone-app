"use client";

import { Button } from "@/components/ui/button";
import { formatDate } from "@/helpers";
import { Heart } from "lucide-react";

interface PriceCardProps {
  createdAt: Date;
  name: string;
  price: number;
  isLiked: boolean;
  phoneNumber: string;
}

const PriceCard = ({
  createdAt,
  name,
  price,
  isLiked,
  phoneNumber,
}: PriceCardProps) => {
  const handleOpenMessageApp = () => {
    // Construct the SMS URI
    const smsUrl = `sms:${phoneNumber}`;
    // Open the SMS URI
    window.location.href = smsUrl;
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-gray-200 text-xs">
          Published {formatDate(createdAt)}
        </p>
        <div className="rounded-full p-1 flex items-center justify-center">
          <Heart
            className={`size-6 text-white hover:text-red-500 ${
              isLiked && "fill-red-500 text-red-500"
            }`}
          />
        </div>
      </div>
      <h1 className="text-white text-xl mt-3">{name}</h1>
      <p className="text-xl font-bold text-gray-100 mt-5">
        {price.toLocaleString()} сум
      </p>
      <div className="mt-5">
        <Button onClick={handleOpenMessageApp} className="w-full text-lg">
          Message
        </Button>
        <Button
          disabled
          variant="outline"
          className="w-full bg-transparent text-white text-lg mt-2"
        >
          Show phone
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;
