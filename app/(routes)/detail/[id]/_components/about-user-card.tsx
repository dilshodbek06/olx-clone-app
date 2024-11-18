import Image from "next/image";

const AboutUserCard = () => {
  return (
    <div>
      <h1 className="text-white text-lg mt-3">Пользователь</h1>
      <div className="mt-3 flex items-center gap-x-4">
        <div className="relative rounded-full p-1 border border-gray-400   w-[50px] h-[50px]">
          <Image alt="user" src="/logo.svg" fill className="bg-center" />
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold">SD Plast Group</h3>
          <p className="text-gray-100 text-sm">na OLX from 2017 year.</p>
          <p className="text-gray-100 text-sm">online 06 november.</p>
        </div>
      </div>
      <div className="py-2 flex items-center justify-center mt-3">
        <p className="text-white cursor-pointer hover:text-sky-400">
          Все объявления автора {">"}
        </p>
      </div>
    </div>
  );
};

export default AboutUserCard;
