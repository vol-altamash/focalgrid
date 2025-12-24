
import React from 'react';
import { ToolType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTool: ToolType;
  setActiveTool: (tool: ToolType) => void;
  onExit: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTool, setActiveTool, onExit }) => {
  const navItems = [
    { id: ToolType.CODE_ANALYSIS, icon: 'fa-code', label: 'Catalyst Upgrade' },
    { id: ToolType.VISUAL_REDESIGN, icon: 'fa-paint-brush', label: 'Vision Refresh' },
    { id: ToolType.LIVE_BRAINSTORM, icon: 'fa-microphone', label: 'Strategy Core' },
  ];

  return (
    <div className="flex h-screen bg-focalNavy text-slate-100 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900/50 backdrop-blur-xl border-r border-white/5 flex flex-col">
        <div className="p-8 border-b border-white/5 flex items-center space-x-3">
          <div className="w-10 h-10 bg-focalTeal rounded-xl flex items-center justify-center shadow-lg shadow-teal-950/40">
            <i className="fas fa-cube text-white text-xl"></i>
          </div>
          <div>
            <h1 className="text-xl font-display font-black text-white tracking-tighter">
              LAB<span className="text-focalTeal">.</span>
            </h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Focalgrid AI Core</p>
          </div>
        </div>
        
        <nav className="flex-1 p-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTool(item.id)}
              className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                activeTool === item.id 
                  ? 'bg-focalTeal text-white shadow-xl shadow-teal-950/30 font-bold' 
                  : 'text-slate-500 hover:bg-white/5 hover:text-slate-300'
              }`}
            >
              <i className={`fas ${item.icon} w-5 text-lg`}></i>
              <span className="text-sm tracking-wide">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <div className="bg-slate-800/40 border border-white/5 p-5 rounded-[2rem] mb-4">
            <p className="text-[10px] text-slate-500 mb-3 font-bold tracking-widest uppercase">Connectivity</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-focalTeal rounded-full animate-pulse shadow-[0_0_10px_#0B7285]"></div>
                <span className="text-xs font-bold text-slate-300">Gemini 3 Pro</span>
              </div>
              <span className="text-[10px] text-slate-600">Active</span>
            </div>
          </div>
          
          <button 
            onClick={onExit}
            className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl text-slate-500 hover:text-white hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-widest"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Return to Site</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <header className="h-20 bg-slate-900/20 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-10">
          <div className="flex items-center space-x-4">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Workspace</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-700"></i>
            <span className="text-white font-display font-bold text-lg">
              {navItems.find(n => n.id === activeTool)?.label}
            </span>
          </div>
          <div className="flex items-center space-x-6">
             <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                <i className="fas fa-bolt text-focalGold text-xs"></i>
                <span className="text-[10px] font-bold text-slate-400">Enterprise Mode</span>
             </div>
             <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                <i className="fas fa-bell"></i>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-focalNavy"></span>
             </button>
             <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-focalTeal to-focalCyan border border-white/10 shadow-lg shadow-teal-950/40"></div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-10 bg-slate-950/30">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
