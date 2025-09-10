import { useState, useRef, useEffect } from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const UsersChart: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("Last 7 days");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const optionsList: string[] = [
    "Yesterday",
    "Today",
    "Last 7 days",
    "Last 30 days",
    "Last 90 days",
  ];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
      height: 200,
      toolbar: { show: false },
      fontFamily: "Inter, sans-serif",
      dropShadow: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 6 },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        gradientToColors: ["#1C64F2"],
        shadeIntensity: 1,
        opacityFrom: 0.55,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: { left: 2, right: 2, top: 0, bottom: 0 },
    },
    xaxis: {
      categories: [
        "01 Feb",
        "02 Feb",
        "03 Feb",
        "04 Feb",
        "05 Feb",
        "06 Feb",
        "07 Feb",
      ],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    tooltip: { enabled: true, x: { show: false } },
  };

  const series = [
    {
      name: "New Visitors",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: "#1A56DB",
    },
  ];

  return (
    <div className=" w-full bg-white rounded-lg shadow-sm  dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            5.8k
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Visitors this week
          </p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
          12%
          <svg
            className="w-3 h-3 ml-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-4">
        <Chart
          options={chartOptions}
          series={series}
          type="area"
          height={200}
        />
      </div>

      <div className="grid grid-cols-1 items-center border-t border-gray-200 dark:border-gray-700 pt-5">
        <div
          className="relative flex justify-between items-center"
          ref={dropdownRef}
        >
          <button
            onClick={toggleDropdown}
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 inline-flex items-center dark:hover:text-white"
            type="button"
          >
            {selectedOption}
            <svg
              className="w-2.5 ml-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute bottom-1 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 mt-2">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {optionsList.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleSelect(item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2"
          >
            Users Report
            <svg
              className="w-2.5 h-2.5 ml-1.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UsersChart;
