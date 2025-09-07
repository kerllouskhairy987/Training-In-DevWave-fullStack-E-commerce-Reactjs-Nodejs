import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "@/app/features/Dashboard/dashboardSlice";
import { useAppSelector } from "@/app/hooks/hooks";
import type { RootState } from "@/app/store";
import AlertModal from "@/components/admin/AlertModal";
import CustomModal from "@/components/admin/CustomModal";
import FormFields from "@/components/admin/FormFields";
import useFormFields from "@/components/admin/hooks/useFormFields";
import { AllCategoriesSkeleton } from "@/components/skeleton";
// import { AllCategoriesSkeleton } from "@/components/skeleton"
import { Button } from "@/components/ui/button";
import SpinnerComponent from "@/components/ui/Spinner";
import { ErrorToast, successToast } from "@/notification";
import { Edit, Trash } from "lucide-react";
import { useEffect, useRef } from "react";

const DashboardCreateCategory = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { getFormFields } = useFormFields({ slug: "create-category" });

  const { network } = useAppSelector((state: RootState) => state.globals);

  // Get All Categories
  const { isLoading: isLoadingAllCategories, data: allCategories } =
    useGetAllCategoriesQuery();

  // Create Category
  const [createCategory, { isLoading, data: responseDate, isSuccess, error }] =
    useCreateCategoryMutation();
  console.log(responseDate, isSuccess);

  const submitHandlerCreateCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    if (data.name === "" || data.description === "") {
      ErrorToast({ message: "All fields are required" });
      return;
    }

    // Send data to redux
    createCategory({ name: data.name, description: data.description });
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      const err = error as { data: { message: string } };
      ErrorToast({ message: err.data.message });
    }

    if (isSuccess) {
      successToast({ message: responseDate.message });
      formRef.current?.reset();
    }
  }, [error, isSuccess, responseDate]);

  // -------------------------------------------------------------
  // Delete Category
  const [
    deleteCategory,
    {
      isLoading: isLoadingDelete,
      data: dateDelete,
      isSuccess: isSuccessDelete,
      error: errorDelete,
    },
  ] = useDeleteCategoryMutation();
  console.log(isLoadingDelete, dateDelete, errorDelete, isSuccessDelete);

  const deleteCategoryHandler = (id: string) => deleteCategory({ id });

  useEffect(() => {
    if (errorDelete) {
      console.log(errorDelete);
      const err = errorDelete as { data: { message: string } };
      ErrorToast({ message: err.data.message });
    }

    if (isSuccessDelete) {
      successToast({ message: dateDelete.message });
    }
  }, [errorDelete, isSuccessDelete, dateDelete?.message]);

  return (
    <div className="bg-white w-full flex justify-center min-h-[100vh]">
      <div className="w-full px-5 md:w-[500px] lg:max-w-[600px]">
        <form
          onSubmit={submitHandlerCreateCategory}
          ref={formRef}
          className=" text-black flex flex-col gap-4 items-center py-4 w-full"
        >
          <h1 className="text-2xl font-bold text-center text-black">
            Dashboard Create Category
          </h1>
          {getFormFields().map((field) => (
            <FormFields key={field.name} {...field} error={""} />
          ))}

          <Button
            type={isLoading ? "button" : "submit"}
            className="bg-yellow-500 text-white hover:bg-blue-500/40"
          >
            {isLoading ? <SpinnerComponent /> : "Create Category"}
          </Button>
        </form>

        <div className="h-1 w-full bg-yellow-400"></div>

        <h2 className="text-black font-bold text-center my-6">
          All Categories
        </h2>
        {isLoadingAllCategories || !network ? (
          <AllCategoriesSkeleton />
        ) : (
          allCategories?.categories.map((category) => (
            <div
              key={category._id}
              className="flex flex-col md:flex-row mb-10 md:mb-0 justify-between items-start text-black gap-2 my-2"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  <span className="text-green-700">Category Name:</span>{" "}
                  {category.name}
                </h3>
                <span className="text-sm ">
                  <span className="text-green-700">Category Description:</span>{" "}
                  {category.description}
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <CustomModal
                  id={category._id}
                  nameValue={category.name}
                  descValue={category.description}
                >
                  <Button>
                    <Edit /> Edit
                  </Button>
                </CustomModal>

                <AlertModal
                  isLoading={isLoadingDelete}

                  onDelete={() => deleteCategoryHandler(category._id)}
                >
                  <Button variant={"destructive"}>
                    <Trash /> Delete
                  </Button>
                </AlertModal>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardCreateCategory;
