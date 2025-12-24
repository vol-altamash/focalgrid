
import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: "Expert Team",
    desc: "50+ engineers with an average of 8+ years of experience in enterprise development.",
    icon: "fa-users-cog",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Global Delivery",
    desc: "24/7 support and delivery across all time zones with a remote-first, global mindset.",
    icon: "fa-globe-americas",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Proven Track Record",
    desc: "150+ clients, 500+ successful projects, and a 98% client satisfaction rate.",
    icon: "fa-award",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Cutting-Edge Tech",
    desc: "Expertise in AI, cloud-native architectures, and the most modern software frameworks.",
    icon: "fa-microchip",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Security First",
    desc: "ISO certified, GDPR-ready, and SOC 2 compliant processes built into every line of code.",
    icon: "fa-user-shield",
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Client-Centric",
    desc: "We measure our success by yours. Transparent communication and agile methodologies.",
    icon: "fa-heart",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600"
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Why Choose Focalgrid?</h2>
        <p className="text-slate-400">What sets us apart from the competition.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((val, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-8 rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900 transition-all duration-500 hover:border-focalTeal/50 shadow-2xl"
          >
            {/* Background Image with Overlay */}
            <img 
              src={val.img} 
              alt={val.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-transparent to-slate-900/80"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-focalTeal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-focalTeal group-hover:text-white transition-all duration-500">
                <i className={`fas ${val.icon} text-focalTeal group-hover:text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-focalTeal transition-colors">{val.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{val.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
