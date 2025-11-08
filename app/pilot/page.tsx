'use client';

import { Calendar, Users, Zap, CheckCircle2, ArrowRight, Shield, Target, Wrench, Brain, Rocket } from 'lucide-react';
import NextPageButton from '@/components/NextPageButton';
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-acc-purple">Pilot-First Approach</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto mb-6">
            De-risk the transformation with a focused 3-month pilot (Phase 1 of the roadmap) that delivers real business value by deploying high-volume billing and plan agents covering 40 intents and achieving 20% intent coverage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center gap-2 bg-acc-purple/20 border border-acc-purple rounded-full px-6 py-3">
              <Calendar className="w-5 h-5 text-acc-purple" />
              <span className="text-acc-purple font-semibold">3-Month Pilot = Phase 1 of Roadmap</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400 rounded-full px-6 py-3">
              <Target className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">40 Intents | 20% Coverage</span>
            </div>
          </div>
        </div>

        {/* Why Pilot First */}
        <div className="mb-16 bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Start with a Pilot?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-acc-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-acc-purple" />
              </div>
              <h3 className="font-bold mb-2">De-Risk Transformation</h3>
              <p className="text-sm text-acc-gray-400">Validate technical approach and business value with limited scope before enterprise-wide commitment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-bold mb-2">Build Foundation</h3>
              <p className="text-sm text-acc-gray-400">Establish reusable architecture, tooling, and best practices that accelerate all future phases</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-bold mb-2">Demonstrate Value</h3>
              <p className="text-sm text-acc-gray-400">Show measurable KPI improvements to secure stakeholder buy-in for full-scale deployment</p>
            </div>
          </div>
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

          {/* Workflow Visualization */}
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Agent Workflow: Discovery → Design → Build</h3>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex-1 max-w-xs">
                <div className="bg-acc-purple/20 border-2 border-acc-purple rounded-lg p-4 text-center">
                  <Target className="w-8 h-8 text-acc-purple mx-auto mb-2" />
                  <div className="font-bold text-acc-purple mb-1">Discovery</div>
                  <div className="text-xs text-acc-gray-400">Analyze intents, define goals</div>
                  <div className="text-xs text-acc-gray-500 mt-2">~1-2 weeks per agent</div>
                </div>
              </div>
              <ArrowRight className="w-8 h-8 text-acc-purple flex-shrink-0" />
              <div className="flex-1 max-w-xs">
                <div className="bg-green-400/20 border-2 border-green-400 rounded-lg p-4 text-center">
                  <Brain className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="font-bold text-green-400 mb-1">Design</div>
                  <div className="text-xs text-acc-gray-400">Create flows, define tools</div>
                  <div className="text-xs text-acc-gray-500 mt-2">~2 weeks per agent</div>
                </div>
              </div>
              <ArrowRight className="w-8 h-8 text-acc-purple flex-shrink-0" />
              <div className="flex-1 max-w-xs">
                <div className="bg-blue-400/20 border-2 border-blue-400 rounded-lg p-4 text-center">
                  <Rocket className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="font-bold text-blue-400 mb-1">Build</div>
                  <div className="text-xs text-acc-gray-400">Implement, test, deploy</div>
                  <div className="text-xs text-acc-gray-500 mt-2">~1-2 weeks per agent</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-acc-gray-400 text-center">
              Pods work sequentially on each agent, with some overlap. Each agent takes ~4-6 weeks from discovery to deployment with hypercare.
            </p>
          </div>
        </div>

        {/* Detailed 3-Month Project Plan */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Detailed 3-Month Project Plan</h2>
          <p className="text-center text-acc-gray-400 mb-8 max-w-3xl mx-auto">
            Week-by-week breakdown showing how Discovery, Design, and Build pods collaborate to deliver 5 agents and 40 intents.
          </p>

          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-acc-gray-900">
                  <tr>
                    <th className="text-left p-4 font-semibold text-acc-gray-300 border-b border-acc-gray-700">Week</th>
                    <th className="text-left p-4 font-semibold text-acc-purple border-b border-acc-gray-700">Discovery Pod</th>
                    <th className="text-left p-4 font-semibold text-green-400 border-b border-acc-gray-700">Design Pod</th>
                    <th className="text-left p-4 font-semibold text-blue-400 border-b border-acc-gray-700">Build Pod</th>
                    <th className="text-left p-4 font-semibold text-acc-gray-300 border-b border-acc-gray-700">Deliverable</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {/* Month 1 - Orchestrators */}
                  <tr className="border-b border-acc-gray-700 hover:bg-acc-gray-700/30">
                    <td className="p-4 font-semibold">W1</td>
                    <td className="p-4 text-acc-gray-300">Analyze orchestrator requirements, CES Next setup</td>
                    <td className="p-4 text-acc-gray-500">—</td>
                    <td className="p-4 text-acc-gray-500">—</td>
                    <td className="p-4 text-acc-gray-400">Requirements doc</td>
                  </tr>
                  <tr className="border-b border-acc-gray-700 hover:bg-acc-gray-700/30">
                    <td className="p-4 font-semibold">W2</td>
                    <td className="p-4 text-acc-gray-300">Define routing policies, safety rules</td>
                    <td className="p-4 text-green-400">Design conversation flows</td>
                    <td className="p-4 text-acc-gray-500">—</td>
                    <td className="p-4 text-acc-gray-400">Flow designs</td>
                  </tr>
                  <tr className="border-b border-acc-gray-700 hover:bg-acc-gray-700/30">
                    <td className="p-4 font-semibold">W3</td>
                    <td className="p-4 text-acc-purple">Start Billing Agent discovery</td>
                    <td className="p-4 text-green-400">Finalize orchestrator policies</td>
                    <td className="p-4 text-blue-400">Build 3 orchestrators</td>
                    <td className="p-4 text-acc-gray-400">—</td>
                  </tr>
                  <tr className="border-b border-acc-gray-700 bg-green-900/10">
                    <td className="p-4 font-semibold">W4</td>
                    <td className="p-4 text-acc-purple">Billing intents analysis (20)</td>
                    <td className="p-4 text-acc-gray-500">—</td>
                    <td className="p-4 text-blue-400">Test & deploy orchestrators</td>
                    <td className="p-4 text-white font-semibold">✅ 3 Orchestrators Live</td>
                  </tr>
                  
                  {/* Month 2 - Billing Agent */}
                  <tr className="border-b border-acc-gray-700 hover:bg-acc-gray-700/30">
                    <td className="p-4 font-semibold">W5</td>
                    <td className="p-4 text-acc-purple">BSS/payment tool mapping</td>
                    <td className="p-4 text-green-400">Design Billing Agent flows</td>
                    <td className="p-4 text-acc-gray-500">—</td>
                    <td className="p-4 text-acc-gray-400">Intent map</td>
                  </tr>
                  <tr className="border-b border-acc-gray-700 hover:bg-acc-gray-700/30">
                    <td className="p-4 font-semibold">W6</td>
                    <td className="p-4 text-acc-purple">Start Plans Agent discovery</td>
                    <td className="p-4 text-green-400">Design tool integrations</td>
                    <td className="p-4 text-blue-400">Build Billing Agent</td>
                    <td className="p-4 text-acc-gray-400">Integration specs</td>
                  </tr>
                  <tr className="border-b border-acc-gray-700 hover:bg-acc-gray-700/30">
                    <td className="p-4 font-semibold">W7</td>
                    <td className="p-4 text-acc-purple">Plans intents analysis (20)</td>
                    <td className="p-4 text-acc-gray-500">—</td>
                    <td className="p-4 text-blue-400">BSS/payment tool integration</td>
                    <td className="p-4 text-acc-gray-400">—</td>
                  </tr>
                  <tr className="border-b border-acc-gray-700 bg-green-900/10">
                    <td className="p-4 font-semibold">W8</td>
                    <td className="p-4 text-acc-purple">Plan catalog tool mapping</td>
                    <td className="p-4 text-green-400">Design Plans Agent flows</td>
                    <td className="p-4 text-blue-400">Test & deploy Billing Agent</td>
                    <td className="p-4 text-white font-semibold">✅ Billing Agent + 20 Intents Live</td>
                  </tr>

                  {/* Month 3 - Plans Agent */}
                  <tr className="border-b border-acc-gray-700 hover:bg-acc-gray-700/30">
                    <td className="p-4 font-semibold">W9</td>
                    <td className="p-4 text-acc-gray-500">—</td>
                    <td className="p-4 text-green-400">Design tool integrations</td>
                    <td className="p-4 text-blue-400">Build Plans Agent</td>
                    <td className="p-4 text-acc-gray-400">Agent skeleton</td>
                  </tr>
                  <tr className="border-b border-acc-gray-700 hover:bg-acc-gray-700/30">
                    <td className="p-4 font-semibold">W10</td>
                    <td className="p-4 text-acc-purple">Phase 2 planning begins</td>
                    <td className="p-4 text-green-400">Finalize agent policies</td>
                    <td className="p-4 text-blue-400">Plan catalog integration</td>
                    <td className="p-4 text-acc-gray-400">Tools connected</td>
                  </tr>
                  <tr className="border-b border-acc-gray-700 hover:bg-acc-gray-700/30">
                    <td className="p-4 font-semibold">W11</td>
                    <td className="p-4 text-acc-purple">Device agent discovery</td>
                    <td className="p-4 text-green-400">A/B test planning</td>
                    <td className="p-4 text-blue-400">Test Plans Agent</td>
                    <td className="p-4 text-acc-gray-400">Test results</td>
                  </tr>
                  <tr className="border-b border-acc-gray-700 bg-green-900/10">
                    <td className="p-4 font-semibold">W12</td>
                    <td className="p-4 text-acc-purple">Device intents analysis</td>
                    <td className="p-4 text-green-400">KPI dashboard setup</td>
                    <td className="p-4 text-blue-400">Deploy Plans Agent</td>
                    <td className="p-4 text-white font-semibold">✅ Plans Agent + 40 Total Intents Live</td>
                  </tr>

                  {/* Hypercare Period */}
                  <tr className="bg-blue-900/10 border-b border-acc-gray-700">
                    <td className="p-4 font-semibold">W13-18</td>
                    <td className="p-4 text-acc-purple" colSpan={3}>
                      <span className="font-semibold">6-Week Hypercare:</span> 24/7 monitoring, optimization, KPI tracking, transition to BAU
                    </td>
                    <td className="p-4 text-white font-semibold">✅ Pilot Complete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-acc-purple/10 border border-acc-purple/30 rounded-lg p-4">
              <div className="font-semibold text-acc-purple mb-2">Discovery Pod Focus</div>
              <p className="text-xs text-acc-gray-400">Weeks 1-4: Orchestrators, Weeks 4-8: Billing Agent, Weeks 8-12: Plans Agent + Phase 2 prep</p>
            </div>
            <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4">
              <div className="font-semibold text-green-400 mb-2">Design Pod Focus</div>
              <p className="text-xs text-acc-gray-400">Flows → Tools → Policies → Testing for each agent, with 1-2 week offset from Discovery</p>
            </div>
            <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
              <div className="font-semibold text-blue-400 mb-2">Build Pod Focus</div>
              <p className="text-xs text-acc-gray-400">Implementation → Integration → Testing → Deployment, with 2-3 week offset from Design</p>
            </div>
          </div>
        </div>

        {/* Hypercare */}
        <div className="mb-16 bg-gradient-to-br from-green-400/10 to-transparent border border-green-400/30 rounded-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">6-Week Hypercare Period</h2>
              <p className="text-acc-gray-400">
                After each intent is released to production, dedicated support ensures stability and rapid issue resolution.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-acc-gray-900/50 rounded-lg p-6">
              <h3 className="font-bold text-green-400 mb-3">Hypercare Activities</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-acc-gray-300">24/7 monitoring and alerting</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-acc-gray-300">Rapid issue triage and resolution</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-acc-gray-300">Daily KPI review and optimization</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-acc-gray-300">User feedback analysis and iteration</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-acc-gray-300">Agent tuning and policy refinement</span>
                </li>
              </ul>
            </div>

            <div className="bg-acc-gray-900/50 rounded-lg p-6">
              <h3 className="font-bold text-blue-400 mb-3">Transition to BAU</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-acc-gray-300">Knowledge transfer to operations team</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-acc-gray-300">Runbook and playbook handoff</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-acc-gray-300">Ongoing support model definition</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-acc-gray-300">Performance baseline documentation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-acc-gray-300">Continuous improvement framework</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pilot Success Criteria */}
        <div className="mb-16 bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Pilot Success Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-acc-purple mb-2">10-15</div>
              <div className="text-sm text-acc-gray-400">High-value intents deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">+10%</div>
              <div className="text-sm text-acc-gray-400">Containment improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">-45s</div>
              <div className="text-sm text-acc-gray-400">AHT reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-sm text-acc-gray-400">Foundation reusability</div>
            </div>
          </div>
        </div>

        {/* Foundation Outputs */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Reusable Foundation Outputs</h2>
          <p className="text-center text-acc-gray-400 mb-8 max-w-3xl mx-auto">
            The pilot creates a robust foundation that accelerates all subsequent phases, reducing time-to-market for future intents by 40-50%.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'CES Next architecture blueprint',
              'Agent development templates',
              'Tool integration framework',
              'Policy and guardrail library',
              'Testing and validation suite',
              'Deployment automation pipelines',
              'Monitoring and observability stack',
              'Knowledge base and documentation',
              'Training materials and best practices'
            ].map((output, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-acc-purple flex-shrink-0" />
                <span className="text-sm text-acc-gray-300">{output}</span>
              </div>
            ))}
          </div>
        </div>

        <NextPageButton href="/roadmap/" label="Full Roadmap" />
      </div>
    </div>
  );
}

