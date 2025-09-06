import { Button } from "../ui/button"
import SpinnerComponent from "../ui/Spinner"
import FormFields from "./FormFields"
import useFormFields from "./hooks/useFormFields"

const FormCreateProduct = () => {
    const { getFormFields } = useFormFields({ slug: "create-product" })
    console.log(getFormFields())

    const isLoading = false

    const submitHandlerCreateProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }


    return (
        <form onSubmit={submitHandlerCreateProduct} className="flex flex-col gap-5">
            {
                getFormFields().map((field) => (
                    <FormFields key={field.name} {...field} error={""} />
                ))
            }

            <Button className="bg-yellow-500 text-white hover:bg-blue-500/40">
                {
                    isLoading ? <SpinnerComponent /> : "Create Product"
                }
            </Button>
        </form>
    )
}

export default FormCreateProduct