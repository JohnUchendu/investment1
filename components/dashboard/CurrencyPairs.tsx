"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const currencyPairs = [
  { pair: "EUR/USD", bid: 1.0854, ask: 1.0856, change: 0.12 },
  { pair: "GBP/USD", bid: 1.2658, ask: 1.2660, change: -0.24 },
  { pair: "USD/JPY", bid: 151.42, ask: 151.45, change: 0.35 },
  { pair: "AUD/USD", bid: 0.6589, ask: 0.6592, change: -0.18 },
  { pair: "USD/CAD", bid: 1.3582, ask: 1.3585, change: 0.09 }
];

export function CurrencyPairs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Currency Pairs</CardTitle>
      <p className="text-sm text-gray-500">Real-time forex rates</p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pair</TableHead>
              <TableHead>Bid</TableHead>
              <TableHead>Ask</TableHead>
              <TableHead>Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currencyPairs.map((pair) => (
              <TableRow key={pair.pair}>
                <TableCell className="font-medium">{pair.pair}</TableCell>
                <TableCell>{pair.bid}</TableCell>
                <TableCell>{pair.ask}</TableCell>
                <TableCell
                  className={pair.change >= 0 ? "text-green-500" : "text-red-500"}
                >
                  {pair.change >= 0 ? "+" : ""}
                  {pair.change}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}