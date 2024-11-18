"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Search } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { locations } from "../../helpers/dummy-data";

const SearchMenu = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center py-16">
      <div className="container px-3 w-full max-w-6xl flex flex-col gap-2 md:gap-0  md:flex-row items-center mx-auto h-16">
        {/* Search item */}
        <div className="h-full min-h-[60px] md:min-h-0 w-full md:w-2/3 relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white size-6" />
          <Input
            className="h-full w-full pl-12 placeholder-white text-white focus-visible:ring-0 rounded-none text-base md:text-xl focus-visible:border-b-2  border-t-0 border-l-0 border-r-0 border-b-0  bg-slate-600"
            placeholder="What are you looking for..."
          />
        </div>
        {/* Search location */}
        <div className="h-full w-full min-h-[60px] md:min-h-0 md:w-1/3 md:border-l bg-slate-600">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                aria-label="button"
                name="combobox"
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full border-none justify-between rounded-none bg-transparent h-full text-white hover:bg-transparent hover:text-white text-base md:text-xl"
              >
                {value
                  ? locations.find((location) => location.value === value)
                      ?.label
                  : "Select location..."}
                <MapPin />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 text-white w-[340px] rounded-t-sm overflow-hidden">
              <Command
                className="text-white w-full
              bg-slate-600 md:w-svw max-w-[370px]"
              >
                <CommandInput
                  className="placeholder-white"
                  placeholder="Search location..."
                />
                <CommandList>
                  <CommandEmpty>No location found.</CommandEmpty>
                  <CommandGroup>
                    {locations.map((location) => (
                      <CommandItem
                        className="text-white"
                        key={location.value}
                        value={location.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        {location.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            value === location.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <Button className="h-full p-4 text-lg rounded-none flex items-center w-full md:w-auto">
          Search <Search className="ml-3 size-5" />
        </Button>
      </div>
    </div>
  );
};

export default SearchMenu;
