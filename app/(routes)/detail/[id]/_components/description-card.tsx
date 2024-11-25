import { Flag } from "lucide-react";

interface DescriptionCardProps {
  description: string;
}

const DescriptionCard = ({ description }: DescriptionCardProps) => {
  return (
    <div>
      <h1 className=" text-base md:text-2xl text-white font-bold">
        Description
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="mt-2 text-gray-100"
      />
      <hr className="mt-7" />
      <div className="mt-6 flex items-center justify-between">
        <p className="text-white text-xs">ID: 54780224</p>
        <p className="text-white text-xs">Просмотров: 1105</p>
        <div className="flex items-center gap-x-1">
          <Flag className="size-4 text-white" />
          <p className="text-white text-xs">Complain</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
