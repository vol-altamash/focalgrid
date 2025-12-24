
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
  onLaunchLab: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onLaunchLab }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-12 h-12 bg-gradient-to-br from-focalTeal to-focalCyan rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-xl shadow-teal-950/50">
            <i className="fas fa-cube text-white text-2xl"></i>
          </div>
          <span className="text-3xl font-display font-black text-white tracking-tighter">
            FOCALGRID<span className="text-focalTeal">.</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {['Home', 'Services', 'Solutions', 'Portfolio', 'Process'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-focalTeal transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-focalTeal transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
           <div className="hidden xl:flex items-center space-x-2 mr-6 px-3 py-1 bg-emerald-500/5 rounded-full border border-emerald-500/10">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500/80">System Live</span>
           </div>
           <button 
             onClick={onLaunchLab}
             className="text-focalTeal text-xs font-bold uppercase tracking-widest px-6 py-3 hover:text-focalCyan transition-colors flex items-center"
           >
              <i className="fas fa-microchip mr-2"></i>
              Launch AI Lab
           </button>
           <button className="bg-white text-focalNavy text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-focalTeal hover:text-white transition-all shadow-xl shadow-white/5">
              Hire Us
           </button>
        </div>

        <button className="lg:hidden text-white p-2">
          <i className="fas fa-bars-staggered text-2xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
