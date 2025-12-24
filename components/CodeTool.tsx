
import React, { useState } from 'react';
import { analyzeCode } from '../services/geminiService';
import { AnalysisResult } from '../types';
import { motion } from 'framer-motion';

const CodeTool: React.FC = () => {
  const [code, setCode] = useState('');
  const [context, setContext] = useState('Improve performance, accessibility, and modernize the UI component architecture.');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!code) return;
    setLoading(true);
    try {
      const res = await analyzeCode(code, context);
      setResult(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full">
      <div className="flex flex-col space-y-6">
        <div className="bg-slate-900 rounded-[2.5rem] border border-white/5 flex flex-col overflow-hidden shadow-2xl">
          <div className="px-8 py-5 border-b border-white/5 flex justify-between items-center bg-white/5">
            <div className="flex items-center space-x-3">
              <i className="fas fa-terminal text-focalTeal"></i>
              <h3 className="font-bold text-white text-sm uppercase tracking-widest">Source Module</h3>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">TSX / JSX / CSS</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 p-8 bg-slate-950 font-mono text-sm text-blue-300 focus:outline-none resize-none min-h-[450px] leading-relaxed scrollbar-custom"
            placeholder="Paste your component or logic here..."
          />
        </div>

        <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Transformation Goal</label>
          <div className="relative">
            <i className="fas fa-bullseye absolute left-5 top-1/2 -translate-y-1/2 text-focalTeal"></i>
            <input
              type="text"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="w-full bg-slate-950 border border-white/5 rounded-2xl pl-12 pr-6 py-4 text-slate-200 focus:ring-2 focus:ring-focalTeal focus:outline-none transition-all"
              placeholder="e.g. Modernize styling with Tailwind"
            />
          </div>
          <button
            onClick={handleAnalyze}
            disabled={loading || !code}
            className={`mt-6 w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 ${
              loading 
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                : 'bg-focalTeal hover:bg-focalCyan text-white shadow-xl shadow-teal-900/30 active:scale-[0.98]'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center space-x-3">
                <i className="fas fa-circle-notch animate-spin"></i>
                <span>Quantum Analysis...</span>
              </span>
            ) : (
              'Run Catalyst Upgrade'
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-8">
        {!result && !loading && (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-600 bg-slate-900/30 border-2 border-dashed border-white/5 rounded-[3rem] p-12">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-rocket text-4xl opacity-20"></i>
            </div>
            <h4 className="text-white font-bold mb-2">Upgrade Engine Ready</h4>
            <p className="text-center italic text-sm max-w-sm">
              Input your legacy code to generate modern, high-performance architectures powered by Gemini 3 Pro.
            </p>
          </div>
        )}

        {loading && (
          <div className="flex-1 space-y-6 animate-pulse p-4">
            <div className="h-12 bg-white/5 rounded-2xl w-1/2"></div>
            <div className="h-96 bg-white/5 rounded-[2.5rem] w-full"></div>
            <div className="h-40 bg-white/5 rounded-[2.5rem] w-full"></div>
          </div>
        )}

        {result && (
          <div className="space-y-8 h-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-900 rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl"
            >
              <div className="px-8 py-5 bg-teal-600/10 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-focalTeal font-black text-sm uppercase tracking-widest flex items-center">
                  <i className="fas fa-magic mr-3"></i> Optimized Module
                </h3>
                <button 
                  onClick={() => navigator.clipboard.writeText(result.refactoredCode || '')}
                  className="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-widest flex items-center"
                >
                  <i className="fas fa-copy mr-2"></i> Copy Code
                </button>
              </div>
              <div className="p-8">
                <pre className="text-xs md:text-sm font-mono text-teal-300/80 whitespace-pre-wrap overflow-x-auto leading-relaxed">
                  {result.refactoredCode || '// Architecture optimization complete. Suggestions below.'}
                </pre>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 rounded-[2.5rem] border border-white/5 p-10 shadow-2xl"
            >
              <h3 className="text-focalGold font-black text-sm uppercase tracking-widest mb-6">Strategic Improvements</h3>
              <ul className="space-y-5">
                {result.suggestions.map((s, idx) => (
                  <li key={idx} className="flex items-start space-x-4 text-slate-400 text-sm group">
                    <span className="w-6 h-6 bg-focalTeal/10 text-focalTeal rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-black group-hover:bg-focalTeal group-hover:text-white transition-all">
                      {idx + 1}
                    </span>
                    <span className="group-hover:text-slate-200 transition-colors leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeTool;
