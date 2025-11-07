'use client';

import intents from '@/data/intents_top200.json';
import map from '@/data/agentic/usecase_map_full.json';
import agentsCatalog from '@/data/agents_catalog_full.json';
import { useMemo, useState } from 'react';

type Intent = { id:number; name:string; category:string; volume:string; complexity:string };
type MapRow = { intentId:number; intent:string; agent:string; tools:string[] };

export default function UseCaseMatrix(){
  const [filterDomain, setFilterDomain] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  
  const mappings = map.mappings as MapRow[];
  const agentById = useMemo(()=>{
    const allAgents = [...agentsCatalog.orchestrators, ...agentsCatalog.agents];
    return Object.fromEntries(allAgents.map(a=>[a.id,a]));
  },[]);
  const toolById  = useMemo(()=>Object.fromEntries(agentsCatalog.tools.map(t=>[t.id,t])),[]);
  const intentById= useMemo(()=>Object.fromEntries((intents.intents as Intent[]).map(i=>[i.id,i])),[]);

  const domains = useMemo(()=>['All', ...Array.from(new Set((intents.intents as Intent[]).map(i=>i.category)))],[]);
  
  const filteredRows = mappings
    .map(r => ({...r, intentObj:intentById[r.intentId]}))
    .filter(r => {
      if (!r.intentObj) return false;
      const matchesDomain = filterDomain === 'All' || r.intentObj.category === filterDomain;
      const matchesSearch = searchTerm === '' || 
        r.intent.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.intentObj.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesDomain && matchesSearch;
    });

  const totalPages = Math.ceil(filteredRows.length / itemsPerPage);
  const rows = filteredRows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
  const coveragePct = Math.round((mappings.length / intents.intents.length) * 100);

  return (
    <section className="mt-10">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Complete Intent Coverage ({mappings.length} Intents)</h2>
        <p className="text-sm text-acc-gray-400">
          Coverage: <b className="text-acc-purple">{coveragePct}%</b> of {intents.intents.length} telecom intents mapped to agents & tools.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search intents..."
          value={searchTerm}
          onChange={e=>{setSearchTerm(e.target.value); setCurrentPage(1);}}
          className="flex-1 bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-2 text-white placeholder-acc-gray-400 focus:outline-none focus:ring-2 focus:ring-acc-purple"
        />
        <select 
          value={filterDomain} 
          onChange={e=>{setFilterDomain(e.target.value); setCurrentPage(1);}}
          className="bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-acc-purple"
        >
          {domains.map(d=><option key={d} value={d}>{d}</option>)}
        </select>
      </div>
      
      <div className="mb-4 text-sm text-acc-gray-400">
        Showing {rows.length} of {filteredRows.length} intents
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
          No intents found matching your filters.
        </div>
      )}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-acc-gray-800 border border-acc-gray-700 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-acc-gray-700"
          >
            Previous
          </button>
          <span className="text-sm text-acc-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-acc-gray-800 border border-acc-gray-700 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-acc-gray-700"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

