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

import React from 'react'
import MaintenancePage from './Maintenance'

const TradingChart = () => {
  return (
    <div><MaintenancePage/></div>
  )
}

export default TradingChart