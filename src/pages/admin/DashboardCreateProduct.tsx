import FormCreateProduct from "@/components/admin/FormCreateProduct";

const DashboardCreateProduct = () => {
  return (
    <div className="flex flex-col gap-4 items-center grow px-2 py-4 min-h-[100vh] bg-blue-700/50">
      <h1 className="text-2xl font-bold text-center">
        Dashboard Create Product
      </h1>
      <div className="grow w-full p-4">
        <FormCreateProduct />
      </div>
    </div>
  );
};

export default DashboardCreateProduct;
