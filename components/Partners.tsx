
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "fa-google", "fa-microsoft", "fa-aws", "fa-salesforce", "fa-atlassian", "fa-slack", "fa-github", "fa-digital-ocean", "fa-stripe"
];

const Partners: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">The world's leading brands are powered by Focalgrid</p>
      </div>
      <div className="flex overflow-hidden group">
        <motion.div 
          className="flex space-x-20 items-center whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Duplicate set for infinite scroll effect */}
          {[...partners, ...partners].map((icon, idx) => (
            <div key={idx} className="flex items-center space-x-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
              <i className={`fab ${icon} text-3xl text-white`}></i>
              <span className="text-white font-display font-black text-lg tracking-tighter opacity-20">{icon.split('-')[1].toUpperCase()}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
