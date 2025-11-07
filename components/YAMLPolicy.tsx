'use client';

import { useState } from 'react';
import { Copy, Check, FileCode } from 'lucide-react';
import yaml from 'js-yaml';

type PolicyData = {
  guardrails: Array<{ id: string; desc: string }>;
  routing: Array<{ when: string; action: string }>;
};

export default function YAMLPolicy({ data }: { data: PolicyData }) {
  const [copied, setCopied] = useState(false);

  // Convert to YAML
  const yamlContent = yaml.dump(data, { indent: 2 });

  const handleCopy = () => {
    navigator.clipboard.writeText(yamlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileCode className="w-5 h-5 text-acc-purple" />
          <h3 className="text-lg font-semibold">Policy Configuration (YAML)</h3>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 bg-acc-gray-900 hover:bg-acc-gray-700 border border-acc-gray-700 rounded text-sm transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="bg-acc-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-sm text-green-400 font-mono">
          <code>{yamlContent}</code>
        </pre>
      </div>

      <div className="mt-4 text-sm text-acc-gray-400">
        <p>
          This YAML configuration defines the guardrails and routing policies for the agentic system.
          Copy and integrate into your deployment pipelines.
        </p>
      </div>
    </div>
  );
}


