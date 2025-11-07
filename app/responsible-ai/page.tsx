import YAMLPolicy from '@/components/YAMLPolicy';
import responsibleAIData from '@/data/responsible_ai.json';
import policiesData from '@/data/agentic/policies.json';
import { Shield, TrendingDown, Users, CheckCircle2, XCircle } from 'lucide-react';

export default function ResponsibleAIPage() {
  const latestHallucinationRisk = responsibleAIData.hallucination_risk[responsibleAIData.hallucination_risk.length - 1];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-acc-purple">Responsible AI</span> & Guardrails
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto">
            Built-in safeguards for privacy, accuracy, fairness, and compliance.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-acc-purple/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-acc-purple" />
              </div>
              <h3 className="text-sm font-semibold text-acc-gray-400">PII Redaction</h3>
            </div>
            <p className="text-3xl font-bold text-acc-purple mb-1">
              {(responsibleAIData.pii_redaction * 100).toFixed(0)}%
            </p>
            <p className="text-xs text-acc-gray-400">Coverage rate</p>
          </div>

          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-acc-purple/10 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-acc-purple" />
              </div>
              <h3 className="text-sm font-semibold text-acc-gray-400">Hallucination Risk</h3>
            </div>
            <p className="text-3xl font-bold text-acc-purple mb-1">
              {(latestHallucinationRisk * 100).toFixed(0)}%
            </p>
            <p className="text-xs text-acc-gray-400">Latest measurement</p>
          </div>

          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-acc-purple/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-acc-purple" />
              </div>
              <h3 className="text-sm font-semibold text-acc-gray-400">Escalation Rate</h3>
            </div>
            <p className="text-3xl font-bold text-acc-purple mb-1">
              {(responsibleAIData.escalation_rate * 100).toFixed(0)}%
            </p>
            <p className="text-xs text-acc-gray-400">To human agents</p>
          </div>

          <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-acc-purple/10 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-acc-purple" />
              </div>
              <h3 className="text-sm font-semibold text-acc-gray-400">Bias Checks</h3>
            </div>
            <div className="space-y-1">
              {Object.entries(responsibleAIData.bias_checks).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between text-sm">
                  <span className="text-acc-gray-400 capitalize">{key}</span>
                  {value === 'pass' ? (
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* YAML Policy Viewer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Guardrail & Routing Policies</h2>
          <YAMLPolicy data={policiesData} />
        </div>

        {/* Commitments */}
        <div className="bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Accenture's Responsible AI Commitments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-acc-gray-300">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-acc-purple flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Privacy by Design</p>
                <p className="text-sm text-acc-gray-400">
                  PII detection, redaction, and data minimization at every layer.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-acc-purple flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Fairness & Equity</p>
                <p className="text-sm text-acc-gray-400">
                  Continuous bias monitoring across demographics and geographies.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-acc-purple flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Transparency</p>
                <p className="text-sm text-acc-gray-400">
                  Explainable AI with audit trails for every agent decision.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-acc-purple flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Human Oversight</p>
                <p className="text-sm text-acc-gray-400">
                  Human-in-the-loop for high-risk decisions and edge cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


