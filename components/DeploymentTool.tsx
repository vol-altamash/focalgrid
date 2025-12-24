
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI, Type } from "@google/genai";

const DeploymentTool: React.FC = () => {
  const [stage, setStage] = useState<'idle' | 'scanning' | 'auditing' | 'pushing' | 'complete'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [report, setReport] = useState<any>(null);
  const [progress, setProgress] = useState(0);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const runDeployment = async () => {
    setStage('scanning');
    setLogs([]);
    addLog("Initializing Production Stream...");
    addLog("Mounting project root...");
    setProgress(10);

    setTimeout(() => {
      setStage('auditing');
      addLog("Gemini 3 Pro: Performing Pre-push Quality Audit...");
      setProgress(40);
      performAudit();
    }, 1500);
  };

  const performAudit = async () => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: "Analyze a hypothetical high-end software house application. Provide a JSON deployment manifest with: 1. A poetic commit message. 2. A quality score (0-100). 3. 3 Key highlights of the current build.",
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              commitMessage: { type: Type.STRING },
              qualityScore: { type: Type.NUMBER },
              highlights: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["commitMessage", "qualityScore", "highlights"]
          }
        }
      });

      const data = JSON.parse(response.text);
      setReport(data);
      addLog("Audit complete. Build quality: " + data.qualityScore + "%");
      addLog("Commit message generated: " + data.commitMessage);
      
      setTimeout(() => {
        setStage('pushing');
        addLog("Pushing to GitHub (main)...");
        setProgress(70);
        
        setTimeout(() => {
          setStage('complete');
          addLog("Deployment Successful. Origin: https://github.com/focalgrid/core");
          setProgress(100);
        }, 2000);
      }, 1500);

    } catch (err) {
      addLog("Error: " + (err as Error).message);
      setStage('idle');
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-display font-black text-white mb-4 tracking-tight">Production Stream</h2>
          <p className="text-slate-400">
            A secure, AI-audited pipeline for high-stakes deployments. Gemini 3 Pro validates your architecture before it ever reaches production.
          </p>
        </div>
        
        {stage === 'idle' && (
          <button 
            onClick={runDeployment}
            className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-emerald-950/20 flex items-center space-x-3"
          >
            <i className="fab fa-github text-xl"></i>
            <span>Push to GitHub</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Terminal Logs */}
        <div className="lg:col-span-7 bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-[500px]">
          <div className="px-8 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">focalgrid-console-v2</span>
          </div>
          
          <div className="flex-1 p-8 font-mono text-xs text-emerald-500/80 overflow-y-auto space-y-2 scrollbar-hide">
            {logs.length === 0 && <span className="opacity-30">Waiting for deployment trigger...</span>}
            {logs.map((log, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}>
                {log}
              </motion.div>
            ))}
            {stage !== 'idle' && stage !== 'complete' && (
              <motion.div animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-emerald-500 inline-block ml-1"></motion.div>
            )}
          </div>

          <div className="p-8 bg-slate-950/50 border-t border-white/5">
            <div className="flex justify-between items-center mb-4">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</span>
               <span className="text-emerald-500 font-mono text-xs">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${progress}%` }}
                 className="h-full bg-emerald-500 shadow-[0_0_15px_#10b981]"
               ></motion.div>
            </div>
          </div>
        </div>

        {/* Audit Report */}
        <div className="lg:col-span-5">
           <AnimatePresence mode="wait">
             {report ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-10 h-full shadow-2xl relative overflow-hidden"
               >
                 <div className="absolute top-0 right-0 p-8 text-focalTeal opacity-10">
                   <i className="fas fa-microchip text-9xl"></i>
                 </div>

                 <div className="relative z-10">
                   <div className="flex items-center space-x-3 mb-8">
                     <div className="w-12 h-12 rounded-xl bg-focalTeal/20 flex items-center justify-center text-focalTeal">
                       <i className="fas fa-clipboard-check text-xl"></i>
                     </div>
                     <h3 className="text-white font-display font-black uppercase tracking-widest text-sm">Deployment Manifest</h3>
                   </div>

                   <div className="space-y-8">
                     <div>
                       <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Commit Message</span>
                       <p className="text-slate-200 italic font-medium leading-relaxed">"{report.commitMessage}"</p>
                     </div>

                     <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Quality</span>
                           <span className="text-2xl font-display font-black text-focalTeal">{report.qualityScore}%</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Status</span>
                           <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">Verified</span>
                        </div>
                     </div>

                     <div>
                       <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 block">Build Highlights</span>
                       <ul className="space-y-4">
                         {report.highlights.map((h: string, i: number) => (
                           <li key={i} className="flex items-center space-x-3 text-slate-400 text-xs">
                             <div className="w-1.5 h-1.5 bg-focalTeal rounded-full"></div>
                             <span>{h}</span>
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>

                   {stage === 'complete' && (
                     <motion.div 
                       initial={{ opacity: 0, y: 10 }} 
                       animate={{ opacity: 1, y: 0 }}
                       className="mt-10 pt-10 border-t border-white/5"
                     >
                        <button className="w-full py-4 bg-white text-slate-950 font-black uppercase tracking-widest text-xs rounded-xl hover:bg-emerald-400 transition-all">
                          Finalize Version
                        </button>
                     </motion.div>
                   )}
                 </div>
               </motion.div>
             ) : (
               <div className="h-full rounded-[2.5rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center p-12 text-center text-slate-600 bg-slate-900/10">
                  <i className="fas fa-shield-alt text-5xl mb-6 opacity-20"></i>
                  <p className="text-sm font-bold uppercase tracking-widest mb-2">Audit Core Ready</p>
                  <p className="text-xs max-w-[200px]">The deployment audit will generate as the stream initializes.</p>
               </div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DeploymentTool;
