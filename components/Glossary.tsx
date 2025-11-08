'use client';

import { useState } from 'react';
import { Book, ChevronDown, ChevronUp } from 'lucide-react';

const terms = [
  {
    term: 'Agentic AI',
    definition: 'AI systems that use autonomous agents to reason, plan, and execute tasks using tools and APIs, rather than simple pattern matching.'
  },
  {
    term: 'CES Next (Customer Engagement Suite)',
    definition: 'Google Cloud\'s next-generation conversational AI platform with native voice understanding, goal-based orchestration, and enterprise integrations.'
  },
  {
    term: 'Orchestrator',
    definition: 'High-level coordinators that manage conversation flow, route requests to specialized agents, and enforce safety policies.'
  },
  {
    term: 'Domain Agent',
    definition: 'Specialized AI agents with deep knowledge of specific areas (e.g., billing, network support) and access to relevant tools and APIs.'
  },
  {
    term: 'Dialogflow',
    definition: 'Google\'s previous generation conversational AI platform using intent-based matching and rule-driven fulfillment logic.'
  },
  {
    term: 'Intent',
    definition: 'The underlying goal or purpose of a customer\'s utterance (e.g., "pay my bill", "check my balance").'
  },
  {
    term: 'Fallback Rate',
    definition: 'Percentage of customer interactions where the system fails to understand the request and must escalate to a human agent.'
  },
  {
    term: 'Containment Rate',
    definition: 'Percentage of customer interactions successfully resolved by the automated system without human agent intervention.'
  },
  {
    term: 'AHT (Average Handle Time)',
    definition: 'The average duration of a customer interaction from start to resolution, measured in seconds or minutes.'
  },
  {
    term: 'CSAT (Customer Satisfaction)',
    definition: 'Metric measuring customer satisfaction typically on a 1-5 scale, collected after interactions.'
  },
  {
    term: 'BSS (Business Support Systems)',
    definition: 'Back-office telecom systems managing customer-facing operations like billing, order management, and customer relationship management.'
  },
  {
    term: 'OSS (Operations Support Systems)',
    definition: 'Telecom systems managing network infrastructure, service provisioning, and network performance monitoring.'
  },
  {
    term: 'Guardrails',
    definition: 'Safety mechanisms and policy constraints that prevent agents from taking unsafe or non-compliant actions.'
  },
  {
    term: 'Tool/API',
    definition: 'Backend integrations that agents use to retrieve data, execute business logic, or perform operations (e.g., billing API, payment gateway).'
  },
  {
    term: 'LLM (Large Language Model)',
    definition: 'Advanced AI models (like GPT, Gemini) that understand and generate human-like text, powering the conversational capabilities.'
  },
  {
    term: 'Goal-Based Flow',
    definition: 'Conversation design approach focused on achieving customer objectives rather than matching specific intents, allowing for more flexible interactions.'
  },
  {
    term: 'RAG (Retrieval Augmented Generation)',
    definition: 'Technique where AI retrieves relevant information from knowledge bases before generating responses, ensuring accuracy and reducing hallucinations.'
  },
];

export default function Glossary() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 hover:bg-acc-gray-700/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Book className="w-6 h-6 text-acc-purple" />
          <div className="text-left">
            <h3 className="text-lg font-bold">Glossary</h3>
            <p className="text-sm text-acc-gray-400">Key terms and definitions</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-acc-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-acc-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="border-t border-acc-gray-700 p-6 bg-acc-gray-900/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {terms.map((item, idx) => (
              <div key={idx} className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-4">
                <dt className="font-semibold text-acc-purple mb-1">{item.term}</dt>
                <dd className="text-sm text-acc-gray-300">{item.definition}</dd>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

