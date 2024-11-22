"use client";

import { Button } from "@/components/ui/button";
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
import { locations } from "@/helpers/dummy-data";
import { cn } from "@/lib/utils";
import { Check, MapPin } from "lucide-react";
import { useState } from "react";

const LocationForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div>
      <h2 className="text-white font-bold text-lg">Your Location</h2>
      <div className="mt-4">
        <label htmlFor="title" className="text-white">
          Location *
        </label>
        <div className="h-full w-full min-h-[60px] md:min-h-0 md:w-1/3 ">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                aria-label="button"
                name="combobox"
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full border-0 justify-between rounded-none bg-slate-500 h-full text-white hover:bg-slate-600   hover:border transition-all duration-300 border-white hover:text-white text-base md:text-xl"
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
      </div>
    </div>
  );
};

export default LocationForm;
