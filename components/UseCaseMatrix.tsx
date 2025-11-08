'use client';

import intents from '@/data/intents_top200.json';
import map from '@/data/agentic/usecase_map_full.json';
import agentsCatalog from '@/data/agents_catalog_full.json';
import utterances from '@/data/intent_utterances.json';
import { useMemo, useState } from 'react';

type Intent = { id:number; name:string; category:string; volume:string; complexity:string };
type MapRow = { intentId:number; intent:string; agent:string; tools:string[] };

export default function UseCaseMatrix(){
  const [filterDomain, setFilterDomain] = useState<string>('All');
  const [filterAgent, setFilterAgent] = useState<string>('All');
  const [filterTool, setFilterTool] = useState<string>('All');
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
  
  // Get unique agents and tools for filter dropdowns
  const agents = useMemo(() => {
    const uniqueAgents = Array.from(new Set(mappings.map(m => m.agent)));
    return ['All', ...uniqueAgents.sort()];
  }, [mappings]);

  const tools = useMemo(() => {
    const uniqueTools = Array.from(new Set(mappings.flatMap(m => m.tools)));
    return ['All', ...uniqueTools.sort()];
  }, [mappings]);
  
  const filteredRows = mappings
    .map(r => ({...r, intentObj:intentById[r.intentId]}))
    .filter(r => {
      if (!r.intentObj) return false;
      const matchesDomain = filterDomain === 'All' || r.intentObj.category === filterDomain;
      const matchesAgent = filterAgent === 'All' || r.agent === filterAgent;
      const matchesTool = filterTool === 'All' || r.tools.includes(filterTool);
      const matchesSearch = searchTerm === '' || 
        r.intent.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.intentObj.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesDomain && matchesAgent && matchesTool && matchesSearch;
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
        <p className="text-xs text-acc-gray-500 mt-2 italic">
          💡 Hover over any intent to see an example customer utterance
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="space-y-4 mb-6">
        {/* Search Bar */}
        <div>
          <input
            type="text"
            placeholder="Search intents..."
            value={searchTerm}
            onChange={e=>{setSearchTerm(e.target.value); setCurrentPage(1);}}
            className="w-full bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-2 text-white placeholder-acc-gray-400 focus:outline-none focus:ring-2 focus:ring-acc-purple"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-acc-gray-400 mb-1.5">Filter by Domain</label>
            <select 
              value={filterDomain} 
              onChange={e=>{setFilterDomain(e.target.value); setCurrentPage(1);}}
              className="w-full bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-acc-purple"
            >
              {domains.map(d=><option key={d} value={d}>{d === 'All' ? 'All Domains' : d}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-acc-gray-400 mb-1.5">Filter by Agent</label>
            <select 
              value={filterAgent} 
              onChange={e=>{setFilterAgent(e.target.value); setCurrentPage(1);}}
              className="w-full bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-acc-purple"
            >
              {agents.map(a=><option key={a} value={a}>{a === 'All' ? 'All Agents' : (agentById[a]?.name || a)}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-acc-gray-400 mb-1.5">Filter by Tool</label>
            <select 
              value={filterTool} 
              onChange={e=>{setFilterTool(e.target.value); setCurrentPage(1);}}
              className="w-full bg-acc-gray-900 border border-acc-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-acc-purple"
            >
              {tools.map(t=><option key={t} value={t}>{t === 'All' ? 'All Tools' : (toolById[t]?.name || t)}</option>)}
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {(filterDomain !== 'All' || filterAgent !== 'All' || filterTool !== 'All') && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-acc-gray-400">Active filters:</span>
            {filterDomain !== 'All' && (
              <button
                onClick={() => {setFilterDomain('All'); setCurrentPage(1);}}
                className="text-xs px-3 py-1 bg-acc-purple/20 text-acc-purple border border-acc-purple/40 rounded-full hover:bg-acc-purple/30 transition-colors flex items-center gap-1.5"
              >
                Domain: {filterDomain}
                <span className="text-lg leading-none">×</span>
              </button>
            )}
            {filterAgent !== 'All' && (
              <button
                onClick={() => {setFilterAgent('All'); setCurrentPage(1);}}
                className="text-xs px-3 py-1 bg-green-400/20 text-green-400 border border-green-400/40 rounded-full hover:bg-green-400/30 transition-colors flex items-center gap-1.5"
              >
                Agent: {agentById[filterAgent]?.name || filterAgent}
                <span className="text-lg leading-none">×</span>
              </button>
            )}
            {filterTool !== 'All' && (
              <button
                onClick={() => {setFilterTool('All'); setCurrentPage(1);}}
                className="text-xs px-3 py-1 bg-sky-400/20 text-sky-400 border border-sky-400/40 rounded-full hover:bg-sky-400/30 transition-colors flex items-center gap-1.5"
              >
                Tool: {toolById[filterTool]?.name || filterTool}
                <span className="text-lg leading-none">×</span>
              </button>
            )}
            <button
              onClick={() => {
                setFilterDomain('All');
                setFilterAgent('All');
                setFilterTool('All');
                setSearchTerm('');
                setCurrentPage(1);
              }}
              className="text-xs px-3 py-1 bg-acc-gray-700 text-acc-gray-300 border border-acc-gray-600 rounded-full hover:bg-acc-gray-600 transition-colors"
            >
              Clear all
            </button>
          </div>
        )}
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
            {rows.map((r, i)=>{
              const utterance = (utterances.utterances as Record<string, string>)[String(r.intentId)];
              return (
              <tr key={i} className="border-t border-acc-gray-700 hover:bg-acc-gray-700/30 transition-colors">
                <td className="p-3 text-white group relative">
                  <span className="cursor-help">
                    {r.intentObj.name}
                  </span>
                  {utterance && (
                    <div className="invisible group-hover:visible absolute z-10 left-0 top-full mt-1 w-64 bg-acc-gray-900 border-2 border-acc-purple rounded-lg p-3 shadow-xl">
                      <div className="text-xs font-semibold text-acc-purple mb-1">Example:</div>
                      <div className="text-sm text-white italic">"{utterance}"</div>
                    </div>
                  )}
                </td>
                <td className="p-3 text-acc-gray-400">{r.intentObj.category}</td>
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
              );
            })}
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

