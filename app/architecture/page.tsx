import MermaidDiagram from '@/components/MermaidDiagram';
import NextPageButton from '@/components/NextPageButton';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-acc-black text-white">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-acc-purple">Solution Architecture</span>
            </h1>
            <p className="text-xl text-acc-gray-300 max-w-4xl mx-auto mb-4">
              <strong>Channels → CES Next → Agentic Orchestrators → Domain Agents → Ops Tools</strong>
            </p>
            <p className="text-acc-gray-400 max-w-3xl mx-auto">
              CES Next Gen provNext