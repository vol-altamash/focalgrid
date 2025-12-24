
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Focalgrid transformed our legacy systems into a modern cloud infrastructure. Their expertise in AI integration is second to none.",
    author: "Sarah Jenkins",
    role: "CTO, FinStream Global",
    stars: 5
  },
  {
    text: "The mobile app they developed for us has seen 200% growth in user engagement. Professional, fast, and highly innovative.",
    author: "David Chen",
    role: "Director of Product, Nexus Retail",
    stars: 5
  },
  {
    text: "Their managed security services gave us the confidence to scale internationally without worrying about compliance breaches.",
    author: "Elena Rodriguez",
    role: "Founder, HealthBridge AI",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Client Success Stories</h2>
        <p className="text-slate-400">Trusted by industry leaders across the globe.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl relative"
          >
            <div className="flex text-focalGold mb-6">
              {[...Array(t.stars)].map((_, i) => (
                <i key={i} className="fas fa-star text-sm"></i>
              ))}
            </div>
            <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-focalTeal rounded-full flex items-center justify-center font-bold text-white">
                {t.author[0]}
              </div>
              <div>
                <h4 className="text-white font-bold">{t.author}</h4>
                <p className="text-slate-500 text-xs">{t.role}</p>
              </div>
            </div>
            <i className="fas fa-quote-right absolute top-8 right-8 text-white/5 text-4xl"></i>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
