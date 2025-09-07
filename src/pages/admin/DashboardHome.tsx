
import UsersChart from "@/components/admin/Charts/Users";
import DashboardDataCards from "@/components/admin/DashboardDataCards";
import SalesTaple from "@/components/admin/SalesTaple";


const DashboardHome = () => {

  return (
    <div className=" w-full text-black overflow-hidden ">
      <div className=" py-6 px-8  shadow bg-white  ">
        <h3 className="text-2xl font-semibold">Dashboard</h3>
      </div>
     <DashboardDataCards/> 
    <div className="mt-10 px-8">
      <UsersChart/>
      <SalesTaple/>
    </div>
    </div>
  );
};

export default DashboardHome;
