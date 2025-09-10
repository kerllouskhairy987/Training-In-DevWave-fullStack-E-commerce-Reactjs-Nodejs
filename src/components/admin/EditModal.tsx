/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import SpinnerComponent from "../ui/Spinner";
import useFormFields from "./hooks/useFormFields";
import FormFields from "./FormFields";
import { useEffect, useRef, useState } from "react";
import { ErrorToast, successToast } from "@/notification";
import { useGetAllCategoriesQuery, useGetSingleProductQuery, useUpdateProductMutation } from "@/app/features/Dashboard/dashboardSlice";
import MultipleSelect from "../ui/SelectionButton";
import { useAppSelector } from "@/app/hooks/hooks";
import type { RootState } from "@/app/store";
// import type { IProduct } from "@/interfaces";

type ProductField = 'name' | 'description' | 'price' | 'discount' | 'stock' | 'stars' | 'category' | 'brand' | 'saleRate';

interface IProps {
    productId: string
    children: React.ReactNode;
}

const EditModal = ({ children, productId }: IProps) => {
    const [open, setOpen] = useState(false)
    const formRef = useRef<HTMLFormElement>(null);
    const [categoriesName, setCategoriesName] = useState<Record<string, string>[]>([])

    const [uploadedImages, setUploadedImages] = useState<string[]>([]);

    const { getFormFields } = useFormFields({ slug: "update" });

    const { valueInSelected } = useAppSelector((state: RootState) => state.globals)


    const { data } = useGetSingleProductQuery({ id: String(productId) })

    // ------------------------------------------------categories part-
    // Get All Categories
    const { data: allCategories } = useGetAllCategoriesQuery()

    useEffect(() => {
        if (allCategories?.categories.length === 0) return
        allCategories?.categories.map((category) => {
            setCategoriesName((prev) => [...prev, { id: category._id, name: category.name }])
        })
    }, [allCategories?.categories])
    // -------------------------------------------------categories part-

    // Update Product
    const [updateProduct, { isLoading: isLoadingUpdateProduct, data: dataUpdateProduct, isSuccess: isSuccessUpdateProduct, error: errorUpdateProduct }]
        = useUpdateProductMutation();

    // Create Date
    const date = new Date();
    const currentDate = date.toISOString();

    const handleImagesChange = (images: string[]) => {
        setUploadedImages(images);
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const data: Record<string, string | number> = {};
        formData.forEach((value, key) => {
            if (key === "price" || key === "discount" || key === "stock" || key === "stars") {
                data[key] = +value;
            } else {
                data[key] = value.toString();
            }
        });

        const { name, description, price, discount, stock, stars, category, brand, saleRate } = data;

        if (name === "" || description === "" || price === "" || discount === "" || stock === "" || uploadedImages.length === 0 || brand === "" || stars === "" || category === "") {
            ErrorToast({ message: "All fields are required" })
            return
        }

        updateProduct({
            id: productId,
            name: name as string,
            brand: brand as string,
            description: description as string,
            price: price as number,
            category: valueInSelected as string,
            stock: stock as number,
            images: uploadedImages,
            deliveryDate: currentDate,
            stars: stars as number,
            discount: discount as number,
            saleRate: Number(saleRate),
        })

        // close modal after submit
        formRef.current.reset();
        setOpen(false);
    }

    useEffect(() => {
        if (isSuccessUpdateProduct) {
            successToast({ message: dataUpdateProduct?.message as string })
        }

        if (errorUpdateProduct) {
            const err = errorUpdateProduct as { data: { message: string } }
            ErrorToast({ message: err.data?.message })
        }
    }, [isSuccessUpdateProduct, errorUpdateProduct, dataUpdateProduct?.message])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild onClick={() => setOpen(!open)}>
                {children}
            </DialogTrigger>
            {/* close modal after submit */}
            <DialogContent className={`w-full sm:max-w-[555px] overflow-y-scroll h-[calc(100vh-200px)]`}>
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re
                        done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={submitHandler} ref={formRef}>
                    <div className="grid gap-4">
                        {
                            getFormFields().map((field) => (
                                <div key={field.id} className="grid gap-3">
                                    <FormFields
                                        key={field.name}
                                        {...field}
                                        error={""}
                                        defaultValue={data?.product[field.name as ProductField] as string}
                                        // defaultValue={(data as { [key: string]: any })?.[field.name]}
                                        // defaultValue={(data as { [key: string]: any })?.[field.name]}
                                        onImagesChange={
                                            field.type === "image-upload" ? handleImagesChange : undefined
                                        }
                                    />
                                </div>
                            ))
                        }
                        <div className="flex flex-col gap-1">
                            <p>Select Category</p>
                            <MultipleSelect dataToMap={categoriesName} />
                        </div>
                    </div>
                    <DialogFooter className="mt-5">
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button className="bg-green-600" type={isLoadingUpdateProduct ? "button" : "submit"}>
                            {isLoadingUpdateProduct ? <SpinnerComponent /> : "Save changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}

export default EditModal