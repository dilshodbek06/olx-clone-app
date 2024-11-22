"use client";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import { Drawer } from "vaul";

interface CategoryModalProps {
  open: boolean;
  setIsOpen: () => void;
  handleClose: () => void;
}

const CategoryModal = ({
  handleClose,
  open,
  setIsOpen,
}: CategoryModalProps) => {
  return (
    <div>
      <Drawer.Root open={open} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-gray-100 flex flex-col items-center rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
            <Drawer.Title className="hidden"></Drawer.Title>
            <Drawer.Description className="hidden"></Drawer.Description>

            <div className="w-full p-4 bg-white rounded-t-[10px]">
              {/* Handle Drawer */}
              <div
                aria-hidden
                className="mx-auto w-12 h-1.5 rounded-full bg-gray-300 mb-8"
              />
              {/* Forms */}
              <div className="overflow-y-auto scrollbar-thin max-h-[20rem]"></div>

              {/* Buttons */}
              <div className="flex justify-end sm:justify-center gap-x-4 mt-4">
                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="md:px-6"
                >
                  Cancel
                </Button>
                <Button className="md:px-6">
                  {true && <Circle className="size-4 -mt-[0.6px] mr-1" />} Save
                </Button>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default CategoryModal;
