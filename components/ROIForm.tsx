'use client';

import { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';

export default function ROIForm() {
  const [monthlyCall, setMonthlyCalls] = useState(1000000);
  const [containmentGain, setContainmentGain] = useState(0.14);
  const [ahtReduction, setAhtReduction] = useState(80);
  const [costPerMinute, setCostPerMinute] = useState(1.2);

  // Calculate annual savings
  // Savings = calls × containment_gain × (AHT_reduction / 60) × cost_per_min × 12
  const monthlySavings = monthlyCall * containmentGain * (ahtReduction / 60) * costPerMinute;
  const annualSavings = monthlySavings * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-acc-purple" />
        <h3 className="text-xl font-semibold">ROI Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-acc-gray-400 mb-2">
              Monthly Calls
            </label>
            <input
              type="number"
              value={monthlyCall}
              onChange={(e) => setMonthlyCalls(Number(e.target.value))}
              className="w-full bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-acc-purple"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-acc-gray-400 mb-2">
              Containment Gain (0-1)
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="1"
              value={containmentGain}
              onChange={(e) => setContainmentGain(Number(e.target.value))}
              className="w-full bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-acc-purple"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-acc-gray-400 mb-2">
              AHT Reduction (seconds)
            </label>
            <input
              type="number"
              value={ahtReduction}
              onChange={(e) => setAhtReduction(Number(e.target.value))}
              className="w-full bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-acc-purple"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-acc-gray-400 mb-2">
              Cost per Minute ($)
            </label>
            <input
              type="number"
              step="0.1"
              value={costPerMinute}
              onChange={(e) => setCostPerMinute(Number(e.target.value))}
              className="w-full bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-acc-purple"
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-6">
          <DollarSign className="w-12 h-12 text-acc-purple mb-4" />
          
          <div className="text-center mb-6">
            <p className="text-sm text-acc-gray-400 mb-2">Monthly Savings</p>
            <p className="text-3xl font-bold text-acc-purple">
              {formatCurrency(monthlySavings)}
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-acc-gray-400 mb-2">Annual Savings</p>
            <p className="text-5xl font-bold text-white">
              {formatCurrency(annualSavings)}
            </p>
          </div>

          <p className="text-xs text-acc-gray-400 mt-6 text-center">
            Based on your inputs, this modernization could save approximately{' '}
            <span className="text-acc-purple font-semibold">{formatCurrency(annualSavings)}</span> annually.
          </p>
        </div>
      </div>
    </div>
  );
}


