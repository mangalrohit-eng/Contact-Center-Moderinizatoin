'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-acc-purple/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-acc-gray-800 border border-acc-purple/30 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-acc-purple" />
            <span className="text-sm text-acc-purple font-semibold">Google CES Next + Agentic AI</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Reimagining Telecom CX —<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acc-purple to-purple-400">
              From Dialogflow to Google CES Next
            </span>
            <br />
            with Agentic Intelligence
          </h1>

          <p className="text-xl text-acc-gray-400 mb-8 max-w-3xl mx-auto">
            Handle <strong className="text-white">enterprise-scale</strong> volumes with goal-based agents that reason, route, and resolve.
          </p>

          <div className="flex justify-center items-center">
            <Link
              href="/approach/"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              See Approach
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


