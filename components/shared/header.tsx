"use client";

import { Button } from "@/components/ui/button";
import BrandLogo from "./brand-logo";
import {
  ArrowRightIcon,
  CalendarPlus,
  LogOut,
  LucideIcon,
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

const Header = () => (
  <div className="min-h-[70px] shadow-sm bg-slate-800 flex items-center">
    <div className="container px-3 mx-auto max-w-6xl flex items-center justify-between">
      <BrandLogo />
      <div className="flex items-center gap-x-1 sm:gap-x-3">
        <NavigationMenu className="transition-all duration-300 animate-in">
          <NavigationMenuList>
            <NavigationMenuItem className="hover:bg-slate-800">
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent flex items-center gap-x-2">
                <User /> <span>Account</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-full min-w-[8.6rem] bg-slate-700 text-white">
                <NavigationMenuLink>
                  <div className="p-2 flex flex-col gap-y-2">
                    <MenuItem label="E'lonlar" icon={CalendarPlus} />
                    <MenuItem label="Sozlamalar" icon={Settings} />
                    <hr />
                    <MenuItem label="Log out" icon={LogOut} />
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          variant="expandIcon"
          Icon={ArrowRightIcon}
          iconPlacement="right"
        >
          Login
        </Button>
        {/* <Button>Create new</Button> */}
      </div>
    </div>
  </div>
);

export default Header;
