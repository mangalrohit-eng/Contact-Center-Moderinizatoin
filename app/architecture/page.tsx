'use client';

import { Layers, MessageSquare, Phone, Globe, Database, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ArchitecturePage() {
  const layers = [
    {
      name: "Customer Touchpoints",
      color: "bg-blue-500/20 border-blue-400",
      icon: MessageSquare,
      components: [
        { name: "Voice (IVR)", description: "Interactive Voice Response" },
        { name: "Web Chat", description: "Website chat widget" },
        { name: "Mobile App", description: "Native iOS/Android apps" },
        { name: "SMS/WhatsApp", description: "Messaging channels" },
        { name: "Social Media", description: "Twitter, Facebook support" },
        { name: "Email", description: "Email support channel" }
      ]
    },
    {
      name: "Telephony & Channel Integration",
      color: "bg-green-500/20 border-green-400",
      icon: Phone,
      components: [
        { name: "Telephony Gateway", description: "SIP/PSTN integration" },
        { name: "IVR Platform", description: "Voice interaction platform" },
        { name: "Channel Router", description: "Omnichannel routing" },
        { name: "Session Manager", description: "Multi-channel session handling" }
      ]
    },
    {
      name: "Google CES Next Gen Platform",
      color: "bg-acc-purple/20 border-acc-purple",
      icon: Cpu,
      components: [
        { name: "Dialogflow CX", description: "Conversational AI engine" },
        { name: "Agent Builder", description: "Agentic orchestration layer" },
        { name: "Vertex AI", description: "Gemini Pro LLM foundation" },
        { name: "Agent Development Kit", description: "Custom agent framework" },
        { name: "Data Store", description: "RAG knowledge base" },
        { name: "Generative AI Studio", description: "Prompt engineering & tuning" }
      ]
    },
    {
      name: "Agentic Layer",
      color: "bg-yellow-500/20 border-yellow-400",
      icon: Layers,
      components: [
        { name: "Orchestrators", description: "Conversation, Goal, Safety" },
        { name: "Domain Agents", description: "17 specialized agents" },
        { name: "Tool Registry", description: "40+ backend integrations" },
        { name: "Policy Engine", description: "Guardrails & routing rules" },
        { name: "Context Manager", description: "Multi-turn state tracking" }
      ]
    },
    {
      name: "Enterprise Integration Layer",
      color: "bg-pink-500/20 border-pink-400",
      icon: Globe,
      components: [
        { name: "API Gateway", description: "Unified API management" },
        { name: "Service Mesh", description: "Microservices orchestration" },
        { name: "Event Bus", description: "Real-time event streaming" },
        { name: "Identity Provider", description: "SSO & authentication" }
      ]
    },
    {
      name: "Operational Systems",
      color: "bg-orange-500/20 border-orange-400",
      icon: Database,
      components: [
        { name: "BSS/Billing", description: "Business support systems" },
        { name: "CRM", description: "Customer relationship management" },
        { name: "OSS/Network", description: "Operations support systems" },
        { name: "Order Management", description: "Order processing & fulfillment" },
        { name: "Inventory", description: "Device & product inventory" },
        { name: "Payment Gateway", description: "Payment processing" }
      ]
    }
  ];

  const integrations = [
    { name: "BSS/OSS", systems: ["Billing", "Network Ops", "Provisioning"], color: "text-blue-400" },
    { name: "CRM", systems: ["Salesforce", "Customer 360", "Service Cloud"], color: "text-green-400" },
    { name: "Digital", systems: ["Web Portal", "Mobile App", "Self-Service"], color: "text-purple-400" },
    { name: "Analytics", systems: ["BigQuery", "Looker", "Data Studio"], color: "text-yellow-400" }
  ];

  const dataFlow = [
    { step: 1, title: "Customer Interaction", description: "Customer initiates contact via any channel" },
    { step: 2, title: "Channel Processing", description: "Telephony/IVR routes to CES Next Gen" },
    { step: 3, title: "Intent Recognition", description: "Dialogflow CX identifies customer intent" },
    { step: 4, title: "Agent Orchestration", description: "Goal Orchestrator selects domain agent" },
    { step: 5, title: "Tool Execution", description: "Agent calls backend systems via tools" },
    { step: 6, title: "Response Generation", description: "Gemini generates contextual response" },
    { step: 7, title: "Delivery", description: "Response delivered to customer channel" }
  ];

  const technologies = [
    { category: "Google Cloud", items: ["Dialogflow CX", "Vertex AI", "Cloud Run", "BigQuery", "Cloud Storage"] },
    { category: "AI/ML", items: ["Gemini Pro", "PaLM 2", "Embedding Models", "Fine-tuned LLMs", "RAG"] },
    { category: "Integration", items: ["Apigee", "Cloud Pub/Sub", "Cloud Tasks", "Eventarc"] },
    { category: "Security", items: ["Identity Platform", "Secret Manager", "VPC Service Controls", "KMS"] },
    { category: "Monitoring", items: ["Cloud Logging", "Cloud Monitoring", "Cloud Trace", "Error Reporting"] }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-acc-purple">Solution Architecture</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto">
            Enterprise-grade architecture powered by Google CES Next Gen, Vertex AI, and agentic orchestration for intelligent, scalable contact center automation.
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">System Architecture Layers</h2>
          <div className="space-y-4">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div key={idx} className={`border-2 rounded-lg p-6 ${layer.color}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6" />
                    <h3 className="text-xl font-bold">{layer.name}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {layer.components.map((component, cidx) => (
                      <div key={cidx} className="bg-acc-gray-800 border border-acc-gray-700 rounded p-3">
                        <div className="font-semibold text-sm mb-1">{component.name}</div>
                        <div className="text-xs text-acc-gray-400">{component.description}</div>
                      </div>
                    ))}
                  </div>
                  {idx < layers.length - 1 && (
                    <div className="flex justify-center mt-4">
                      <ArrowRight className="w-6 h-6 text-acc-gray-500 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Data Flow */}
        <div className="mb-16 bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Interaction Data Flow</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-acc-purple"></div>
            
            <div className="space-y-6">
              {dataFlow.map((flow, idx) => (
                <div key={idx} className="relative flex items-start gap-6">
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-acc-purple rounded-full flex items-center justify-center text-2xl font-bold">
                    {flow.step}
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4 mt-2">
                    <h4 className="font-bold text-lg mb-1">{flow.title}</h4>
                    <p className="text-sm text-acc-gray-400">{flow.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Points */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Enterprise Integration Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, idx) => (
              <div key={idx} className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
                <h3 className={`text-xl font-bold mb-4 ${integration.color}`}>{integration.name}</h3>
                <div className="space-y-2">
                  {integration.systems.map((system, sidx) => (
                    <div key={sidx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-acc-purple" />
                      <span>{system}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16 bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold mb-3 text-acc-purple">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item, iidx) => (
                    <div key={iidx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-acc-purple rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Architectural Principles */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Architectural Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-acc-purple">Scalability</h3>
              <p className="text-acc-gray-300 text-sm mb-3">
                Cloud-native architecture with auto-scaling capabilities to handle variable contact volumes.
              </p>
              <ul className="space-y-2 text-sm text-acc-gray-400">
                <li>• Horizontal pod autoscaling</li>
                <li>• Serverless compute (Cloud Run)</li>
                <li>• Distributed caching</li>
                <li>• Load balancing across regions</li>
              </ul>
            </div>

            <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-green-400">Reliability</h3>
              <p className="text-acc-gray-300 text-sm mb-3">
                High availability design with redundancy and failover mechanisms.
              </p>
              <ul className="space-y-2 text-sm text-acc-gray-400">
                <li>• Multi-region deployment</li>
                <li>• Circuit breakers & retries</li>
                <li>• Health checks & monitoring</li>
                <li>• Disaster recovery (RPO/RTO)</li>
              </ul>
            </div>

            <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Security</h3>
              <p className="text-acc-gray-300 text-sm mb-3">
                Enterprise-grade security with encryption, compliance, and access controls.
              </p>
              <ul className="space-y-2 text-sm text-acc-gray-400">
                <li>• End-to-end encryption (TLS)</li>
                <li>• PII redaction & masking</li>
                <li>• RBAC & IAM policies</li>
                <li>• Compliance (SOC 2, GDPR, HIPAA)</li>
              </ul>
            </div>

            <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Observability</h3>
              <p className="text-acc-gray-300 text-sm mb-3">
                Comprehensive monitoring, logging, and tracing for operational excellence.
              </p>
              <ul className="space-y-2 text-sm text-acc-gray-400">
                <li>• Real-time metrics & dashboards</li>
                <li>• Distributed tracing</li>
                <li>• Centralized logging</li>
                <li>• Alerting & incident response</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

