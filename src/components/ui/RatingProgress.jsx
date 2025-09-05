import React from "react";

const RatingBreakdown = ({stats}) => {
  const ratings = [
    { star: 5, percent: 0 },
    { star: 4, percent: 71 },
    { star: 3, percent: 0 },
    { star: 2, percent: 6 },
    { star: 1, percent: 0 },
  ];

  return (
    <div className="w-[400px] space-y-3">
      {ratings.map((r) => (
        <div key={r.star} className="flex items-center gap-3">
          {/* Star label */}
          <span className="w-12 font-semibold text-gray-700">{r.star} star</span>

          {/* Progress bar */}
          <div className="flex-1 h-7 border border-gray-700 rounded relative">
            <div
              className="h-7 bg-orange-500 rounded"
              style={{ width: `${r.percent}%` }}
            />
          </div>

          {/* Percentage */}
          <span className="w-10 text-sm font-semibold text-cyan-600 text-right">
            {r.percent}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default RatingBreakdown;
