import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MainCarousel = () => {
  return (
    <div>
      <div className=" h-[40vh] md:h-[70vh]">
        <Carousel >
          <CarouselContent>
            <CarouselItem>
              <img
                src="src/assets/f2fbe9b84327c8c1db6cabbeef327465bbb07fca.jpg"
                alt=""
                className="h-[40vh] md:h-[50vh]  lg:h-[80vh] w-full object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="src/assets/f2fbe9b84327c8c1db6cabbeef327465bbb07fca.jpg"
                alt=""
                   className="h-[40vh]   md:h-[50vh] lg:h-[80vh] w-full object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="src/assets/f2fbe9b84327c8c1db6cabbeef327465bbb07fca.jpg"
                alt=""
                className="h-[40vh]  md:h-[50vh] lg:h-[80vh]  w-full object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="size-20 md:size-32 left-0 md:top-60  text-black" />
          <CarouselNext className="size-20 md:size-32  right-0 md:top-60  text-black" />
        </Carousel>
      </div>
    </div>
  );
};

export default MainCarousel;
