import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface IProps{
  imageURl:string,
  title:string,
  classname:string,
  basis:string
}

const BestSilerCarousel = ({imageURl,title,classname,basis}:IProps) => {
  return (
    <div className={classname}>
      <Carousel>
        <h4 className="text-black font-bold  md:text-[22px] !mb-2 !ml-6">
         {title}
        </h4>
        <CarouselContent>
        
         <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
              className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
             className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
              className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
             className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>

            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
            className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
             className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
             className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
             className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
              className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
            className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
              className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
           className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
              className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
              className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>

            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
             className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
             className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
            className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>


            <CarouselItem className={basis}>
            <img
              src={imageURl}
              alt=""
          className=" h-[140px] md:h-[200px]"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className=" size-10 md:size-16 left-0 h-[100px] rounded-r-md text-black bg-white" />
        <CarouselNext className=" size-10 md:size-16  right-0 h-[100px] rounded-l-md text-black bg-white" />
      </Carousel>
    </div>
  );
};

export default BestSilerCarousel;
