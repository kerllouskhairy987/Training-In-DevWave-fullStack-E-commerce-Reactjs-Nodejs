import {
    useDeleteProductMutation,
    useGetProductsQuery,
} from "@/app/features/Dashboard/dashboardSlice"
import { useAppSelector } from "@/app/hooks/hooks"
import type { RootState } from "@/app/store"
import AlertModal from "@/components/admin/AlertModal"
import EditModal from "@/components/admin/EditModal"
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
import ErrorHandling from "@/error/ErrorHandling"
import { ErrorToast, successToast } from "@/notification"
import { Edit, Eye, Trash } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const DashboardProducts = () => {

    const [getUpdatedProductId, setGetUpdatedProductId] = useState<string | null>(null)
    console.log(getUpdatedProductId)
    const { currentPage, network } = useAppSelector((state: RootState) => state.globals)

    const tableHeading = ["id", "name", "brand", "description", "price", "category", "stock", "stars", "discount", "images", "actions",]

    // Delete Product
    const [deleteProduct, { isLoading: isLoadingDelete, data: dateDelete, isSuccess: isSuccessDelete, error: errorDelete }] = useDeleteProductMutation();
    const onSubmitDelete = (id: string) => deleteProduct({ id })


    useEffect(() => {
        if (errorDelete) {
            const err = errorDelete as { message: string }
            ErrorToast({ message: err.message })
        }

        if (isSuccessDelete) {
            successToast({ message: dateDelete.message })
        }
    }, [errorDelete, isSuccessDelete, dateDelete, currentPage])


    // Get All Products
    const { isLoading, data, isError } = useGetProductsQuery({ page: currentPage })

    const getSingleProductDetails = (id: string) => {
        setGetUpdatedProductId(id)
    }


    if (isLoading || !network) return <DashboardProductsTableSkeleton />
    if (isError) return <div className="flex justify-center min-h-screen items-center bg-black w-full"><ErrorHandling /></div>

    return (
        <div className="flex-1 px-2 py-4 !overflow-hidden bg-[#15283c]">
            <Table className="overflow-x-auto">
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
                    {data?.products.map((product) => {
                        // getSingleCategory({ id: product.category as string })
                        return (
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
                                <TableCell>{product.discount} %</TableCell>
                                <TableCell>
                                    <img src={product.images[0]} alt={product.name} className="w-[50px] h-[50px] rounded-full" />
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex items-center gap-2">
                                        <Link to={`/products/${product._id}`}>
                                            <Button className="bg-yellow-600 text-white hover:bg-yellow-700 ">
                                                <Eye />
                                            </Button>
                                        </Link>

                                        <EditModal productId={product._id.toString()}>
                                            <Button onClick={() => getSingleProductDetails(product._id.toString())} className="bg-violet-600 text-white hover:bg-violet-700">
                                                <Edit />
                                            </Button>
                                        </EditModal>

                                        <AlertModal
                                            isSuccess={isSuccessDelete}
                                            isLoading={isLoadingDelete} onDelete={() => onSubmitDelete(product._id.toString())}>
                                            <Button variant={"destructive"}>
                                                <Trash />
                                            </Button>
                                        </AlertModal>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    })}
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
