'use client';

import { useState, useEffect } from 'react';
import { Terminal, X } from 'lucide-react';

export default function DebugConsole({ logs }: { logs: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (logs.length > 0) {
      setIsOpen(true);
    }
  }, [logs]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-acc-purple text-white p-3 rounded-full shadow-lg hover:brightness-110 transition-all z-50"
        aria-label="Open debug console"
      >
        <Terminal className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-2xl bg-acc-gray-900 border border-acc-gray-700 rounded-lg shadow-2xl z-50 max-h-96 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-acc-gray-700">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-acc-purple" />
          <h3 className="font-semibold text-white">Multi-Agent Debug Console</h3>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-acc-gray-400 hover:text-white transition-colors"
          aria-label="Close debug console"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Logs */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-xs space-y-1">
        {logs.length === 0 ? (
          <p className="text-acc-gray-400 italic">No logs yet. Send a message to see the debug trace.</p>
        ) : (
          logs.map((log, idx) => (
            <div key={idx} className="text-green-400">
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
}


