import CardAds from "@/components/CardAds";
import MainCarousel from "@/components/MainCarousel";
import BestSilerCarousel from "@/components/BestSilerCarousel";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Category, Product } from "@/interfaces";

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<
    Record<string, Product[]>
  >({});
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesRes = await axios.get<{ categories: Category[] }>(
          "https://training-in-dev-wave-full-stack-e-c.vercel.app/api/categories/all-categories",
         
        );

        const categoriesData = categoriesRes.data.categories;
        setCategories(categoriesData);

        const productsMap: Record<string, Product[]> = {};

        await Promise.all(
          categoriesData.map(async (cat) => {
            const productsRes = await axios.get<{ products: Product[] }>(
              `https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/filter?category=${cat._id}&limit=4`
            );
            productsMap[cat._id] = productsRes.data.products;
          })
        );

        setProductsByCategory(productsMap);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

 
const carouselImages: string[] = categories
  .map(cat => productsByCategory[cat._id]?.[0]?.images?.[0] || null)
  .filter((img): img is string => img !== null);

  return (
    <>
      <section>
        <MainCarousel />
      </section>

     
      <section className="!mt-[-8rem] md:!mt-[-26rem] lg:!mt-[-7rem] xl:!mt-[-14rem] z-10 relative">
        <div className="w-full !px-2 md:!px-8 xl:!px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.slice(0, 8).map((cat) => (
              <CardAds
                key={cat._id}
                id={cat._id}
                title={cat.name}
                products={productsByCategory[cat._id] || []}
                link="Explore all"
                
              />
            ))}
          </div>
        </div>
      </section>

      <section className="!px-2 md:!px-8 xl:!px-20 !mt-8">
        <BestSilerCarousel
          classname="bg-white !py-6"
          basis="basis-1/4 md:basis-1-5 lg:basis-1/8"
          images={carouselImages}
          title="Best Sellers in Clothing & Accessories"
        />

      
        <div className="w-full !mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.slice(9, 13).map((cat) => (
              <CardAds
                key={cat._id}
                id={cat._id}
                title={cat.name}
                products={productsByCategory[cat._id] || []}
                link="Explore all"
              />
            ))}
          </div>
        </div>

        <BestSilerCarousel
          classname="bg-white !py-6 !mt-8 "
          basis="basis-1/4 md:basis-1/5 lg:basis-1/9"
          images={carouselImages}
          title="Min. 50% off | Unique kitchen finds | Amazon Brands & more"
        />
      </section>
    </>
  );
};

export default Home;
























// import CardAds from "@/components/CardAds";
// import Carousel from "@/components/MainCarousel";

// import BestSilerCarousel from "@/components/BestSilerCarousel";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import type { Category, Product } from "@/interfaces";
// import MainCarousel from "@/components/MainCarousel";

// const Home = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [productsByCategory, setProductsByCategory] = useState<
//     Record<string, Product[]>
//   >({});
//   // const [loading, setLoading] = useState<boolean>(true);
//   const token = "68b81b7fa5bd56a838df7210";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const categoriesRes = await axios.get<{ categories: Category[] }>(
//           "https://training-in-dev-wave-full-stack-e-c.vercel.app/api/categories/all-categories",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const categoriesData = categoriesRes.data.categories;
//         setCategories(categoriesData);

//         const productsMap: Record<string, Product[]> = {};

//         await Promise.all(
//           categoriesData.map(async (cat) => {
//             const productsRes = await axios.get<{ products: Product[] }>(
//               `https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/filter?categoryId=${cat._id}&limit=4`,
//               {
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//                 },
//               }
//             );
//             productsMap[cat._id] = productsRes.data.products;
//           })
//         );

//         setProductsByCategory(productsMap);
       
//       } catch (err) {
//         console.error(err);
//         // setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <section>
//         <div>
//           <MainCarousel />
//         </div>
//       </section>
//       <section className="!mt-[-8rem] md:!mt-[-26rem] lg:!mt-[-7rem] z-10 relative   ">
//         <div className="   w-full !px-2 md:!px-8 xl:!px-20  ">
//           <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-4 md:gap-6 ">
//             {categories.slice(0, 8).map((cat) => (
//               <CardAds
//                 key={cat._id}
//                 title={cat.name}
//                 products={productsByCategory[cat._id] || []}
//                 link="Explore all"
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="!px-2 md:!px-8 xl:!px-20 !mt-8 ">
//         <BestSilerCarousel
//           classname="bg-white !py-6"
//           basis=" basis-1/4 md:basis-1/6 lg:basis-1/8 "
//           imageURl="src/assets/ca2d5a6ef7de47f1752a4ad49d7ccd0f6219d854.png"
//           title=" Best Sellers in Clothing & Accessories"
//         />
//         <div className="   w-full  !mt-8  ">
//           <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-4 md:gap-6 ">
//             {categories.slice(9, 13).map((cat) => (
//               <CardAds
//                 key={cat._id}
//                 title={cat.name}
//                 products={productsByCategory[cat._id] || []}
//                 link="Explore all"
//               />
//             ))}
//           </div>
//         </div>
//         <BestSilerCarousel
//           classname="bg-white !py-6 !mt-8 "
//           basis="  basis-1/3 md:basis-1/3  lg:basis-1/5"
//           imageURl="src/assets/92dd85dc2f55972681872abe2995bb706f3e2d33.png"
//           title=" Min. 50% off | Unique kitchen finds | Amazon Brands & more"
//         />
//       </section>
//     </>
//   );
// };

// export default Home;
