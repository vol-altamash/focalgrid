
import React, { useState } from 'react';
import { redesignVisuals } from '../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';

const VisualTool: React.FC = () => {
  const [description, setDescription] = useState('A premium enterprise dashboard with glassmorphism, deep navy gradients, and teal accents for a high-end software house.');
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!description) return;
    setLoading(true);
    try {
      const res = await redesignVisuals(description);
      setResultImage(res.imageUrl);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">Vision Refresh</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Describe the aesthetic paradigm for your application's next evolution. Powered by Gemini Visual Intelligence.
        </p>
      </div>

      <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-focalCyan/5 blur-[100px] -z-10 rounded-full"></div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Aesthetic Concept Prompt</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full bg-slate-950 border border-white/5 rounded-2xl p-6 text-slate-200 focus:ring-2 focus:ring-focalTeal focus:outline-none transition-all resize-none leading-relaxed"
              placeholder="e.g., A minimalist mobile app interface for a high-end crypto wallet with neon gradients and 3D glass elements..."
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !description}
            className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center space-x-3 ${
              loading 
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-focalTeal to-focalCyan hover:opacity-90 text-white shadow-xl shadow-teal-900/30'
            }`}
          >
            {loading ? (
              <>
                <i className="fas fa-circle-notch animate-spin"></i>
                <span>Synthesizing Design...</span>
              </>
            ) : (
              <>
                <i className="fas fa-wand-magic-sparkles"></i>
                <span>Generate UI Concept</span>
              </>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {resultImage ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-focalTeal to-focalGold rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
              <div className="aspect-[16/9] w-full bg-slate-950 flex items-center justify-center">
                <img 
                  src={resultImage} 
                  alt="Generated UI Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border-t border-white/5">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Generated Concept</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">16:9 High-Fidelity Mockup</p>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = resultImage;
                      link.download = 'focalgrid-ui-concept.png';
                      link.click();
                    }}
                    className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-white transition-all border border-white/5"
                  >
                    <i className="fas fa-download"></i>
                  </button>
                  <button className="px-6 py-4 bg-focalTeal hover:bg-focalCyan rounded-2xl text-white font-bold text-sm transition-all shadow-lg shadow-teal-950/40">
                    Apply Concept
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-[16/9] w-full rounded-[3rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center space-y-6 bg-slate-900/20"
          >
            <div className="relative">
              <div className="w-20 h-20 border-4 border-focalTeal/20 border-t-focalTeal rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-palette text-focalTeal"></i>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white font-bold mb-1">Gemini Vision is Rendering</p>
              <p className="text-slate-500 text-sm">Processing neural layers and textures...</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            className="aspect-[16/9] w-full rounded-[3rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-slate-600 bg-slate-900/10"
          >
            <i className="fas fa-images text-6xl opacity-10 mb-6"></i>
            <p className="text-sm font-bold uppercase tracking-widest opacity-30">Redesign Preview Core</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5 text-center">
          <i className="fas fa-magic text-focalTeal mb-3 block text-xl"></i>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Smart Compositions</p>
        </div>
        <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5 text-center">
          <i className="fas fa-layer-group text-focalGold mb-3 block text-xl"></i>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Contextual Assets</p>
        </div>
        <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5 text-center">
          <i className="fas fa-expand text-focalCyan mb-3 block text-xl"></i>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">High-Res Textures</p>
        </div>
      </div>
    </div>
  );
};

export default VisualTool;
