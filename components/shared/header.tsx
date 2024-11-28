"use client";

import { Button } from "@/components/ui/button";
import BrandLogo from "./brand-logo";
import {
  ArrowRightIcon,
  CalendarPlus,
  LoaderCircle,
  LogOut,
  LucideIcon,
  Plus,
  Settings,
  User,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import useUser from "@/app/hooks/useUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

interface MenuItemProps {
  label: string;
  icon: LucideIcon;
}

const MenuItem = ({ label, icon: Icon }: MenuItemProps) => (
  <div className="flex items-center justify-between hover:bg-slate-800 transition cursor-pointer rounded-md py-1 px-2 gap-x-4">
    <p>{label}</p>
    <Icon className="size-5" />
  </div>
);

const Header = () => {
  const { user, loading } = useUser();
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await axios.get("/api/user/logout");
      router.push("/sign-in");
    } catch (error) {
      console.log(typeof error);
      router.push("/sign-in");
    }
  };

  return (
    <div className="min-h-[70px] shadow-sm bg-slate-800 flex items-center">
      <div className="container px-3 mx-auto max-w-6xl flex items-center justify-between ">
        <BrandLogo />
        <div className="flex items-center gap-x-1 sm:gap-x-3">
          {user && (
            <NavigationMenu className="transition-all duration-300 animate-in">
              <NavigationMenuList>
                <NavigationMenuItem className="hover:bg-slate-800">
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent focus:bg-transparent flex items-center gap-x-2">
                    <User />{" "}
                    <span className="focus:text-gray-200">Account</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full min-w-[8.6rem] bg-slate-700 text-white">
                    <NavigationMenuLink>
                      <div className="p-2 flex flex-col gap-y-2">
                        <div onClick={() => router.push("/profile/all")}>
                          <MenuItem label="E'lonlar" icon={CalendarPlus} />
                        </div>
                        <div onClick={() => router.push("/profile/settings")}>
                          <MenuItem label="Sozlamalar" icon={Settings} />
                        </div>
                        <hr />
                        <div onClick={handleLogOut}>
                          <MenuItem label="Log out" icon={LogOut} />
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}

          {loading ? (
            <LoaderCircle className="size-5 text-white animate-spin" />
          ) : user ? (
            <Link href="/create">
              <Button variant="expandIcon" Icon={Plus} iconPlacement="right">
                Create new
              </Button>
            </Link>
          ) : (
            <Link href="/sign-in">
              <Button
                variant="expandIcon"
                Icon={ArrowRightIcon}
                iconPlacement="right"
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
