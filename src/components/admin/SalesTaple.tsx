
import Chart from "react-apexcharts";

type Product = {
  id: number;
  name: string;
  sold: number[];
};

const products: Product[] = [
  { id: 1, name: "Solid", sold: [120, 135, 128, 140, 150, 138, 145] },
  { id: 2, name: "FlexiBand", sold: [80, 75, 70, 78, 85, 82, 79] },
  { id: 3, name: "PowerBoost", sold: [200, 180, 190, 210, 220, 205, 215] },
  { id: 4, name: "Speedster", sold: [50, 55, 52, 58, 60, 57, 59] },
  { id: 5, name: "MaxPro", sold: [90, 100, 95, 105, 110, 108, 115] },
  { id: 6, name: "UltraFit", sold: [70, 75, 72, 78, 80, 77, 79] },
  { id: 7, name: "Endura", sold: [30, 35, 33, 38, 40, 37, 36] },
  { id: 8, name: "PowerRing", sold: [150, 160, 155, 165, 170, 168, 175] },
  { id: 9, name: "FlexMax", sold: [60, 65, 62, 70, 75, 72, 78] },
  { id: 10, name: "HyperBoost", sold: [220, 230, 225, 235, 240, 238, 245] },
];

const getTotal = (sold: number[]) => sold.reduce((a, b) => a + b, 0);
const getAverage = (sold: number[]) => (sold.length ? getTotal(sold) / sold.length : 0);


const getTrendColor = (sold: number[]) => {
  const change = sold[sold.length - 1] - sold[0];
  if (change >= 20) return "#10B981"; 
  if (change >= 5) return "#F59E0B"; 
  return "#EF4444";                   
};

const SalesTable = () => {
  return (
    <div className="mt-10 overflow-x-auto bg-[#1E2939] text-white rounded-lg py-4">
      <h4 className="ms-6 mb-4 text-2xl">Products Sales</h4>
      <table className="w-full text-center ">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-600 align-middle">Product</th>
            <th className="px-4 py-2 border-b border-gray-600 align-middle">Sales</th>
            <th className="px-4 py-2 border-b border-gray-600 align-middle">Change</th>
            <th className="px-4 py-2 border-b border-gray-600 align-middle">Average</th>
            <th className="px-4 py-2 border-b border-gray-600 align-middle">Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const lastSale = product.sold[product.sold.length - 1];
            const changeValue = lastSale - product.sold[0];
            const trendColor = getTrendColor(product.sold);

            return (
              <tr key={product.id} className="hover:bg-gray-700 transition-colors">
                <td className="px-4 py-2 border-b border-gray-600 align-middle font-medium">
                  {product.name}
                </td>

               
                <td className="px-4 py-2 border-b border-gray-600 align-middle">{lastSale}</td>

               
                <td className="px-4 py-2 border-b border-gray-600 align-middle flex flex-col items-center">
                  <span className="mb-1">{changeValue}</span>
                  <Chart
                    options={{
                      chart: { type: "area", sparkline: { enabled: true } },
                      stroke: { curve: "smooth", width: 2, colors: [trendColor] },
                      fill: { opacity: 0.3, colors: [trendColor] },
                      tooltip: { enabled: false },
                    }}
                    series={[{ data: product.sold }]}
                    type="area"
                    height={50}
                    width={100}
                  />
                </td>

                {/* Average */}
                <td className="px-4 py-2 border-b border-gray-600 align-middle">
                  {getAverage(product.sold).toFixed(1)}
                </td>

                {/* Total */}
                <td className="px-4 py-2 border-b border-gray-600 align-middle">
                  {getTotal(product.sold)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
