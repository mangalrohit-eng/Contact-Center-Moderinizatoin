'use client';

import { Calendar, Users, Zap, CheckCircle2, ArrowRight, Shield, Target, Wrench, Brain, Rocket } from 'lucide-react';
import NextPageButton from '@/components/NextPageButton';
import { useState } from 'react';

const phases = [
  {
    month: 'Month 1',
    weeks: 'Weeks 1-4',
    focus: 'Foundation & Discovery',
    activities: [
      'Intent inventory and prioritization',
      'Current state analysis',
      'Tool and API discovery',
      'Architecture blueprint',
      'Team onboarding'
    ],
    deliverables: [
      'Prioritized intent backlog',
      'Technical architecture',
      'Integration specifications'
    ]
  },
  {
    month: 'Month 2',
    weeks: 'Weeks 5-8',
    focus: 'Design & Development',
    activities: [
      'Goal flow design',
      'Agent and orchestrator development',
      'Tool integration build',
      'Policy and guardrail setup',
      'Testing framework creation'
    ],
    deliverables: [
      'CES Next flows',
      'Agent implementations',
      'Test environments'
    ]
  },
  {
    month: 'Month 3',
    weeks: 'Weeks 9-12',
    focus: 'Deploy & Validate',
    activities: [
      'Production deployment',
      'A/B testing setup',
      'KPI monitoring dashboard',
      'Agent optimization',
      'Hypercare preparation'
    ],
    deliverables: [
      'Live pilot agents',
      'Performance baseline',
      'Hypercare playbook'
    ]
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
            De-risk the transformation with a focused 3-month pilot to validate the approach, build the foundation, and demonstrate measurable value before full-scale rollout.
          </p>
          <div className="inline-flex items-center gap-2 bg-acc-purple/20 border border-acc-purple rounded-full px-6 py-3">
            <Calendar className="w-5 h-5 text-acc-purple" />
            <span className="text-acc-purple font-semibold">3-Month Foundation Build + 6-Week Hypercare</span>
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
            <h3 className="text-xl font-bold mb-6 text-center">Intent Workflow: Discovery → Design → Build</h3>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex-1 max-w-xs">
                <div className="bg-acc-purple/20 border-2 border-acc-purple rounded-lg p-4 text-center">
                  <Target className="w-8 h-8 text-acc-purple mx-auto mb-2" />
                  <div className="font-bold text-acc-purple mb-1">Discovery</div>
                  <div className="text-xs text-acc-gray-400">Analyze intent, define goals</div>
                  <div className="text-xs text-acc-gray-500 mt-2">~3-5 days per intent</div>
                </div>
              </div>
              <ArrowRight className="w-8 h-8 text-acc-purple flex-shrink-0" />
              <div className="flex-1 max-w-xs">
                <div className="bg-green-400/20 border-2 border-green-400 rounded-lg p-4 text-center">
                  <Brain className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="font-bold text-green-400 mb-1">Design</div>
                  <div className="text-xs text-acc-gray-400">Create flows, define policies</div>
                  <div className="text-xs text-acc-gray-500 mt-2">~5-7 days per intent</div>
                </div>
              </div>
              <ArrowRight className="w-8 h-8 text-acc-purple flex-shrink-0" />
              <div className="flex-1 max-w-xs">
                <div className="bg-blue-400/20 border-2 border-blue-400 rounded-lg p-4 text-center">
                  <Rocket className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="font-bold text-blue-400 mb-1">Build</div>
                  <div className="text-xs text-acc-gray-400">Implement, test, deploy</div>
                  <div className="text-xs text-acc-gray-500 mt-2">~7-10 days per intent</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-acc-gray-400 text-center">
              Pods work in parallel on different intents, creating a continuous delivery pipeline. Each intent takes ~15-20 days from discovery to deployment.
            </p>
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

