
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-focalTeal/10 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
      
      {/* Dynamic Neural Path Background (ConradLabs Style) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full lg:w-1/2 h-full opacity-30 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <motion.circle 
            cx="400" cy="400" r="280" 
            fill="none" stroke="#0B7285" strokeWidth="2" strokeDasharray="10 20" 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="400" cy="400" r="350" 
            fill="none" stroke="#138496" strokeWidth="1" opacity="0.5"
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M 800 400 L 400 400 Q 400 100 700 100" 
            fill="none" stroke="#0B7285" strokeWidth="8" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.path 
            d="M 800 400 L 400 400 Q 400 700 700 700" 
            fill="none" stroke="#138496" strokeWidth="8" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          />
          <circle cx="400" cy="400" r="12" fill="white" className="shadow-[0_0_20px_white]" />
          <motion.circle 
            cx="700" cy="100" r="8" fill="#D97706" 
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-10 backdrop-blur-xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-focalTeal">Shaping Smarter Future</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-display font-black text-white leading-[0.9] mb-10 tracking-tighter"
          >
            AI-First. <br />
            <span className="text-gradient">Startup-Fast.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 mb-14 max-w-2xl leading-relaxed font-light"
          >
            Our top 1% engineering team empowers startups with AI-driven software, transforming visionary ideas into market-leading realities with exceptional speed and intelligence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="w-full sm:w-auto bg-focalTeal hover:bg-focalCyan text-white font-black py-6 px-14 rounded-2xl transition-all shadow-2xl shadow-teal-900/40 flex items-center justify-center space-x-4 group text-lg">
              <span>Get in touch</span>
              <i className="fas fa-arrow-up-right-from-square group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform text-sm"></i>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
