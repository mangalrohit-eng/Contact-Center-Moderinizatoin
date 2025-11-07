'use client';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type TelemetryData = {
  latency_ms: Record<string, number[]>;
  success_rate: Record<string, number>;
};

export default function AgentTelemetry({ data }: { data: TelemetryData }) {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: { color: '#9ca3af' },
        grid: { color: '#1f2937' },
      },
      x: {
        ticks: { color: '#9ca3af', font: { size: 10 } },
        grid: { color: '#1f2937' },
      },
    },
  };

  // Average latency
  const latencyLabels = Object.keys(data.latency_ms);
  const latencyValues = latencyLabels.map(
    (key) => data.latency_ms[key].reduce((a, b) => a + b, 0) / data.latency_ms[key].length
  );

  const latencyData = {
    labels: latencyLabels.map((l) => l.replace('_', ' ')),
    datasets: [
      {
        label: 'Average Latency (ms)',
        data: latencyValues,
        backgroundColor: '#A100FF',
        borderColor: '#A100FF',
        borderWidth: 1,
      },
    ],
  };

  // Success rate
  const successLabels = Object.keys(data.success_rate);
  const successValues = successLabels.map((key) => data.success_rate[key] * 100);

  const successData = {
    labels: successLabels.map((l) => l.replace('_', ' ')),
    datasets: [
      {
        label: 'Success Rate (%)',
        data: successValues,
        backgroundColor: '#A100FF',
        borderColor: '#A100FF',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Latency Chart */}
      <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Average Tool Latency</h3>
        <div className="h-72">
          <Bar data={latencyData} options={chartOptions} />
        </div>
      </div>

      {/* Success Rate Chart */}
      <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Agent Success Rate</h3>
        <div className="h-72">
          <Bar data={successData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}


