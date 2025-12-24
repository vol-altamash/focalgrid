
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import AiConsultant from './components/AiConsultant';
import WhyChooseUs from './components/WhyChooseUs';
import TechStack from './components/TechStack';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Layout from './components/Layout';
import CodeTool from './components/CodeTool';
import VisualTool from './components/VisualTool';
import LiveTool from './components/LiveTool';
import { ToolType } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'landing' | 'lab'>('landing');
  const [activeTool, setActiveTool] = useState<ToolType>(ToolType.CODE_ANALYSIS);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (view === 'lab') {
    return (
      <div className="h-screen bg-focalNavy">
        <Layout activeTool={activeTool} setActiveTool={setActiveTool} onExit={() => setView('landing')}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTool}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {activeTool === ToolType.CODE_ANALYSIS && <CodeTool />}
              {activeTool === ToolType.VISUAL_REDESIGN && <VisualTool />}
              {activeTool === ToolType.LIVE_BRAINSTORM && <LiveTool />}
            </motion.div>
          </AnimatePresence>
        </Layout>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans selection:bg-focalTeal/30 bg-focalNavy text-white">
      <Navbar scrolled={scrolled} onLaunchLab={() => setView('lab')} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="stats" className="py-12 bg-focalNavy border-y border-white/5 relative z-10">
          <Stats />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="solutions" className="bg-slate-900">
          <Solutions />
        </section>

        <section id="portfolio" className="bg-focalNavy">
          <Portfolio />
        </section>

        <section id="why-choose-us" className="py-24 bg-slate-900">
          <WhyChooseUs />
        </section>

        <section id="ai-architect" className="py-24 bg-focalNavy overflow-hidden">
          <AiConsultant />
        </section>

        <section id="tech-stack" className="py-16 bg-slate-900 border-y border-white/5">
          <TechStack />
        </section>

        <section id="process" className="py-24 bg-focalNavy">
          <Process />
        </section>

        <section id="testimonials" className="py-24 bg-slate-900">
          <Testimonials />
        </section>

        <section id="faq" className="py-24 bg-focalNavy">
          <FAQ />
        </section>

        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-focalTeal/20 to-focalNavy -z-10"></div>
          <div className="max-w-7xl mx-auto px-6 text-center">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
             >
                <h2 className="text-4xl md:text-7xl font-display font-bold mb-8">Ready to Build <br/><span className="text-gradient">Your Legacy?</span></h2>
                <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join the elite businesses scaling with Focalgrid. Let's engineer your future together. No physical borders, just global excellence.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                   <button className="bg-focalGold hover:bg-orange-600 text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-2xl shadow-orange-900/20 text-lg">
                     Start a Conversation
                   </button>
                   <button className="border border-white/20 hover:bg-white/5 text-white font-bold py-5 px-12 rounded-2xl transition-all text-lg">
                     Explore Careers
                   </button>
                </div>
             </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
