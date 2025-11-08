'use client';

import { motion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80, // Scroll to just below the hero, accounting for navbar
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative overflow-visible py-12 lg:py-16">
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

          <p className="text-xl text-acc-gray-400 max-w-3xl mx-auto mb-8">
            Handle <strong className="text-white">enterprise-scale</strong> volumes with goal-based agents that reason, route, and resolve.
          </p>

          {/* Scroll Indicator - Now inline with content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-12"
          >
            <button
              onClick={scrollToContent}
              className="flex flex-col items-center gap-2 text-acc-gray-400 hover:text-acc-purple transition-colors group mx-auto"
              aria-label="Scroll to content"
            >
              <span className="text-sm font-medium">Explore the Journey</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-6 h-6 group-hover:text-acc-purple" />
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Prominent Triangle Indicator - Positioned to be visible */}
      <div className="flex justify-center mt-8 mb-4">
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="relative group cursor-pointer"
          aria-label="Scroll down for more content"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[30px] border-t-acc-purple/60 group-hover:border-t-acc-purple transition-colors"
          />
          {/* Glow effect */}
          <div className="absolute inset-0 blur-xl bg-acc-purple/30 group-hover:bg-acc-purple/50 transition-colors" />
        </motion.button>
      </div>
    </section>
  );
}


