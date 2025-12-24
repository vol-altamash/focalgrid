
import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    type: "Blog",
    title: "The future of wholesale finance: Why mobile matters",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    link: "Read more"
  },
  {
    type: "Whitepaper",
    title: "The seamless sale: A blueprint for the future of auto retail",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    link: "Download"
  },
  {
    type: "Blog",
    title: "Transitioning to smarter dealership ecosystems with AI",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
    link: "Read more"
  },
  {
    type: "Case Study",
    title: "Scaling Al-powered delivery for global logistics nodes",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    link: "View Case Study"
  }
];

const Insights: React.FC = () => {
  return (
    <div className="bg-slate-950 py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-focalTeal font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Knowledge Hub</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tighter">Featured <span className="text-gradient">reads & insights.</span></h2>
            <p className="text-slate-400 text-lg">
              Stay informed with the latest from Focalgrid. Thought leadership, product updates, and company news, all in one place.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-focalTeal hover:text-white transition-all">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-focalTeal hover:text-white transition-all">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((art, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 mb-6 relative">
                <img 
                  src={art.img} 
                  alt={art.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
                
                <div className="absolute top-6 left-6">
                  <span className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                    {art.type}
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white font-bold text-xl leading-snug group-hover:text-focalTeal transition-colors">
                    {art.title}
                  </h3>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-focalTeal font-black text-[10px] uppercase tracking-widest px-2">
                <span>{art.link}</span>
                <i className="fas fa-arrow-right-long transition-transform group-hover:translate-x-2"></i>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
