import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const PriceCard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-gray-200 text-xs">Опубликовано 17 ноября 2024 г.</p>
        <div className="rounded-full p-1 flex items-center justify-center cursor-pointer">
          <Heart className="size-6 text-white hover:text-red-500" />
        </div>
      </div>
      <h1 className="text-white text-xl mt-3">
        Уй,4 сотихлик,сув,свет,газ хаммаси бор
      </h1>
      <p className="text-xl font-bold text-gray-100 mt-5">200 000 000 сум</p>
      <div className="mt-5">
        <Button className="w-full text-lg">Message</Button>
        <Button
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
