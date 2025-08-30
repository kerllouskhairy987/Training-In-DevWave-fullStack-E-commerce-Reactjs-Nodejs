interface IProps {
  title: string;
  imageURL: string;
  link: string;
}

const CardAds = ({ title, imageURL, link }: IProps) => {
  return (
    <div className="bg-white flex flex-col   p-10 shadow-md gap-4 ">
      <h4 className="text-black   text-[10px]  font-semibold md:text-[16px] md:font-bold break-words ">
        {title}
      </h4>

      <div className="grid grid-cols-2 gap-3  ">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="flex flex-col   hover:scale-105 transition-transform duration-200 border "
          >
            <img
              src={imageURL}
              alt="ad"
              className=" h-[40px] object-cover md:h-[100px]  "
            />
            <p className="text-black text-[4px]  font-semibold md:text-[12px] mt-1">
              Cushion covers, bedsheets & more
            </p>
          </div>
        ))}
      </div>
      <a
        href=""
        className="text-[#1F8394] mt-2 md:mt-6  text-[8px]   md:text-[16px]"
      >
        {link}
      </a>
    </div>
  );
};

export default CardAds;

//   imageURL:string,
// }

// const CardAds = ({ title,imageURL }: IProps) => {
//   return (
//     <div  className="bg-white flex flex-col w-[250px] px-[20px]">
//       <h4 className=" text-black">{title}</h4>
//      <div className="flex  justify-center  flex-wrap ">
//          <div className="w-[50%]">
//         <img src={imageURL} alt="" className="w-[80px] h-[60px]" />
//         <p className="text-black text-[12px]">Cushion covers, bedsheets & more</p>
//       </div>
//        <div className="w-[50%]">
//         <img src={imageURL} alt="" className="w-[80px] h-[60px]" />
//         <p className="text-black text-[12px]">Cushion covers, bedsheets & more</p>
//       </div>
//        <div className="w-[50%]">
//         <img src={imageURL} alt="" className="w-[80px] h-[60px]" />
//         <p className="text-black text-[12px]">Cushion covers, bedsheets & more</p>
//       </div>
//        <div className="w-[50%]">
//         <img src={imageURL} alt="" className="w-[80px] h-[60px]" />
//         <p className="text-black text-[12px]">Cushion covers, bedsheets & more</p>
//       </div>
//      </div>
//     </div>
//   );
// };

// export default CardAds;
