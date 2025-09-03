





// // import MultiActionAreaCard from '../ui/Card'
// // import Sidebar from '../ui/Sidebar'
// // import { getProducts,getFilterdProducts } from '../../Api\'s/products'
// // import { useQuery } from "@tanstack/react-query";
// // import axios from 'axios'
// // import { useState, useEffect } from 'react'

// //  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YjdmYjdkNTBmNjM5ODY5ZDE4OTU4NiIsImVtYWlsIjoiYmFzbWFAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTY4ODgwMzksImV4cCI6MTc1Njk3NDQzOX0.t0mRtQfiq8WvQfGkgSlB6DKEUOuD1_Vzi9D8gPj86Q8"


// // export default function Products() {
// //   // ✅ all hooks must be declared at the top
// //   const [filterConfig, setFilterConfig] = useState([]);

// //   const { data: allProducts, isLoading, error } = useQuery({
// //     queryKey: ["products"],
// //     queryFn: getProducts,
// //   });

// //   useEffect(() => {
// //     const fetchBrands = async () => {
// //       try {
// //         let { data } = await axios.get(
// //           'https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/brands/get-all-brands',
// //           {
// //             headers: {
// //               'Authorization': `Bearer ${token}`
// //             }
// //           }
// //         );
// //         console.log(data);

// //         const brandOptions = data.brands.map((brand) => ({
// //           label: brand,
// //           value: brand,
// //         }));

// //         setFilterConfig([
// //           {
// //             title: "Delivery Day",
// //             name: "deliveryDay",
// //             options: [{ label: "Get it in 2 Days", value: "2" }],
// //           },
// //           {
// //             title: "Customer Reviews",
// //             name: "Reviews",
// //             Reviews: [{ stars: 4 }],
// //           },
// //           {
// //             title: "Brands",
// //             name: "brand",
// //             options: brandOptions,
// //           },
// //           {
// //             title: "Price",
// //             name: "price",
// //             options: [
// //               { label: "All", value: "all" },
// //               { label: "₹5,000 to ₹10,000", value: "5000-10000" },
// //               { label: "₹10,000 to ₹20,000", value: "10000-20000" },
// //               { label: "₹20,000 to ₹30,000", value: "20000-30000" },
// //               { label: "₹30,000 to ₹45,000", value: "30000-45000" },
// //             ],
// //           },
// //         ]);
// //       } catch (error) {
// //         console.error("Failed to fetch brands:", error.message);
// //       }
// //     };

// //     fetchBrands();
// //   }, []);

// //   const handleFilters = (filters) => {
// //       const { data: filtersdata, isLoading: isLoading2, error: error2 } = useQuery({
// //     queryKey: ["filters"],
// //     queryFn: () => getFilterdProducts(filters),
// //   })
// //   if(isLoading2) return <p>Loading...</p>;
// //   else{   console.log(filtersdata)
// //   }
// //   if(error2) return <p>Error loading products</p>;


// //   };

// //   // ✅ only return after all hooks are defined
// //   if (isLoading) return <p>Loading...</p>;
// //   if (error) return <p>Error loading products</p>;

// //   return (
// //     <div className="flex">
// //       <Sidebar filters={filterConfig} onFilterChange={handleFilters} />
// //     <section className="flex-1 p-4">
// //     <h1 className="text-2xl font-bold mb-4">Our Products</h1>
// //     <div className="flex flex-wrap gap-4">
// //       {allProducts?.products.map((product) => (
// //         <article key={product._id}>
// //           <MultiActionAreaCard product={product} />
// //         </article>
// //       ))}
// //     </div>
// //   </section>
// //     </div>
// //   )
// // }






// import MultiActionAreaCard from '../ui/Card'
// import Sidebar from '../ui/Sidebar'
// import { getProducts, getFilterdProducts } from '../../Api\'s/products'
// import { useQuery } from "@tanstack/react-query";
// import axios from 'axios'
// import { useState, useEffect } from 'react'

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YjdmYjdkNTBmNjM5ODY5ZDE4OTU4NiIsImVtYWlsIjoiYmFzbWFAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTY5MTIwOTAsImV4cCI6MTc1Njk5ODQ5MH0.mNDPR6NOr1M1b-M_aN2dRV1TYGW2jU2k5z2utGIx7uU";

