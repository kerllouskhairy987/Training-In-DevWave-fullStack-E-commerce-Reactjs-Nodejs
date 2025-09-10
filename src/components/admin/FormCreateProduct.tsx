
import { useEffect, useRef } from "react"
import { Button } from "../ui/button"
import SpinnerComponent from "../ui/Spinner"
import FormFields from "./FormFields"
import useFormFields from "./hooks/useFormFields"
import { ErrorToast, successToast } from "@/notification"
import { useCreateProductMutation, useGetAllCategoriesQuery } from "@/app/features/Dashboard/dashboardSlice"
import MultipleSelect from "../ui/SelectionButton"
import { useState } from "react";
import { useAppSelector } from "@/app/hooks/hooks"
import type { RootState } from "@/app/store"

const FormCreateProduct = () => {

    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const { getFormFields } = useFormFields({ slug: "create-product" });
    const [categoriesName, setCategoriesName] = useState<Record<string, string>[]>([])

    const { valueInSelected } = useAppSelector((state: RootState) => state.globals)

    const formRef = useRef<HTMLFormElement>(null)

    const handleImagesChange = (images: string[]) => {
        setUploadedImages(images);
    };

    // Create Product
    const [createProduct, { isLoading, data: dataCreateProduct, isSuccess, error }] = useCreateProductMutation();

    // ------------------------------------------------categories part-
    // Get All Categories
    const { isLoading: isLoadingAllCategories, data: allCategories } = useGetAllCategoriesQuery()
    console.log(isLoadingAllCategories, allCategories?.categories)

    useEffect(() => {
        if (allCategories?.categories.length === 0) return
        allCategories?.categories.map((category) => {
            setCategoriesName((prev) => [...prev, { id: category._id, name: category.name }])
        })
    }, [allCategories?.categories])
    // -------------------------------------------------categories part-

    const submitHandlerCreateProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const date = new Date();
        const currentDate = date.toISOString();


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

        const { name, description, price, discount, stock, stars, category, brand } = data;

        if (name === "" || description === "" || price === "" || discount === "" || stock === "" || uploadedImages.length === 0 || brand === "" || stars === "" || category === "") {
            ErrorToast({ message: "All fields are required" })
            return
        }

        createProduct({
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
            saleRate: 1000
        })
    }

    useEffect(() => {
        if (error) {
            const err = error as { data: { message: string } };
            ErrorToast({ message: `${err.data.message}, All Fields Are Required` })
        }

        if (isSuccess) {
            successToast({ message: dataCreateProduct.message })
            formRef.current?.reset()
            setUploadedImages([])
        }
    }, [error, isSuccess, dataCreateProduct?.message])

    return (
        <form onSubmit={submitHandlerCreateProduct} ref={formRef} className="flex flex-col gap-5">
            {getFormFields().map((field) => (
                <FormFields
                    key={field.name}
                    {...field}
                    error={""}
                    onImagesChange={
                        field.type === "image-upload" ? handleImagesChange : undefined
                    }
                />
            ))}

            <div className="flex flex-col gap-1">
                <p>Select Category</p>
                <MultipleSelect dataToMap={categoriesName} />
            </div>

            <Button type={isLoading ? "button" : "submit"} className="bg-yellow-500 text-white hover:bg-blue-500/40">
                {isLoading ? <SpinnerComponent /> : "Create Product"}
            </Button>
        </form>
    )
}


export default FormCreateProduct;
