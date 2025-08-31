import CardAds from "@/components/CardAds";
import Carousel from "@/components/MainCarousel";

import BestSilerCarousel from "@/components/BestSilerCarousel";

const Home = () => {
  return (
    <>
      <section>
        <div>
          <Carousel />
        </div>
      </section>
      <section className="!mt-[-8rem] md:!mt-[-26rem] lg:!mt-[-7rem] z-10 relative   ">
        <div className="   w-full !px-2 md:!px-8 xl:!px-20  ">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-4 md:gap-6 ">
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
            />
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
            />
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
            />
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
            />
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
            />
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
            />
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
            />
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
            />
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
              classname="block md:hidden"
            />
          </div>
        </div>
      </section>
      <section className="!px-2 md:!px-8 xl:!px-20 !mt-8 ">
        <BestSilerCarousel
          classname="bg-white !py-6"
          basis=" basis-1/4 md:basis-1/6 lg:basis-1/8 "
          imageURl="src/assets/ca2d5a6ef7de47f1752a4ad49d7ccd0f6219d854.png"
          title=" Best Sellers in Clothing & Accessories"
        />
        <div className="   w-full  !mt-8  ">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-4 md:gap-6 ">
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
            />
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
            />
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
            />
            <CardAds
              title="Revamp your home in style"
              imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png"
              link="Explore all"
            />
          </div>
        </div>
        <BestSilerCarousel
          classname="bg-white !py-6 !mt-8 "
          basis="  basis-1/3 md:basis-1/3  lg:basis-1/5"
          imageURl="src/assets/92dd85dc2f55972681872abe2995bb706f3e2d33.png"
          title=" Min. 50% off | Unique kitchen finds | Amazon Brands & more"
        />
      </section>
    </>
  );
};

export default Home;
