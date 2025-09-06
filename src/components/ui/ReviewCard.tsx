/* eslint-disable @typescript-eslint/no-explicit-any */
import Avatar from '@mui/material/Avatar';
import { Star } from "lucide-react";
const ReviewCard = ({feedback}: any) => {
  return (
    <div className="max-w-2xl p-4  rounded-lg  bg-white">
      {/* User Info */}
      <div className="flex items-center gap-3">
      <Avatar alt="Remy Sharp" src="../../assets/4e1fe19dc3d2e8bd41df2867d0b18cb49bba2ff3.png" />
        <span className="font-semibold text-gray-800">Brooke</span>
      </div>

      {/* Stars + Title */}
      <div className="mt-2 flex items-center gap-2">
        {[...Array(5)].map((_, i) => (
            <Star key={i}   className={i < feedback?.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} />
          ))}
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
        {feedback?.comment}
      </p>

      {/* Report link */}
      <button className="mt-2 text-xs text-gray-500 hover:underline">
        Report
      </button>
    </div>
  );
};

export default ReviewCard;
