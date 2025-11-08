'use client';

import { Calendar, Users, Zap, CheckCircle2, ArrowRight, Shield, Target, Wrench, Brain, Rocket } from 'lucide-react';
import NextPageButton from '@/components/NextPageButton';
import Link from 'next/link';
import { useState } from 'react';

const phases = [
  {
    month: 'Month 1',
    weeks: 'Weeks 1-4',
    focus: 'Foundation Orchestrators',
    activities: [
      'Deploy 3 core orchestrators',
      'Conversation routing setup',
      'Goal-based flow framework',
      'Safety & compliance policies',
      'Tool integration framework'
    ],
    deliverables: [
      'Conversation Orchestrator (live)',
      'Goal Orchestrator (live)',
      'Safety & Compliance Orchestrator (live)',
      'Reusable architecture foundation'
    ],
    agents: ['Conversation Orchestrator', 'Goal Orchestrator', 'Safety Orchestrator']
  },
  {
    month: 'Month 2',
    weeks: 'Weeks 5-8',
    focus: 'Billing & Payments Agent',
    activities: [
      'Deploy Billing & Payments agent',
      'Integrate BSS billing systems',
      'Build payment gateway tools',
      'Implement ~20 billing intents',
      'A/B testing with live traffic'
    ],
    deliverables: [
      'Billing & Payments Agent (live)',
      '20 billing intents automated',
      'BSS integration complete',
      'Payment processing flows'
    ],
    agents: ['Billing & Payments Agent'],
    intentCount: 20
  },
  {
    month: 'Month 3',
    weeks: 'Weeks 9-12',
    focus: 'Plans & Features Agent',
    activities: [
      'Deploy Plans & Features agent',
      'Plan catalog integration',
      'Eligibility and pricing tools',
      'Implement ~20 plan intents',
      'Full pilot validation'
    ],
    deliverables: [
      'Plans & Features Agent (live)',
      '40 total intents automated',
      '20% intent coverage achieved',
      'Baseline KPIs established'
    ],
    agents: ['Plans & Features Agent'],
    intentCount: 20
  }
];

const pods = [
  {
    name: 'Discovery Pods',
    icon: Target,
    color: 'text-acc-purple',
    bg: 'bg-acc-purple/10',
    border: 'border-acc-purple/30',
    skills: [
      'Business Analysts',
      'Conversation Designers',
      'Domain Experts',
      'Data Analysts'
    ],
    responsibilities: [
      'Intent analysis and clustering',
      'User journey mapping',
      'Success criteria definition',
      'Tool and API discovery'
    ]
  },
  {
    name: 'Design Pods',
    icon: Brain,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/30',
    skills: [
      'Conversation Designers',
      'Solution Architects',
      'UX Specialists',
      'Policy Experts'
    ],
    responsibilities: [
      'Goal-oriented flow design',
      'Agent architecture',
      'Policy and guardrail design',
      'Tool orchestration mapping'
    ]
  },
  {
    name: 'Build Pods',
    icon: Rocket,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/30',
    skills: [
      'AI/ML Engineers',
      'Backend Developers',
      'DevOps Engineers',
      'QA Automation'
    ],
    responsibilities: [
      'Agent and orchestrator development',
      'Tool and API integration',
      'Testing and validation',
      'Deployment and monitoring'
    ]
  }
];

