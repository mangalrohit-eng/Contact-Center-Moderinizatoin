'use client';

import UseCaseMatrix from '@/components/UseCaseMatrix';
import NextPageButton from '@/components/NextPageButton';

export default function IntentsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-acc-purple">Telecom Contact Center Intents</span>
          </h1>
          <p className="text-xl text-acc-gray-300 max-w-4xl">
            Our deep telecom domain expertise enables us to identify, categorize, and map the complete universe of customer intents to specialized agents and tools—ensuring comprehensive coverage and optimal automation.
          </p>
        </div>

        {/* Key Insights */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-acc-purple mb-2">200+</div>
            <div className="text-sm text-acc-gray-400">Telecom Intents Identified</div>
          </div>
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">17</div>
            <div className="text-sm text-acc-gray-400">Specialized Domain Agents</div>
          </div>
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-sky-400 mb-2">45+</div>
            <div className="text-sm text-acc-gray-400">Backend Tools & APIs</div>
          </div>
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-sm text-acc-gray-400">Intent Coverage</div>
          </div>
        </div>

        {/* Complete Intent Coverage Matrix */}
        <UseCaseMatrix />

        <NextPageButton href="/agents/" label="Agent Catalog" />
      </div>
    </div>
  );
}

