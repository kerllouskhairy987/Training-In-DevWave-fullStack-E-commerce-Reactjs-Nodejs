
import ProductCard from "../ui/ProductCard";
import type { IProduct } from "@/interfaces";
import { WebsiteProductSkeleton } from "../skeleton";
import ErrorHandling from "@/error/ErrorHandling";
import WebsiteProductPagination from "../pagination/WebsiteProductsPagination";
import { useAppSelector } from "@/app/hooks/hooks";
import type { RootState } from "@/app/store";
import { useGetProductsQuery } from "@/app/features/website/websiteSlice";

const FilterProducts = () => {

    // Get Page Of Pagination
    const {
        websiteProductPaginationState,
        filterProductByCategory, 
        filterProductByMinPrice,
        filterProductByMaxPrice
    }
        = useAppSelector((state: RootState) => state.globals)


    // ✅ Fetch all products
    const { isLoading, error, data: allProducts }
        = useGetProductsQuery({
            page: websiteProductPaginationState,
            category: filterProductByCategory,
            minPrice: filterProductByMinPrice > 0 ? filterProductByMinPrice : undefined,
            maxPrice: filterProductByMaxPrice > 0 ? filterProductByMaxPrice : undefined
        })
    // console.log("00000000000000", isLoading, Boolean(error))

    if (error) return <div className="text-red-500"><ErrorHandling /></div>
    return (
        <>
            {
                allProducts && !isLoading
                    ? <div className="flex flex-col gap-5">
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
                            {
                                allProducts?.products?.map((product: IProduct) => (
                                    <ProductCard key={product._id} product={product} />
                                ))
                            }
                        </div>
                        {/* Pagination */}
                        <WebsiteProductPagination pages={allProducts?.pages} />
                    </div>
                    : <WebsiteProductSkeleton />
            }
        </>
    )
}

export default FilterProducts