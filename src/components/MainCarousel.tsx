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
      <div className=" h-[40vh] md:h-[80vh]">
        <Carousel >
          <CarouselContent>
            <CarouselItem>
              <img
                src="src/assets/f2fbe9b84327c8c1db6cabbeef327465bbb07fca.jpg"
                alt=""
                className="h-[40vh] md:h-[80vh] w-full object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="src/assets/f2fbe9b84327c8c1db6cabbeef327465bbb07fca.jpg"
                alt=""
                   className="h-[40vh] md:h-[80vh] w-full object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="src/assets/f2fbe9b84327c8c1db6cabbeef327465bbb07fca.jpg"
                alt=""
                className="h-[40vh] md:h-[80vh] w-full object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default MainCarousel;
