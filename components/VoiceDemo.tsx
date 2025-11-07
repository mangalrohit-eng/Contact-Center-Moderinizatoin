'use client';

import { useState, useEffect } from 'react';
import { Mic, Volume2, Square } from 'lucide-react';

export default function VoiceDemo() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if Web Speech API is supported
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      setIsSupported(!!SpeechRecognition && 'speechSynthesis' in window);
    }
  }, []);

  const startListening = () => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript('');
      setResponse('');
    };

    recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript;
      setTranscript(speechResult);
      handleVoiceInput(speechResult);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
  };

  const handleVoiceInput = (text: string) => {
    // Mock response based on input
    let mockResponse = '';
    if (text.toLowerCase().includes('bill')) {
      mockResponse = 'I can help you understand your bill. Let me pull up your account information.';
    } else if (text.toLowerCase().includes('outage')) {
      mockResponse = 'I\'ll check the network status in your area right away.';
    } else if (text.toLowerCase().includes('upgrade')) {
      mockResponse = 'Great! Let me show you the latest upgrade options and trade-in values.';
    } else {
      mockResponse = 'I understand. Let me help you with that request.';
    }

    setResponse(mockResponse);

    // Text-to-speech
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(mockResponse);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!isSupported) {
    return (
      <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 text-center">
        <Volume2 className="w-12 h-12 text-acc-gray-400 mx-auto mb-3" />
        <p className="text-acc-gray-400">
          Voice demo requires a browser with Web Speech API support (Chrome, Edge, Safari).
        </p>
      </div>
    );
  }

  return (
    <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold mb-4">Voice Interaction Demo</h3>

        {/* Microphone Button */}
        <div className="flex justify-center">
          {isListening ? (
            <button
              onClick={stopListening}
              className="w-24 h-24 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all shadow-lg animate-pulse"
              aria-label="Stop recording"
            >
              <Square className="w-10 h-10 text-white" />
            </button>
          ) : (
            <button
              onClick={startListening}
              className="w-24 h-24 rounded-full bg-acc-purple hover:brightness-110 flex items-center justify-center transition-all shadow-lg"
              aria-label="Start recording"
            >
              <Mic className="w-10 h-10 text-white" />
            </button>
          )}
        </div>

        <p className="text-acc-gray-400">
          {isListening ? 'Listening... Speak now' : 'Click the microphone to start'}
        </p>

        {/* Transcript */}
        {transcript && (
          <div className="bg-acc-gray-900 border border-acc-gray-700 rounded-lg p-4 text-left">
            <p className="text-sm text-acc-gray-400 mb-1">You said:</p>
            <p className="text-white">{transcript}</p>
          </div>
        )}

        {/* Response */}
        {response && (
          <div className="bg-acc-purple/10 border border-acc-purple/30 rounded-lg p-4 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Volume2 className="w-4 h-4 text-acc-purple" />
              <p className="text-sm text-acc-purple font-semibold">Assistant response:</p>
            </div>
            <p className="text-white">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}


