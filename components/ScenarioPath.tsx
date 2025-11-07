'use client';

import { useMemo } from 'react';
import orchestrators from '@/data/agentic/orchestrators.json';
import agents from '@/data/agentic/agents.json';
import tools from '@/data/agentic/tools.json';
import agentsCatalog from '@/data/agents_catalog.json';

type Props = {
  pathIds: string[];       // e.g., ["conv_orch","goal_orch","billing_explainer","bss_billing",...]
  activeIndex: number;     // which index is currently "playing"
};

export default function ScenarioPath({ pathIds, activeIndex }: Props) {
  // Build a lookup across orch/agents/tools with descriptions
  const meta = useMemo(() => {
    const catalogMap = {} as Record<string, { type: string; name: string; description: string }>;
    
    // Add from catalog
    [...agentsCatalog.orchestrators, ...agentsCatalog.agents, ...agentsCatalog.tools].forEach((item: any) => {
      catalogMap[item.id] = {
        type: item.type.includes('Orchestrator') ? 'orch' : item.type.includes('Agent') ? 'agent' : 'tool',
        name: item.name,
        description: item.description
      };
    });
    
    // Fallback to basic data
    const o = Object.fromEntries((orchestrators as any[]).map((x) => [x.id, catalogMap[x.id] || { type: 'orch', name: x.name, description: '' }]));
    const a = Object.fromEntries((agents as any[]).map((x) => [x.id, catalogMap[x.id] || { type: 'agent', name: x.name, description: '' }]));
    const t = Object.fromEntries((tools as any[]).map((x) => [x.id, catalogMap[x.id] || { type: 'tool', name: x.name, description: '' }]));
    return { ...o, ...a, ...t };
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
    <div className="w-full overflow-x-auto pb-8">
      <div className="min-w-[720px]">
        {/* Circles with proper alignment */}
        <div className="flex items-start gap-0 relative">
          {pathIds.map((id, idx) => {
            const info = meta[id] || { type: 'tool', name: id, description: '' };
            const isActive = idx === activeIndex;
            const isPast = idx < activeIndex;
            const isVisible = idx <= activeIndex;
            
            return (
              <div key={`${id}-${idx}`} className={`flex flex-col items-center flex-1 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Circle */}
                <div
                  className={[
                    'w-16 h-16 rounded-full flex items-center justify-center relative z-10',
                    'ring-2', ring(info.type), bg(info.type),
                    isActive ? 'animate-pulse scale-110' : isPast ? 'opacity-70 scale-100' : 'opacity-30 scale-95',
                    'transition-all duration-300'
                  ].join(' ')}
                  title={info.name}
                >
                  <span className="text-xs text-white/90 text-center px-1 leading-tight">
                    {abbr(info.name)}
                  </span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-acc-purple rounded-full animate-ping" />
                  )}
                </div>
                
                {/* Label */}
                <div className="text-[11px] text-gray-400 text-center w-24 mt-2 leading-snug">{info.name}</div>
              </div>
            );
          })}
          
          {/* Connecting lines - positioned absolutely behind circles */}
          <div className="absolute top-8 left-0 right-0 flex items-center" style={{ zIndex: 0 }}>
            {pathIds.map((id, idx) => {
              if (idx === pathIds.length - 1) return null;
              const isPast = idx < activeIndex;
              const flexBasis = `${100 / pathIds.length}%`;
              
              return (
                <div key={`line-${idx}`} className="flex items-center" style={{ flex: `1 1 ${flexBasis}` }}>
                  <div className="w-8" />
                  <div className={`flex-1 h-[2px] ${isPast ? 'bg-acc-purple' : 'bg-gray-700'} transition-colors duration-300`} />
                  <div className="w-8" />
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Persistent descriptions below */}
        <div className="mt-8 space-y-3">
          {pathIds.map((id, idx) => {
            const info = meta[id] || { type: 'tool', name: id, description: '' };
            const isPast = idx < activeIndex;
            const isActive = idx === activeIndex;
            const isVisible = idx <= activeIndex;
            
            if (!isVisible || !info.description) return null;
            
            return (
              <div
                key={`desc-${idx}`}
                className={`bg-acc-gray-800 border rounded-lg p-4 transition-all duration-500 ${
                  isActive 
                    ? 'border-acc-purple shadow-lg shadow-acc-purple/20' 
                    : isPast 
                    ? 'border-acc-gray-700 opacity-60' 
                    : 'border-acc-gray-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ring-2 ${ring(info.type)} ${bg(info.type)}`}>
                    <span className="text-xs text-white/90">{abbr(info.name)}</span>
                  </div>
                  <div className="flex-1">
                    <div className={`font-semibold mb-1 ${isActive ? 'text-acc-purple' : 'text-white'}`}>
                      Step {idx + 1}: {info.name}
                    </div>
                    <p className="text-sm text-acc-gray-300">{info.description}</p>
                  </div>
                  {isActive && (
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-acc-purple rounded-full animate-pulse" />
                    </div>
                  )}
                </div>
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

