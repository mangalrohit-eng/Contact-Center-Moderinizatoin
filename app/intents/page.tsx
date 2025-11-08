'use client';

import UseCaseMatrix from '@/components/UseCaseMatrix';
import NextPageButton from '@/components/NextPageButton';
import { Lightbulb, Target, Network } from 'lucide-react';

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

        {/* Why This Matters Section */}
        <div className="mb-16 bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Lightbulb className="w-7 h-7 text-acc-purple" />
            Why Comprehensive Intent Mapping Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-acc-gray-800/50 border border-acc-gray-700 rounded-lg p-6">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-acc-purple" />
                Domain Expertise
              </h3>
              <p className="text-sm text-acc-gray-300">
                We've analyzed thousands of telecom contact center interactions to identify the 200+ most common customer intents across billing, plans, devices, network, and support domains.
              </p>
            </div>
            <div className="bg-acc-gray-800/50 border border-acc-gray-700 rounded-lg p-6">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <Network className="w-5 h-5 text-green-400" />
                Agent-Intent Alignment
              </h3>
              <p className="text-sm text-acc-gray-300">
                Each intent is mapped to the most appropriate domain agent and equipped with the specific tools needed to resolve customer requests efficiently and accurately.
              </p>
            </div>
            <div className="bg-acc-gray-800/50 border border-acc-gray-700 rounded-lg p-6">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span>Proven Methodology</span>
              </h3>
              <p className="text-sm text-acc-gray-300">
                Our intent rationalization process is based on real-world telecom deployments, ensuring we capture the full spectrum of customer needs from day one.
              </p>
            </div>
          </div>
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

        {/* Our Approach */}
        <div className="mb-12 bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Our Intent Rationalization Approach</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-acc-purple/20 border border-acc-purple flex items-center justify-center text-acc-purple font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Discovery & Analysis</h3>
                <p className="text-sm text-acc-gray-300">
                  Analyze existing call logs, IVR flows, and agent notes to identify all customer request patterns and categorize them by domain (billing, plans, devices, network, support, etc.).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-acc-purple/20 border border-acc-purple flex items-center justify-center text-acc-purple font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Intent Mapping</h3>
                <p className="text-sm text-acc-gray-300">
                  Map each intent to the appropriate domain agent based on required expertise, then identify the specific tools and APIs needed to fulfill the request (BSS, CRM, knowledge base, etc.).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-acc-purple/20 border border-acc-purple flex items-center justify-center text-acc-purple font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Prioritization & Phasing</h3>
                <p className="text-sm text-acc-gray-300">
                  Prioritize intents by volume and business impact, then phase the implementation starting with high-volume, high-value intents (billing, payments) before expanding to the full catalog.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Intent Coverage Matrix */}
        <UseCaseMatrix />

        <NextPageButton href="/agents/" label="Agent Catalog" />
      </div>
    </div>
  );
}

