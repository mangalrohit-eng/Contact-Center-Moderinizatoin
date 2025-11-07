'use client';

import { useState } from 'react';
import AgentMap from '@/components/AgentMap';
import AgentTelemetry from '@/components/AgentTelemetry';
import { Download, Play } from 'lucide-react';

import orchestratorsData from '@/data/agentic/orchestrators.json';
import agentsData from '@/data/agentic/agents.json';
import toolsData from '@/data/agentic/tools.json';
import scenariosData from '@/data/agentic/scenarios.json';
import telemetryData from '@/data/agentic/telemetry.json';

export default function AgenticPage() {
  const [highlightPath, setHighlightPath] = useState<string[] | undefined>();
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

  const runScenario = (scenarioId: string) => {
    const scenario = scenariosData.find((s) => s.id === scenarioId);
    if (scenario) {
      setSelectedScenario(scenarioId);
      setHighlightPath(scenario.path);
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-acc-purple">Agentic Architecture</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto">
            Explore the orchestrators, agents, and tools that power intelligent, goal-driven conversations.
          </p>
        </div>

        {/* Scenarios */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Run Scenarios</h2>
          <p className="text-acc-gray-400 mb-6">
            Select a scenario to visualize the execution path through the agentic architecture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {scenariosData.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => runScenario(scenario.id)}
                className={`p-4 rounded-lg border transition-all text-left ${
                  selectedScenario === scenario.id
                    ? 'bg-acc-purple border-acc-purple text-white'
                    : 'bg-acc-gray-800 border-acc-gray-700 hover:border-acc-purple/50'
                }`}
              >
                <Play className="w-5 h-5 mb-2" />
                <p className="text-sm font-semibold">{scenario.title}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Agent Map */}
        <div className="mb-12">
          <AgentMap
            orchestrators={orchestratorsData}
            agents={agentsData}
            tools={toolsData}
            highlightPath={highlightPath}
          />
        </div>

        {/* Telemetry */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Telemetry & Performance</h2>
          <AgentTelemetry data={telemetryData} />
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Deep Dive into Agentic Design</h3>
          <p className="text-acc-gray-400 mb-6 max-w-2xl mx-auto">
            Download the comprehensive one-pager with agent specifications, tool integrations, and guardrail policies.
          </p>
          <a
            href="/downloads/Accenture_Verizon_Agentic_Modernization_OnePager.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download One-Pager (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}


