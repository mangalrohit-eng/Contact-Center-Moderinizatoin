'use client';

import { useEffect, useRef, useState } from 'react';

export default function MermaidDiagram({ diagram }: { diagram: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    
    const renderDiagram = async () => {
      if (typeof window === 'undefined' || !containerRef.current) return;
      
      try {
        const mermaid = (await import('mermaid')).default;
        
        // Initialize Mermaid with dark theme
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            primaryColor: '#A100FF',
            primaryTextColor: '#ffffff',
            primaryBorderColor: '#A100FF',
            lineColor: '#9CA3AF',
            secondaryColor: '#1F2937',
            tertiaryColor: '#374151',
            background: '#111827',
            mainBkg: '#1F2937',
            textColor: '#E5E7EB',
            nodeBorder: '#6B7280',
            clusterBkg: '#1F2937',
            clusterBorder: '#6B7280',
            edgeLabelBackground: '#111827',
            fontSize: '14px',
          },
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          securityLevel: 'loose',
          sequence: {
            actorMargin: 50,
            width: 150,
            height: 65,
            boxMargin: 10,
            messageMargin: 35,
          }
        });

        // Generate unique ID
        const id = 'mermaid-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
        
        // Render the diagram
        const { svg } = await mermaid.render(id, diagram);
        
        if (mounted && containerRef.current) {
          containerRef.current.innerHTML = svg;
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to render diagram');
          setIsLoading(false);
        }
      }
    };

    const timer = setTimeout(() => {
      renderDiagram();
    }, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [diagram]);

  if (isLoading) {
    return (
      <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 my-6 text-center">
        <div className="text-gray-400">Loading diagram...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-500/50 p-4 rounded-lg my-6">
        <div className="text-red-400 text-sm mb-2">Failed to render diagram: {error}</div>
        <pre className="text-xs text-gray-400 overflow-x-auto">{diagram}</pre>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="mermaid-container bg-gray-900 p-6 rounded-lg border border-gray-800 my-6 overflow-x-auto"
      style={{ minHeight: '400px' }}
    />
  );
}

