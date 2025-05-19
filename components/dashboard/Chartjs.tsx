"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";

import { FaArrowUp } from "react-icons/fa";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

const data = {
  labels: ["Jan", "Feb", "Mar", "April", "May"],
  datasets: [
    {
      label: "Growth",
      data: [100, 130, 160, 190, 230],
      fill: false,
      borderColor: "#0000FF",
      backgroundColor: "#22c55e",
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: "#fff",
      pointBorderColor: "#0000FF",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { display: false },
    },
  },
};

export default function Chartjs() {
  return (
    <div className="p-2 rounded-xl bg-gray-100 shadow-md max-w-md w-full">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-semibold text-blue-600">
          Market is Pumping
        </h2>
        <div className="flex items-center space-x-1 text-blue-600">
          <FaArrowUp className="animate-bounce" />
          <span className="font-medium text-sm">+15% This Week</span>
        </div>
      </div>

      <Line data={data} options={options} />
    </div>
  );
}
