import { CheckCircle2, Search, Wrench, Rocket } from 'lucide-react';
import Link from 'next/link';
import NextPageButton from '@/components/NextPageButton';

const phases = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'Audit existing Dialogflow intents, entities, and fulfillment logic. Analyze conversation flows, identify redundancies and coverage gaps. Use LLM-powered semantic clustering to understand intent patterns.',
    deliverables: ['Intent inventory & analysis', 'Conversation flow maps', 'Fallback analysis', 'Goal taxonomy', 'Migration strategy'],
  },
  {
    icon: Wrench,
    title: 'Design',
    description: 'Architect CES Next goal flows with agentic orchestration. Design specialized agents, tool integrations, routing policies, and guardrails. Create comprehensive agent-to-tool mappings.',
    deliverables: ['CES Next goal flows', 'Agent architecture', 'Tool integration specs', 'Policy configurations', 'Security & compliance framework'],
  },
  {
    icon: Rocket,
    title: 'Build',
    description: 'Implement agents and orchestrators, integrate backend tools and APIs. Deploy to production with A/B testing, KPI monitoring, and continuous optimization.',
    deliverables: ['Production deployment', 'Agent implementations', 'KPI dashboards', 'Testing framework', 'Optimization playbook'],
  },
];

export default function ApproachPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-acc-purple">Modernization Approach</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto">
            A proven three-phase methodology to transition from intent-based Dialogflow to goal-driven CES Next with Agentic AI.
          </p>
        </div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <div
                key={idx}
                className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8 hover:border-acc-purple/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-acc-purple/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-acc-purple" />
                  </div>
                  <div>
                    <span className="text-sm text-acc-gray-400">Phase {idx + 1}</span>
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                  </div>
                </div>
                <p className="text-acc-gray-400 mb-4">{phase.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-acc-purple">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-acc-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-acc-purple flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <NextPageButton href="/architecture/" label="Architecture" />
      </div>
    </div>
  );
}


