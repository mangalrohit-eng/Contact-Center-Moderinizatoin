'use client';

import { useState } from 'react';

export default function CodeBlock({children, lang}:{children:string; lang?:string}) {
  const [copied, setCopied] = useState(false);
  
  const copy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-black text-gray-200 text-xs p-4 rounded-md border border-gray-800 overflow-auto my-6">
      <button 
        onClick={copy} 
        className="absolute right-2 top-2 text-[10px] px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      {lang === 'mermaid' ? (
        <div className="mermaid-diagram" data-diagram={children}>
          <pre><code className="language-mermaid">{children}</code></pre>
        </div>
      ) : (
        <pre><code className={`language-${lang||'text'}`}>{children}</code></pre>
      )}
    </div>
  );
}

