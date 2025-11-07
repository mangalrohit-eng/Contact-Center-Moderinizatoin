import MermaidDiagram from '@/components/MermaidDiagram';

export default function ArchitecturePage() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto prose prose-invert prose-purple">
      <h1 className="text-4xl font-bold mb-4 text-acc-purple">Contact Center — Agentic Architecture</h1>
      
      <p className="text-xl text-acc-gray-300 mb-8">
        <strong>Channels → CES Next → Agentic Orchestrators → Domain Agents → Ops Tools</strong>
      </p>

      <p className="text-acc-gray-300">
        Voice (IVR) and chat share one policy & memory model. Human handoff returns full context to the contact center.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Channels & Entry</h2>
      
      <ul className="text-acc-gray-300 space-y-2">
        <li><strong>Voice:</strong> PSTN/SIP → Genesys/NICE/Twilio → Google CCAI (STT/TTS)</li>
        <li><strong>Chat:</strong> Web/App/SMS/WhatsApp → CES session (same policy)</li>
        <li><strong>Context:</strong> session, auth token, device/app metadata, locale</li>
      </ul>

      <h2 className="text-3xl font-bold mt-12 mb-4 text-white">CES Next & Agentic Layer</h2>
      
      <ul className="text-acc-gray-300 space-y-2">
        <li>Goal Policies, Recovery, Safety/Compliance</li>
        <li><strong>Orchestrators:</strong> Conversation / Goal / Safety</li>
        <li><strong>Domain Agents:</strong> Billing, Plans, Devices, Activation, Network, Home, Security</li>
        <li><strong>Utilities:</strong> BSS Billing, Payments, OSS Outage, Device Catalog, Trade-in, Order API, Identity, Carrier Port, Appointments, Knowledge (RAG)</li>
      </ul>

      <h3 className="text-2xl font-bold mt-10 mb-4 text-acc-purple">Voice Flow</h3>
      
      <MermaidDiagram diagram={`sequenceDiagram
  autonumber
  participant Caller
  participant Carrier/PBX
  participant CC_Platform as Contact Center (Genesys/NICE/Flex)
  participant CCAI as Google CCAI (STT/TTS)
  participant CES as CES Next (Conversational Agents)
  participant Orch as Agentic Orchestrators
  participant Agent as Domain Agent
  participant Tool as Ops Tools (BSS/OSS/CRM/ITSM)

  Caller->>Carrier/PBX: Dial support
  Carrier/PBX->>CC_Platform: SIP/PSTN call setup
  CC_Platform->>CCAI: Media stream (STT/TTS)
  CCAI->>CES: Turn text + session (channel=voice)
  CES->>Orch: Policy + memory + risk checks
  Orch->>Agent: Assign (e.g., Billing Explainer)
  Agent->>Tool: BSS/Payments/Knowledge calls
  Tool-->>Agent: Result (charges/offers/ETA)
  Agent-->>CES: Goal progress + reply
  CES-->>CCAI: Text → TTS
  CCAI-->>CC_Platform: Audio
  CC_Platform-->>Caller: Spoken response
  CES-->>CC_Platform: Handoff package (if needed)`} />

      <h3 className="text-2xl font-bold mt-10 mb-4 text-acc-purple">Chat Flow</h3>
      
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

      <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Handoff & Governance</h2>
      
      <ul className="text-acc-gray-300 space-y-2">
        <li><strong>Human Handoff:</strong> conversation, goal state, tool results redacted & attached</li>
        <li><strong>Guardrails:</strong> clarify on low-confidence; escalate on high risk</li>
        <li><strong>Observability:</strong> per-turn trace, tool latency, policy triggers, audit trail</li>
      </ul>

      <div className="mt-12 p-6 bg-acc-purple/10 border border-acc-purple/30 rounded-lg">
        <h3 className="text-xl font-bold mb-3 text-acc-purple">Key Architectural Highlights</h3>
        <ul className="text-acc-gray-300 space-y-2 text-sm">
          <li>✓ <strong>Unified Experience:</strong> Same policies across voice and digital channels</li>
          <li>✓ <strong>Intelligent Routing:</strong> Orchestrators select optimal domain agents</li>
          <li>✓ <strong>Seamless Handoff:</strong> Full context transfer to human agents when needed</li>
          <li>✓ <strong>Enterprise Integration:</strong> Direct connection to BSS, OSS, CRM, and ITSM</li>
          <li>✓ <strong>Real-time Guardrails:</strong> Safety, compliance, and policy enforcement</li>
        </ul>
      </div>
    </div>
  );
}

