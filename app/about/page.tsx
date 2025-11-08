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

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <details className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 group">
                  <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between hover:text-acc-purple transition-colors">
                    <span>How long does the full rollout take?</span>
                    <span className="text-acc-purple text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-acc-gray-400 text-sm">
                    The complete deployment takes <strong>12 months</strong> across 5 phases, starting with a 3-month pilot (Phase 1) that delivers 20% intent coverage. Each subsequent phase builds on the foundation, with full 200-intent coverage achieved by month 12.
                  </p>
                </details>

                <details className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 group">
                  <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between hover:text-acc-purple transition-colors">
                    <span>What happens to our existing Dialogflow implementation?</span>
                    <span className="text-acc-purple text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-acc-gray-400 text-sm">
                    CES Next Gen runs in parallel during the pilot phase with A/B testing. Once validated, we conduct a phased migration with <strong>zero downtime</strong>. Your existing intent library and conversation logs inform the new goal-based flows, ensuring continuity while enabling new capabilities.
                  </p>
                </details>

                <details className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 group">
                  <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between hover:text-acc-purple transition-colors">
                    <span>Can we pause between phases?</span>
                    <span className="text-acc-purple text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-acc-gray-400 text-sm">
                    Yes. Each phase has <strong>KPI-driven gates</strong> that must be met before proceeding. You can pause to optimize, gather additional business cases, or adjust scope. The modular architecture ensures deployed agents continue operating independently.
                  </p>
                </details>

                <details className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 group">
                  <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between hover:text-acc-purple transition-colors">
                    <span>What if we have custom or unique intents?</span>
                    <span className="text-acc-purple text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-acc-gray-400 text-sm">
                    The Discovery phase includes <strong>comprehensive intent analysis</strong> specific to your operations. We cluster and rationalize your existing intents with the 200-intent baseline, creating a custom roadmap. LLM-powered semantic understanding handles variations without manual intent creation.
                  </p>
                </details>

                <details className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 group">
                  <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between hover:text-acc-purple transition-colors">
                    <span>How do we measure success during the pilot?</span>
                    <span className="text-acc-purple text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-acc-gray-400 text-sm">
                    Success criteria for the 4-month pilot include: <strong>20 billing intents deployed, 10% coverage, +5-7% containment improvement, ~30-45s AHT reduction</strong>. We establish KPI dashboards from week 1 with daily monitoring during hypercare and weekly business reviews.
                  </p>
                </details>

                <details className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 group">
                  <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between hover:text-acc-purple transition-colors">
                    <span>What team size is required?</span>
                    <span className="text-acc-purple text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-acc-gray-400 text-sm">
                    Three types of cross-functional pods work in parallel, with <strong>8 pods of each type</strong> (24 total): <strong>Discovery Pods</strong> (BAs, conversation designers, domain experts), <strong>Design Pods</strong> (architects, UX, policy experts), and <strong>Build Pods</strong> (AI/ML engineers, developers, DevOps, QA). Each pod is 3-4 people, totaling ~75-95 FTEs during the 4-month pilot for maximum velocity.
                  </p>
                </details>

                <details className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 group">
                  <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between hover:text-acc-purple transition-colors">
                    <span>What happens after the 6-week hypercare period?</span>
                    <span className="text-acc-purple text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-acc-gray-400 text-sm">
                    After hypercare, we transition to <strong>Business As Usual (BAU)</strong> with knowledge transfer to your operations team, documented runbooks, ongoing support model definition, and a continuous improvement framework. The self-optimizing agents require 50% less maintenance than traditional systems.
                  </p>
                </details>

                <details className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 group">
                  <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between hover:text-acc-purple transition-colors">
                    <span>How do you ensure data privacy and compliance?</span>
                    <span className="text-acc-purple text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-acc-gray-400 text-sm">
                    The <strong>Safety & Compliance Orchestrator</strong> enforces policies at every turn. All PII is handled according to GDPR/CCPA requirements. Conversation logs are encrypted at rest and in transit. Guardrails prevent unauthorized data access, and audit trails track all agent actions for compliance review.
                  </p>
                </details>
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
