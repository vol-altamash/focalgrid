
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "How does the AI Architect consultation work?",
    a: "Our AI Architect uses real-time generative intelligence to analyze your project requirements and provide high-level strategic advice instantly via voice interaction. It's designed to help you brainstorm architectures and feature roadmaps in minutes rather than days."
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep expertise in FinTech, Healthcare, E-commerce, Logistics, and EdTech. However, our engineering team is versatile and capable of tackling complex technical challenges in any domain."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we provide comprehensive 24/7 maintenance, monitoring, and support packages. We ensure your systems remain stable, performant, and secure long after the initial rollout."
  },
  {
    q: "Can you integrate with our existing legacy systems?",
    a: "Absolutely. Our 'Systems & Integration' team specializes in creating secure, high-performance bridges between modern cloud applications and legacy on-premise infrastructure."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-400">Everything you need to know about our services and process.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-bold text-white pr-4">{faq.q}</span>
              <i className={`fas fa-chevron-down text-focalTeal transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}></i>
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/5"
                >
                  <div className="p-6 text-slate-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
