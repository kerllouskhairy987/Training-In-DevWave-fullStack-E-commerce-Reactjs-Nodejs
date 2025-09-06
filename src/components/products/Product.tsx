/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import MultiActionAreaCard from "../ui/Card";
// import Sidebar from "../ui/Sidebar";
const Sidebar = React.lazy(() => import("../ui/Sidebar"));
const MultiActionAreaCard = React.lazy(() => import("../ui/card"));
import { getProducts, getFilterdProducts } from "../../Api's/products";

const token = localStorage.getItem("userToken");

export default function Products() {
  const [filterConfig, setFilterConfig] = useState<any>([]);
  const [activeFilters, setActiveFilters] = useState(null);

  // ✅ Fetch all products
  const {
    data: allProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5, // cache for 5 min
    // cacheTime: 1000 * 60 * 10,
  });

  // ✅ Fetch filtered products
  const {
    data: filteredProducts,
    isLoading: isFiltering,
    error: filterError,
  } = useQuery({
    queryKey: ["filters", activeFilters],
    queryFn: () => getFilterdProducts(activeFilters),
    enabled: !!activeFilters, // only run when filters exist
    // keepPreviousData: true, // smoother transitions
  });

  // ✅ Fetch filter options (brands, etc.)
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const { data } = await axios.get(
          "https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/brands/get-all-brands",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const brandOptions = data.brands.map((brand: string[]) => ({
          label: brand,
          value: brand,
        }));

        setFilterConfig([
          {
            title: "Delivery Day",
            name: "deliveryDay",
            options: [{ label: "Get it in 2 Days", value: "2" }],
          },
          {
            title: "Customer Reviews",
            name: "stars",
            options: [{ label: "4 Stars & Up", value: 4 }],
          },
          {
            title: "Brands",
            name: "brand",
            options: brandOptions,
          },
          {
            title: "Price",
            name: "price",
            options: [
              { label: "All", value: "all" },
              { label: "₹100 to ₹200", value: "100-200" },
              { label: "₹200 to ₹400", value: "200-400" },
              { label: "₹400 to ₹600", value: "400-600" },
              { label: "₹600 to ₹1000", value: "600-1000" },
            ],
          },
        ]);
      } catch (error) {
        const err = error as { message: string };
        console.error("Failed to fetch brands:", err.message);
      }
    };

    fetchBrands();
  }, []);

  // ✅ Stable handler (prevents Sidebar re-renders)
  const handleFilters = useCallback((filters: any) => {
    setActiveFilters(filters);
  }, []);

  // ✅ Decide which products to show
  const productsToDisplay = useMemo(() => {
    if (activeFilters && filteredProducts) {
      return filteredProducts.products;
    }
    return allProducts?.products || [];
  }, [activeFilters, filteredProducts, allProducts]);

  // ✅ Loading / Error states
  if (isLoading) return <p>Loading all products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="flex">
      {/* Sidebar with memoized filters */}
      <Sidebar filters={filterConfig} onFilterChange={handleFilters} />

      <section className="flex-1 p-4 mt-12 md:mt-0">
        <h1 className="text-2xl font-bold mb-4">Our Products</h1>

        {isFiltering && <p>Loading filtered products...</p>}
        {filterError && <p>Error loading filtered products</p>}

        <div className="flex flex-wrap gap-4">
          {productsToDisplay.map((product: any) => (
            <article key={product._id} className="text-black">
              <MultiActionAreaCard product={product} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
