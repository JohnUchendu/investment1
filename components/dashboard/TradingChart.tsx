// "use client";

// import { useEffect, useRef } from "react";
// import {
//   createChart,
//   ColorType,
//   CrosshairMode,
//   type IChartApi,
//   type ISeriesApi,
//   type CandlestickData,
//   type SeriesOptionsCommon
// } from "lightweight-charts";

// export function TradingChart() {
//   const chartContainerRef = useRef<HTMLDivElement>(null);
//   const chartRef = useRef<IChartApi | null>(null);
//   const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

//   useEffect(() => {
//     if (!chartContainerRef.current) return;

//     const chart = createChart(chartContainerRef.current, {
//       layout: {
//         background: { type: ColorType.Solid, color: "white" },
//         textColor: "black"
//       },
//       grid: {
//         vertLines: { color: "#f0f0f0" },
//         horzLines: { color: "#f0f0f0" }
//       },
//       crosshair: {
//         mode: CrosshairMode.Normal
//       },
//       width: chartContainerRef.current.clientWidth,
//       height: 400
//     });

//     chartRef.current = chart;

//     const candleSeries = chart.addCandlestickSeries({
//       upColor: "#26a69a",
//       downColor: "#ef5350",
//       borderVisible: false,
//       wickVisible: true,
//       wickUpColor: "#26a69a",
//       wickDownColor: "#ef5350",
//       borderColor: "#00000000", // Transparent border
//     } as unknown as SeriesOptionsCommon);

//     seriesRef.current = candleSeries;

//     candleSeries.setData([
//       { time: "2023-01-01", open: 1.0654, high: 1.0678, low: 1.0632, close: 1.0665 },
//       { time: "2023-01-02", open: 1.0665, high: 1.0692, low: 1.0651, close: 1.0683 },
//       { time: "2023-01-03", open: 1.0683, high: 1.0705, low: 1.0667, close: 1.0698 },
//       { time: "2023-01-04", open: 1.0698, high: 1.0721, low: 1.0689, close: 1.0712 },
//       { time: "2023-01-05", open: 1.0712, high: 1.0735, low: 1.0698, close: 1.0723 },
//     ]);

//     const handleResize = () => {
//       if (chartContainerRef.current) {
//         chart.applyOptions({ width: chartContainerRef.current.clientWidth });
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       chart.remove();
//     };
//   }, []);

//   return <div ref={chartContainerRef} className="w-full h-[400px]" />;
// }

// "use client";

// import { useEffect, useRef } from "react";
// import { createChart, ColorType, CrosshairMode } from "lightweight-charts";

// export function TradingChart() {
//   const chartContainerRef = useRef(null);
//   const chartRef = useRef(null);
//   const seriesRef = useRef(null);

//   useEffect(() => {
//     if (!chartContainerRef.current) return;

//     const chart = createChart(chartContainerRef.current, {
//       layout: {
//         background: { type: ColorType.Solid, color: "white" },
//         textColor: "black"
//       },
//       grid: {
//         vertLines: { color: "#f0f0f0" },
//         horzLines: { color: "#f0f0f0" }
//       },
//       crosshair: {
//         mode: CrosshairMode.Normal
//       },
//       width: chartContainerRef.current.clientWidth,
//       height: 400
//     });

//     chartRef.current = chart;

//     const candleSeries = chart.addCandlestickSeries({
//       upColor: "#26a69a",
//       downColor: "#ef5350",
//       borderVisible: false,
//       wickVisible: true,
//       wickUpColor: "#26a69a",
//       wickDownColor: "#ef5350",
//       borderColor: "#00000000" // Transparent border
//     });

//     seriesRef.current = candleSeries;

//     candleSeries.setData([
//       { time: "2023-01-01", open: 1.0654, high: 1.0678, low: 1.0632, close: 1.0665 },
//       { time: "2023-01-02", open: 1.0665, high: 1.0692, low: 1.0651, close: 1.0683 },
//       { time: "2023-01-03", open: 1.0683, high: 1.0705, low: 1.0667, close: 1.0698 },
//       { time: "2023-01-04", open: 1.0698, high: 1.0721, low: 1.0689, close: 1.0712 },
//       { time: "2023-01-05", open: 1.0712, high: 1.0735, low: 1.0698, close: 1.0723 },
//     ]);

