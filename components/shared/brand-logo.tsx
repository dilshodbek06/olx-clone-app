"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const BrandLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center gap-x-2 sm:gap-x-3 cursor-pointer"
    >
      <Image alt="logo" src="/logo.svg" width={40} height={60} priority />
      <b className="text-white text-base sm:text-lg opacity-90 font-bold">
        ZD-OLX
      </b>
    </div>
  );
};

export default BrandLogo;
