// "use client";

// import React from "react";

// const marketData = [
//   { name: "EUR/USD", price: "1.0856", change: "+0.12%" },
//   { name: "GBP/USD", price: "1.2732", change: "-0.08%" },
//   { name: "USD/JPY", price: "156.42", change: "+0.25%" },
//   { name: "BTC/USDT", price: "$66,540", change: "+1.23%" },
//   { name: "ETH/USDT", price: "$3,100", change: "-0.89%" },
//   { name: "XAU/USD", price: "$2,380", change: "+0.45%" },
//   // Repeat or fetch real data dynamically
// ];

// export default function MarketTicker() {
//   return (
//     <div className="w-full overflow-hidden bg-gray-900 text-white border-b  border-gray-700">
//       <div className="whitespace-nowrap animate-marquee flex space-x-8 px-4 py-2 pt-24">
//         {marketData.map((item, index) => (
//           <div key={index} className="flex items-center space-x-2">
//             <span className="font-semibold">{item.name}</span>
//             <span>{item.price}</span>
//             <span className={item.change.startsWith("+") ? "text-green-400" : "text-red-400"}>
//               {item.change}
//             </span>
//           </div>
//         ))}
//         {/* Duplicate to make it loop seamlessly */}
//         {marketData.map((item, index) => (
//           <div key={`duplicate-${index}`} className="flex items-center space-x-2">
//             <span className="font-semibold">{item.name}</span>
//             <span>{item.price}</span>
//             <span className={item.change.startsWith("+") ? "text-green-400" : "text-red-400"}>
//               {item.change}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect } from "react";

export default function TradingViewTape() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR to USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
        {
          proName: "BITSTAMP:XRPUSD",
          description: "Ripple",
        },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });

    const container = document.getElementById("tradingview-widget");
    if (container) {
      container.innerHTML = ""; // Clear existing content
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container pt-20">
      <div id="tradingview-widget" />
 
    </div>
  );
}
