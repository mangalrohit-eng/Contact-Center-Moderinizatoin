import { TrendingUp, DollarSign, Users, Clock, Target, Shield, Zap, Award } from 'lucide-react';
import NextPageButton from '@/components/NextPageButton';

export default function ImpactPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-acc-purple">Business Impact</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto">
            Quantified value delivered through CES Next Gen and Agentic AI modernization, with measurable improvements across operations, cost, and customer experience.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-acc-purple/20 to-transparent border-2 border-acc-purple rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <TrendingUp className="w-12 h-12 text-acc-purple mx-auto mb-3" />
            <div className="text-4xl font-bold text-acc-purple mb-2">+15-20%</div>
            <h3 className="font-semibold mb-2">Containment Rate</h3>
            <p className="text-sm text-acc-gray-400">More issues resolved without human escalation</p>
          </div>

          <div className="bg-gradient-to-br from-green-400/20 to-transparent border-2 border-green-400 rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <Clock className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <div className="text-4xl font-bold text-green-400 mb-2">-60-90s</div>
            <h3 className="font-semibold mb-2">Average Handle Time</h3>
            <p className="text-sm text-acc-gray-400">Faster resolution through intelligent routing</p>
          </div>

          <div className="bg-gradient-to-br from-blue-400/20 to-transparent border-2 border-blue-400 rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <Award className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <div className="text-4xl font-bold text-blue-400 mb-2">+0.3-0.5</div>
            <h3 className="font-semibold mb-2">CSAT Score</h3>
            <p className="text-sm text-acc-gray-400">Improved customer satisfaction</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400/20 to-transparent border-2 border-yellow-400 rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <div className="text-4xl font-bold text-yellow-400 mb-2">$2-3M</div>
            <h3 className="font-semibold mb-2">Annual Cost Savings</h3>
            <p className="text-sm text-acc-gray-400">Reduced operational expenses</p>
          </div>
        </div>

        {/* ROI Breakdown */}
        <div className="mb-16 bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Return on Investment</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-acc-purple">Cost Savings</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-4">
                  <div>
                    <div className="font-semibold">Reduced Agent Escalations</div>
                    <div className="text-sm text-acc-gray-400">15-20% higher containment rate</div>
                  </div>
                  <div className="text-xl font-bold text-green-400">$1.5M/yr</div>
                </div>
                <div className="flex justify-between items-center bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-4">
                  <div>
                    <div className="font-semibold">Faster Resolution Times</div>
                    <div className="text-sm text-acc-gray-400">60-90s reduction in AHT</div>
                  </div>
                  <div className="text-xl font-bold text-green-400">$800K/yr</div>
                </div>
                <div className="flex justify-between items-center bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-4">
                  <div>
                    <div className="font-semibold">Maintenance Efficiency</div>
                    <div className="text-sm text-acc-gray-400">50% less manual intent tuning</div>
                  </div>
                  <div className="text-xl font-bold text-green-400">$400K/yr</div>
                </div>
                <div className="flex justify-between items-center bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-4">
                  <div>
                    <div className="font-semibold">Reduced Call Abandonment</div>
                    <div className="text-sm text-acc-gray-400">Better self-service experience</div>
                  </div>
                  <div className="text-xl font-bold text-green-400">$300K/yr</div>
                </div>
                <div className="border-t-2 border-acc-purple pt-4 flex justify-between items-center">
                  <div className="font-bold text-lg">Total Annual Savings</div>
                  <div className="text-2xl font-bold text-acc-purple">$3.0M</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Investment</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-4">
                  <div>
                    <div className="font-semibold">CES Next Platform & Licensing</div>
                    <div className="text-sm text-acc-gray-400">Google Cloud annual fees</div>
                  </div>
                  <div className="text-xl font-bold">$600K/yr</div>
                </div>
                <div className="flex justify-between items-center bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-4">
                  <div>
                    <div className="font-semibold">Implementation & Integration</div>
                    <div className="text-sm text-acc-gray-400">One-time setup (amortized)</div>
                  </div>
                  <div className="text-xl font-bold">$400K</div>
                </div>
                <div className="flex justify-between items-center bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-4">
                  <div>
                    <div className="font-semibold">Training & Change Management</div>
                    <div className="text-sm text-acc-gray-400">Staff enablement</div>
                  </div>
                  <div className="text-xl font-bold">$200K</div>
                </div>
                <div className="border-t-2 border-red-400 pt-4 flex justify-between items-center">
                  <div className="font-bold text-lg">Total Investment (Year 1)</div>
                  <div className="text-2xl font-bold text-red-400">$1.2M</div>
                </div>
              </div>

              <div className="mt-6 bg-acc-purple/20 border-2 border-acc-purple rounded-lg p-6 text-center">
                <div className="text-sm text-acc-gray-300 mb-2">ROI Payback Period</div>
                <div className="text-4xl font-bold text-acc-purple mb-2">5-6 Months</div>
                <div className="text-sm text-acc-gray-400">Net positive by Q3 Year 1</div>
              </div>
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

