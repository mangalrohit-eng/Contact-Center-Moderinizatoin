'use client';

import agentsCatalog from '@/data/agents_catalog_full.json';
import { Layers, Cpu, Wrench, Search } from 'lucide-react';
import NextPageButton from '@/components/NextPageButton';
import { useState, useMemo } from 'react';

export default function AgentsPage() {
  const { orchestrators, agents, tools } = agentsCatalog;
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'orchestrator' | 'agent' | 'tool'>('all');

  const getIcon = (type: string) => {
    if (type.includes('Orchestrator')) return Layers;
    if (type.includes('Agent')) return Cpu;
    return Wrench;
  };

  const getColor = (type: string) => {
    if (type.includes('Orchestrator')) return 'text-acc-purple';
    if (type.includes('Agent')) return 'text-green-400';
    return 'text-sky-400';
  };

  const getBgColor = (type: string) => {
    if (type.includes('Orchestrator')) return 'bg-acc-purple/10 border-acc-purple/30';
    if (type.includes('Agent')) return 'bg-green-400/10 border-green-400/30';
    return 'bg-sky-400/10 border-sky-400/30';
  };

  // Filter and search logic
  const filteredOrchestrators = useMemo(() => {
    if (filterType !== 'all' && filterType !== 'orchestrator') return [];
    if (!searchTerm) return orchestrators;
    const term = searchTerm.toLowerCase();
    return orchestrators.filter(item => 
      item.name.toLowerCase().includes(term) || 
      item.description.toLowerCase().includes(term)
    );
  }, [orchestrators, searchTerm, filterType]);

  const filteredAgents = useMemo(() => {
    if (filterType !== 'all' && filterType !== 'agent') return [];
    if (!searchTerm) return agents;
    const term = searchTerm.toLowerCase();
    return agents.filter(item => 
      item.name.toLowerCase().includes(term) || 
      item.description.toLowerCase().includes(term)
    );
  }, [agents, searchTerm, filterType]);

  const filteredTools = useMemo(() => {
    if (filterType !== 'all' && filterType !== 'tool') return [];
    if (!searchTerm) return tools;
    const term = searchTerm.toLowerCase();
    return tools.filter(item => 
      item.name.toLowerCase().includes(term) || 
      item.description.toLowerCase().includes(term)
    );
  }, [tools, searchTerm, filterType]);

  const totalResults = filteredOrchestrators.length + filteredAgents.length + filteredTools.length;

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-acc-purple">Agents & Tools Catalog</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto mb-8">
            Comprehensive directory of {orchestrators.length} orchestrators, {agents.length} domain agents, and {tools.length} backend tools & integrations powering enterprise-scale contact center automation covering 200+ intents.
          </p>
        </div>

        {/* Introduction - How They Work Together */}
        <div className="mb-16 bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">How the System Works</h2>
          <p className="text-acc-gray-300 mb-6">
            The agentic architecture is organized in three tiers, each with specific responsibilities:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-acc-gray-800/50 border border-acc-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-acc-purple/20 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-acc-purple" />
                </div>
                <h3 className="font-bold text-acc-purple">Orchestrators</h3>
              </div>
              <p className="text-sm text-acc-gray-300 mb-3">
                High-level coordinators that manage conversation flow, enforce policies, and route requests to the right domain agents.
              </p>
              <p className="text-xs text-acc-gray-400 italic">
                Example: Goal Orchestrator determines which agent can best fulfill a customer's objective.
              </p>
            </div>

            <div className="bg-acc-gray-800/50 border border-acc-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-400/20 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-bold text-green-400">Domain Agents</h3>
              </div>
              <p className="text-sm text-acc-gray-300 mb-3">
                Specialized agents with deep knowledge of specific telecom domains (billing, plans, devices). Each agent has access to relevant tools and can handle complex multi-turn scenarios.
              </p>
              <p className="text-xs text-acc-gray-400 italic">
                Example: Billing Explainer agent uses BSS Billing and Payment tools to resolve charge disputes.
              </p>
            </div>

            <div className="bg-acc-gray-800/50 border border-acc-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-sky-400/20 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="font-bold text-sky-400">Tools & APIs</h3>
              </div>
              <p className="text-sm text-acc-gray-300 mb-3">
                Backend integrations providing data access, business logic execution, and knowledge retrieval. Tools are called by agents to perform specific operations.
              </p>
              <p className="text-xs text-acc-gray-400 italic">
                Example: BSS Billing tool retrieves account charges; Payment Gateway processes transactions.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-acc-gray-900/50 border border-acc-gray-700 rounded-lg p-4">
            <p className="text-sm text-acc-gray-300">
              <strong className="text-white">Execution Flow:</strong> Customer request → Conversation Orchestrator → Goal Orchestrator → Domain Agent → Tools → Response → Safety Orchestrator → Customer
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-acc-gray-400" />
              <input
                type="text"
                placeholder="Search by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-acc-gray-900 border border-acc-gray-700 rounded-lg text-white placeholder-acc-gray-400 focus:outline-none focus:ring-2 focus:ring-acc-purple focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  filterType === 'all'
                    ? 'bg-acc-purple text-white'
                    : 'bg-acc-gray-900 text-acc-gray-400 hover:text-white'
                }`}
              >
                All ({orchestrators.length + agents.length + tools.length})
              </button>
              <button
                onClick={() => setFilterType('orchestrator')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  filterType === 'orchestrator'
                    ? 'bg-acc-purple text-white'
                    : 'bg-acc-gray-900 text-acc-gray-400 hover:text-white'
                }`}
              >
                Orchestrators ({orchestrators.length})
              </button>
              <button
                onClick={() => setFilterType('agent')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  filterType === 'agent'
                    ? 'bg-green-400 text-black'
                    : 'bg-acc-gray-900 text-acc-gray-400 hover:text-white'
                }`}
              >
                Agents ({agents.length})
              </button>
              <button
                onClick={() => setFilterType('tool')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  filterType === 'tool'
                    ? 'bg-sky-400 text-black'
                    : 'bg-acc-gray-900 text-acc-gray-400 hover:text-white'
                }`}
              >
                Tools ({tools.length})
              </button>
            </div>
          </div>

          {/* Results count */}
          {(searchTerm || filterType !== 'all') && (
            <div className="mt-4 text-sm text-acc-gray-400">
              Showing <span className="text-white font-semibold">{totalResults}</span> result{totalResults !== 1 ? 's' : ''}
              {searchTerm && <span> for "<span className="text-acc-purple">{searchTerm}</span>"</span>}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-acc-purple/10 border border-acc-purple/30 rounded-lg p-6 text-center">
            <Layers className="w-12 h-12 text-acc-purple mx-auto mb-3" />
            <div className="text-3xl font-bold text-acc-purple mb-1">{orchestrators.length}</div>
            <div className="text-sm text-acc-gray-400">Orchestrators</div>
          </div>
          <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-6 text-center">
            <Cpu className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-400 mb-1">{agents.length}</div>
            <div className="text-sm text-acc-gray-400">Domain Agents</div>
          </div>
          <div className="bg-sky-400/10 border border-sky-400/30 rounded-lg p-6 text-center">
            <Wrench className="w-12 h-12 text-sky-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-sky-400 mb-1">{tools.length}</div>
            <div className="text-sm text-acc-gray-400">Tools & APIs</div>
          </div>
        </div>

        {/* Orchestrators */}
        {filteredOrchestrators.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Layers className="w-8 h-8 text-acc-purple" />
              Orchestrators
              <span className="text-lg text-acc-gray-400">({filteredOrchestrators.length})</span>
            </h2>
            <p className="text-acc-gray-400 mb-6">
              High-level coordinators that manage conversation flow, route to domain agents, and enforce policies.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {filteredOrchestrators.map((item) => {
                const Icon = getIcon(item.type);
                return (
                <div
                  key={item.id}
                  className={`${getBgColor(item.type)} border rounded-lg p-6 hover:scale-[1.01] transition-transform`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${getBgColor(item.type)} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${getColor(item.type)}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <span className={`text-xs px-3 py-1 rounded-full ${getBgColor(item.type)} ${getColor(item.type)} font-semibold`}>
                          {item.type}
                        </span>
                      </div>
                      <p className="text-acc-gray-300 mb-4">{item.description}</p>
                      <div>
                        <p className="text-sm font-semibold text-acc-gray-400 mb-2">Key Capabilities:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.topIntents.map((intent, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1 bg-acc-gray-800 border border-acc-gray-700 rounded-full text-acc-gray-300"
                            >
                              {intent}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Domain Agents */}
        {filteredAgents.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Cpu className="w-8 h-8 text-green-400" />
              Domain Agents
              <span className="text-lg text-acc-gray-400">({filteredAgents.length})</span>
            </h2>
            <p className="text-acc-gray-400 mb-6">
              Specialized agents with deep domain expertise and direct access to backend tools and APIs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAgents.map((item) => {
                const Icon = getIcon(item.type);
                return (
                <div
                  key={item.id}
                  className={`${getBgColor(item.type)} border rounded-lg p-6 hover:scale-[1.01] transition-transform`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${getBgColor(item.type)} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${getColor(item.type)}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getBgColor(item.type)} ${getColor(item.type)} font-semibold`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-acc-gray-300 mb-4">{item.description}</p>
                  <div>
                    <p className="text-xs font-semibold text-acc-gray-400 mb-2">Top 3 Intents:</p>
                    <div className="space-y-1">
                      {item.topIntents.map((intent, idx) => (
                        <div key={idx} className="text-xs text-acc-gray-300 flex items-center gap-2">
                          <span className="text-green-400">•</span>
                          {intent}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Tools */}
        {filteredTools.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-sky-400" />
              Tools & APIs
              <span className="text-lg text-acc-gray-400">({filteredTools.length})</span>
            </h2>
            <p className="text-acc-gray-400 mb-6">
              Backend integrations providing data access, business logic, and knowledge retrieval capabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTools.map((item) => {
                const Icon = getIcon(item.type);
                return (
                <div
                  key={item.id}
                  className={`${getBgColor(item.type)} border rounded-lg p-4 hover:scale-[1.02] transition-transform`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-5 h-5 ${getColor(item.type)}`} />
                    <h3 className="font-bold text-sm">{item.name}</h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getBgColor(item.type)} ${getColor(item.type)} font-semibold mb-2 inline-block`}>
                    {item.type}
                  </span>
                  <p className="text-xs text-acc-gray-300 mb-3 line-clamp-2">{item.description}</p>
                  <div className="space-y-1">
                    {item.topIntents.slice(0, 2).map((intent, idx) => (
                      <div key={idx} className="text-xs text-acc-gray-400 flex items-center gap-1">
                        <span className="text-sky-400">→</span>
                        {intent}
                      </div>
                    ))}
                  </div>
                </div>
                );
              })}
            </div>
          </section>
        )}

        {/* No results message */}
        {totalResults === 0 && (searchTerm || filterType !== 'all') && (
          <div className="text-center py-12 bg-acc-gray-800 border border-acc-gray-700 rounded-lg">
            <p className="text-xl text-acc-gray-400 mb-2">No results found</p>
            <p className="text-sm text-acc-gray-500">
              Try adjusting your search term or filter selection
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterType('all');
              }}
              className="mt-4 px-4 py-2 bg-acc-purple hover:bg-acc-purple/80 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        <NextPageButton href="/agentic/" label="How it Will Work" />
      </div>
    </div>
  );
}

