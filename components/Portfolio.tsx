
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Quantified",
    category: "AI Sales and Training",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    metric: "98% Accuracy",
    impact: "Sales Force Efficiency"
  },
  {
    title: "Yotascale",
    category: "Cloud Cost Management",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    metric: "40% Savings",
    impact: "Operational Overhead Reduction"
  },
  {
    title: "Marcus Tech",
    category: "Protein Trading Engine",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
    metric: "0.2ms Latency",
    impact: "High-Frequency Trading"
  },
  {
    title: "Alif Care",
    category: "Diabetes Management",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    metric: "1M+ Patients",
    impact: "Remote Healthcare Delivery"
  },
  {
    title: "ScaleFactor",
    category: "Fintech Ecosystem",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    metric: "$2B+ Processed",
    impact: "Secure Transaction Core"
  },
  {
    title: "Ellipsas",
    category: "Mental Health AI",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    metric: "24/7 Support",
    impact: "Predictive Wellness Nodes"
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="bg-[#020617] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <span className="text-focalTeal font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Digital Footprint</span>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter">delivering the best <br/> to you.</h2>
          </div>
          <button className="px-10 py-5 border border-white/10 hover:border-focalTeal text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all">
            View All Case Studies
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 bg-slate-900 shadow-2xl transition-transform duration-700 group-hover:scale-[0.98]">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center space-x-2 text-focalTeal font-black text-[10px] uppercase tracking-widest mb-2">
                    <span className="w-8 h-px bg-focalTeal/30"></span>
                    <span>{proj.metric}</span>
                  </div>
                  <h3 className="text-2xl font-display font-black text-white">{proj.title}</h3>
                </div>
              </div>
              
              <div className="px-4">
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">{proj.category}</span>
                <p className="text-slate-400 text-sm font-medium line-clamp-1 group-hover:text-slate-200 transition-colors">{proj.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Prop Icons (Inspired by ConradLabs bottom row) */}
        <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/5 pt-20">
          {[
            { label: "AI powered delivery", val: "AI", icon: "fa-brain" },
            { label: "top 1% engineering talent", val: "1%", icon: "fa-users" },
            { label: "customer-centric approach", val: "User", icon: "fa-fingerprint" },
            { label: "industry-leading satisfaction", val: "99%", icon: "fa-star" }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 rounded-full border border-white/10 mx-auto mb-8 flex items-center justify-center group-hover:border-focalTeal transition-all duration-500 relative">
                <div className="absolute inset-0 rounded-full border-t-2 border-focalTeal animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-white font-black text-xs uppercase tracking-widest">{item.val}</span>
              </div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">{item.label}</h4>
              <p className="text-slate-500 text-xs px-4">Our clients consistently rate us highly for technical expertise and management.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
