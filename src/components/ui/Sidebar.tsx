/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useGetAllCategoriesQuery } from "@/app/features/Dashboard/dashboardSlice";
import { useAppDispatch } from "@/app/hooks/hooks";
import { filterProductByCategoryAction, filterProductByMaxPriceAction, filterProductByMinPriceAction, websiteProductPaginationAction } from "@/app/features/globals";
import { Button } from "./button";
import { Label } from "./label";

// export default function Sidebar({ filters = [], onFilterChange }: any) {
export default function Sidebar() {
  // const [selectedFilters, setSelectedFilters] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch()

  // Get All Categories
  const { isLoading: isLoadingCategories, data: allCategories, error: errorCategories } = useGetAllCategoriesQuery()
  console.log({ isLoadingCategories, allCategories, errorCategories })


  // Filter Products Handler
  const filterProductsHandler = (categoryId: string) => {
    dispatch(filterProductByCategoryAction(categoryId))
    dispatch(websiteProductPaginationAction(1))
    console.log(categoryId)
  }

  const filterProductByPriceHandler = (minPrice: number, maxPrice: number) => {
    dispatch(filterProductByMinPriceAction(minPrice))
    dispatch(filterProductByMaxPriceAction(maxPrice))
    dispatch(websiteProductPaginationAction(1))
  }

  return (
    <div className="relative">
      {/* Toggle Icon (mobile only) */}
      <button
        className={`md:hidden absolute bg-yellow-400 cursor-pointer -top-2 transition duration-300 ${isOpen ? "left-50" : "left-4"} z-50 p-2  text-gray-600 rounded-lg`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`absolute top-0 left-0 md:static text-black min-h-full w-64 p-4 bg-white shadow-lg rounded-r-2xl transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-6">Brands</h2>
        <Button onClick={() => filterProductsHandler("")} className="font-bold cursor-pointer mb-3 w-full bg-yellow-400">all brands</Button>

        {allCategories?.categories.map((category) => (
          <div key={category._id} className="mb-6">

            {/* Brands Radio */}
            <div className="flex items-center gap-1" >
              <input type="radio" name="categories" id={category._id} />
              <label onClick={() => filterProductsHandler(category._id)} htmlFor={category._id} className="font-normal cursor-pointer w-full">{category.name}</label>
            </div>

            {/* Reviews (stars) */}
            {/* {filter.Reviews?.map(({ review, index }: { review: any; index: number; }) => (
              <div key={index} className="flex items-center mb-2 cursor-pointer">
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
            ))
            } */}


            {/* Radio options */}
            {/* <div className="space-y-2 text-sm">
              {filter?.options?.map((option: { label: string; value: string; }) => (
                <label
                  key={option.value}
                  className="flex items-center font-medium space-x-2 text-black cursor-pointer"
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
            </div> */}
          </div>
        ))
        }


        {/* Price Radio */}
        <h2 className="text-xl font-bold mb-6" >Price</h2>
        <div className="flex flex-col gap-2">
          <div>
            <input type="radio" id="all" name="price" className="hidden" />
            <Label htmlFor="all" onClick={() => filterProductByPriceHandler(0, 0)} className="font-bold cursor-pointer mb-3 w-full py-3 rounded-2xl flex justify-center bg-yellow-400">all</Label>
          </div>
          <div className="cursor-pointer">
            <input type="radio" id="1" name="price" />
            <label
              onClick={() => filterProductByPriceHandler(10, 100)}
              className="cursor-pointer" htmlFor="1">₹10 to ₹100</label>
          </div>
          <div className="cursor-pointer">
            <input type="radio" id="2" name="price" />
            <label
              onClick={() => filterProductByPriceHandler(100, 200)}
              className="cursor-pointer" htmlFor="2">₹100 to ₹200</label>
          </div>
          <div className="cursor-pointer">
            <input type="radio" id="3" name="price" />
            <label
              onClick={() => filterProductByPriceHandler(200, 300)}
              className="cursor-pointer" htmlFor="3">₹200 to ₹300</label>
          </div>
          <div className="cursor-pointer">
            <input type="radio" id="4" name="price" />
            <label
              onClick={() => filterProductByPriceHandler(300, 450000)}
              className="cursor-pointer" htmlFor="4">₹300 to ₹450000</label>
          </div>
        </div>
      </aside>
    </div>
  );
}

