'use client';

import { useEffect, useRef, useState } from 'react';

export default function MermaidDiagram({ diagram }: { diagram: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        // Dynamically import mermaid
        const mermaid = (await import('mermaid')).default;
        
        // Configure mermaid
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            primaryColor: '#A100FF',
            primaryTextColor: '#fff',
            primaryBorderColor: '#A100FF',
            lineColor: '#9CA3AF',
            secondaryColor: '#374151',
            tertiaryColor: '#4B5563',
          },
          securityLevel: 'loose',
        });

        // Generate unique ID
        const id = `mermaid-${Date.now()}`;
        
        // Render diagram
        const result = await mermaid.render(id, diagram);
        setSvg(result.svg);
      } catch (err: any) {
        console.error('Mermaid error:', err);
        setError(err?.message || 'Failed to render diagram');
      }
    };

    renderDiagram();
  }, [diagram]);

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-lg my-6">
        <div className="text-red-400 text-sm font-semibold mb-2">Diagram Error:</div>
        <div className="text-red-300 text-xs mb-3">{error}</div>
        <details className="text-xs">
          <summary className="cursor-pointer text-gray-400 mb-2">Show diagram code</summary>
          <pre className="text-gray-500 overflow-x-auto p-2 bg-black rounded">{diagram}</pre>
        </details>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 my-6">
        <div className="flex items-center justify-center gap-3 text-gray-400">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading diagram...</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="mermaid-container bg-gray-900 p-6 rounded-lg border border-gray-800 my-6 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

