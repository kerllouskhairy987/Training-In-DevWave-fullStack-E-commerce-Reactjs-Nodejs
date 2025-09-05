import { useGetProductsQuery } from "@/app/features/Dashboard/dashboardSlice"
import { useAppSelector } from "@/app/hooks/hooks"
import type { RootState } from "@/app/store"
import Pagination from "@/components/admin/Pagination"
import { DashboardProductsTableSkeleton } from "@/components/skeleton"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Edit, Eye, Trash } from "lucide-react"

const DashboardProducts = () => {

    // const { pathname } = useLocation()
    const { currentPage } = useAppSelector((state: RootState) => state.globals)

    const tableHeading = ["id", "name", "brand", "description", "price", "category", "stock", "stars", "discount", "images", "actions",]

    const { isLoading, data, isError, error, isSuccess } = useGetProductsQuery({ page: currentPage })
    console.log(isLoading, data?.products, isError, error, isSuccess)

    if (isLoading) return <DashboardProductsTableSkeleton />
    if (isError) return <h1>Something went wrong</h1>

    return (
        <div className="px-2 py-4">
            <Table className="bg-blue-700/50">
                <TableCaption className=" text-yellow-600 font-bold text-sm">A list of your recent products.</TableCaption>
                <TableHeader>
                    <TableRow>
                        {
                            tableHeading.map((link) => (
                                <TableHead key={link}
                                    className={`
                                ${link === "actions" ? "text-right" : ""}
                                px-2`}
                                >{link}</TableHead>
                            ))
                        }
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.products.map((product) => (
                        <TableRow key={product._id} className="even:bg-blue-600/50">
                            <TableCell className="font-medium max-w-[50px] overflow-hidden">{product._id}</TableCell>
                            <TableCell className="w-[200px] whitespace-pre-wrap line-clamp-3 pb-0 my-5">{product.name}</TableCell>
                            <TableCell>{product.brand}</TableCell>
                            <TableCell className="w-[200px] whitespace-pre-wrap line-clamp-3 pb-0">{product.description}</TableCell>
                            <TableCell>{product.price} $</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.stock}</TableCell>
                            <TableCell>

                                {
                                    product.stars ? Array.from({ length: product.stars }).map((_, i) => (
                                        <span key={i} className="text-yellow-600">⭐</span>
                                    )) : "__"
                                }
                            </TableCell>
                            <TableCell>{product.discount} $</TableCell>
                            <TableCell>
                                <img src={product.images[0]} alt={product.name} className="w-[50px] h-[50px] rounded-full" />
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex items-center gap-2">
                                    <Button className="bg-yellow-600 text-white hover:bg-yellow-700 ">
                                        <Eye />
                                    </Button>
                                    <Button className="bg-violet-600 text-white hover:bg-violet-700">
                                        <Edit />
                                    </Button>
                                    <Button variant={"destructive"}>
                                        <Trash />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={10}>Products</TableCell>
                        <TableCell className="text-right">{data?.total} Products</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

            {/* Pagination */}
            <Pagination pages={data?.pages} />
        </div>
    )
}

export default DashboardProducts
