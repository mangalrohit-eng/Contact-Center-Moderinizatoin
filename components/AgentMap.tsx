'use client';

import { useEffect, useRef, useState } from 'react';
import { Network } from 'lucide-react';

type Node = {
  id: string;
  name: string;
  group: 'orchestrator' | 'agent' | 'tool';
};

type Link = {
  source: string;
  target: string;
};

type GraphData = {
  nodes: Node[];
  links: Link[];
};

export default function AgentMap({
  orchestrators,
  agents,
  tools,
  highlightPath,
}: {
  orchestrators: any[];
  agents: any[];
  tools: any[];
  highlightPath?: string[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Build graph data
  const graphData: GraphData = {
    nodes: [
      ...orchestrators.map((o) => ({ id: o.id, name: o.name, group: 'orchestrator' as const })),
      ...agents.map((a) => ({ id: a.id, name: a.name, group: 'agent' as const })),
      ...tools.map((t) => ({ id: t.id, name: t.name, group: 'tool' as const })),
    ],
    links: [
      // Connect orchestrators to agents
      ...agents.map((a) => ({ source: 'goal_orch', target: a.id })),
      // Connect agents to their tools
      ...agents.flatMap((a) =>
        a.tools.map((toolId: string) => ({ source: a.id, target: toolId }))
      ),
    ],
  };

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  // Simple force-directed layout simulation
  const nodePositions = new Map<string, { x: number; y: number }>();
  
  // Position orchestrators at top
  orchestrators.forEach((o, i) => {
    nodePositions.set(o.id, { x: dimensions.width / 2, y: 100 });
  });

  // Position agents in middle
  agents.forEach((a, i) => {
    const x = (dimensions.width / (agents.length + 1)) * (i + 1);
    nodePositions.set(a.id, { x, y: dimensions.height / 2 });
  });

  // Position tools at bottom
  tools.forEach((t, i) => {
    const x = (dimensions.width / (tools.length + 1)) * (i + 1);
    nodePositions.set(t.id, { x, y: dimensions.height - 100 });
  });

  const getNodeColor = (group: string, id: string) => {
    if (highlightPath && highlightPath.includes(id)) {
      return '#A100FF';
    }
    switch (group) {
      case 'orchestrator':
        return '#8B5CF6';
      case 'agent':
        return '#6366F1';
      case 'tool':
        return '#3B82F6';
      default:
        return '#6B7280';
    }
  };

  return (
    <div ref={containerRef} className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 h-[600px] relative">
      <div className="flex items-center gap-2 mb-4">
        <Network className="w-5 h-5 text-acc-purple" />
        <h3 className="text-lg font-semibold">Agentic Architecture</h3>
      </div>

      <svg width={dimensions.width} height={dimensions.height - 60} className="w-full">
        {/* Links */}
        <g>
          {graphData.links.map((link, idx) => {
            const source = nodePositions.get(link.source);
            const target = nodePositions.get(link.target);
            if (!source || !target) return null;

            const isHighlighted =
              highlightPath &&
              highlightPath.includes(link.source) &&
              highlightPath.includes(link.target);

            return (
              <line
                key={idx}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke={isHighlighted ? '#A100FF' : '#1f2937'}
                strokeWidth={isHighlighted ? 2 : 1}
                opacity={isHighlighted ? 1 : 0.6}
              />
            );
          })}
        </g>

        {/* Nodes */}
        <g>
          {graphData.nodes.map((node) => {
            const pos = nodePositions.get(node.id);
            if (!pos) return null;

            const isHighlighted = highlightPath && highlightPath.includes(node.id);
            const radius = node.group === 'orchestrator' ? 12 : node.group === 'agent' ? 10 : 8;

            return (
              <g key={node.id} transform={`translate(${pos.x},${pos.y})`}>
                <circle
                  r={radius}
                  fill={getNodeColor(node.group, node.id)}
                  stroke={isHighlighted ? '#fff' : 'none'}
                  strokeWidth={isHighlighted ? 2 : 0}
                />
                <text
                  y={radius + 15}
                  textAnchor="middle"
                  fontSize="11"
                  fill={isHighlighted ? '#fff' : '#9ca3af'}
                  fontWeight={isHighlighted ? 'bold' : 'normal'}
                >
                  {node.name.length > 20 ? node.name.substring(0, 20) + '...' : node.name}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex gap-4 text-xs text-acc-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-600" />
          <span>Orchestrator</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-600" />
          <span>Agent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-600" />
          <span>Tool</span>
        </div>
      </div>
    </div>
  );
}


