import Image from "next/image";

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-x-3 cursor-pointer">
      <Image alt="logo" src="/logo.svg" width={40} height={60} priority />
      <b className="text-white text-lg opacity-90 font-bold">ZD-OLX</b>
    </div>
  );
};

export default BrandLogo;
