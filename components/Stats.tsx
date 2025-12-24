
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Years of Excellence", value: "8", suffix: "+" },
  { label: "Team Members", value: "50", suffix: "+" },
  { label: "Global Clients", value: "40", suffix: "+" },
  { label: "Successful Projects", value: "100", suffix: "+" }
];

const Stats: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="text-center group"
        >
          <div className="text-4xl md:text-6xl font-display font-extrabold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
            {stat.value}<span className="text-focalTeal">{stat.suffix}</span>
          </div>
          <div className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
