
import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  { name: "Healthcare", icon: "fa-shield-heart" },
  { name: "FinOps", icon: "fa-chart-pie" },
  { name: "Cloud Brokerage", icon: "fa-cloud-meatball" },
  { name: "Big Data", icon: "fa-database" },
  { name: "CRM Systems", icon: "fa-users-gear" },
  { name: "Professional Networks", icon: "fa-network-wired" },
  { name: "Environmental AI", icon: "fa-leaf" },
  { name: "EdTech", icon: "fa-graduation-cap" },
  { name: "E-commerce", icon: "fa-cart-shopping" },
];

const Industries: React.FC = () => {
  return (
    <div className="bg-slate-950 py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">evaluate. engage. succeed.</h2>
          <p className="text-focalCyan font-bold uppercase tracking-[0.3em] text-xs">Explore the industries embracing Focalgrid’s engineering excellence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.name}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              className="p-12 flex items-center space-x-6 group transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-focalTeal/20 transition-all">
                <i className={`fas ${ind.icon} text-2xl text-slate-500 group-hover:text-focalTeal transition-all`}></i>
              </div>
              <span className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors">{ind.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Neural Path Illustration (Abstract) */}
        <div className="mt-24 relative h-64 flex items-center justify-center overflow-hidden">
          <svg className="w-full max-w-4xl h-full opacity-20" viewBox="0 0 1000 200">
            <motion.path 
              d="M0 100 Q 250 10 500 100 T 1000 100" 
              fill="none" 
              stroke="url(#grad1)" 
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#0B7285', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#138496', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
            <h3 className="text-3xl font-display font-black text-white mb-2 uppercase tracking-[0.2em]">tangible, measurable, <br/> effective outcomes.</h3>
            <button className="text-focalTeal text-xs font-black uppercase tracking-widest hover:text-white transition-colors">Discover our works in detail <i className="fas fa-arrow-right ml-2"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
