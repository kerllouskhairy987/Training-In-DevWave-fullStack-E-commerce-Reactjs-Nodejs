import BestSilerCarousel from "@/components/BestSilerCarousel";
import CardAds from "@/components/CardAds";
import Carousel from "@/components/MainCarousel";


const Home = () => {
  return (
<>
<section className="relative">
  <div>
    <Carousel/>
  </div>
  <div className=" absolute top-60 md:top-80 w-full !px-2 md:!px-4 ">
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 " >
    <CardAds title="Revamp your home in style" imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png" link="Explore all"/>
    <CardAds title="Revamp your home in style" imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png" link="Explore all"/>
    <CardAds title="Revamp your home in style" imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png" link="Explore all"/>
    <CardAds title="Revamp your home in style" imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png" link="Explore all"/>
    <CardAds title="Revamp your home in style" imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png" link="Explore all"/>
    <CardAds title="Revamp your home in style" imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png" link="Explore all"/>
    <CardAds title="Revamp your home in style" imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png" link="Explore all"/>
    <CardAds title="Revamp your home in style" imageURL="src\assets\6c4e3fbe2fe9060c5ea8d58ce660fbd768da2905.png" link="Explore all"/>
  </div>
  </div>
</section>
<section>
  <BestSilerCarousel/>
  <h1 className="relative z-[1000] bg-red-500 p-10">Lorem ipsum dolor sit amet.</h1>
</section></>

  );
};

export default Home;
