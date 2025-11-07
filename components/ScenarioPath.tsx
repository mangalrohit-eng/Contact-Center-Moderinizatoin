'use client';

import { useMemo } from 'react';
import orchestrators from '@/data/agentic/orchestrators.json';
import agents from '@/data/agentic/agents.json';
import tools from '@/data/agentic/tools.json';

type Props = {
  pathIds: string[];       // e.g., ["conv_orch","goal_orch","billing_explainer","bss_billing",...]
  activeIndex: number;     // which index is currently "playing"
};

export default function ScenarioPath({ pathIds, activeIndex }: Props) {
  // Build a lookup across orch/agents/tools
  const meta = useMemo(() => {
    const o = Object.fromEntries((orchestrators as any[]).map((x) => [x.id, { type: 'orch', name: x.name }]));
    const a = Object.fromEntries((agents as any[]).map((x) => [x.id, { type: 'agent', name: x.name }]));
    const t = Object.fromEntries((tools as any[]).map((x) => [x.id, { type: 'tool', name: x.name }]));
    return { ...o, ...a, ...t } as Record<string, { type: 'orch'|'agent'|'tool'; name: string }>;
  }, []);

  // Color & ring per node type
  const ring = (type: string) => {
    switch (type) {
      case 'orch':  return 'ring-[var(--acc-purple)]';
      case 'agent': return 'ring-green-400';
      case 'tool':  return 'ring-sky-400';
      default:      return 'ring-gray-500';
    }
  };
  const bg = (type: string) => {
    switch (type) {
      case 'orch':  return 'bg-[var(--acc-purple)]/20';
      case 'agent': return 'bg-green-400/10';
      case 'tool':  return 'bg-sky-400/10';
      default:      return 'bg-gray-800';
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[720px]">
        <div className="flex items-center justify-between gap-4">
          {pathIds.map((id, idx) => {
            const info = meta[id] || { type: 'tool', name: id };
            const isActive = idx === activeIndex;
            return (
              <div key={`${id}-${idx}`} className="flex flex-col items-center flex-1">
                <div
                  className={[
                    'w-16 h-16 rounded-full flex items-center justify-center',
                    'ring-2', ring(info.type), bg(info.type),
                    isActive ? 'animate-pulse scale-105' : 'opacity-90'
                  ].join(' ')}
                  title={info.name}
                >
                  {/* Minimal initials to avoid clutter */}
                  <span className="text-xs text-white/90 text-center px-1 leading-tight">
                    {abbr(info.name)}
                  </span>
                </div>
                <div className="h-6 flex items-center justify-center w-full">
                  {idx < pathIds.length - 1 && <div className="w-full h-[2px] bg-gray-700" />}
                </div>
                <div className="text-[11px] text-gray-400 text-center w-24 mt-1 leading-snug">{info.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function abbr(name: string) {
  // Short label: Orchestrator → ORCH, Agent → first letters, Tool → 2-3 letters
  const words = name.split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, 3).toUpperCase();
  }
  return words.map(w => w[0]).join('').slice(0, 4).toUpperCase();
}

