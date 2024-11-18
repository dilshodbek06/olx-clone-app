import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

const ContactCard = () => {
  return (
    <div className="flex flex-col gap-y-5 md:flex-row items-center justify-between">
      {/* left */}
      <div className="w-full md:w-2/3">
        <h2 className="text-white text-xl font-bold">Contact the seller</h2>
        <div className="flex items-center mt-3 gap-x-4">
          <div className="relative rounded-full p-1 border border-gray-400   w-[70px] h-[70px]">
            <Image alt="user" src="/logo.svg" fill className="bg-center" />
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">SD Plast Group</h3>
            <p className="text-gray-100 text-sm">na OLX from 2017 year.</p>
            <p className="text-gray-100 text-sm">online 06 november.</p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-1/3">
        <Button className="w-full text-lg">Message</Button>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <Phone className="size-5 text-white" />
            <p className="text-white">xxx xx xx</p>
          </div>
          <Button
            variant="outline"
            className="px-7 w-2/3 md:w-auto bg-transparent text-white"
          >
            Show
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
