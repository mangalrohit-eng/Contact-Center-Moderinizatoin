import KPICharts from '@/components/KPICharts';
import ROIForm from '@/components/ROIForm';
import kpisData from '@/data/kpis.json';
import { TrendingUp } from 'lucide-react';

export default function MetricsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Performance <span className="text-acc-purple">Metrics</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto">
            Quantifiable improvements in containment, handle time, and customer satisfaction.
          </p>
        </div>

        {/* KPI Charts */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-acc-purple" />
            <h2 className="text-2xl font-bold">Before vs After</h2>
          </div>
          <KPICharts data={kpisData} />
        </div>

        {/* ROI Calculator */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">ROI Calculator</h2>
          <p className="text-acc-gray-400 mb-6">
            Estimate the annual savings based on your contact center volume and improvement targets.
          </p>
          <ROIForm />
        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-acc-purple">+14% Containment</h3>
            <p className="text-acc-gray-400 text-sm">
              Goal-based flows reduce escalations by resolving more queries in self-service.
            </p>
          </div>
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-acc-purple">-80s AHT</h3>
            <p className="text-acc-gray-400 text-sm">
              Agentic tool orchestration reduces lookup time and eliminates redundant steps.
            </p>
          </div>
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-acc-purple">+0.4 CSAT</h3>
            <p className="text-acc-gray-400 text-sm">
              Clarifying questions and proactive suggestions improve customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


