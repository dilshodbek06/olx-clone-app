"use client";

import { Button } from "@/components/ui/button";
import { formatDate, formatPhoneNumber, getImage } from "@/helpers";
import { Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ContactCardProps {
  imageUrl?: string;
  createdAt: Date;
  phoneNumber: string;
  personName: string;
}

const ContactCard = ({
  imageUrl,
  personName,
  phoneNumber,
  createdAt,
}: ContactCardProps) => {
  const [show, setShow] = useState(false);

  const handleOpenMessageApp = () => {
    // Construct the SMS URI
    const smsUrl = `sms:${phoneNumber}`;
    // Open the SMS URI
    window.location.href = smsUrl;
  };

  return (
    <div className="flex flex-col gap-y-5 md:flex-row items-center justify-between">
      {/* left */}
      <div className="w-full md:w-2/3">
        <h2 className="text-white text-xl font-bold">Contact the seller</h2>
        <div className="flex items-center mt-3 gap-x-4">
          <div className="relative rounded-full p-1 border border-gray-400   w-[70px] h-[70px]">
            <Image
              loading="lazy"
              alt="user"
              src={imageUrl ? getImage(imageUrl) : "/logo.svg"}
              fill
              className="bg-center"
            />
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">{personName}</h3>
            <p className="text-gray-100 text-sm">
              {createdAt?.toLocaleDateString()}
            </p>
            <p className="text-gray-100 text-sm">{formatDate(createdAt)}</p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-[40%]">
        <Button onClick={handleOpenMessageApp} className="w-full text-lg">
          Message
        </Button>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Phone className="size-5 text-white" />
            {show ? (
              <p className="text-white">{formatPhoneNumber(phoneNumber)}</p>
            ) : (
              <p className="text-white">xxx xx xx</p>
            )}
          </div>
          <Button
            onClick={() => setShow(!show)}
            variant="outline"
            className="px-2 w-1/3 md:w-auto bg-transparent text-white"
          >
            {show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