//     const handleResize = () => {
//       if (chartContainerRef.current) {
//         chart.applyOptions({ width: chartContainerRef.current.clientWidth });
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       chart.remove();
//     };
//   }, []);

//   return <div ref={chartContainerRef} className="w-full h-[400px]" />;
// }

// import React from 'react'
// import MaintenancePage from './Maintenance'

// const TradingChart = () => {
//   return (
//     <div><MaintenancePage/></div>
//   )
// }

// export default TradingChart

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FiTrendingUp,
  FiDollarSign,
  FiCalendar,
  FiPieChart,
} from "react-icons/fi";
import TradingViewChartWidget from "./TradingViewChartWidget";
import Recharts from "./Recharts";
import Chartjs from "./Chartjs";

export default function TradingChart() {
  const [selectedAsset, setSelectedAsset] = useState("BTC");

  // Mock data
  const assets = [
    { symbol: "BTC", name: "Bitcoin", value: 1687565.76, change: +2.4 },
    { symbol: "XRP", name: "Ripple", value: 250635.00, change: -0.8 },
    // { symbol: "ETH", name: "Ethereum", value: 2415.67, change: +1.2 },
  ];

  const performanceData = {
    today: +1.2,
    week: +5.7,
  };

  return (
    <div className="space-y-6 p-4 text-black">
      {/* Top Row - 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Assets Card */}
        <Card className="bg-white-800 text-gray-500 text-xs sm:text-sm gap-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2 ">
            <CardTitle className="text-sm font-light">Assets</CardTitle>
            <FiPieChart className="h-4 w-4 text-white-500" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                {assets.map((asset) => (
                  <div
                    key={asset.symbol}
                    className={`p-2 rounded-md cursor-pointer ${
                      selectedAsset === asset.symbol
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedAsset(asset.symbol)}
                  >
                    <div className="font-medium">{asset.symbol}</div>
                    <div className="text-xs sm:text-sm  font-bold">
                      ${asset.value.toLocaleString()}
                    </div>
                    <div
                      className={`text-xs ${
                        asset.change >= 0 ? "text-blue-500" : "text-red-500"
                      }`}
                    >
                      {asset.change >= 0 ? "+" : ""}
                      {asset.change}%
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-l pl-4 ">
                <div className="text-sm text-gray-500">
                  {assets.find((a) => a.symbol === selectedAsset)?.name} Gains
                </div>
                {/* Asset perfomance component */}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gains Card */}
        <Card className="bg-white-800 hover:border-blue-500 text-gray-500 text-xs sm:text-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Gains</CardTitle>
            <FiDollarSign className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold">$333,245.67</div>
              <div className="text-sm text-blue-500">+12.4% overall</div>
              <div className="text-xs text-gray-500">Since investment</div>
            </div>
          </CardContent>
        </Card>
        {/* CHARTING */}
        <Recharts />
       {/* Performance */}
      <CardContent>
  <div className="space-y-4">
    {/* Horizontal stats container */}
    <div className="flex space-x-8">
      <div>
        <div className="text-xs text-gray-500">Today</div>
        <div
          className={`font-medium ${
            performanceData.today >= 0 ? "text-blue-500" : "text-red-500"
          }`}
        >
          {performanceData.today >= 0 ? "+" : ""}
          {performanceData.today}%
        </div>
      </div>

      <div>
        <div className="text-xs text-gray-500">This Week</div>
        <div
          className={`font-medium ${
            performanceData.week >= 0 ? "text-blue-500" : "text-red-500"
          }`}
        >
          {performanceData.week >= 0 ? "+" : ""}
          {performanceData.week}%
        </div>
      </div>
    </div>

    {/* Chart container full width */}
    <div className="border-t pt-4 border-gray-200">
      <Chartjs />
    </div>
  </div>
</CardContent>


        {/* Maturity Card */}
        <Card className="bg-white-800 hover:border-blue-500 text-gray-500 text-xs sm:text-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Maturity</CardTitle>
            <FiCalendar className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-xl font-bold">June 22, 2025</div>
              <div className="text-sm text-gray-600">32 days remaining</div>
              <div className="text-xs text-blue-500">Auto-renewal enabled</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row - TradingView Chart Card */}
      <Card className="w-full bg-gray-100 text-gray-500">
        <CardHeader>
          <CardTitle>Market Overview</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          {/* Placeholder for TradingView component */}
          <div className="h-full flex items-center justify-center text-gray-500 border rounded-md">
            <TradingViewChartWidget />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
