import { Button } from "../ui/button";
import SpinnerComponent from "../ui/Spinner";
import FormFields from "./FormFields";
import useFormFields from "./hooks/useFormFields";
import { useState } from "react";

const FormCreateProduct = () => {
  const { getFormFields } = useFormFields({ slug: "create-product" });
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  console.log(getFormFields());

  const isLoading = false;

  const handleImagesChange = (images: string[]) => {
    setUploadedImages(images);
  };

  const submitHandlerCreateProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with images:", uploadedImages);
  };

  return (
    <form onSubmit={submitHandlerCreateProduct} className="flex flex-col gap-5">
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

      <Button className="bg-yellow-500 text-white hover:bg-blue-500/40">
        {isLoading ? <SpinnerComponent /> : "Create Product"}
      </Button>
    </form>
  );
};

export default FormCreateProduct;
