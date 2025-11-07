'use client';

import { useState } from 'react';
import AgentMap from '@/components/AgentMap';
import AgentTelemetry from '@/components/AgentTelemetry';
import UseCaseMatrix from '@/components/UseCaseMatrix';
import { Download, Play } from 'lucide-react';

import orchestratorsData from '@/data/agentic/orchestrators.json';
import agentsData from '@/data/agentic/agents.json';
import toolsData from '@/data/agentic/tools.json';
import scenariosData from '@/data/agentic/scenarios.json';
import telemetryData from '@/data/agentic/telemetry.json';

export default function AgenticPage() {
  const [highlightPath, setHighlightPath] = useState<string[] | undefined>();
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [trace, setTrace] = useState<string[]>([]);

  const runScenario = (scenarioId: string) => {
    const scenario = scenariosData.find((s) => s.id === scenarioId);
    if (scenario) {
      setSelectedScenario(scenarioId);
      setHighlightPath(scenario.path);
      
      // Animate trace
      setTrace([]);
      let i = 0;
      const interval = setInterval(() => {
        setTrace(t => [...t, scenario.path[i]]);
        i++;
        if (i >= scenario.path.length) clearInterval(interval);
      }, 500);
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
            Orchestrators route Verizon-scale intents to domain agents and safe tools with policy guardrails and observability.
          </p>
        </div>

        {/* Scenarios */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Run Example Scenarios</h2>
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

        {/* Execution Trace */}
        {trace.length > 0 && (
          <div className="mb-12 bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-acc-gray-400 mb-2">Execution Trace</h3>
            <div className="font-mono text-xs text-green-400 space-y-1 max-h-32 overflow-y-auto">
              {trace.map((t, i) => (
                <div key={i}>{`[${i+1}] → ${t}`}</div>
              ))}
            </div>
          </div>
        )}

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

        {/* NEW: Top 40 Use Case Coverage Matrix */}
        <UseCaseMatrix />

        {/* Download CTA */}
        <div className="mt-12 bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8 text-center">
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
