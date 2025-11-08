'use client';

import { useEffect, useMemo, useState } from 'react';
import scenarios from '@/data/agentic/scenarios.json';
import ScenarioPath from '@/components/ScenarioPath';
import NextPageButton from '@/components/NextPageButton';

type Scenario = { id: string; title: string; path: string[] };

export default function AgenticPage() {
  const list = scenarios as unknown as Scenario[];
  const [selected, setSelected] = useState<Scenario | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [trace, setTrace] = useState<string[]>([]);

  // Start/animate a scenario
  const playScenario = (s: Scenario) => {
    setSelected(s);
    setTrace([]);
    setActiveIndex(-1);
    let i = 0;
    const steps = s.path.length;
    const timer = setInterval(() => {
      setActiveIndex(i);
      setTrace(t => [...t, s.path[i]]);
      i += 1;
      if (i >= steps) clearInterval(timer);
    }, 550);
  };

  // If user selects the same scenario again, replay
  useEffect(() => {
    if (selected && activeIndex === -1 && trace.length === 0) {
      // no-op
    }
  }, [selected, activeIndex, trace.length]);

  const topRow = useMemo(() => selected?.path ?? [], [selected]);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive Summary */}
        <div className="mb-12 bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-acc-purple">How it Will Work</span>
          </h1>
          <p className="text-xl text-acc-gray-300 mb-6">
            The new system uses <strong className="text-white">agentic AI architecture</strong> where intelligent orchestrators route customer requests to specialized domain agents, each with access to enterprise tools and governed by safety policies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-acc-gray-800/50 border border-acc-gray-700 rounded-lg p-6">
              <h3 className="font-bold text-acc-purple mb-2">Why Agentic?</h3>
              <p className="text-sm text-acc-gray-300">Unlike rigid intent matching, agents reason about goals, adapt to context, and use tools dynamically to solve complex problems.</p>
            </div>
            <div className="bg-acc-gray-800/50 border border-acc-gray-700 rounded-lg p-6">
              <h3 className="font-bold text-green-400 mb-2">How It's Different</h3>
              <p className="text-sm text-acc-gray-300">Orchestrators coordinate multiple agents, each with specialized knowledge and tool access, ensuring secure, policy-compliant interactions.</p>
            </div>
            <div className="bg-acc-gray-800/50 border border-acc-gray-700 rounded-lg p-6">
              <h3 className="font-bold text-blue-400 mb-2">Business Impact</h3>
              <p className="text-sm text-acc-gray-300">Higher containment rates, faster resolution times, and better customer satisfaction through intelligent, contextual conversations.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Execution Scenarios</h2>
        <p className="text-acc-gray-400 mb-8 max-w-3xl">
          Select a scenario below to see how orchestrators, agents, and tools work together to handle real customer requests.
        </p>

        {/* Scenarios */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {list.map(s => (
              <button
                key={s.id}
                onClick={() => playScenario(s)}
                className={[
                  'px-4 py-2 rounded-md border transition-all',
                  selected?.id === s.id ? 'bg-acc-purple/30 border-acc-purple text-white' : 'bg-acc-gray-800 border-acc-gray-700 text-acc-gray-300',
                  'hover:bg-acc-purple/20 hover:border-acc-purple/50'
                ].join(' ')}
              >
                ▶ {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Scenario-only circles at the top */}
        <div className="mb-8 bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Execution Path</h3>
          {selected ? (
            <ScenarioPath pathIds={topRow} activeIndex={activeIndex} />
          ) : (
            <div className="text-center py-12 text-acc-gray-400">
              Select a scenario above to visualize its execution path
            </div>
          )}
        </div>

        {/* Execution trace */}
        <div className="mb-12 bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-acc-gray-400 mb-2">Execution Trace</h3>
          <div className="font-mono text-xs text-green-400 space-y-1 h-40 overflow-y-auto">
            {trace.length === 0 && <div className="text-acc-gray-600">Execution trace will appear here when you select a scenario.</div>}
            {trace.map((t, i) => (
              <div key={i}>{`[${i + 1}] → ${t}`}</div>
            ))}
          </div>
        </div>

        <NextPageButton href="/pilot/" label="Pilot" />
      </div>
    </div>
  );
}
