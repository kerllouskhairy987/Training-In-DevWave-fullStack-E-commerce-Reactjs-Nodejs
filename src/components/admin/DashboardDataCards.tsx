import axios from "axios";
import { useEffect, useState, type ReactNode } from "react";
import { FaEye, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
// intarfaces
interface InfoItem {
  title: string;
  Count?: ReactNode;
  icon: ReactNode;
}
interface Order {
  totalAmount: number;
}
interface OrdersResponse {
  success: boolean;
  message: string;
  data: {
    orders: Order[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalOrders: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
}

const DashboardDataCards = () => {
  const [usersCount, setUsersCount] = useState<number>(0);
  const [ordersCount, setOrdersCount] = useState<number>(0);
  const [totalSales, setTotalSales] = useState<number>(0);

  // fetchingData

  useEffect(() => {
    const fetchData = async () => {
      try {
        // get token from localStorge
        const token = localStorage.getItem("userToken");

        if (!token) {
          console.error("No token found! Redirecting to login...");

          return;
        }
        const [usersRes, ordersRes] = await Promise.all([
          axios.get(
            "https://training-in-dev-wave-full-stack-e-c.vercel.app/api/users",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          ),
          axios.get<OrdersResponse>(
            "https://training-in-dev-wave-full-stack-e-c.vercel.app/api/orders/admin-get-all-orders",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          ),
        ]);
        const total = ordersRes.data.data.orders.reduce(
          (acc, order) => acc + (order?.totalAmount || 0),
          0
        );
        setOrdersCount(ordersRes?.data?.data?.pagination?.totalOrders ?? 0);
        setUsersCount(usersRes?.data?.data?.length);
        setTotalSales(total);
      
      } catch (err) {
        console.error("Error fetching dashboard data", err);
      }
    };
    fetchData();
  }, []);

  const informationData: InfoItem[] = [
    {
      title: "Users",
      icon: <FaUser className=" fill-blue-500" size={50} />,
      Count: usersCount,
    },
    {
      title: "Orders",
      icon: <FaShoppingCart className="fill-amber-500" size={50} />,
      Count: ordersCount,
    },
    {
      title: "Total Sales",
      icon: <FaMoneyCheckDollar className="fill-green-500" size={50} />,
      Count: (
        <div>
          {totalSales} <span className="text-green-500">$</span>
        </div>
      ),
    },
    {
      title: "Visitors",
      icon: <FaEye className="fill-violet-600" size={50} />,
      Count: "20K",
    },
  ];

  // render
  const dataRender = () =>
    informationData.map((item, i) => (
      <div
        key={i}
        className="flex  flex-col items-center justify-center bg-white mt-10 p-8 rounded-xl shadow"
      >
        <span className="mb-3">{item.icon}</span>
        <span className="text-3xl text-gray-600 text-center">{item.Count}</span>
        <span className=" text-[18px] font-normal  text-gray-400 text-center">
          {item.title}
        </span>
      </div>
    ));

  return (
    <div className=" px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:gap-8 ">
      {dataRender()}
    </div>
  );
};

export default DashboardDataCards;
