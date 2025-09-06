import { useClearCartMutation, useDeleteFromCartMutation, useGetCartQuery } from "@/app/features/shopping/shoppingSlice";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { CartSkeleton } from "../skeleton";
import AlertModal from "../admin/AlertModal";
import { ErrorToast, successToast } from "@/notification";
import { useEffect } from "react";
import ErrorHandling from "@/error/ErrorHandling";


const CartItems = () => {

    // Get Cart
    const { isLoading, data, error } = useGetCartQuery();

    // Delete From Cart
    const [deleteFromCart, { isLoading: isLoadingDelete, data: dataDelete, isSuccess: isSuccessDelete, error: errorDelete }]
        = useDeleteFromCartMutation();

    // Clear Cart
    const [clearCart, { isLoading: isLoadingClear, data: dataClear, isSuccess: isSuccessClear }] = useClearCartMutation();

    const handleDeleteFromCart = (id: string) => {
        deleteFromCart({ productId: id });
    }

    const handleClearCart = () => {
        clearCart();
    }

    const dataShopping = data?.data
    const cart = dataShopping?.items

    useEffect(() => {
        // Delete From Cart
        if (errorDelete) {
            console.log(errorDelete)
            const err = errorDelete as { message: string }
            ErrorToast({ message: err.message })
        }

        if (isSuccessDelete) {
            successToast({ message: dataDelete?.message })
        }

        // Clear Cart
        if (isSuccessClear) {
            successToast({ message: dataClear?.message })
        }
    }, [errorDelete, isSuccessDelete, isSuccessClear, dataDelete?.message, dataClear?.message])

    if (isLoading) return <CartSkeleton />
    if (error) {
        return <div className="flex justify-center items-center"><ErrorHandling /></div>
    }

    return (
        <div >
            {/* // {isMounted && cart && cart.length > 0 ? ( */}
            {cart && cart.length > 0
                ? (
                    <>
                        <ul>
                            {cart.map((item) => (
                                <li key={item._id} className="mb-4">
                                    <div className="flex gap-6 justify-between border p-3 rounded-md hover:bg-primary/10">
                                        <div className="flex flex-col sm:flex-row items-center gap-2">
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden">
                                                {/* <img
                                                    src={item.product.image}
                                                    className="object-cover"
                                                    alt={item.product.name}
                                                /> */}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold md:text-lg">{item.product.name}</h4>
                                                <span className=" text-sm text-accent-foreground/50">
                                                    quantity: {item.quantity}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex-1 flex items-end justify-end">
                                            <div className="flex items-center gap-3">
                                                <strong className="text-accent-foreground/50 ">
                                                    {item.price} $
                                                </strong>
                                                <AlertModal isLoading={isLoadingDelete}
                                                    onDelete={() => handleDeleteFromCart(item._id)}
                                                >
                                                    <Button
                                                        onClick={() => { console.log(item._id) }}
                                                        variant="destructive"
                                                        className="border"
                                                    >
                                                        <Trash2 />
                                                    </Button>
                                                </AlertModal>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col justify-end items-end pt-6">
                            <span className="text-primary font-medium flex gap-2">
                                Subtotal:
                                <strong className="text-accent-foreground/50">
                                    {dataShopping.totalAmount}
                                </strong>
                            </span>
                            <span className="text-primary font-medium flex gap-2">
                                Delivery:
                                <strong className="text-accent-foreground/50">
                                    5
                                </strong>
                            </span>
                            <span className="text-primary font-medium flex gap-2">
                                Total:
                                <strong className="text-accent-foreground/50">
                                    {dataShopping.totalAmount + 5}
                                </strong>
                            </span>
                        </div>

                        <AlertModal isLoading={isLoadingClear} onDelete={handleClearCart}>
                            <Button variant={"destructive"} className="w-full my-5">Clear Your Cart</Button>
                        </AlertModal>
                    </>
                )
                : (
                    <h4 className="flex justify-center items-center text-2xl text-red-500">
                        YOU HAVE NO ITEMS IN YOUR CART
                    </h4>
                )
            }
        </div>
    )
};

export default CartItems;
