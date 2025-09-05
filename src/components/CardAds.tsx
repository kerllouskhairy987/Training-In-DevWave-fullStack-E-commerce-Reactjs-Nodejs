import type { Product } from "@/interfaces";
import { useNavigate } from "react-router-dom";

interface IProps {
  id: string; 
  title: string;
  link: string;
  classname?: string;
  products: Product[];
}


const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const CardAds = ({ title, link, classname, products, id }: IProps) => {
  const navigate = useNavigate();

  return (
    <div className={`${classname} bg-white flex flex-col p-2 md:!p-4 shadow-md gap-4`}>
      <h4 className="text-black text-[10px] font-semibold md:text-[16px] md:font-bold lg:text-[18px]">
        {title}
      </h4>

      <div className="grid grid-cols-2 gap-2 md:gap-3 xl:gap-y-8 ">
        {products.slice(0, 4).map((product) => (
          <div
            key={product._id}
            className="flex flex-col   hover:scale-105 transition-transform duration-200 "
            onClick={() => navigate(`/category/${id}`)}
          >
          <div className=" flex items-center justify-center h-[60px] md:h-[70px] lg:h-[70px] xl:h-[120px] ">
              <img
              src={product.images?.[0]}
              alt={product.name}
              className="   h-[100%]"
            />
          </div>
            <p className="text-black text-center text-[8px] font-semibold md:text-[12px] lg:text-[14px] xl:text-[16px] mt-1 ">
              {truncateText(product.name, 20)}
            </p>
          </div>
        ))}
      </div>

      <a
        href=""
        className="text-[#1F8394] !mt-2 md:!mt-6 text-[8px] md:text-[16px] lg:!mt-4"
      >
        {link}
      </a>
    </div>
  );
};

export default CardAds;
