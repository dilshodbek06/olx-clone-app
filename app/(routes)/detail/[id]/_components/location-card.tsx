import { MapPin } from "lucide-react";

const LocationCard = () => {
  return (
    <div>
      <h1 className="text-white text-lg mt-3">Location</h1>
      <div className="mt-4 flex gap-x-4">
        <div className="flex gap-x-2 items-center h-fit mt-1">
          <MapPin className="size-5 text-white" />
          <p className="text-white font-semibold text-sm">Bukhara</p>
        </div>
        <div className="min-h-[140px] border rounded w-full"></div>
      </div>
    </div>
  );
};

export default LocationCard;
