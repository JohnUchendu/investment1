"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaArrowUp } from "react-icons/fa";

// Dummy upward trending data
const data = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 150 },
  { name: "April", value: 180 },
  { name: "May", value: 220 },
];

export default function Recharts() {
  return (
    <div className="p-4  pt-8 rounded-2xl bg-gray-100 shadow-md  w-full ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs text-gray-600 font-light">Asset Performance</h2>
        <div className="flex items-center space-x-1 text-blue-600">
          <FaArrowUp className="animate-bounce" />
          <span className="font-medium text-xs sm:text-sm">Upward Trend</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#0000FF"
            strokeWidth={3}
            dot={{ r: 5, stroke: "#0000FF", strokeWidth: 2, fill: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
