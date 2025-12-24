
import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    name: "Enterprise ERP",
    tagline: "Total Operational Control",
    desc: "A comprehensive suite for multi-branch operations, combining finance, logistics, and production.",
    features: ["Global Financials", "Supply Chain", "Asset Management"],
    icon: "fa-city",
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "Dynamics CRM",
    tagline: "Customer-Centric Growth",
    desc: "Intelligent lead tracking and customer journey mapping with built-in AI forecasting.",
    features: ["AI Insights", "Pipeline Automation", "Support Desk"],
    icon: "fa-user-tie",
    color: "from-focalTeal to-emerald-500"
  },
  {
    name: "Advance HRM",
    tagline: "The Future of Workforce",
    desc: "Automated payroll, attendance via facial recognition, and comprehensive KPI tracking.",
    features: ["Facial Auth", "Payroll Engine", "Performance Reviews"],
    icon: "fa-users-gear",
    color: "from-purple-500 to-focalCyan"
  },
  {
    name: "Unified LMS",
    tagline: "Learn Without Limits",
    desc: "SCORM-compliant training platform for corporate and educational institutions.",
    features: ["Interactive Courses", "Gamification", "Certifications"],
    icon: "fa-graduation-cap",
    color: "from-orange-500 to-focalGold"
  },
  {
    name: "Inventory Pro & POS",
    tagline: "Retail Redefined",
    desc: "Cloud-based point of sale with real-time inventory sync and multi-warehouse support.",
    features: ["Barcode Scanning", "Auto-Stocking", "Fiscal Reports"],
    icon: "fa-cash-register",
    color: "from-rose-500 to-pink-600"
  },
  {
    name: "Accounts Master",
    tagline: "Precision Accounting",
    desc: "Double-entry bookkeeping system with automated tax compliance and audit trails.",
    features: ["GST/VAT Ready", "Trial Balance", "Profit/Loss"],
    icon: "fa-file-invoice-dollar",
    color: "from-emerald-600 to-teal-800"
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <span className="text-focalGold font-bold uppercase tracking-[0.25em] text-xs mb-4 block">Product Suite</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready-to-Deploy <span className="text-gradient">Solutions</span></h2>
          <p className="text-slate-400 text-lg">
            Accelerate your business with our pre-built, battle-tested software products. Customization ready.
          </p>
        </div>
        <div className="hidden md:block">
           <button className="border border-white/10 hover:border-focalTeal text-white px-8 py-4 rounded-xl transition-all font-bold">
             View All Products
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {solutions.map((sol, idx) => (
          <motion.div
            key={sol.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-focalTeal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-3xl rounded-3xl -z-10"></div>
            
            <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-10 h-full hover:border-focalTeal/20 transition-all duration-500 shadow-2xl">
              <div className={`w-16 h-16 bg-gradient-to-br ${sol.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                <i className={`fas ${sol.icon} text-white text-2xl`}></i>
              </div>
              
              <div className="mb-6">
                <span className="text-[10px] font-bold text-focalTeal uppercase tracking-widest mb-1 block">{sol.tagline}</span>
                <h3 className="text-2xl font-bold text-white">{sol.name}</h3>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                {sol.desc}
              </p>
              
              <div className="space-y-3 mb-10">
                {sol.features.map((f, fIdx) => (
                  <div key={fIdx} className="flex items-center text-xs text-slate-400">
                    <i className="fas fa-circle text-[4px] text-focalTeal mr-3"></i>
                    {f}
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-white/5 hover:bg-focalTeal text-white text-sm font-bold rounded-2xl transition-all border border-white/10 flex items-center justify-center group/btn">
                Book a Live Demo
                <i className="fas fa-chevron-right ml-2 text-[10px] group-hover/btn:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
