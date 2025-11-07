'use client';

import { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type KPIData = {
  before: {
    containment: number;
    aht: number;
    csat: number;
  };
  after: {
    containment: number;
    aht: number;
    csat: number;
  };
};

export default function KPICharts({ data }: { data: KPIData }) {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#9ca3af',
          font: { size: 12 },
        },
      },
    },
    scales: {
      y: {
        ticks: { color: '#9ca3af' },
        grid: { color: '#1f2937' },
      },
      x: {
        ticks: { color: '#9ca3af' },
        grid: { color: '#1f2937' },
      },
    },
  };

  // Containment Rate Chart
  const containmentData = {
    labels: ['Before', 'After'],
    datasets: [
      {
        label: 'Containment Rate (%)',
        data: [data.before.containment * 100, data.after.containment * 100],
        backgroundColor: ['#6B7280', '#A100FF'],
        borderColor: ['#6B7280', '#A100FF'],
        borderWidth: 1,
      },
    ],
  };

  // AHT Chart
  const ahtData = {
    labels: ['Before', 'After'],
    datasets: [
      {
        label: 'Average Handle Time (seconds)',
        data: [data.before.aht, data.after.aht],
        backgroundColor: ['#6B7280', '#A100FF'],
        borderColor: ['#6B7280', '#A100FF'],
        borderWidth: 1,
      },
    ],
  };

  // CSAT Chart
  const csatData = {
    labels: ['Before', 'After'],
    datasets: [
      {
        label: 'CSAT Score (1-5)',
        data: [data.before.csat, data.after.csat],
        backgroundColor: ['#6B7280', '#A100FF'],
        borderColor: ['#6B7280', '#A100FF'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Containment Rate */}
      <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-center">Containment Rate</h3>
        <div className="h-64">
          <Bar data={containmentData} options={chartOptions} />
        </div>
        <div className="mt-4 text-center">
          <span className="text-acc-purple font-bold text-2xl">
            +{((data.after.containment - data.before.containment) * 100).toFixed(0)}%
          </span>
          <p className="text-sm text-acc-gray-400 mt-1">Improvement</p>
        </div>
      </div>

      {/* AHT */}
      <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-center">Average Handle Time</h3>
        <div className="h-64">
          <Bar data={ahtData} options={chartOptions} />
        </div>
        <div className="mt-4 text-center">
          <span className="text-acc-purple font-bold text-2xl">
            -{(data.before.aht - data.after.aht).toFixed(0)}s
          </span>
          <p className="text-sm text-acc-gray-400 mt-1">Reduction</p>
        </div>
      </div>

      {/* CSAT */}
      <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-center">CSAT Score</h3>
        <div className="h-64">
          <Bar data={csatData} options={chartOptions} />
        </div>
        <div className="mt-4 text-center">
          <span className="text-acc-purple font-bold text-2xl">
            +{(data.after.csat - data.before.csat).toFixed(1)}
          </span>
          <p className="text-sm text-acc-gray-400 mt-1">Point Increase</p>
        </div>
      </div>
    </div>
  );
}


