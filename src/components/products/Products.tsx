import Sidebar from "../ui/Sidebar"
import FilterProducts from "./FilterProducts"

const ProductsPage = () => {
    return (
        <div className="my-5 flex gap-5 items-start">
            <Sidebar />

            <div className="flex-1 mt-10 sm:mt-0">
                <FilterProducts />
            </div>
        </div>
    )
}

export default ProductsPage