'use client';

import { useEffect, useMemo, useState } from 'react';
import scenarios from '@/data/agentic/scenarios.json';
import UseCaseMatrix from '@/components/UseCaseMatrix';
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-acc-purple">Agentic Architecture</span>
        </h1>
        <p className="text-xl text-acc-gray-400 mb-8 max-w-3xl">
          Orchestrators route enterprise-scale intents to domain agents and safe tools with policy guardrails and observability. Select a scenario to see the execution path.
        </p>

        {/* Scenarios */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Select a Scenario</h2>
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

        {/* Use Case Coverage Matrix (keep) */}
        <UseCaseMatrix />

        <NextPageButton href="/roadmap/" label="Roadmap" />
      </div>
    </div>
  );
}
