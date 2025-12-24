
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "We start by getting to know our clients, their business goals, and their target audience.",
    icon: "fa-magnifying-glass",
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    id: "02",
    title: "Strategy",
    desc: "We develop a strategy that outlines the design approach, user experience, and key features.",
    icon: "fa-chess-king",
    color: "from-focalTeal/20 to-focalTeal/5"
  },
  {
    id: "03",
    title: "Design",
    desc: "We work closely with our clients to get feedback and iterate on the design until it meets their needs.",
    icon: "fa-bezier-curve",
    color: "from-focalGold/20 to-focalGold/5"
  },
  {
    id: "04",
    title: "Development",
    desc: "Once the design is finalized, our development team takes over to build the final product.",
    icon: "fa-code",
    color: "from-focalCyan/20 to-focalCyan/5"
  }
];

const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">How we work at <span className="text-focalTeal">Focalgrid!!!</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Inspiring to unravel the unexplored, we at Focalgrid work in a most cohesive manner in collaboration with our clients in order to deliver the best solution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="mb-8">
              <span className="text-4xl font-display font-black text-white/10 group-hover:text-focalTeal/30 transition-colors">
                {step.id}
              </span>
            </div>
            
            <div className={`aspect-square rounded-[3rem] bg-gradient-to-br ${step.color} border border-white/5 p-10 flex flex-col justify-between mb-8 group-hover:border-focalTeal/30 transition-all shadow-2xl relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                <i className={`fas ${step.icon} text-white text-xl`}></i>
              </div>
              
              <div>
                <h3 className="text-2xl font-display font-black text-white mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {step.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Path */}
      <div className="mt-20 flex justify-center">
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 rounded-full bg-focalTeal shadow-[0_0_10px_#0B7285]"></div>
          <div className="w-32 h-px bg-gradient-to-r from-focalTeal to-transparent"></div>
          <i className="fas fa-plus text-white/20"></i>
          <div className="w-32 h-px bg-gradient-to-l from-focalTeal to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-focalTeal shadow-[0_0_10px_#0B7285]"></div>
        </div>
      </div>
    </div>
  );
};

export default Process;
