import { Building2, Target, TrendingUp, Shield } from 'lucide-react';
import NextPageButton from '@/components/NextPageButton';
import Glossary from '@/components/Glossary';

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-acc-purple">This Modernization Initiative</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto">
            Transforming telecom contact centers from legacy Dialogflow to Google CES Next Gen with Agentic AI to handle enterprise-scale customer service operations.
          </p>
        </div>

        {/* The Opportunity */}
        <div className="mb-16 bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">The Opportunity</h2>
          <p className="text-lg text-acc-gray-300 mb-6">
            Large telecommunications carriers handle millions of customer interactions daily across voice and digital channels. 
            Current Dialogflow-based systems are reaching their limits, struggling with complex multi-turn conversations, 
            high fallback rates, and extensive manual maintenance overhead.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-acc-gray-800/50 rounded-lg p-6">
              <h3 className="font-bold text-red-400 mb-3">Current State Challenges</h3>
              <ul className="space-y-2 text-sm text-acc-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span>200+ Dialogflow intents requiring manual maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span>High fallback rates (15-20%) leading to agent escalations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span>Limited ability to handle complex, multi-step transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span>Rigid conversation flows that don't adapt to customer needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">●</span>
                  <span>Siloed tools and integrations across channels</span>
                </li>
              </ul>
            </div>
            <div className="bg-acc-gray-800/50 rounded-lg p-6">
              <h3 className="font-bold text-green-400 mb-3">Future State Vision</h3>
              <ul className="space-y-2 text-sm text-acc-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span>Goal-driven agents that understand customer intent contextually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span>Reduced fallback rates through intelligent conversation recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span>Specialized domain agents with direct tool access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span>Adaptive conversations with proactive guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">●</span>
                  <span>Unified experience across voice and digital channels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expected Business Outcomes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Expected Business Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center hover:border-acc-purple/50 transition-colors">
              <TrendingUp className="w-12 h-12 text-acc-purple mx-auto mb-3" />
              <div className="text-3xl font-bold text-acc-purple mb-2">+15-20%</div>
              <h3 className="font-semibold mb-2">Containment Rate</h3>
              <p className="text-sm text-acc-gray-400">Fewer escalations to live agents through better self-service</p>
            </div>

            <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center hover:border-acc-purple/50 transition-colors">
              <Target className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-400 mb-2">-60-90s</div>
              <h3 className="font-semibold mb-2">Average Handle Time</h3>
              <p className="text-sm text-acc-gray-400">Faster resolution through intelligent routing and tool access</p>
            </div>

            <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center hover:border-acc-purple/50 transition-colors">
              <Building2 className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-400 mb-2">Improved</div>
              <h3 className="font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-sm text-acc-gray-400">Better customer experience through contextual conversations</p>
            </div>

            <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center hover:border-acc-purple/50 transition-colors">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-yellow-400 mb-2">-50%</div>
              <h3 className="font-semibold mb-2">Maintenance Effort</h3>
              <p className="text-sm text-acc-gray-400">LLM-powered agents reduce manual intent tuning</p>
            </div>
          </div>
        </div>

        {/* Project Scope */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Project Scope</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-acc-purple mb-2">Coverage</h3>
                <p className="text-acc-gray-300 text-sm">200+ telecom intents across billing, plans, devices, network support, and account management</p>
              </div>
              <div>
                <h3 className="font-semibold text-acc-purple mb-2">Channels</h3>
                <p className="text-acc-gray-300 text-sm">Voice (IVR), web chat, mobile app, SMS, and WhatsApp with unified policy and memory</p>
              </div>
              <div>
                <h3 className="font-semibold text-acc-purple mb-2">Scale</h3>
                <p className="text-acc-gray-300 text-sm">10M+ monthly interactions with enterprise SLA requirements</p>
              </div>
              <div>
                <h3 className="font-semibold text-acc-purple mb-2">Timeline</h3>
                <p className="text-acc-gray-300 text-sm">12-month phased rollout with continuous optimization</p>
              </div>
            </div>
          </div>

          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Accenture's Role</h2>
            <p className="text-acc-gray-300 mb-4">
              As a Google Cloud Premier Partner with deep telecom expertise, Accenture brings:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-acc-purple mt-1">●</span>
                <span className="text-sm text-acc-gray-300"><strong>CES Next Expertise:</strong> Certified practitioners with production implementations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-acc-purple mt-1">●</span>
                <span className="text-sm text-acc-gray-300"><strong>Telecom Domain Knowledge:</strong> Deep understanding of carrier operations and systems (BSS/OSS/CRM)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-acc-purple mt-1">●</span>
                <span className="text-sm text-acc-gray-300"><strong>Agentic AI Design:</strong> Proven methodology for orchestrator and agent architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-acc-purple mt-1">●</span>
                <span className="text-sm text-acc-gray-300"><strong>Responsible AI:</strong> SOC 2, ISO compliance with ethical AI governance frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-acc-purple mt-1">●</span>
                <span className="text-sm text-acc-gray-300"><strong>Change Management:</strong> End-to-end program delivery including training and adoption</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Glossary */}
        <div className="mb-16">
          <Glossary />
        </div>

        <NextPageButton href="/" label="Back to Home" />
      </div>
    </div>
  );
}
