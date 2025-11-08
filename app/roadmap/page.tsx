'use client';

import { useState } from 'react';
import roadmapData from '@/data/roadmap.json';
import { Calendar, CheckCircle2, Zap } from 'lucide-react';
import NextPageButton from '@/components/NextPageButton';

export default function RoadmapPage() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const { phases, milestones } = roadmapData;

  const getPhaseColor = (index: number) => {
    const colors = [
      'border-acc-purple bg-acc-purple/10',
      'border-green-400 bg-green-400/10',
      'border-blue-400 bg-blue-400/10',
      'border-yellow-400 bg-yellow-400/10',
      'border-pink-400 bg-pink-400/10',
    ];
    return colors[index % colors.length];
  };

  const getPhaseAccent = (index: number) => {
    const colors = ['text-acc-purple', 'text-green-400', 'text-blue-400', 'text-yellow-400', 'text-pink-400'];
    return colors[index % colors.length];
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-acc-purple">12-Month Roadmap</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto">
            Phased rollout strategy for deploying all 17 agents and achieving 100% intent coverage with measurable KPI improvements at each milestone.
          </p>
        </div>

        {/* Quick Summary View */}
        <div className="mb-12 bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Roadmap at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {phases.map((phase, idx) => {
              const accentColor = getPhaseAccent(idx);
              return (
                <div key={phase.id} className="text-center bg-acc-gray-800/50 border border-acc-gray-700 rounded-lg p-4">
                  <div className={`text-sm font-semibold ${accentColor} mb-2`}>{phase.name}</div>
                  <div className="text-xs text-acc-gray-400 mb-3">{phase.months}</div>
                  <div className="space-y-1">
                    <div className="text-xl font-bold text-white">{phase.agents.length}</div>
                    <div className="text-xs text-acc-gray-400">Agents</div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-acc-gray-700 space-y-1">
                    <div className={`text-lg font-bold ${accentColor}`}>{phase.coverage}</div>
                    <div className="text-xs text-acc-gray-400">Coverage</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="mb-16 bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-acc-purple" />
            Deployment Timeline
          </h2>
          
          {/* Timeline bar */}
          <div className="relative mb-12">
            <div className="h-2 bg-acc-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-acc-purple via-green-400 to-blue-400 w-full" />
            </div>
            
            {/* Milestone markers */}
            <div className="relative -mt-1">
              {milestones.map((milestone, idx) => {
                const position = (milestone.month / 12) * 100;
                return (
                  <div
                    key={idx}
                    className="absolute group"
                    style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="w-4 h-4 bg-acc-purple rounded-full border-4 border-acc-gray-800 cursor-pointer hover:scale-125 transition-transform" />
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="bg-acc-gray-900 border border-acc-purple rounded-lg p-3 shadow-xl">
                        <div className="text-xs font-semibold text-acc-purple mb-1">Month {milestone.month}</div>
                        <div className="text-sm font-bold text-white mb-1">{milestone.title}</div>
                        <div className="text-xs text-acc-gray-400">{milestone.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Month labels */}
            <div className="flex justify-between mt-8 text-xs text-acc-gray-400">
              <span>Month 0</span>
              <span>Month 3</span>
              <span>Month 6</span>
              <span>Month 9</span>
              <span>Month 12</span>
            </div>
          </div>
        </div>

        {/* Phases */}
        <div className="space-y-6">
          {phases.map((phase, idx) => (
            <div
              key={phase.id}
              className={`border-2 rounded-lg overflow-hidden transition-all ${
                selectedPhase === phase.id ? 'ring-2 ring-acc-purple' : ''
              } ${getPhaseColor(idx)}`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full bg-acc-gray-900 ${getPhaseAccent(idx)}`}>
                        {phase.months}
                      </span>
                      <span className="text-sm text-acc-gray-400">{phase.quarter}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{phase.name}</h3>
                    <p className="text-acc-gray-300">{phase.description}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${getPhaseAccent(idx)} mb-1`}>
                      {phase.coverage}
                    </div>
                    <div className="text-sm text-acc-gray-400">Intent Coverage</div>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-acc-gray-900/50 rounded p-3">
                    <div className="text-xs text-acc-gray-400 mb-1">Agents</div>
                    <div className="text-lg font-bold">{phase.agents.length}</div>
                  </div>
                  <div className="bg-acc-gray-900/50 rounded p-3">
                    <div className="text-xs text-acc-gray-400 mb-1">Intents</div>
                    <div className="text-lg font-bold">{phase.intentCount}</div>
                  </div>
                  <div className="bg-acc-gray-900/50 rounded p-3">
                    <div className="text-xs text-acc-gray-400 mb-1">Containment</div>
                    <div className={`text-lg font-bold ${getPhaseAccent(idx)}`}>{phase.kpis.containment}</div>
                  </div>
                  <div className="bg-acc-gray-900/50 rounded p-3">
                    <div className="text-xs text-acc-gray-400 mb-1">CSAT</div>
                    <div className={`text-lg font-bold ${getPhaseAccent(idx)}`}>{phase.kpis.csat}</div>
                  </div>
                </div>
              </div>

              {/* Expanded details */}
              {selectedPhase === phase.id && (
                <div className="border-t border-acc-gray-700 bg-acc-gray-900/30 p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Agents */}
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <CheckCircle2 className={`w-5 h-5 ${getPhaseAccent(idx)}`} />
                        Agents Deployed
                      </h4>
                      <div className="space-y-2">
                        {phase.agents.map((agent, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between bg-acc-gray-800 border border-acc-gray-700 rounded p-3"
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  agent.type === 'orchestrator' ? 'bg-acc-purple' : 'bg-green-400'
                                }`}
                              />
                              <span className="text-sm font-medium">{agent.name}</span>
                            </div>
                            <span className="text-xs text-acc-gray-400">Month {agent.deployMonth}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Intents */}
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Zap className={`w-5 h-5 ${getPhaseAccent(idx)}`} />
                        Intents Covered
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                        {phase.intents.map((intent, i) => (
                          <div
                            key={i}
                            className="text-xs bg-acc-gray-800 border border-acc-gray-700 rounded px-3 py-2"
                          >
                            {intent}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* KPIs */}
                  <div className="mt-6 pt-6 border-t border-acc-gray-700">
                    <h4 className="font-bold text-lg mb-4">Expected KPIs at Phase End</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-acc-gray-800 border border-acc-gray-700 rounded p-4">
                        <div className="text-sm text-acc-gray-400 mb-1">Containment Rate</div>
                        <div className={`text-2xl font-bold ${getPhaseAccent(idx)}`}>{phase.kpis.containment}</div>
                      </div>
                      <div className="bg-acc-gray-800 border border-acc-gray-700 rounded p-4">
                        <div className="text-sm text-acc-gray-400 mb-1">Average Handle Time</div>
                        <div className={`text-2xl font-bold ${getPhaseAccent(idx)}`}>{phase.kpis.aht}</div>
                      </div>
                      <div className="bg-acc-gray-800 border border-acc-gray-700 rounded p-4">
                        <div className="text-sm text-acc-gray-400 mb-1">CSAT Score</div>
                        <div className={`text-2xl font-bold ${getPhaseAccent(idx)}`}>{phase.kpis.csat}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Success Factors */}
        <div className="mt-16 bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Critical Success Factors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-acc-purple flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Iterative Deployment</h4>
                <p className="text-sm text-acc-gray-400">
                  Phased rollout allows for learning and optimization before scaling to complex use cases.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-acc-purple flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">KPI-Driven Gating</h4>
                <p className="text-sm text-acc-gray-400">
                  Each phase must meet containment and CSAT thresholds before advancing to the next.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-acc-purple flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Parallel A/B Testing</h4>
                <p className="text-sm text-acc-gray-400">
                  Run legacy and new agents side-by-side to validate performance gains before full cutover.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-acc-purple flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Continuous Monitoring</h4>
                <p className="text-sm text-acc-gray-400">
                  Real-time telemetry and alerting ensure rapid detection and resolution of issues.
                </p>
              </div>
            </div>
          </div>
        </div>

        <NextPageButton href="/about/" label="About" />
      </div>
    </div>
  );
}

