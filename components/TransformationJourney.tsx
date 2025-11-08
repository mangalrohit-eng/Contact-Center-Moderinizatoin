'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Brain, Target, Network, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: 'Discover the Current Process',
    description: 'Analyze existing Dialogflow intents, conversation flows, and operational metrics.',
    pain: 'Rigid intent matching, high fallback rates, manual maintenance overhead',
    benefit: 'Comprehensive baseline understanding for targeted improvements',
    icon: Database,
    color: 'text-gray-400',
  },
  {
    title: 'Rationalize Intents',
    description: 'Consolidate redundant intents using semantic clustering and LLM-powered analysis.',
    pain: '200+ intents with overlaps causing confusion and maintenance burden',
    benefit: 'Streamlined intent taxonomy, reducing complexity by 40-50%',
    icon: Brain,
    color: 'text-acc-purple',
  },
  {
    title: 'Design CES Flows',
    description: 'Map intents to goal-oriented conversation flows with clear success criteria.',
    pain: 'Linear conversation paths that fail when customers deviate',
    benefit: 'Flexible goal-driven flows that adapt to customer behavior',
    icon: Target,
    color: 'text-acc-purple',
  },
  {
    title: 'Design Agentic Architecture',
    description: 'Define orchestrators, domain agents, tools, and routing policies with guardrails.',
    pain: 'Monolithic fulfillment logic, difficult to scale or maintain',
    benefit: 'Modular agent architecture with clear separation of concerns',
    icon: Network,
    color: 'text-acc-purple',
  },
  {
    title: 'Build the CES and Agents',
    description: 'Develop and deploy agents iteratively with enterprise system integrations.',
    pain: 'Long deployment cycles, limited ability to test new capabilities',
    benefit: 'Rapid iteration with phased rollouts and A/B testing',
    icon: Network,
    color: 'text-acc-purple',
  },
  {
    title: 'KPI Uplift',
    description: 'Measure containment, AHT, CSAT improvements with continuous optimization.',
    pain: 'Limited visibility into performance and improvement opportunities',
    benefit: '+15-20% containment, -60-90s AHT, +0.3-0.5 CSAT gains',
    icon: TrendingUp,
    color: 'text-green-400',
  },
];

export default function TransformationJourney() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="py-20 bg-acc-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Transformation Journey
          </h2>
          <p className="text-lg text-acc-gray-400 max-w-2xl mx-auto">
            From rigid intent matching to intelligent, goal-driven conversations
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-acc-gray-700 transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-6 hover:border-acc-purple/50 transition-colors">
                      <h3 className="text-xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                        <Icon className={`w-6 h-6 ${step.color}`} />
                        {step.title}
                      </h3>
                      <p className="text-acc-gray-400 mb-4">{step.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-left">
                        <div className="bg-red-900/10 border border-red-500/30 rounded p-3">
                          <p className="text-xs font-semibold text-red-400 mb-1">Current Pain</p>
                          <p className="text-xs text-acc-gray-300">{step.pain}</p>
                        </div>
                        <div className="bg-green-900/10 border border-green-500/30 rounded p-3">
                          <p className="text-xs font-semibold text-green-400 mb-1">Future Benefit</p>
                          <p className="text-xs text-acc-gray-300">{step.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-acc-gray-800 border-4 border-acc-purple rounded-full items-center justify-center z-10">
                    <div className="w-4 h-4 bg-acc-purple rounded-full" />
                  </div>

                  {/* Spacer for layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


