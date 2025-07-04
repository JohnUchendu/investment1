"use client";

import { useEffect, useRef, memo } from "react";

function TradingViewChartWidget() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BITSTAMP:BTCUSD",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "range": "YTD",
        "allow_symbol_change": true,
        "watchlist": [
          "BINANCE:XRPUSDT"
        ],
        "details": true,
        "support_host": "https://www.tradingview.com"
      }`;

    if (container.current) {
      container.current.innerHTML = ""; // Prevent multiple script injections
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
     
    </div>
  );
}

export default memo(TradingViewChartWidget);
