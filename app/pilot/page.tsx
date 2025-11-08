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
    focus: 'Intent Discovery & Design',
    activities: [
      'Discover 20 billing intents',
      'Design goal-based flows',
      'Define BSS integrations',
      'Map payment gateway tools',
      'Document tool specifications'
    ],
    deliverables: [
      '20 intents discovered & clustered',
      '20 flow designs completed',
      'BSS integration requirements',
      'Tool specifications documented'
    ],
    agents: ['Discovery & Design Phase'],
    intentCount: 20
  },
  {
    month: 'Month 3',
    weeks: 'Weeks 9-12',
    focus: 'Agent & Flow Development',
    activities: [
      'Build Billing & Payments agent',
      'Integrate BSS billing systems',
      'Deploy payment gateway tools',
      'Implement CES flows',
      'Unit & integration testing'
    ],
    deliverables: [
      'Billing & Payments Agent (development)',
      'BSS integration complete',
      'Payment gateway tools deployed',
      'Initial CES flows implemented'
    ],
    agents: ['Build Phase'],
    intentCount: 20
  },
  {
    month: 'Month 4',
    weeks: 'Weeks 13-16',
    focus: 'Testing, Validation & Launch',
    activities: [
      'Complete all 20 CES flows',
      'End-to-end testing',
      'A/B testing & validation',
      'Production deployment',
      'Hypercare & monitoring'
    ],
    deliverables: [
      'Billing & Payments Agent (live)',
      '20 billing intents automated',
      '10% intent coverage achieved',
      'Production monitoring active'
    ],
    agents: ['Billing & Payments Agent'],
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
                <span className="text-sm text-acc-purple font-semibold">Phase 1: Months 1-4</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-acc-purple">4-Month Pilot</span>
                <span className="text-acc-gray-400 text-3xl block mt-2">Foundation & Billing Agent</span>
              </h1>
              <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto mb-6">
                This detailed view of Roadmap Phase 1 shows how we'll deploy 3 orchestrators and the Billing & Payments agent, achieving 10% intent coverage and demonstrating real business value in 4 months.
              </p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 bg-acc-purple/20 border border-acc-purple rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-acc-purple" />
              <span className="text-acc-purple font-semibold">4 Agents: 3 Orchestrators + 1 Domain</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400 rounded-full px-6 py-3">
              <Target className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">20 Intents | 10% Coverage</span>
            </div>
          </div>
          <Link href="/roadmap/" className="text-sm text-acc-purple hover:text-acc-purple/80 transition-colors inline-flex items-center gap-1">
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Back to Full Roadmap</span>
          </Link>
        </div>


        {/* 4-Month Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">4-Month Pilot Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <h2 className="text-3xl font-bold mb-4 text-center">Visual 16-Week Project Plan</h2>
          <p className="text-center text-acc-gray-400 mb-8 max-w-3xl mx-auto">
            Pipeline approach: Each intent flows through Discovery (2-4 weeks) → Design (2-4 weeks) → Build (2-8 weeks), with durations varying by complexity. Multiple intents in different stages simultaneously with 8 pods of each type working in parallel.
          </p>

          {/* Pipeline Workflow Explanation */}
          <div className="bg-acc-purple/10 border border-acc-purple/30 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-3 text-acc-purple">Intent Pipeline Workflow</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-acc-purple rounded-full flex items-center justify-center text-white text-xs">1</div>
                  <span>Discovery (2-4 weeks)</span>
                </div>
                <p className="text-acc-gray-400 text-xs">
                  Intent analysis, user journey mapping, tool/API discovery, success criteria definition — duration varies by complexity
                </p>
              </div>
              <div>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black text-xs">2</div>
                  <span>Design (2-4 weeks)</span>
                </div>
                <p className="text-acc-gray-400 text-xs">
                  Goal-based flow design, policy definition, agent architecture planning, tool orchestration — duration varies by complexity
                </p>
              </div>
              <div>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-black text-xs">3</div>
                  <span>Build (2-8 weeks)</span>
                </div>
                <p className="text-acc-gray-400 text-xs">
                  CES flow creation, agent development (common across domain), tool integration, testing — duration varies by complexity
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Header */}
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-acc-purple rounded"></div>
                  <span className="text-sm text-acc-gray-300">Discovery (2-4w)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-400 rounded"></div>
                  <span className="text-sm text-acc-gray-300">Design (2-4w)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <span className="text-sm text-acc-gray-300">Build (2-8w)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-900/50 rounded"></div>
                  <span className="text-sm text-acc-gray-300">Live</span>
                </div>
              </div>
            </div>

            {/* Week markers */}
            <div className="flex justify-between text-xs text-acc-gray-500 mb-2 px-2">
              <span>Week 1</span>
              <span>Week 4</span>
              <span>Week 8</span>
              <span>Week 12</span>
              <span>Week 16</span>
            </div>
            <div className="h-1 bg-acc-gray-700 rounded mb-6"></div>

            {/* Foundation First */}
            <div className="mb-8 pb-6 border-b-2 border-acc-purple/30">
              <h3 className="font-bold text-xl mb-4 text-acc-purple">Foundation: CES Orchestrators</h3>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-40 text-xs text-acc-gray-300 font-semibold">Conversation Orchestrator</div>
                  <div className="flex-1 flex gap-1">
                    <div className="bg-acc-purple h-8 rounded flex items-center justify-center text-white text-xs font-semibold" style={{width: '16.66%'}}>Disc</div>
                    <div className="bg-green-400 h-8 rounded flex items-center justify-center text-black text-xs font-semibold" style={{width: '16.66%'}}>Design</div>
                    <div className="bg-blue-400 h-8 rounded flex items-center justify-center text-black text-xs font-semibold" style={{width: '16.66%'}}>Build</div>
                    <div className="bg-green-900/50 h-8 rounded flex items-center justify-center text-white text-xs" style={{width: '50%'}}>✅ Week 6</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-40 text-xs text-acc-gray-300 font-semibold">Goal Orchestrator</div>
                  <div className="flex-1 flex gap-1">
                    <div className="bg-acc-purple h-8 rounded flex items-center justify-center text-white text-xs font-semibold" style={{width: '16.66%'}}>Disc</div>
                    <div className="bg-green-400 h-8 rounded flex items-center justify-center text-black text-xs font-semibold" style={{width: '16.66%'}}>Design</div>
                    <div className="bg-blue-400 h-8 rounded flex items-center justify-center text-black text-xs font-semibold" style={{width: '16.66%'}}>Build</div>
                    <div className="bg-green-900/50 h-8 rounded flex items-center justify-center text-white text-xs" style={{width: '50%'}}>✅ Week 6</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-40 text-xs text-acc-gray-300 font-semibold">Safety Orchestrator</div>
                  <div className="flex-1 flex gap-1">
                    <div className="bg-acc-purple h-8 rounded flex items-center justify-center text-white text-xs font-semibold" style={{width: '16.66%'}}>Disc</div>
                    <div className="bg-green-400 h-8 rounded flex items-center justify-center text-black text-xs font-semibold" style={{width: '16.66%'}}>Design</div>
                    <div className="bg-blue-400 h-8 rounded flex items-center justify-center text-black text-xs font-semibold" style={{width: '16.66%'}}>Build</div>
                    <div className="bg-green-900/50 h-8 rounded flex items-center justify-center text-white text-xs" style={{width: '50%'}}>✅ Week 6</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 20 Billing Intents */}
            <div className="mb-4">
              <h3 className="font-bold text-xl mb-4 text-green-400">20 Billing & Payments Intents</h3>
              <p className="text-xs text-acc-gray-400 mb-4">
                All 20 billing intents shown flowing through the pipeline based on <strong>8 pods of each type</strong> (Discovery, Design, Build) working continuously. 
                Each intent: Discovery (2-4w) → Design (2-4w) → Build (2-8w) — all varying by complexity → Live. 
                As soon as a pod becomes available, it starts on the next intent in queue.
                <br />
                <span className="text-acc-purple">Hover over any bar</span> to see specific activities, tools, and API integrations for that phase.
              </p>
              
              <div className="space-y-1 max-h-96 overflow-y-auto">{/* Intent data with activities - calculated based on 8 pods of each type */}
                {(() => {
                  const intents = [
                    { name: 'Bill balance inquiry', complexity: 'low', discoveryWeeks: 2, designWeeks: 2, buildWeeks: 2, discovery: ['Customer journey analysis', 'BSS data mapping', 'Authentication flow review'], design: ['Balance display flow', 'Error handling patterns', 'Multi-account support'], tools: ['BSS Billing API', 'Authentication Service', 'Balance Cache'] },
                    { name: 'Payment due date', complexity: 'low', discoveryWeeks: 2, designWeeks: 2, buildWeeks: 2, discovery: ['Billing cycle analysis', 'Reminder preferences research', 'User utterance patterns'], design: ['Due date lookup flow', 'Reminder setup design', 'Timezone handling'], tools: ['BSS Billing API', 'Reminder Service', 'Calendar Integration'] },
                    { name: 'Make a payment', complexity: 'high', discoveryWeeks: 4, designWeeks: 4, buildWeeks: 6, discovery: ['Payment methods analysis', 'Security requirements', 'Fraud detection needs', 'PCI compliance review'], design: ['Payment flow design', 'Multi-step confirmation', 'Error recovery', 'Receipt generation'], tools: ['Payment Gateway API', 'PCI Tokenization', 'Fraud Detection Service', 'Receipt Service', 'Email Notification'] },
                    { name: 'Payment history', complexity: 'medium', discoveryWeeks: 3, designWeeks: 3, buildWeeks: 3, discovery: ['Historical data requirements', 'Date range patterns', 'Export preferences'], design: ['History display flow', 'Filtering & search', 'Download options'], tools: ['BSS Billing API', 'Report Generation', 'PDF Export Service'] },
                    { name: 'Billing cycle date', complexity: 'low', discoveryWeeks: 2, designWeeks: 2, buildWeeks: 2, discovery: ['Cycle calculation logic', 'Plan type variations', 'Customer preferences'], design: ['Cycle info flow', 'Next bill estimation', 'Prorated scenarios'], tools: ['BSS Billing API', 'Plan Catalog Service'] },
                    { name: 'Dispute charge', complexity: 'high', discoveryWeeks: 4, designWeeks: 4, buildWeeks: 7, discovery: ['Dispute types taxonomy', 'Resolution workflows', 'Evidence requirements', 'SLA tracking'], design: ['Multi-step dispute flow', 'Evidence upload', 'Status tracking', 'Escalation paths'], tools: ['Dispute Management API', 'Document Upload Service', 'Case Management System', 'Email/SMS Notification', 'Escalation Engine'] },
                    { name: 'Autopay setup', complexity: 'high', discoveryWeeks: 4, designWeeks: 4, buildWeeks: 6, discovery: ['Payment method options', 'Scheduling preferences', 'Failure handling', 'Security protocols'], design: ['Autopay enrollment flow', 'Schedule configuration', 'Confirmation & receipts', 'Failure notifications'], tools: ['Payment Gateway API', 'Autopay Scheduler', 'PCI Tokenization', 'Notification Service', 'BSS Billing API'] },
                    { name: 'Paperless billing', complexity: 'medium', discoveryWeeks: 3, designWeeks: 3, buildWeeks: 3, discovery: ['Email delivery preferences', 'Document format options', 'Opt-in/out flows'], design: ['Enrollment flow', 'Email setup & verification', 'Rollback options'], tools: ['BSS Billing API', 'Email Service', 'Document Generation', 'Preference Management'] },
                    { name: 'Late payment fee', complexity: 'medium', discoveryWeeks: 3, designWeeks: 3, buildWeeks: 4, discovery: ['Fee structure analysis', 'Waiver policy review', 'Grace period rules'], design: ['Fee explanation flow', 'Waiver request handling', 'Payment plan integration'], tools: ['BSS Billing API', 'Fee Calculation Engine', 'Waiver Approval Service', 'Case Management'] },
                    { name: 'Bill explanation', complexity: 'medium', discoveryWeeks: 3, designWeeks: 3, buildWeeks: 4, discovery: ['Bill component breakdown', 'Customer confusion patterns', 'Charge types taxonomy'], design: ['Line-item explanation flow', 'Drill-down navigation', 'Visual breakdown'], tools: ['BSS Billing API', 'Charge Dictionary Service', 'Usage Data API', 'Visualization Service'] },
                    { name: 'Bill variance explanation', complexity: 'high', discoveryWeeks: 4, designWeeks: 4, buildWeeks: 5, discovery: ['Variance triggers analysis', 'Historical comparison needs', 'Proactive alert scenarios'], design: ['Comparison flow', 'Variance breakdown', 'Root cause explanation', 'Historical trends'], tools: ['BSS Billing API', 'Historical Data Service', 'Variance Analysis Engine', 'Trend Visualization'] },
                    { name: 'Payment arrangement', complexity: 'high', discoveryWeeks: 4, designWeeks: 4, buildWeeks: 8, discovery: ['Eligibility criteria', 'Plan options research', 'Credit check requirements', 'Legal compliance'], design: ['Multi-step arrangement flow', 'Eligibility verification', 'Plan selection', 'Agreement & e-signature'], tools: ['Payment Arrangement API', 'Credit Check Service', 'E-Signature Service', 'Agreement Generation', 'BSS Billing API', 'Notification Service'] },
                    { name: 'Update payment method', complexity: 'high', discoveryWeeks: 4, designWeeks: 4, buildWeeks: 6, discovery: ['Payment method types', 'Verification requirements', 'Security protocols', 'Autopay impact'], design: ['Method update flow', 'Verification steps', 'Security confirmation', 'Autopay migration'], tools: ['Payment Gateway API', 'PCI Tokenization', 'Verification Service', 'Autopay Update Service', 'Audit Log'] },
                    { name: 'Download bill', complexity: 'low', discoveryWeeks: 2, designWeeks: 2, buildWeeks: 2, discovery: ['Document format preferences', 'Historical bill access', 'Delivery methods'], design: ['Bill selection flow', 'Format options', 'Download/email delivery'], tools: ['BSS Billing API', 'PDF Generation', 'Email Service', 'Document Storage'] },
                    { name: 'Tax/fee explanation', complexity: 'medium', discoveryWeeks: 3, designWeeks: 3, buildWeeks: 4, discovery: ['Tax types by jurisdiction', 'Regulatory fee structures', 'Customer confusion patterns'], design: ['Tax breakdown flow', 'Jurisdiction-specific explanations', 'Regulatory links'], tools: ['BSS Billing API', 'Tax Reference Service', 'Regulatory Database', 'Location Service'] },
                    { name: 'Refund status', complexity: 'medium', discoveryWeeks: 3, designWeeks: 3, buildWeeks: 3, discovery: ['Refund process workflows', 'Timeline expectations', 'Status tracking requirements'], design: ['Status inquiry flow', 'Timeline display', 'Issue escalation'], tools: ['Refund Management API', 'Payment Gateway', 'Case Management', 'Notification Service'] },
                    { name: 'Credit application', complexity: 'high', discoveryWeeks: 4, designWeeks: 4, buildWeeks: 7, discovery: ['Credit types & eligibility', 'Application workflows', 'Document requirements', 'Approval processes'], design: ['Multi-step application flow', 'Document upload', 'Credit check integration', 'Approval tracking'], tools: ['Credit Management API', 'Document Upload Service', 'Credit Bureau Integration', 'Approval Workflow Engine', 'Notification Service'] },
                    { name: 'Payment confirmation', complexity: 'low', discoveryWeeks: 2, designWeeks: 2, buildWeeks: 2, discovery: ['Confirmation data requirements', 'Receipt preferences', 'Delivery channels'], design: ['Confirmation display flow', 'Receipt generation', 'Multi-channel delivery'], tools: ['Payment Gateway API', 'Receipt Service', 'Email/SMS Service', 'Transaction Log'] },
                    { name: 'Overage charges', complexity: 'medium', discoveryWeeks: 3, designWeeks: 3, buildWeeks: 4, discovery: ['Overage types analysis', 'Usage threshold rules', 'Alert preferences'], design: ['Overage explanation flow', 'Usage details', 'Plan upgrade suggestions'], tools: ['BSS Billing API', 'Usage Data Service', 'Plan Recommendation Engine', 'Alert Service'] },
                    { name: 'Payment extension', complexity: 'high', discoveryWeeks: 4, designWeeks: 4, buildWeeks: 6, discovery: ['Extension eligibility rules', 'Policy variations', 'Approval workflows', 'Impact on services'], design: ['Extension request flow', 'Eligibility check', 'Terms presentation', 'Confirmation'], tools: ['Payment Extension API', 'Eligibility Service', 'BSS Billing API', 'Notification Service', 'Service Impact Calculator'] }
                  ];
                  
                  // Calculate start times based on 8 pods of each type working continuously
                  const discoveryPods = [0, 0, 0, 0, 0, 0, 0, 0]; // When each discovery pod becomes available
                  const designPods = [0, 0, 0, 0, 0, 0, 0, 0]; // When each design pod becomes available
                  const buildPods = [0, 0, 0, 0, 0, 0, 0, 0]; // When each build pod becomes available
                  
                  const intentsWithTimeline = intents.map((intent, idx) => {
                    // Find earliest available discovery pod
                    const earliestDiscoveryPod = discoveryPods.indexOf(Math.min(...discoveryPods));
                    const discoveryStart = discoveryPods[earliestDiscoveryPod];
                    const discoveryEnd = discoveryStart + intent.discoveryWeeks;
                    discoveryPods[earliestDiscoveryPod] = discoveryEnd;
                    
                    // Find earliest available design pod (but can't start before discovery ends)
                    const earliestDesignPod = designPods.indexOf(Math.min(...designPods));
                    const designStart = Math.max(designPods[earliestDesignPod], discoveryEnd);
                    const designEnd = designStart + intent.designWeeks;
                    designPods[earliestDesignPod] = designEnd;
                    
                    // Find earliest available build pod (but can't start before design ends)
                    const earliestBuildPod = buildPods.indexOf(Math.min(...buildPods));
                    const buildStart = Math.max(buildPods[earliestBuildPod], designEnd);
                    const buildEnd = buildStart + intent.buildWeeks;
                    buildPods[earliestBuildPod] = buildEnd;
                    
                    return {
                      ...intent,
                      discoveryStart,
                      discoveryEnd,
                      designStart,
                      designEnd,
                      buildStart,
                      buildEnd
                    };
                  });
                  
                  return intentsWithTimeline;
                })().map((intent, idx) => {
                  const totalWeeks = 16;
                  const weekToPercent = 100 / totalWeeks;
                  
                  const discoveryStartPercent = intent.discoveryStart * weekToPercent;
                  const discoveryWidth = intent.discoveryWeeks * weekToPercent;
                  const designStartPercent = intent.designStart * weekToPercent;
                  const designWidth = intent.designWeeks * weekToPercent;
                  const buildStartPercent = intent.buildStart * weekToPercent;
                  const buildWidth = intent.buildWeeks * weekToPercent;
                  const buildEndPercent = intent.buildEnd * weekToPercent;
                  
                  const isComplete = intent.buildEnd <= totalWeeks;
                  const liveWidth = isComplete ? Math.max(100 - buildEndPercent, 1) : 0;

                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-48 text-xs text-acc-gray-300">{idx + 1}. {intent.name}</div>
                      <div className="flex-1 flex gap-1">
                        {/* Gap before discovery starts */}
                        {discoveryStartPercent > 0 && <div style={{width: `${discoveryStartPercent}%`}}></div>}
                        
                            {/* Discovery */}
                            <div 
                              className="bg-acc-purple h-6 rounded cursor-help group relative" 
                              style={{width: `${discoveryWidth}%`}}
                              title="Discovery Phase"
                            >
                              <div className="invisible group-hover:visible absolute top-full left-0 mt-2 w-64 bg-acc-gray-900 border border-acc-purple rounded-lg p-3 shadow-xl z-10 text-xs">
                                <div className="font-bold text-acc-purple mb-2">Discovery ({intent.discoveryWeeks} weeks) - Wk {intent.discoveryStart + 1}-{Math.ceil(intent.discoveryEnd)} - {intent.complexity} complexity</div>
                                <ul className="space-y-1 text-acc-gray-300">
                                  {intent.discovery.map((item, i) => (
                                    <li key={i} className="flex items-start gap-1">
                                      <span className="text-acc-purple mt-0.5">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Gap between discovery and design (if design is delayed) */}
                            {designStartPercent - (discoveryStartPercent + discoveryWidth) > 0.5 && (
                              <div style={{width: `${designStartPercent - (discoveryStartPercent + discoveryWidth)}%`}}></div>
                            )}

                            {/* Design */}
                            <div 
                              className="bg-green-400 h-6 rounded cursor-help group relative" 
                              style={{width: `${designWidth}%`}}
                              title="Design Phase"
                            >
                              <div className="invisible group-hover:visible absolute top-full left-0 mt-2 w-64 bg-acc-gray-900 border border-green-400 rounded-lg p-3 shadow-xl z-10 text-xs">
                                <div className="font-bold text-green-400 mb-2">Design ({intent.designWeeks} weeks) - Wk {intent.designStart + 1}-{Math.ceil(intent.designEnd)} - {intent.complexity} complexity</div>
                                <ul className="space-y-1 text-acc-gray-300">
                                  {intent.design.map((item, i) => (
                                    <li key={i} className="flex items-start gap-1">
                                      <span className="text-green-400 mt-0.5">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Gap between design and build (if build is delayed) */}
                            {buildStartPercent - (designStartPercent + designWidth) > 0.5 && (
                              <div style={{width: `${buildStartPercent - (designStartPercent + designWidth)}%`}}></div>
                            )}

                            {/* Build */}
                            <div 
                              className={`${isComplete ? 'bg-blue-400' : 'bg-blue-400/50'} h-6 rounded cursor-help group relative`}
                              style={{width: `${buildWidth}%`}}
                              title="Build Phase"
                            >
                              <div className="invisible group-hover:visible absolute top-full left-0 mt-2 w-72 bg-acc-gray-900 border border-blue-400 rounded-lg p-3 shadow-xl z-10 text-xs">
                                <div className="font-bold text-blue-400 mb-2">Build ({intent.buildWeeks} weeks) - Wk {intent.buildStart + 1}-{Math.ceil(intent.buildEnd)} - {intent.complexity} complexity</div>
                                <div className="mb-2 text-acc-gray-400 text-xs">CES flow creation + Agent development</div>
                                <div className="font-semibold text-white mb-1">Tools & API Integrations:</div>
                                <ul className="space-y-1 text-acc-gray-300">
                                  {intent.tools.map((tool, i) => (
                                    <li key={i} className="flex items-start gap-1">
                                      <span className="text-blue-400 mt-0.5">•</span>
                                      <span>{tool}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                        {/* Live */}
                        {isComplete && liveWidth > 0 && (
                          <div 
                            className="bg-green-900/50 h-6 rounded text-xs flex items-center justify-center text-white"
                            style={{width: `${liveWidth}%`}}
                          >
                            ✅ Wk {Math.ceil(intent.buildEnd)}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Key Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-acc-gray-800 border-l-4 border-acc-purple rounded-lg p-4">
              <div className="font-bold text-acc-purple mb-2">Week 4 Milestone</div>
              <p className="text-sm text-acc-gray-300">Foundation live: 3 orchestrators operational</p>
            </div>
            <div className="bg-acc-gray-800 border-l-4 border-green-400 rounded-lg p-4">
              <div className="font-bold text-green-400 mb-2">Week 8 Milestone</div>
              <p className="text-sm text-acc-gray-300">All 20 intents discovered & designed</p>
            </div>
            <div className="bg-acc-gray-800 border-l-4 border-blue-400 rounded-lg p-4">
              <div className="font-bold text-blue-400 mb-2">Week 12 Milestone</div>
              <p className="text-sm text-acc-gray-300">Agent development & flow implementation complete</p>
            </div>
            <div className="bg-acc-gray-800 border-l-4 border-yellow-400 rounded-lg p-4">
              <div className="font-bold text-yellow-400 mb-2">Week 16 Milestone</div>
              <p className="text-sm text-acc-gray-300">Billing agent live, 20 intents automated, 10% coverage</p>
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
                <span className="text-xl font-bold text-white">20</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-acc-gray-300">Intent Coverage</span>
                <span className="text-xl font-bold text-white">10%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-acc-gray-300">Containment Lift</span>
                <span className="text-xl font-bold text-green-400">+5-7%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-acc-gray-300">AHT Reduction</span>
                <span className="text-xl font-bold text-green-400">~30-45s</span>
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

