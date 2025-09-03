// import { useState } from "react";
// import { Star } from 'lucide-react';


//         export default function  Sidebar ({ filters = [], onFilterChange }) {
//         const [selectedFilters, setSelectedFilters] = useState({})

//   const handleChange = (name, value) => {
//     const newFilters = { ...selectedFilters, [name]: value }
//     setSelectedFilters(newFilters)
//     if (onFilterChange) onFilterChange(newFilters)
//   }

//   return (
//     <aside className="w-64 h-screen p-4  rounded-2xl shadow-sm bg-white">
//       {filters.map((filter) => (
//         <div key={filter.name} className="mb-6">
//           <h3 className="font-bold  mb-2">{filter.title}</h3>
        

// {filter.Reviews?.map((review, index) => (
//   <div key={index} className="flex items-center">
//     {[...Array(5)].map((_, i) => (
//       <Star
//         key={i}
//         size={20}
//         className={i < review.stars ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}
//       />
//     ))}
//   </div>
// ))}

//           <div className="space-y-2 text-sm ">
            
//             {filter.options?.map((option) => (
//               <label key={option.value} className="flex items-center font-medium  space-x-2">
//                 <input
//                   type="radio"
//                   name={filter.name}
//                   value={option.value}
//                   checked={selectedFilters[filter.name] === option.value}
//                   onChange={() => handleChange(filter.name, option.value)}
//                   className="accent-blue-600"
//                 />
//                 <span>{option.label}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       ))}
//     </aside>
//   )
//         };






import { useState } from "react";
import { Star, Menu, X } from "lucide-react";

export default function Sidebar({ filters = [], onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [isOpen, setIsOpen] = useState(false);

const handleChange = (name, value) => {
  let newFilters = { ...selectedFilters };

  if (name === "price" && value) {
    // split the value "5000-10000" into [5000, 10000]
    const [min, max] = value.split("-").map(Number);

    // remove old "price" field and add min/max
    delete newFilters.price;
    newFilters = { ...newFilters, minPrice: min, maxPrice: max };
  } else {
    newFilters = { ...newFilters, [name]: value };
  }

  setSelectedFilters(newFilters);
  if (onFilterChange) {
    onFilterChange(newFilters);
    
  }
};

console.log(selectedFilters)
  return (
    <>
      {/* Toggle Icon (mobile only) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2  text-gray-600 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
  className={`fixed md:static top-0 left-0 h-full w-64 p-4 bg-white shadow-lg rounded-r-2xl transform transition-transform duration-300 z-40
  ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
>
        {filters.map((filter) => (
          <div key={filter.name} className="mb-6">
            <h3 className="font-bold mb-2">{filter.title}</h3>

            {/* Reviews (stars) */}
            {filter.Reviews?.map((review, index) => (
              <div key={index} className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < review.stars
                        ? "fill-yellow-500 text-yellow-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            ))}

            {/* Radio options */}
            <div className="space-y-2 text-sm">
              {filter.options?.map((option) => (
                
                <label
                  key={option.value}
                  className="flex items-center font-medium space-x-2"
                >
                  <input
                    type="radio"
                    name={filter.name}
                    value={option.value}
                    checked={selectedFilters[filter.name] === option.value}
                    onChange={() => handleChange(filter.name, option.value)}
                    className="accent-blue-600"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </aside>
    </>
  );
}

