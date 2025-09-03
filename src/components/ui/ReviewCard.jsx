import React from "react";
import Avatar from '@mui/material/Avatar';
const ReviewCard = () => {
  return (
    <div className="max-w-2xl p-4  rounded-lg  bg-white">
      {/* User Info */}
      <div className="flex items-center gap-3">
      <Avatar alt="Remy Sharp" src="../../assets/4e1fe19dc3d2e8bd41df2867d0b18cb49bba2ff3.png" />
        <span className="font-semibold text-gray-800">Brooke</span>
      </div>

      {/* Stars + Title */}
      <div className="mt-2 flex items-center gap-2">
        <div className="flex text-yellow-500">
          ★★★★☆
        </div>
        <h3 className="font-bold text-gray-800">Favorite dress</h3>
      </div>

      {/* Review Meta */}
      <p className="text-sm text-gray-500">
        Reviewed in the United States on 6 August 2024
      </p>

      {/* Size / Color / Verified */}
      <div className="mt-1 text-sm text-gray-600">
        <span className="mr-2">Size: 40</span>
        <span className="mr-2">Color: Black</span>
        <span className="text-orange-600 font-semibold">Verified Purchase</span>
      </div>

      {/* Review Content */}
      <p className="mt-3 text-gray-700 text-sm leading-relaxed">
        I initially purchased this dress on sale. It turned out to be my favorite dress of this summer.
        It is extremely versatile and unexpectedly flattering. When I accidentally tore it, I was really upset.
        My husband told me to buy it again, which I typically wouldn't do. It wasn't on sale and I am so frugal.
        The dress washes very well and I always get compliments when I wear it.
      </p>

      {/* Report link */}
      <button className="mt-2 text-xs text-gray-500 hover:underline">
        Report
      </button>
    </div>
  );
};

export default ReviewCard;
