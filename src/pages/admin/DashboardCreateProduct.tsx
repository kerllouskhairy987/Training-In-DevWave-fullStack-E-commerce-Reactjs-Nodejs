import FormCreateProduct from "@/components/admin/FormCreateProduct";

const DashboardCreateProduct = () => {
  return (
    <div className="flex-1 px-2 py-4 min-h-[100vh] bg-[#15283c]">
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
