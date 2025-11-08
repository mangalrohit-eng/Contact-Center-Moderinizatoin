'use client';

import { useEffect, useRef, useState } from 'react';
import { RefreshCw } from 'lucide-react';

export default function MermaidDiagram({ diagram }: { diagram: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [retryCount, setRetryCount] = useState<number>(0);

  const renderDiagram = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      // Set a timeout for loading
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Diagram loading timed out after 10 seconds')), 10000)
      );

      const renderPromise = (async () => {
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
        const id = `mermaid-${Date.now()}-${retryCount}`;
        
        // Render diagram
        const result = await mermaid.render(id, diagram);
        return result.svg;
      })();

      const result = await Promise.race([renderPromise, timeoutPromise]) as string;
      setSvg(result);
      setIsLoading(false);
    } catch (err: any) {
      console.error('Mermaid error:', err);
      setError(err?.message || 'Failed to render diagram');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    renderDiagram();
  }, [diagram, retryCount]);

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-lg my-6">
        <div className="text-red-400 text-sm font-semibold mb-2">Diagram Error:</div>
        <div className="text-red-300 text-xs mb-3">{error}</div>
        <button
          onClick={() => setRetryCount(prev => prev + 1)}
          className="flex items-center gap-2 px-4 py-2 bg-acc-purple hover:bg-acc-purple/80 text-white rounded-lg text-sm font-semibold transition-colors mb-3"
        >
          <RefreshCw className="w-4 h-4" />
          Retry Loading Diagram
        </button>
        <details className="text-xs">
          <summary className="cursor-pointer text-gray-400 mb-2">Show diagram code</summary>
          <pre className="text-gray-500 overflow-x-auto p-2 bg-black rounded">{diagram}</pre>
        </details>
      </div>
    );
  }

  if (isLoading || !svg) {
    return (
      <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 my-6">
        <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
          <div className="flex items-center gap-3">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Loading diagram...</span>
          </div>
          <p className="text-xs text-gray-500">If this takes more than 10 seconds, a retry button will appear</p>
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