export default function PilotPage() {
  const [selectedPod, setSelectedPod] = useState<number | null>(null);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-acc-purple/10 border border-acc-purple/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm text-acc-purple font-semibold">Phase 1: Months 1-3</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-acc-purple">3-Month Pilot</span>
            <span className="text-acc-gray-400 text-3xl block mt-2">Foundation & High-Volume Agents</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto mb-6">
            This detailed view of Roadmap Phase 1 shows how we'll deploy 3 orchestrators and 2 high-volume domain agents, achieving 20% intent coverage and demonstrating real business value in just 3 months.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 bg-acc-purple/20 border border-acc-purple rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-acc-purple" />
              <span className="text-acc-purple font-semibold">5 Agents: 3 Orchestrators + 2 Domain</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400 rounded-full px-6 py-3">
              <Target className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">40 Intents | 20% Coverage</span>
            </div>
          </div>
          <Link href="/roadmap/" className="text-sm text-acc-purple hover:text-acc-purple/80 transition-colors inline-flex items-center gap-1">
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Back to Full 12-Month Roadmap</span>
          </Link>
        </div>


        {/* 3-Month Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">3-Month Pilot Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 hover:border-acc-purple/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-acc-gray-400">{phase.weeks}</div>
                    <h3 className="text-xl font-bold text-acc-purple">{phase.month}</h3>
                  </div>
                  <div className="w-12 h-12 bg-acc-purple/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-acc-purple">{idx + 1}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2">{phase.focus}</h4>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-acc-gray-400 mb-2">Key Activities:</p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="text-xs text-acc-gray-300 flex items-start gap-2">
                        <span className="text-acc-purple mt-0.5">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-acc-gray-700">
                  <p className="text-xs font-semibold text-acc-gray-400 mb-2">Deliverables:</p>
                  <div className="space-y-1">
                    {phase.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-acc-gray-300">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pod Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Pod-Based Operating Model</h2>
          <p className="text-center text-acc-gray-400 mb-8 max-w-3xl mx-auto">
            Cross-functional pods work in parallel, passing intents through Discovery → Design → Build stages like an assembly line, ensuring continuous delivery and quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {pods.map((pod, idx) => {
              const Icon = pod.icon;
              const isSelected = selectedPod === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedPod(isSelected ? null : idx)}
                  className={`${pod.bg} border-2 ${pod.border} rounded-lg p-6 cursor-pointer transition-all ${
                    isSelected ? 'ring-2 ring-acc-purple scale-105' : 'hover:scale-102'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${pod.bg} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${pod.color}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${pod.color}`}>{pod.name}</h3>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-acc-gray-400 mb-2">Skills & Roles:</p>
                    <div className="flex flex-wrap gap-1">
                      {pod.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-acc-gray-900 border border-acc-gray-700 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {isSelected && (
                    <div className="pt-4 border-t border-acc-gray-700">
                      <p className="text-xs font-semibold text-acc-gray-400 mb-2">Responsibilities:</p>
                      <ul className="space-y-1">
                        {pod.responsibilities.map((resp, i) => (
                          <li key={i} className="text-xs text-acc-gray-300 flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Project Plan */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Visual 12-Week Project Plan</h2>
          <p className="text-center text-acc-gray-400 mb-8 max-w-3xl mx-auto">
            Intent-first approach: Discovery and Design work on all 40 intents, then Build converges into orchestrators and domain agents.
          </p>

          {/* Timeline Header */}
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 mb-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-acc-purple rounded"></div>
                  <span className="text-sm text-acc-gray-300">Discovery Pod (Intent Analysis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-400 rounded"></div>
                  <span className="text-sm text-acc-gray-300">Design Pod (Flow Design)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <span className="text-sm text-acc-gray-300">Build Pod (Agent Dev)</span>
                </div>
              </div>
            </div>

            {/* Week markers */}
            <div className="flex justify-between text-xs text-acc-gray-500 mb-2 px-2">
              <span>Week 1</span>
              <span>Week 3</span>
              <span>Week 6</span>
              <span>Week 9</span>
              <span>Week 12</span>
            </div>
            <div className="h-1 bg-acc-gray-700 rounded mb-6"></div>

            {/* Phase 1: Discovery (All 40 Intents) */}
            <div className="mb-8">
              <div className="font-bold mb-3 flex items-center gap-2">
                <span className="text-white">Phase 1: Intent Discovery</span>
                <span className="text-xs text-acc-gray-500">(All 40 intents)</span>
              </div>
              <div className="space-y-2">
                <div className="flex gap-1">
                  <div className="bg-acc-purple h-12 rounded flex items-center justify-center text-white text-sm font-semibold px-3" style={{width: '25%'}}>
                    Discover & Cluster 40 Intents
                  </div>
                  <div className="bg-acc-gray-700/50 h-12 rounded flex items-center justify-center text-acc-gray-500 text-xs px-3" style={{width: '75%'}}>
                    <span className="opacity-50">→ Design Phase</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs text-acc-gray-400">
                <strong>Activities:</strong> Intent clustering, user journey mapping, tool/API discovery, success criteria definition
              </div>
            </div>

            {/* Phase 2: Design (All 40 Intents) */}
            <div className="mb-8">
              <div className="font-bold mb-3 flex items-center gap-2">
                <span className="text-white">Phase 2: Flow Design</span>
                <span className="text-xs text-acc-gray-500">(40 intent flows)</span>
              </div>
              <div className="space-y-2">
                <div className="flex gap-1">
                  <div className="bg-acc-gray-700/50 h-12 rounded flex items-center justify-center text-acc-gray-500 text-xs px-3" style={{width: '16.66%'}}>
                    <span className="opacity-50">← Discovery</span>
                  </div>
                  <div className="bg-green-400 h-12 rounded flex items-center justify-center text-black text-sm font-semibold px-3" style={{width: '33.33%'}}>
                    Design 40 Goal-Based Flows
                  </div>
                  <div className="bg-acc-gray-700/50 h-12 rounded flex items-center justify-center text-acc-gray-500 text-xs px-3" style={{width: '50%'}}>
                    <span className="opacity-50">→ Build Phase</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs text-acc-gray-400">
                <strong>Activities:</strong> Conversation flow design, policy & guardrail definition, agent architecture planning, tool orchestration mapping
              </div>
            </div>

            {/* Phase 3: Build - Converging into Agents */}
            <div className="mb-4">
              <div className="font-bold mb-3 flex items-center gap-2">
                <span className="text-white">Phase 3: Agent Build & Deploy</span>
                <span className="text-xs text-acc-gray-500">(5 agents: 3 orchestrators + 2 domain)</span>
              </div>
              
              {/* 3 Orchestrators */}
              <div className="mb-3 pl-4 border-l-2 border-blue-400/30">
                <div className="text-sm font-semibold text-blue-400 mb-2">3 Core Orchestrators</div>
                <div className="flex gap-1 mb-2">
                  <div className="bg-acc-gray-700/50 h-10 rounded flex items-center justify-center text-acc-gray-500 text-xs px-3" style={{width: '50%'}}>
                    <span className="opacity-50">← Design complete</span>
                  </div>
                  <div className="bg-blue-400 h-10 rounded flex items-center justify-center text-black text-xs font-semibold px-3" style={{width: '25%'}}>
                    Build CES Foundation
                  </div>
                  <div className="bg-green-900/30 h-10 rounded flex items-center justify-center text-white text-xs font-semibold px-3" style={{width: '25%'}}>
                    ✅ Week 6: Orchestrators Live
                  </div>
                </div>
                <div className="text-xs text-acc-gray-500 mt-1">
                  Conversation, Goal, and Safety & Compliance Orchestrators
                </div>
              </div>

              {/* Billing Agent */}
              <div className="mb-3 pl-4 border-l-2 border-blue-400/30">
                <div className="text-sm font-semibold text-blue-400 mb-2">Billing & Payments Agent (20 intents)</div>
                <div className="flex gap-1 mb-2">
                  <div className="bg-acc-gray-700/50 h-10 rounded flex items-center justify-center text-acc-gray-500 text-xs px-3" style={{width: '50%'}}>
                    <span className="opacity-50">← 20 flows designed</span>
                  </div>
                  <div className="bg-blue-400 h-10 rounded flex items-center justify-center text-black text-xs font-semibold px-3" style={{width: '25%'}}>
                    Build Domain Agent
                  </div>
                  <div className="bg-green-900/30 h-10 rounded flex items-center justify-center text-white text-xs font-semibold px-3" style={{width: '25%'}}>
                    ✅ Week 9: Agent Live
                  </div>
                </div>
                <div className="text-xs text-acc-gray-500 mt-1">
                  BSS integration, payment gateway tools
                </div>
              </div>

              {/* Plans Agent */}
              <div className="pl-4 border-l-2 border-blue-400/30">
                <div className="text-sm font-semibold text-blue-400 mb-2">Plans & Features Agent (20 intents)</div>
                <div className="flex gap-1 mb-2">
                  <div className="bg-acc-gray-700/50 h-10 rounded flex items-center justify-center text-acc-gray-500 text-xs px-3" style={{width: '50%'}}>
                    <span className="opacity-50">← 20 flows designed</span>
                  </div>
                  <div className="bg-blue-400 h-10 rounded flex items-center justify-center text-black text-xs font-semibold px-3" style={{width: '25%'}}>
                    Build Domain Agent
                  </div>
                  <div className="bg-green-900/30 h-10 rounded flex items-center justify-center text-white text-xs font-semibold px-3" style={{width: '25%'}}>
                    ✅ Week 12: Agent Live
                  </div>
                </div>
                <div className="text-xs text-acc-gray-500 mt-1">
                  Plan catalog integration, eligibility engine
                </div>
              </div>
            </div>
          </div>

          {/* Intent-First Workflow Explanation */}
          <div className="bg-acc-purple/10 border border-acc-purple/30 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-3 text-acc-purple">Intent-First Workflow</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-acc-purple rounded-full flex items-center justify-center text-white text-xs">1</div>
                  <span>Discover All Intents</span>
                </div>
                <p className="text-acc-gray-400 text-xs">
                  Discovery Pod analyzes all 40 intents upfront, understanding user needs, business context, and system dependencies before any design work begins.
                </p>
              </div>
              <div>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black text-xs">2</div>
                  <span>Design All Flows</span>
                </div>
                <p className="text-acc-gray-400 text-xs">
                  Design Pod creates goal-based conversation flows for all 40 intents, ensuring consistent patterns and reusable components across domains.
                </p>
              </div>
              <div>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-black text-xs">3</div>
                  <span>Build Agents</span>
                </div>
                <p className="text-acc-gray-400 text-xs">
                  Build Pod converges 40 intents into 5 agents (3 orchestrators + 2 domain agents), implementing flows with CES Next Gen and tool integrations.
                </p>
              </div>
            </div>
          </div>

          {/* Key Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-acc-gray-800 border-l-4 border-acc-purple rounded-lg p-4">
              <div className="font-bold text-acc-purple mb-2">Week 3 Milestone</div>
              <p className="text-sm text-acc-gray-300">40 intents discovered, clustered, and documented</p>
            </div>
            <div className="bg-acc-gray-800 border-l-4 border-green-400 rounded-lg p-4">
              <div className="font-bold text-green-400 mb-2">Week 6 Milestone</div>
              <p className="text-sm text-acc-gray-300">40 flows designed + 3 orchestrators deployed</p>
            </div>
            <div className="bg-acc-gray-800 border-l-4 border-blue-400 rounded-lg p-4">
              <div className="font-bold text-blue-400 mb-2">Week 12 Milestone</div>
              <p className="text-sm text-acc-gray-300">All 5 agents live, 40 intents automated, 20% coverage</p>
            </div>
          </div>
        </div>


        {/* Pilot Success Criteria & Outputs */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Success Criteria */}
          <div className="bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-acc-purple">Pilot Success Criteria</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-acc-gray-300">Intents Deployed</span>
                <span className="text-xl font-bold text-white">40</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-acc-gray-300">Intent Coverage</span>
                <span className="text-xl font-bold text-white">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-acc-gray-300">Containment Lift</span>
                <span className="text-xl font-bold text-green-400">+10%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-acc-gray-300">AHT Reduction</span>
                <span className="text-xl font-bold text-green-400">~45-60s</span>
              </div>
            </div>
          </div>

          {/* Foundation Outputs */}
          <div className="bg-gradient-to-br from-green-400/10 to-transparent border border-green-400/30 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-green-400">Reusable Foundation</h3>
            <p className="text-sm text-acc-gray-300 mb-4">
              Accelerates future phases by <strong className="text-white">40-50%</strong>
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-acc-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>CES Next architecture & templates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-acc-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Tool integration framework</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-acc-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Policy & guardrail library</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-acc-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>CI/CD & monitoring stack</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-acc-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Training & documentation</span>
              </div>
            </div>
          </div>
        </div>

        <NextPageButton href="/roadmap/" label="Full Roadmap" />
      </div>
    </div>
  );
}

