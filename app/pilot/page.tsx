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

        {/* Visual Project Plan */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Visual 12-Week Project Plan</h2>
          <p className="text-center text-acc-gray-400 mb-8 max-w-3xl mx-auto">
            Three pods work in parallel, passing agents from Discovery → Design → Build to deliver real business value.
          </p>

          {/* Timeline Header */}
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 mb-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-acc-purple rounded"></div>
                  <span className="text-sm text-acc-gray-300">Discovery Pod</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-400 rounded"></div>
                  <span className="text-sm text-acc-gray-300">Design Pod</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <span className="text-sm text-acc-gray-300">Build Pod</span>
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

            {/* Orchestrators */}
            <div className="mb-8">
              <div className="font-bold mb-3 flex items-center gap-2">
                <span className="text-white">3 Orchestrators</span>
                <span className="text-xs text-acc-gray-500">(Foundation)</span>
              </div>
              <div className="space-y-2">
                <div className="flex gap-1">
                  <div className="bg-acc-purple h-10 rounded flex items-center justify-center text-white text-xs font-semibold px-3" style={{width: '16.66%'}}>
                    Discovery
                  </div>
                  <div className="bg-green-400 h-10 rounded flex items-center justify-center text-black text-xs font-semibold px-3" style={{width: '16.66%'}}>
                    Design
                  </div>
                  <div className="bg-blue-400 h-10 rounded flex items-center justify-center text-black text-xs font-semibold px-3" style={{width: '16.66%'}}>
                    Build & Deploy
                  </div>
                  <div className="bg-green-900/30 h-10 rounded flex items-center justify-center text-white text-xs font-semibold px-3" style={{width: '8.33%'}}>
                    ✅ Live
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Agent */}
            <div className="mb-8">
              <div className="font-bold mb-3 flex items-center gap-2">
                <span className="text-white">Billing & Payments Agent</span>
                <span className="text-xs text-acc-gray-500">(20 intents)</span>
              </div>
              <div className="space-y-2">
                <div className="flex gap-1">
                  <div style={{width: '25%'}}></div>
                  <div className="bg-acc-purple h-10 rounded flex items-center justify-center text-white text-xs font-semibold px-3" style={{width: '16.66%'}}>
                    Discovery
                  </div>
                  <div className="bg-green-400 h-10 rounded flex items-center justify-center text-black text-xs font-semibold px-3" style={{width: '16.66%'}}>
                    Design
                  </div>
                  <div className="bg-blue-400 h-10 rounded flex items-center justify-center text-black text-xs font-semibold px-3" style={{width: '16.66%'}}>
                    Build & Deploy
                  </div>
                  <div className="bg-green-900/30 h-10 rounded flex items-center justify-center text-white text-xs font-semibold px-3" style={{width: '8.33%'}}>
                    ✅ Live
                  </div>
                </div>
              </div>
            </div>

            {/* Plans Agent */}
            <div className="mb-4">
              <div className="font-bold mb-3 flex items-center gap-2">
                <span className="text-white">Plans & Features Agent</span>
                <span className="text-xs text-acc-gray-500">(20 intents)</span>
              </div>
              <div className="space-y-2">
                <div className="flex gap-1">
                  <div style={{width: '50%'}}></div>
                  <div className="bg-acc-purple h-10 rounded flex items-center justify-center text-white text-xs font-semibold px-3" style={{width: '8.33%'}}>
                    Disc
                  </div>
                  <div className="bg-green-400 h-10 rounded flex items-center justify-center text-black text-xs font-semibold px-3" style={{width: '16.66%'}}>
                    Design
                  </div>
                  <div className="bg-blue-400 h-10 rounded flex items-center justify-center text-black text-xs font-semibold px-3" style={{width: '16.66%'}}>
                    Build & Deploy
                  </div>
                  <div className="bg-green-900/30 h-10 rounded flex items-center justify-center text-white text-xs font-semibold px-3" style={{width: '8.33%'}}>
                    ✅ Live
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-acc-gray-800 border-l-4 border-acc-purple rounded-lg p-4">
              <div className="font-bold text-acc-purple mb-2">Week 4 Milestone</div>
              <p className="text-sm text-acc-gray-300">3 Orchestrators deployed and operational</p>
            </div>
            <div className="bg-acc-gray-800 border-l-4 border-green-400 rounded-lg p-4">
              <div className="font-bold text-green-400 mb-2">Week 8 Milestone</div>
              <p className="text-sm text-acc-gray-300">Billing Agent live with 20 intents automated</p>
            </div>
            <div className="bg-acc-gray-800 border-l-4 border-blue-400 rounded-lg p-4">
              <div className="font-bold text-blue-400 mb-2">Week 12 Milestone</div>
              <p className="text-sm text-acc-gray-300">Plans Agent live, 40 total intents, 20% coverage</p>
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

