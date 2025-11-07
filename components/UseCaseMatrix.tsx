'use client';

import intents from '@/data/intents_top50.json';
import map from '@/data/agentic/usecase_map.json';
import agents from '@/data/agentic/agents.json';
import tools from '@/data/agentic/tools.json';
import { useMemo, useState } from 'react';

type Intent = { id:string; name:string; domain:string };
type MapRow = { intent:string; agent:string; tools:string[] };

export default function UseCaseMatrix(){
  const [filterDomain, setFilterDomain] = useState<string>('All');
  const top40 = map.top40 as MapRow[];
  const agentById = useMemo(()=>Object.fromEntries((agents as any[]).map(a=>[a.id,a])),[]);
  const toolById  = useMemo(()=>Object.fromEntries((tools as any[]).map(t=>[t.id,t])),[]);
  const intentById= useMemo(()=>Object.fromEntries((intents.intents as Intent[]).map(i=>[i.id,i])),[]);

  const domains = useMemo(()=>['All', ...Array.from(new Set((intents.intents as Intent[]).map(i=>i.domain)))],[]);
  const rows = top40
    .map(r => ({...r, intentObj:intentById[r.intent]}))
    .filter(r => r.intentObj && (filterDomain === 'All' || r.intentObj.domain === filterDomain));

  const covered = new Set(top40.map(r=>r.intent));
  const coveragePct = Math.round((covered.size / 40) * 100);

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-2xl font-bold">Top 40 Use Case Coverage</h2>
          <p className="text-sm text-acc-gray-400 mt-1">
            Coverage: <b className="text-acc-purple">{coveragePct}%</b> of top 40 intents mapped to agents & tools.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <label className="text-acc-gray-400">Filter domain:</label>
          <select 
            value={filterDomain} 
            onChange={e=>setFilterDomain(e.target.value)}
            className="bg-acc-gray-900 border border-acc-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-acc-purple"
          >
            {domains.map(d=><option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto bg-acc-gray-800 border border-acc-gray-700 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-acc-gray-900/70 border-b border-acc-gray-700">
            <tr className="text-acc-gray-300">
              <th className="text-left p-3 font-semibold">Intent</th>
              <th className="text-left p-3 font-semibold">Domain</th>
              <th className="text-left p-3 font-semibold">Agent</th>
              <th className="text-left p-3 font-semibold">Tools</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i)=>(
              <tr key={i} className="border-t border-acc-gray-700 hover:bg-acc-gray-700/30 transition-colors">
                <td className="p-3 text-white">{r.intentObj.name}</td>
                <td className="p-3 text-acc-gray-400">{r.intentObj.domain}</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded bg-acc-purple/20 text-acc-purple border border-acc-purple/40 text-xs font-semibold">
                    {agentById[r.agent]?.name || r.agent}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex flex-wrap gap-1.5">
                    {r.tools.map(t=>(
                      <span key={t} className="px-2 py-1 rounded bg-acc-gray-900 text-acc-gray-200 border border-acc-gray-600 text-xs">
                        {toolById[t]?.name || t}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {rows.length === 0 && (
        <div className="text-center py-8 text-acc-gray-400">
          No intents found for the selected domain.
        </div>
      )}
    </section>
  );
}

