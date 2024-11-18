"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  console.log(images);

  return (
    <div className="h-[300px]">
      <Carousel
        opts={{
          align: "start",
        }}
        className="h-full"
      >
        <CarouselContent className="h-full">
          <CarouselItem>
            <div className="h-[300px] relative">
              <Image
                alt={"alt"}
                src={"/logo.svg"}
                fill
                className="object-center"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-[300px] relative">
              <Image
                alt={"alt"}
                src={"/logo.svg"}
                fill
                className="object-center"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-[300px] relative">
              <Image
                alt={"alt"}
                src={"/logo.svg"}
                fill
                className="object-center"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="-left-0 bg-slate-700 text-white" />
        <CarouselNext className="-right-0 bg-slate-700 text-white" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
