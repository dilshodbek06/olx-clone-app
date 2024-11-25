"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getImage } from "@/helpers";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <div className="h-[300px]">
      <Carousel
        opts={{
          align: "start",
        }}
        className="h-full"
      >
        <CarouselContent className="h-full">
          {images.map((item, ind) => (
            <CarouselItem key={ind}>
              <div className="h-[300px] relative max-w-[24rem] mx-auto">
                <Image
                  alt={"alt"}
                  src={getImage(item)}
                  fill
                  className="object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-0 bg-slate-700 text-white" />
        <CarouselNext className="-right-0 bg-slate-700 text-white" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
