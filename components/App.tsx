
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Industries from './components/Industries';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Team from './components/Team';
import Stats from './components/Stats';
import Insights from './components/Insights';
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
import DeploymentTool from './components/DeploymentTool';
import Chatbot from './components/Chatbot';
import BookingCalendar from './components/BookingCalendar';
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
              {activeTool === ToolType.DEPLOYMENT && <DeploymentTool />}
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

        <section id="partners" className="bg-slate-950 py-12 border-b border-white/5">
          <Partners />
        </section>

        <section id="stats" className="py-12 bg-focalNavy border-b border-white/5 relative z-10">
          <Stats />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="industries">
          <Industries />
        </section>

        <section id="solutions" className="bg-slate-900">
          <Solutions />
        </section>

        <section id="portfolio" className="bg-focalNavy">
          <Portfolio />
        </section>

        <section id="insights">
          <Insights />
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

        <section id="team" className="bg-slate-950">
          <Team />
        </section>

        <section id="testimonials" className="py-24 bg-slate-900">
          <Testimonials />
        </section>

        <section id="faq" className="py-24 bg-focalNavy">
          <FAQ />
        </section>

        <section id="contact" className="py-32 relative overflow-hidden bg-[#020617]">
          <div className="absolute inset-0 bg-gradient-to-br from-focalTeal/10 to-transparent -z-10"></div>
          <div className="max-w-7xl mx-auto px-6">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <BookingCalendar />
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
             >
                <div>
                  <h4 className="text-white font-bold mb-2">Prefer email or a direct call?</h4>
                  <p className="text-slate-500 text-sm">Our global support team responds within 2 business hours.</p>
                </div>
                <div className="flex items-center space-x-6">
                   <a href="mailto:hello@focalgrid.systems" className="text-focalTeal font-bold hover:text-focalCyan transition-colors flex items-center space-x-2">
                      <i className="far fa-envelope"></i>
                      <span>hello@focalgrid.systems</span>
                   </a>
                   <div className="w-px h-6 bg-white/10 hidden md:block"></div>
                   <button className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2">
                      <i className="fab fa-whatsapp"></i>
                      <span>Enterprise Chat</span>
                   </button>
                </div>
             </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
