'use client';

import { TrendingUp, DollarSign, Users, Clock, Target, Shield, Zap, Award, Calculator } from 'lucide-react';
import NextPageButton from '@/components/NextPageButton';
import { useState } from 'react';

export default function ImpactPage() {
  const [callVolume, setCallVolume] = useState(60); // Default to 60 million calls
  
  // Cost per million calls
  const COST_PER_MILLION = 3.0; // $3M per 1M calls
  
  // Calculate total savings
  const totalSavings = callVolume * COST_PER_MILLION;
  
  // Breakdown percentages (totaling to $3M per 1M calls)
  const callAvoidanceSavings = callVolume * 1.5; // ~50% of total
  const ahtImprovementSavings = callVolume * 0.9; // ~30% of total
  const repeatCallReductionSavings = callVolume * 0.35; // ~12% of total
  const operationalEfficiencySavings = callVolume * 0.25; // ~8% of total
  
  const formatMoney = (amount: number) => {
    if (amount >= 1) {
      return `$${amount.toFixed(0)}M`;
    }
    return `$${(amount * 1000).toFixed(0)}K`;
  };
  
  const formatRange = (amount: number) => {
    const lower = amount * 0.9;
    const upper = amount * 1.1;
    if (amount >= 1) {
      return `~$${lower.toFixed(0)}-${upper.toFixed(0)}M`;
    }
    return `~$${(lower * 1000).toFixed(0)}-${(upper * 1000).toFixed(0)}K`;
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-acc-purple">Business Impact</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto">
            Enterprise-scale cost savings from modernizing contact center operations through CES Next Gen and Agentic AI, delivering measurable improvements across efficiency, customer experience, and operational excellence.
          </p>
        </div>

        {/* Interactive Calculator */}
        <div className="mb-12 bg-gradient-to-br from-acc-purple/20 to-transparent border-2 border-acc-purple rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-acc-purple" />
            <h2 className="text-2xl font-bold">Savings Calculator</h2>
          </div>
          
          <div className="bg-acc-gray-900 rounded-lg p-6">
            <label htmlFor="callVolume" className="block text-sm font-semibold text-acc-gray-300 mb-2">
              Enter your annual call volume (in millions):
            </label>
            <p className="text-xs text-acc-gray-500 mb-3">
              <strong>Context:</strong> Enterprise telecoms typically handle 50-150M calls annually. Default shown: 60M calls (mid-size carrier).
              <br />
              <span className="text-acc-gray-600">Reference: Small (20-50M) | Mid-size (50-100M) | Large (100-200M+)</span>
            </p>
            <div className="flex items-center gap-4">
              <input
                type="number"
                id="callVolume"
                value={callVolume}
                onChange={(e) => setCallVolume(Math.max(1, Number(e.target.value)))}
                className="flex-1 bg-acc-gray-800 border-2 border-acc-purple rounded-lg px-6 py-4 text-white text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-acc-purple"
                min="1"
                step="1"
              />
              <span className="text-2xl font-bold text-acc-gray-400">Million calls/year</span>
            </div>
            
            <div className="mt-6 pt-6 border-t border-acc-gray-700 text-center">
              <div className="text-sm text-acc-gray-400 mb-2">Projected Annual Savings</div>
              <div className="text-5xl font-bold text-acc-purple">{formatMoney(totalSavings)}</div>
              <div className="text-sm text-acc-gray-500 mt-2">
                Through operational efficiency gains and automation
              </div>
            </div>

            {/* Methodology Note */}
            <details className="mt-4 text-xs text-acc-gray-500">
              <summary className="cursor-pointer hover:text-acc-gray-300 transition-colors">
                <span className="underline">Methodology & Assumptions</span>
              </summary>
              <div className="mt-3 bg-acc-gray-800 rounded p-3 space-y-2">
                <p><strong>Baseline:</strong> Current avg cost ~$10 per call (industry benchmark: $8-12)</p>
                <p><strong>Target improvement:</strong> ~30% operational cost reduction through:</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>15-20% higher containment (fewer agent escalations)</li>
                  <li>60-90s AHT reduction (faster resolutions)</li>
                  <li>Lower repeat call volume (better first-contact resolution)</li>
                  <li>50% reduction in system maintenance overhead</li>
                </ul>
                <p><strong>Result:</strong> ~$3M savings per 1M calls annually</p>
              </div>
            </details>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-acc-purple/20 to-transparent border-2 border-acc-purple rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <TrendingUp className="w-12 h-12 text-acc-purple mx-auto mb-3" />
            <div className="text-4xl font-bold text-acc-purple mb-2">~15-20%</div>
            <h3 className="font-semibold mb-2">Containment Rate Improvement</h3>
            <p className="text-sm text-acc-gray-400">More issues resolved without human escalation</p>
          </div>

          <div className="bg-gradient-to-br from-green-400/20 to-transparent border-2 border-green-400 rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <Clock className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <div className="text-4xl font-bold text-green-400 mb-2">~60-90s</div>
            <h3 className="font-semibold mb-2">AHT Reduction</h3>
            <p className="text-sm text-acc-gray-400">Faster resolution through AI-provided context</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400/20 to-transparent border-2 border-yellow-400 rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <div className="text-4xl font-bold text-yellow-400 mb-2">~{formatMoney(totalSavings)}</div>
            <h3 className="font-semibold mb-2">Annual Cost Savings</h3>
            <p className="text-sm text-acc-gray-400">At {callVolume}M calls per year</p>
          </div>
        </div>

        {/* Additional Benefits Note */}
        <div className="mb-16 bg-blue-400/10 border border-blue-400/30 rounded-lg p-6 text-center max-w-3xl mx-auto">
          <p className="text-acc-gray-300">
            <span className="font-semibold text-blue-400">Additional Benefit:</span> Customer satisfaction scores are expected to <span className="font-semibold text-white">improve meaningfully</span> due to faster resolutions, better context retention, and more accurate first-time answers.
          </p>
        </div>

        {/* Cost Savings Breakdown */}
        <div className="mb-16 bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Annual Cost Savings Breakdown</h2>
          
          <div className="mb-8 text-center">
            <p className="text-lg text-acc-gray-300 mb-2">
              Projected savings for <span className="font-bold text-white">{callVolume} million</span> annual customer interactions
            </p>
            <p className="text-sm text-acc-gray-400">
              Comprehensive analysis across containment, efficiency, quality, and operational dimensions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex justify-between items-center bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 hover:border-green-400/50 transition-colors">
              <div className="flex-1">
                <div className="font-semibold text-lg mb-1">Call Avoidance</div>
                <div className="text-sm text-acc-gray-400 mb-2">~15-20% improvement in automated containment rate significantly reduces live agent workload</div>
                <div className="text-xs text-acc-gray-500">
                  Intelligent goal-driven conversations with agentic orchestration autonomously resolve more customer inquiries without human escalation. 
                  Savings realized through reduced agent FTE requirements, lower infrastructure costs, and decreased training overhead across the contact center operation.
                </div>
              </div>
              <div className="text-3xl font-bold text-green-400 ml-4 whitespace-nowrap">{formatRange(callAvoidanceSavings)}</div>
            </div>
            
            <div className="flex justify-between items-center bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 hover:border-green-400/50 transition-colors">
              <div className="flex-1">
                <div className="font-semibold text-lg mb-1">AHT Improvement</div>
                <div className="text-sm text-acc-gray-400 mb-2">~60-90 second reduction in average handle time when calls do reach human agents</div>
                <div className="text-xs text-acc-gray-500">
                  AI provides comprehensive context, conversation history, and recommended actions to human agents before transfer, eliminating redundant information gathering.
                  Agents receive pre-authenticated customer data, prior interactions, and suggested resolutions, dramatically improving efficiency and customer experience.
                </div>
              </div>
              <div className="text-3xl font-bold text-green-400 ml-4 whitespace-nowrap">{formatRange(ahtImprovementSavings)}</div>
            </div>
            
            <div className="flex justify-between items-center bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 hover:border-green-400/50 transition-colors">
              <div className="flex-1">
                <div className="font-semibold text-lg mb-1">Repeat Call Reduction</div>
                <div className="text-sm text-acc-gray-400 mb-2">Superior first-call resolution by AI minimizes repeat interactions and callbacks</div>
                <div className="text-xs text-acc-gray-500">
                  Better-quality resolutions from AI-powered interactions reduce customer need to call back with unresolved issues.
                  Context-aware conversations retain session history and provide accurate, complete answers the first time, lowering overall contact volume and capacity requirements.
                </div>
              </div>
              <div className="text-3xl font-bold text-green-400 ml-4 whitespace-nowrap">{formatRange(repeatCallReductionSavings)}</div>
            </div>
            
            <div className="flex justify-between items-center bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 hover:border-green-400/50 transition-colors">
              <div className="flex-1">
                <div className="font-semibold text-lg mb-1">Operational Efficiencies</div>
                <div className="text-sm text-acc-gray-400 mb-2">Self-maintaining AI system eliminates constant retuning and manual maintenance</div>
                <div className="text-xs text-acc-gray-500">
                  LLM-powered semantic understanding adapts to new utterances without manual intent creation or training data labeling.
                  Self-optimizing agents and automated policy updates reduce 50%+ of traditional operational burden, eliminating dedicated teams for intent management and flow maintenance.
                </div>
              </div>
              <div className="text-3xl font-bold text-green-400 ml-4 whitespace-nowrap">{formatRange(operationalEfficiencySavings)}</div>
            </div>
            
            <div className="border-t-2 border-acc-purple pt-6 flex justify-between items-center bg-acc-gray-900 rounded-lg p-6">
              <div>
                <div className="font-bold text-2xl mb-2">Total Annual Savings</div>
                <div className="text-sm text-acc-gray-400">Aggregate operational cost reduction across all improvement dimensions</div>
              </div>
              <div className="text-5xl font-bold text-acc-purple">~{formatMoney(totalSavings)}</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-acc-gray-900/50 border border-acc-gray-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-acc-purple mb-2">{callVolume}M</div>
              <div className="text-sm text-acc-gray-400">Annual customer interactions automated or enhanced</div>
            </div>
            <div className="bg-acc-gray-900/50 border border-acc-gray-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">3-Year Outlook</div>
              <div className="text-sm text-acc-gray-400">Cumulative savings: <strong>~{formatMoney(totalSavings * 3)}</strong></div>
            </div>
            <div className="bg-acc-gray-900/50 border border-acc-gray-700 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">~15-20%</div>
              <div className="text-sm text-acc-gray-400">Containment rate improvement across all intents</div>
            </div>
          </div>
        </div>

        {/* Operational Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Operational Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-acc-purple/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-acc-purple" />
                </div>
                <h3 className="font-bold text-lg">Faster Time to Market</h3>
              </div>
              <p className="text-acc-gray-300 mb-4">Deploy new capabilities in weeks, not months. Agents can be updated independently without touching the entire system.</p>
              <div className="bg-acc-gray-900 rounded p-3">
                <div className="text-2xl font-bold text-acc-purple mb-1">3-4x</div>
                <div className="text-xs text-acc-gray-400">Faster feature deployment</div>
              </div>
            </div>

            <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-bold text-lg">Improved Accuracy</h3>
              </div>
              <p className="text-acc-gray-300 mb-4">Goal-based orchestration and contextual understanding reduce misrouted calls and incorrect responses.</p>
              <div className="bg-acc-gray-900 rounded p-3">
                <div className="text-2xl font-bold text-green-400 mb-1">-8-10%</div>
                <div className="text-xs text-acc-gray-400">Reduction in fallback rate</div>
              </div>
            </div>

            <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-lg">Agent Productivity</h3>
              </div>
              <p className="text-acc-gray-300 mb-4">Human agents receive better-qualified handoffs with full context, enabling faster resolution of complex issues.</p>
              <div className="bg-acc-gray-900 rounded p-3">
                <div className="text-2xl font-bold text-blue-400 mb-1">+25%</div>
                <div className="text-xs text-acc-gray-400">Agent efficiency gain</div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Experience Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Customer Experience Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-400/10 to-transparent border border-green-400/30 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-green-400" />
                Improved Satisfaction
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-acc-gray-300">Natural, conversational interactions that feel less robotic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-acc-gray-300">Proactive guidance and clarifying questions reduce frustration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-acc-gray-300">Contextual memory across channels (voice, chat, app)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-acc-gray-300">Faster resolution without repetitive authentication</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-400/10 to-transparent border border-blue-400/30 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-400" />
                Enhanced Trust & Compliance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-acc-gray-300">Real-time guardrails ensure policy-compliant interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-acc-gray-300">Audit trail for every interaction and decision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-acc-gray-300">Responsible AI governance with bias monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-acc-gray-300">Data privacy controls with PII redaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk Mitigation */}
        <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Risk Mitigation Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-acc-purple mb-3">Phased Rollout</h3>
              <p className="text-sm text-acc-gray-300">Deploy in 5 phases over 12 months, validating KPIs at each gate before proceeding. Start with low-risk intents.</p>
            </div>
            <div>
              <h3 className="font-semibold text-acc-purple mb-3">A/B Testing</h3>
              <p className="text-sm text-acc-gray-300">Run parallel with legacy system for 2-3 months per phase, comparing performance metrics before full cutover.</p>
            </div>
            <div>
              <h3 className="font-semibold text-acc-purple mb-3">Continuous Monitoring</h3>
              <p className="text-sm text-acc-gray-300">Real-time dashboards track containment, CSAT, AHT, and fallback rates with automated alerting for anomalies.</p>
            </div>
            <div>
              <h3 className="font-semibold text-acc-purple mb-3">Fallback Mechanisms</h3>
              <p className="text-sm text-acc-gray-300">Graceful degradation to human agents when confidence is low, preserving conversation context for seamless handoff.</p>
            </div>
          </div>
        </div>

        <NextPageButton href="/architecture/" label="Architecture" />
      </div>
    </div>
  );
}

