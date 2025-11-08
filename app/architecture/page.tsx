import MermaidDiagram from '@/components/MermaidDiagram';
import NextPageButton from '@/components/NextPageButton';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-acc-black text-white">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-acc-purple">Solution Architecture</span>
            </h1>
            <p className="text-xl text-acc-gray-300 max-w-4xl mx-auto mb-4">
              <strong>Channels → CES Next → Agentic Orchestrators → Domain Agents → Ops Tools</strong>
            </p>
            <p className="text-acc-gray-400 max-w-3xl mx-auto">
              CES Next Gen provides native voice understanding and response capabilities. Voice (IVR) and chat share one unified policy & memory model. Human handoff returns full context to the contact center.
            </p>
          </div>

          {/* Channels & Entry */}
          <section className="mb-16 bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Channels & Entry</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4">
                <h3 className="font-bold text-blue-400 mb-2">Voice</h3>
                <p className="text-sm text-acc-gray-300">PSTN/SIP → Contact Center Platform → CES Next (native voice understanding & response)</p>
              </div>
              <div className="bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4">
                <h3 className="font-bold text-green-400 mb-2">Chat</h3>
                <p className="text-sm text-acc-gray-300">Web/App/SMS/WhatsApp → CES Next (same policy & memory)</p>
              </div>
            </div>
            
            <div className="bg-acc-purple/10 border border-acc-purple/30 rounded-lg p-4">
              <h3 className="font-bold text-acc-purple mb-2">Request Context (Metadata)</h3>
              <p className="text-sm text-acc-gray-300">Every voice or chat request includes: session ID, authentication token, device/app metadata, user locale, and conversation history</p>
            </div>
          </section>

          {/* CES Next & Agentic Layer */}
          <section className="mb-16 bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">CES Next & Agentic Layer</h2>
            
            <div className="space-y-4">
              <div className="bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4">
                <p className="text-acc-gray-300">Goal Policies, Recovery, Safety/Compliance</p>
              </div>
              <div className="bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4">
                <span className="font-bold text-acc-purple">Orchestrators:</span>
                <span className="text-acc-gray-300"> Conversation / Goal / Safety</span>
              </div>
              <div className="bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4">
                <span className="font-bold text-green-400">Domain Agents:</span>
                <span className="text-acc-gray-300"> Billing, Plans, Devices, Activation, Network, Home, Security</span>
              </div>
              <div className="bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4">
                <span className="font-bold text-blue-400">Utilities:</span>
                <span className="text-acc-gray-300"> BSS Billing, Payments, OSS Outage, Device Catalog, Trade-in, Order API, Identity, Carrier Port, Appointments, Knowledge (RAG)</span>
              </div>
            </div>
          </section>

          {/* Voice Flow */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold mb-6 text-acc-purple">Voice Flow</h3>
      
      <MermaidDiagram diagram={`sequenceDiagram
  autonumber
  participant Caller
  participant Carrier/PBX
  participant CC_Platform as Contact Center (Genesys/NICE/Flex)
  participant CES as CES Next (Native Voice + Agentic AI)
  participant Orch as Agentic Orchestrators
  participant Agent as Domain Agent
  participant Tool as Ops Tools (BSS/OSS/CRM/ITSM)

  Caller->>Carrier/PBX: Dial support
  Carrier/PBX->>CC_Platform: SIP/PSTN call setup
  CC_Platform->>CES: Voice stream (native audio)
  CES->>CES: Voice understanding (built-in)
  CES->>Orch: Policy + memory + risk checks
  Orch->>Agent: Assign (e.g., Billing Explainer)
  Agent->>Tool: BSS/Payments/Knowledge calls
  Tool-->>Agent: Result (charges/offers/ETA)
  Agent-->>CES: Goal progress + reply
  CES->>CES: Voice synthesis (built-in)
  CES-->>CC_Platform: Voice response (native audio)
  CC_Platform-->>Caller: Spoken response
  CES-->>CC_Platform: Handoff package (if needed)`} />

          </section>

          {/* Chat Flow */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold mb-6 text-acc-purple">Chat Flow</h3>
            
            <MermaidDiagram diagram={`sequenceDiagram
  autonumber
  participant User
  participant Widget as Web/App Chat Widget
  participant CES as CES Next (Conversational Agents)
  participant Orch as Agentic Orchestrators
  participant Agent as Domain Agent
  participant Tool as Ops Tools (BSS/OSS/CRM/ITSM)

  User->>Widget: Message (auth + context)
  Widget->>CES: Turn text + session (channel=chat)
  CES->>Orch: Policy + memory + risk checks
  Orch->>Agent: Route (e.g., Upgrade Advisor)
  Agent->>Tool: Catalog/Eligibility/Trade-in
  Tool-->>Agent: Results
  Agent-->>CES: Steps + recommended action
  CES-->>Widget: Reply + next step or handoff`} />
          </section>

          {/* Handoff & Governance */}
          <section className="mb-16 bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Handoff & Governance</h2>
            
            <div className="space-y-4">
              <div className="bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4">
                <span className="font-bold text-acc-purple">Human Handoff:</span>
                <span className="text-acc-gray-300"> conversation, goal state, tool results redacted & attached</span>
              </div>
              <div className="bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4">
                <span className="font-bold text-yellow-400">Guardrails:</span>
                <span className="text-acc-gray-300"> clarify on low-confidence; escalate on high risk</span>
              </div>
              <div className="bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4">
                <span className="font-bold text-green-400">Observability:</span>
                <span className="text-acc-gray-300"> per-turn trace, tool latency, policy triggers, audit trail</span>
              </div>
            </div>
          </section>

          {/* Key Architectural Highlights */}
          <section className="bg-gradient-to-br from-acc-purple/10 to-transparent border border-acc-purple/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-acc-purple">Key Architectural Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-acc-purple flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <h3 className="font-bold text-white mb-1">Unified Experience</h3>
                  <p className="text-sm text-acc-gray-400">Same policies across voice and digital channels</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <h3 className="font-bold text-white mb-1">Intelligent Routing</h3>
                  <p className="text-sm text-acc-gray-400">Orchestrators select optimal domain agents</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <h3 className="font-bold text-white mb-1">Seamless Handoff</h3>
                  <p className="text-sm text-acc-gray-400">Full context transfer to human agents when needed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <h3 className="font-bold text-white mb-1">Enterprise Integration</h3>
                  <p className="text-sm text-acc-gray-400">Direct connection to BSS, OSS, CRM, and ITSM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-400 flex items-center justify-center text-white text-sm font-bold">✓</div>
                <div>
                  <h3 className="font-bold text-white mb-1">Real-time Guardrails</h3>
                  <p className="text-sm text-acc-gray-400">Safety, compliance, and policy enforcement</p>
                </div>
              </div>
            </div>
          </section>

          <NextPageButton href="/agents/" label="Agent Catalog" />
        </div>
      </div>
    </div>
  );
}

