'use client';

import { useEffect, useRef } from 'react';

export default function MermaidDiagram({ diagram }: { diagram: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current) return;
    
    const renderDiagram = async () => {
      if (typeof window !== 'undefined' && containerRef.current) {
        const mermaid = (await import('mermaid')).default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            primaryColor: '#A100FF',
            primaryTextColor: '#fff',
            primaryBorderColor: '#A100FF',
            lineColor: '#6B7280',
            secondaryColor: '#1F2937',
            tertiaryColor: '#374151',
            background: '#000',
            mainBkg: '#111827',
            textColor: '#E5E7EB',
            nodeBorder: '#4B5563',
            clusterBkg: '#1F2937',
            clusterBorder: '#4B5563',
            edgeLabelBackground: '#111827',
          },
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        });

        try {
          const { svg } = await mermaid.render('mermaid-' + Math.random(), diagram);
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
            renderedRef.current = true;
          }
        } catch (error) {
          console.error('Mermaid rendering error:', error);
          if (containerRef.current) {
            containerRef.current.innerHTML = `<pre class="text-red-400">${diagram}</pre>`;
          }
        }
      }
    };

    renderDiagram();
  }, [diagram]);

  return <div ref={containerRef} className="mermaid-container bg-gray-900 p-4 rounded-lg border border-gray-800 my-6 overflow-x-auto" />;
}

