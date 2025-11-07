'use client';

import { useState } from 'react';
import ChatSimulator from '@/components/ChatSimulator';
import DebugConsole from '@/components/DebugConsole';
import VoiceDemo from '@/components/VoiceDemo';

export default function DemoPage() {
  const [debugLogs, setDebugLogs] = useState<string[]>([]);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Interactive <span className="text-acc-purple">Demo</span>
          </h1>
          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto">
            Experience the difference between legacy Dialogflow and modern CES Next with Agentic AI.
          </p>
        </div>

        {/* Chat Simulator */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Chat Simulator</h2>
          <p className="text-acc-gray-400 mb-6">
            Toggle between legacy and modern modes to see how responses differ. Modern mode includes multi-agent
            orchestration, tool calls, and clarifying questions.
          </p>
          <ChatSimulator onDebugUpdate={setDebugLogs} />
        </div>

        {/* Voice Demo */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Voice Interaction</h2>
          <p className="text-acc-gray-400 mb-6">
            Test voice-to-text and text-to-speech capabilities using the Web Speech API. Click the microphone to start.
          </p>
          <VoiceDemo />
        </div>

        {/* Debug Console */}
        <DebugConsole logs={debugLogs} />
      </div>
    </div>
  );
}


