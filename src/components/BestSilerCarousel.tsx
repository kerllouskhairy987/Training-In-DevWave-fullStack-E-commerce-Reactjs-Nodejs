import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";


interface IProps {
  classname: string;
  basis: string;
  title: string;
  images: string[]; 
}

const BestSilerCarousel = ({ classname, basis, title, images }: IProps) => {
  return (
    <div className={classname}>
        <Carousel>
        <h4 className="text-black font-bold  md:text-[22px] mb-2 ml-6">
         {title}
        </h4>
        <CarouselContent className="">
            {images.map((img, index) => (
          <CarouselItem  key={index} className={`${basis} `}>
          <img
           
            src={img}
           
            className={`${basis} object-cover  h-[80px] md:h-[120px] `}
          />
          </CarouselItem>
        ))}
  
           
        </CarouselContent>
        <CarouselPrevious className=" size-10 md:size-16 left-0 h-[100px] rounded-r-md text-black bg-white" />
        <CarouselNext className=" size-10 md:size-16  right-0 h-[100px] rounded-l-md text-black bg-white" />
      </Carousel>
    </div>
  );
};

export default BestSilerCarousel;
