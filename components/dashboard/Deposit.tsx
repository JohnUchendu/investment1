"use client";

import { useState } from 'react';

export default function Deposit() {
  const [amount, setAmount] = useState('');

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Deposit Funds</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter amount"
          />
        </div>
        
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Process Deposit
        </button>
      </div>
    </div>
  );
}