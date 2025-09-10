import { ArrowDown, Star } from "lucide-react"
import { Button } from "./button"
import type { IProduct } from "@/interfaces"
import { Link } from "react-router-dom"
type TProps = {
    product: IProduct
}
const ProductCard = ({ product }: TProps) => {

    return (
        <Link to={`/products/${product._id}`}>
            <div className="flex flex-col gap-3 p-3 border border-[#D9D9D9] hover:bg-gray-50">
                <img src={product.images[0]} alt={product.name} className="h-[200px] object-cover object-center" />
                <h2 className="font-semibold text-lg line-clamp-4 text-black">{product.name}</h2>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-[2px] text-yellow-300">
                            {
                                Array.from({ length: product.stars }).map((_, index) => (
                                    <Star key={index} className="fill-yellow-300 w-4" />
                                ))
                            }
                            {
                                Array.from({ length: 5 - product.stars }).map((_, index) => (
                                    <Star key={index} className="w-4" />
                                ))
                            }
                            <ArrowDown className="w-4 text-black" />
                        </div>
                        <span className="text-xl text-[#1F8394]">12,323</span>
                    </div>
                    <span className="text-sm text-[#717171]"></span>
                </div>

                <div>
                    <span className="text-xl font-normal text-black">₹{product.price} <span>({product.discount}% off)</span></span>
                    <p className="text-sm text-[#7F7F7F]">Save extra with No Cost EMI</p>
                </div>

                <div className="text-black">
                    <span>FREE delivery by</span>
                    <span>Sat, 14 Sept,</span>
                    <p> 7:00 am - 9:00 pm</p>
                </div>

                <Button className="bg-[#FFCC00] text-black text-sm font-light">Add To Cart</Button>
            </div>
        </Link>
    )
}

export default ProductCard