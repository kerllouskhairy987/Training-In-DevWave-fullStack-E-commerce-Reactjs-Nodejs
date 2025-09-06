import { useEffect, useRef } from "react"
import { Button } from "../ui/button"
import SpinnerComponent from "../ui/Spinner"
import FormFields from "./FormFields"
import useFormFields from "./hooks/useFormFields"
import { ErrorToast } from "@/notification"
import { useCreateProductMutation, useGetAllCategoriesQuery } from "@/app/features/Dashboard/dashboardSlice"
import MultipleSelect from "../ui/SelectionButton"

const FormCreateProduct = () => {
    const formRef = useRef<HTMLFormElement>(null)

    const { getFormFields } = useFormFields({ slug: "create-product" })

    // Create Product
    const [createProduct, { isLoading, data, isSuccess, error }] = useCreateProductMutation();
    console.log("_____+",{ isLoading, data, isSuccess, error })

    // -------------------------------------------------
    // Get All Categories
    const { isLoading: isLoadingAllCategories, data: allCategories } = useGetAllCategoriesQuery()
    console.log(isLoadingAllCategories, allCategories)

    const submitHandlerCreateProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const data: Record<string, string | File> = {};
        formData.forEach((value, key) => {
            if (value instanceof File) {
                data[key] = value;
            } else {
                data[key] = value.toString();
            }
        });

        const { name, description, price, discount, rating, stock, brand, stars, category, banner } = data;

        if (name === "" || description === "" || price === "" || discount === "" || rating === "" || stock === "" || brand === "" || stars === "" || category === "" || banner === "") {
            ErrorToast({ message: "All fields are required" })
            return
        }

        // console.log("___________________", data)
        createProduct({ body: data, category: "68b81c00a5bd56a838df7217" })
    }

    useEffect(() => {
        if (error) {
            const err = error as { data: { message: string } };
            ErrorToast({ message: `${err.data.message}, All Fields Are Required` })
        }
    }, [error])

    return (
        <form onSubmit={submitHandlerCreateProduct} ref={formRef} className="flex flex-col gap-5">
            {
                getFormFields().map((field) => (
                    <FormFields key={field.name} {...field} error={""} />
                ))
            }

            <MultipleSelect />



            <Button type={isLoading ? "button" : "submit"} className="bg-yellow-500 text-white hover:bg-blue-500/40">
                {isLoading ? <SpinnerComponent /> : "Create Product"}
            </Button>
        </form>
    )
}

export default FormCreateProduct