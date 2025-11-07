'use client';

import { useState } from 'react';
import { Send, Sparkles, AlertCircle } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  metadata?: {
    toolCalls?: string[];
    clarifying?: boolean;
  };
};

type ChatMode = 'legacy' | 'modern';

const presetPrompts = [
  'Why is my bill higher this month?',
  'Report a 5G outage near 10001.',
  'Upgrade to iPhone 16 with trade-in.',
  'Activate eSIM and port my number.',
];

const mockResponses = {
  legacy: {
    'Why is my bill higher this month?': 'I can help you with billing questions. Please say "billing inquiry" or visit verizon.com/billing for more information.',
    'Report a 5G outage near 10001.': 'I understand you want to report an outage. Please try: "network issue" or contact support at 1-800-VERIZON.',
    'Upgrade to iPhone 16 with trade-in.': 'For device upgrades, please say "upgrade device" or visit your nearest Verizon store.',
    'Activate eSIM and port my number.': 'I can help with activation. Please say "activate service" for more options.',
    default: 'I\'m sorry, I didn\'t understand that. Please rephrase or choose from the menu options.',
  },
  modern: {
    'Why is my bill higher this month?': 'I can help explain your bill increase. Let me check your account... I see your bill increased by $15. This is due to: 1) End of promotional discount ($10), 2) Overage charges for data usage ($5). Would you like me to review plan options that might save you money, or set up autopay for a $10/month discount?',
    'Report a 5G outage near 10001.': 'I\'ll help you report this outage. Checking network status for ZIP 10001... I see there\'s a known 5G tower maintenance in your area, expected to complete by 6 PM today. Would you like me to: 1) Create a ticket and notify you when resolved, 2) Apply a service credit to your account, or 3) Suggest nearby areas with full coverage?',
    'Upgrade to iPhone 16 with trade-in.': 'Great! Let me help with your iPhone 16 upgrade. First, I need to check your eligibility... You\'re eligible for an upgrade! Your current device (iPhone 12) has a trade-in value of $200. With our current promotion, you can get the iPhone 16 (128GB) for $799 - $200 (trade-in) - $100 (promo) = $499, or $13.86/month for 36 months. Would you like to proceed with this offer?',
    'Activate eSIM and port my number.': 'I\'ll guide you through eSIM activation and number porting. First, let me verify your identity... To port your number, I need: 1) Your current carrier name, 2) Account number, 3) PIN/password. Do you have this information ready? Meanwhile, I can send the eSIM QR code to your email to speed up the process.',
    default: 'I understand you need assistance. Could you provide more details about what you\'re trying to accomplish? For example, are you looking to: check your bill, resolve a service issue, upgrade your device, or manage your account?',
  },
};

export default function ChatSimulator({ onDebugUpdate }: { onDebugUpdate?: (logs: string[]) => void }) {
  const [mode, setMode] = useState<ChatMode>('legacy');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = { role: 'user', content: messageText };
    const responses = mockResponses[mode];
    const responseText = responses[messageText as keyof typeof responses] || responses.default;

    const assistantMessage: Message = {
      role: 'assistant',
      content: responseText,
      metadata: mode === 'modern' ? {
        toolCalls: ['BSS Billing API', 'Knowledge Base: Plans', 'Payments API'],
        clarifying: responseText.includes('?'),
      } : undefined,
    };

    setMessages(prev => [...prev, userMessage, assistantMessage]);
    setInput('');

    // Debug update
    if (mode === 'modern' && onDebugUpdate) {
      const debugLogs = [
        `[${new Date().toISOString()}] User: ${messageText}`,
        `[${new Date().toISOString()}] Orchestrator: Routing to billing_explainer agent`,
        `[${new Date().toISOString()}] Agent: Calling BSS Billing API (620ms)`,
        `[${new Date().toISOString()}] Agent: Calling Knowledge Base (310ms)`,
        `[${new Date().toISOString()}] Guardrail: PII check passed`,
        `[${new Date().toISOString()}] Response: ${responseText.substring(0, 50)}...`,
      ];
      onDebugUpdate(debugLogs);
    }
  };

  const handlePresetClick = (prompt: string) => {
    handleSend(prompt);
  };

  return (
    <div className="space-y-4">
      {/* Mode Toggle */}
      <div className="flex gap-2 bg-acc-gray-800 p-1 rounded-lg inline-flex">
        <button
          onClick={() => {
            setMode('legacy');
            setMessages([]);
          }}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            mode === 'legacy'
              ? 'bg-acc-gray-700 text-white'
              : 'text-acc-gray-400 hover:text-white'
          }`}
        >
          Legacy (Dialogflow)
        </button>
        <button
          onClick={() => {
            setMode('modern');
            setMessages([]);
          }}
          className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${
            mode === 'modern'
              ? 'bg-acc-purple text-white'
              : 'text-acc-gray-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Modern (CES Next + Agentic)
        </button>
      </div>

      {/* Preset Prompts */}
      <div className="flex flex-wrap gap-2">
        {presetPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handlePresetClick(prompt)}
            className="text-sm px-3 py-1.5 bg-acc-gray-800 hover:bg-acc-gray-700 border border-acc-gray-700 hover:border-acc-purple/50 rounded-full text-acc-gray-400 hover:text-white transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Window */}
      <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-4 min-h-[400px] max-h-[500px] overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-acc-gray-400">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Select a preset prompt or type your message to start</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    msg.role === 'user'
                      ? 'bg-acc-purple text-white'
                      : 'bg-acc-gray-700 text-acc-gray-100'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  {msg.metadata?.toolCalls && (
                    <div className="mt-2 text-xs opacity-75 border-t border-acc-gray-600 pt-2">
                      <span className="font-semibold">Tools used:</span> {msg.metadata.toolCalls.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-1 bg-acc-gray-800 border border-acc-gray-700 rounded-lg px-4 py-2 text-white placeholder-acc-gray-400 focus:outline-none focus:ring-2 focus:ring-acc-purple"
        />
        <button
          onClick={() => handleSend()}
          className="btn-primary flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          Send
        </button>
      </div>
    </div>
  );
}


