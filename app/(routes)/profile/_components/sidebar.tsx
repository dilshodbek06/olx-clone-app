"use client";

import { Button } from "@/components/ui/button";
import { Cog, FolderHeart, House, WalletMinimal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="text-white">
      <div className="px-2 py-4 container mx-auto max-w-3xl md:rounded-lg bg-slate-600  gap-4 grid md:flex md:justify-center md:items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Link href="/profile/all">
          <Button
            className={`bg-slate-700 hover:bg-slate-500 w-full md:w-auto ${
              pathName === "/profile/all" && "bg-slate-500"
            }`}
          >
            <WalletMinimal className="size-5 mr-2 " /> Your posters
          </Button>
        </Link>

        <Link href="/profile/favorites">
          <Button
            className={`bg-slate-700 hover:bg-slate-500 w-full md:w-auto ${
              pathName === "/profile/favorites" && "bg-slate-500"
            }`}
          >
            <FolderHeart className="size-5 mr-2 " /> Favorites
          </Button>
        </Link>
        <Link href="/profile/settings">
          <Button
            className={`bg-slate-700 hover:bg-slate-500 w-full md:w-auto ${
              pathName === "/profile/settings" && "bg-slate-500"
            }`}
          >
            <Cog className="size-5 mr-2 " /> Settings
          </Button>
        </Link>

        <Link href={"/"}>
          <Button className="bg-slate-700 hover:bg-slate-500 w-full md:w-auto">
            <House className="size-5 mr-2 " /> Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