// export default function Products() {
//   const [filterConfig, setFilterConfig] = useState([]);
//   const [activeFilters, setActiveFilters] = useState(null); // ✅ store active filters

//   // Fetch all products
//   const { data: allProducts, isLoading, error } = useQuery({
//     queryKey: ["products"],
//     queryFn: getProducts,
//   });

//   // Fetch filtered products based on activeFilters
//   const { data: filteredProducts, isLoading: isFiltering, error: filterError } = useQuery({
//     queryKey: ["filters", activeFilters], // ✅ add filters to key for caching
//     queryFn: () => getFilterdProducts(activeFilters),
//     enabled: !!activeFilters, // ✅ only run when filters exist
//   });
//   console.log(filteredProducts)
//   // if (isFiltering) return <p>Loading...</p>;
//   // else {console.log(filteredProducts)}

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         let { data } = await axios.get(
//           'https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/brands/get-all-brands',
//           {
//             headers: {
//               'Authorization': `Bearer ${token}`
//             }
//           }
//         );

//         const brandOptions = data.brands.map((brand) => ({
//           label: brand,
//           value: brand,
//         }));

//         setFilterConfig([
//           {
//             title: "Delivery Day",
//             name: "deliveryDay",
//             options: [{ label: "Get it in 2 Days", value: "2" }],
//           },
//           {
//             title: "Customer Reviews",
//             name: "Reviews",
//             Reviews: [{ stars: 4 }],
//           },
//           {
//             title: "Brands",
//             name: "brand",
//             options: brandOptions,
//           },
//           {
//             title: "Price",
//             name: "price",
//             options: [
//               { label: "All", value: "all" },
//               { label: "₹5,000 to ₹10,000", value: "5000-10000" },
//               { label: "₹10,000 to ₹20,000", value: "10000-20000" },
//               { label: "₹20,000 to ₹30,000", value: "20000-30000" },
//               { label: "₹30,000 to ₹45,000", value: "30000-45000" },
//             ],
//           },
//         ]);
//       } catch (error) {
//         console.error("Failed to fetch brands:", error.message);
//       }
//     };

//     fetchBrands();
//   }, []);

//   // ✅ just update state, no hook inside
//   const handleFilters = (filters) => {
//     setActiveFilters(filters);
//   };

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading products</p>;

//   return (
//     <div className="flex">
//       <Sidebar filters={filterConfig} onFilterChange={handleFilters} />

//       <section className="flex-1 p-4">
//         <h1 className="text-2xl font-bold mb-4">Our Products</h1>

//         <div className="flex flex-wrap gap-4">
//           {(isFiltering ? filteredProducts?.products : allProducts?.products)?.map((product) => (
//             <article key={product._id}>
//               <MultiActionAreaCard product={product} />
//             </article>
//           ))}
//         </div>

//         {isFiltering && <p>Loading filtered products...</p>}
//         {filterError && <p>Error loading filtered products</p>}
//       </section>
//     </div>
//   )
// }









// import MultiActionAreaCard from '../ui/Card'
// import Sidebar from '../ui/Sidebar'
// import { getProducts, getFilterdProducts } from '../../Api\'s/products'
// import { useQuery } from "@tanstack/react-query";
// import axios from 'axios'
// import { useState, useEffect } from 'react'

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YjdmYjdkNTBmNjM5ODY5ZDE4OTU4NiIsImVtYWlsIjoiYmFzbWFAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTY5MTIwOTAsImV4cCI6MTc1Njk5ODQ5MH0.mNDPR6NOr1M1b-M_aN2dRV1TYGW2jU2k5z2utGIx7uU";

// export default function Products() {
//   const [filterConfig, setFilterConfig] = useState([]);
//   const [activeFilters, setActiveFilters] = useState(null);

//   // Fetch all products
//   const { data: allProducts, isLoading, error } = useQuery({
//     queryKey: ["products"],
//     queryFn: getProducts,
//   });

//   // Fetch filtered products
//   const {
//     data: filteredProducts,
//     isLoading: isFiltering,
//     error: filterError,
//   } = useQuery({
//     queryKey: ["filters", activeFilters],
//     queryFn: () => getFilterdProducts(activeFilters),
//     enabled: !!activeFilters, // only run when filters exist
//   });
//   if(isFiltering) return <p>Loading...</p>
//   if(filterError) return <p>Filter Error loading products</p>

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         let { data } = await axios.get(
//           'https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/brands/get-all-brands',
//           {
//             headers: {
//               'Authorization': `Bearer ${token}`
//             }
//           }
//         );

//         const brandOptions = data.brands.map((brand) => ({
//           label: brand,
//           value: brand,
//         }));

//         setFilterConfig([
//           {
//             title: "Delivery Day",
//             name: "deliveryDay",
//             options: [{ label: "Get it in 2 Days", value: "2" }],
//           },
//           {
//             title: "Customer Reviews",
//             name: "Reviews",
//             Reviews: [{ stars: 4 }],
//           },
//           {
//             title: "Brands",
//             name: "brand",
//             options: brandOptions,
//           },
//           {
//             title: "Price",
//             name: "price",
//             options: [
//               { label: "All", value: "all" },
//               { label: "₹5,000 to ₹10,000", value: "5000-10000" },
//               { label: "₹10,000 to ₹20,000", value: "10000-20000" },
//               { label: "₹20,000 to ₹30,000", value: "20000-30000" },
//               { label: "₹30,000 to ₹45,000", value: "30000-45000" },
//             ],
//           },
//         ]);
//       } catch (error) {
//         console.error("Failed to fetch brands:", error.message);
//       }
//     };

//     fetchBrands();
//   }, []);

//   // handle filter changes
//   const handleFilters = (filters) => {
//     setActiveFilters(filters);
//   };

//   if (isLoading) return <p>Loading all products...</p>;
//   if (error) return <p>Error loading products</p>;

//   // decide which products to display
//   const productsToDisplay =
//     activeFilters && filteredProducts
//       ? filteredProducts.products
//       : allProducts?.products;

//   return (
//     <div className="flex">
//       <Sidebar filters={filterConfig} onFilterChange={handleFilters} />

//       <section className="flex-1 p-4">
//         <h1 className="text-2xl font-bold mb-4">Our Products</h1>

//         {isFiltering && <p>Loading filtered products...</p>}
//         {filterError && <p>Error loading filtered products</p>}

//         <div className="flex flex-wrap gap-4">
//           {productsToDisplay?.map((product) => (
//             <article key={product._id}>
//               <MultiActionAreaCard product={product} />
//             </article>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }





// import MultiActionAreaCard from '../ui/Card'
// import Sidebar from '../ui/Sidebar'
// import { getProducts, getFilterdProducts } from '../../Api\'s/products'
// import { useQuery } from "@tanstack/react-query";
// import axios from 'axios'
// import { useState, useEffect } from 'react'

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YjdmYjdkNTBmNjM5ODY5ZDE4OTU4NiIsImVtYWlsIjoiYmFzbWFAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTY5MTIwOTAsImV4cCI6MTc1Njk5ODQ5MH0.mNDPR6NOr1M1b-M_aN2dRV1TYGW2jU2k5z2utGIx7uU";

// export default function Products() {
//   const [filterConfig, setFilterConfig] = useState([]);
//   const [activeFilters, setActiveFilters] = useState(null);

//   // Fetch all products
//   const { data: allProducts, isLoading, error } = useQuery({
//     queryKey: ["products"],
//     queryFn: getProducts,
//   });

//   // Fetch filtered products
//   const {
//     data: filteredProducts,
//     isLoading: isFiltering,
//     error: filterError,
//   } = useQuery({
//     queryKey: ["filters", activeFilters],
//     queryFn: () => getFilterdProducts(activeFilters),
//     enabled: !!activeFilters,
//   });

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         let { data } = await axios.get(
//           'https://training-in-dev-wave-full-stack-e-c.vercel.app/api/products/brands/get-all-brands',
//           {
//             headers: { 'Authorization': `Bearer ${token}` }
//           }
//         );

//         const brandOptions = data.brands.map((brand) => ({
//           label: brand,
//           value: brand,
//         }));

//         setFilterConfig([
//           {
//             title: "Delivery Day",
//             name: "deliveryDay",
//             options: [{ label: "Get it in 2 Days", value: "2" }],
//           },
//           {
//             title: "Customer Reviews",
//             name: "Reviews",
//             Reviews: [{ stars: 4 }],
//           },
//           {
//             title: "Brands",
//             name: "brand",
//             options: brandOptions,
//           },
//           {
//             title: "Price",
//             name: "price",
//             options: [
//               { label: "All", value: "all" },
//               { label: "₹5,000 to ₹10,000", value: "5000-10000" },
//               { label: "₹10,000 to ₹20,000", value: "10000-20000" },
//               { label: "₹20,000 to ₹30,000", value: "20000-30000" },
//               { label: "₹30,000 to ₹45,000", value: "30000-45000" },
//             ],
//           },
//         ]);
//       } catch (error) {
//         console.error("Failed to fetch brands:", error.message);
//       }
//     };

//     fetchBrands();
//   }, []);

//   // handle filter changes
//   const handleFilters = (filters) => {
//     setActiveFilters(filters);
//   };

//   // Decide which products to display
//   const productsToDisplay =
//     activeFilters && filteredProducts
//       ? filteredProducts.products
//       : allProducts?.products;

//   return (
//     <div className="flex">
//       <Sidebar filters={filterConfig} onFilterChange={handleFilters} />

//       <section className="flex-1 p-4">
//         <h1 className="text-2xl font-bold mb-4">Our Products</h1>

//         {/* ✅ Show loading/error states here instead of returning early */}
//         {isLoading && <p>Loading all products...</p>}
//         {error && <p>Error loading products</p>}
//         {isFiltering && <p>Loading filtered products...</p>}
//         {filterError && <p>Filter Error loading products</p>}

//         <div className="flex flex-wrap gap-4">
//           {productsToDisplay?.map((product) => (
//             <article key={product._id}>
//               <MultiActionAreaCard product={product} />
//             </article>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }









import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import MultiActionAreaCard from "../ui/Card";
// import Sidebar from "../ui/Sidebar";
const Sidebar = React.lazy(() => import("../ui/Sidebar"));
const MultiActionAreaCard = React.lazy(() => import("../ui/Card"));
import { getProducts, getFilterdProducts } from "../../Api's/products";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YjdmYjdkNTBmNjM5ODY5ZDE4OTU4NiIsImVtYWlsIjoiYmFzbWFAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTY5MTIwOTAsImV4cCI6MTc1Njk5ODQ5MH0.mNDPR6NOr1M1b-M_aN2dRV1TYGW2jU2k5z2utGIx7uU";

export default function Products() {
  const [filterConfig, setFilterConfig] = useState([]);
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
    cacheTime: 1000 * 60 * 10,
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
    keepPreviousData: true, // smoother transitions
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

        const brandOptions = data.brands.map((brand) => ({
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
            name: "reviews",
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
              { label: "₹5,000 to ₹10,000", value: "5000-10000" },
              { label: "₹10,000 to ₹20,000", value: "10000-20000" },
              { label: "₹20,000 to ₹30,000", value: "20000-30000" },
              { label: "₹30,000 to ₹45,000", value: "30000-45000" },
            ],
          },
        ]);
      } catch (err) {
        console.error("Failed to fetch brands:", err.message);
      }
    };

    fetchBrands();
  }, []);

  // ✅ Stable handler (prevents Sidebar re-renders)
  const handleFilters = useCallback((filters) => {
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

      <section className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Our Products</h1>

        {isFiltering && <p>Loading filtered products...</p>}
        {filterError && <p>Error loading filtered products</p>}

        <div className="flex flex-wrap gap-4">
          {productsToDisplay.map((product) => (
            <article key={product._id}>
              <MultiActionAreaCard product={product} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
