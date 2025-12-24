
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const consultationTypes = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy Audit',
    duration: '45 Min',
    desc: 'Deep dive into your current workflow to identify high-impact AI opportunities.',
    icon: 'fa-brain',
    color: 'from-focalTeal to-focalCyan'
  },
  {
    id: 'architecture',
    title: 'Architecture Review',
    duration: '60 Min',
    desc: 'Technical consultation on scaling your existing legacy infrastructure.',
    icon: 'fa-layer-group',
    color: 'from-indigo-500 to-focalTeal'
  },
  {
    id: 'product-demo',
    title: 'Solutions Demo',
    duration: '30 Min',
    desc: 'Live walkthrough of our ready-to-deploy ERP, CRM, or HRM suites.',
    icon: 'fa-desktop',
    color: 'from-focalGold to-orange-500'
  }
];

const BookingCalendar: React.FC = () => {
  const [selectedType, setSelectedType] = useState(consultationTypes[0].id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Selection Column */}
      <div className="lg:col-span-5 space-y-6">
        <div className="mb-10">
          <span className="text-focalTeal font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Direct Access</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 leading-tight">
            Schedule your <span className="text-gradient">Session.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Choose a consultation track and find a slot that fits your schedule. Our leads are available across all time zones.
          </p>
        </div>

        <div className="space-y-4">
          {consultationTypes.map((type) => (
            <motion.button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              whileHover={{ x: 10 }}
              className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-500 flex items-center space-x-6 group ${
                selectedType === type.id 
                  ? 'bg-white/5 border-focalTeal shadow-xl shadow-teal-950/20' 
                  : 'bg-transparent border-white/5 hover:border-white/10'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <i className={`fas ${type.icon} text-white text-xl`}></i>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`font-bold transition-colors ${selectedType === type.id ? 'text-white' : 'text-slate-300'}`}>
                    {type.title}
                  </h3>
                  <span className="text-[10px] font-black uppercase tracking-widest text-focalTeal bg-focalTeal/10 px-2 py-1 rounded-md">
                    {type.duration}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {type.desc}
                </p>
              </div>
              <div className={`transition-all duration-500 ${selectedType === type.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <i className="fas fa-chevron-right text-focalTeal"></i>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="pt-8 flex items-center space-x-4">
           <div className="flex -space-x-3">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-4 border-focalNavy bg-slate-800 overflow-hidden shadow-lg">
                 <img src={`https://i.pravatar.cc/100?u=team-${i}`} alt="Specialist" />
               </div>
             ))}
           </div>
           <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
             4 Specialists Available Today
           </p>
        </div>
      </div>

      {/* Calendar Column */}
      <div className="lg:col-span-7 relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-focalTeal/20 to-transparent blur-2xl rounded-[3rem] -z-10"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl min-h-[600px] flex flex-col"
        >
          <div className="px-10 py-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <i className="far fa-calendar-alt text-focalTeal"></i>
              <span className="text-xs font-black uppercase tracking-widest text-slate-300">Live Availability Buffer</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Real-time Sync</span>
            </div>
          </div>
          
          <div className="flex-1 bg-white relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedType}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* 
                   In a real-world scenario, you would replace this URL with your actual 
                   Google Calendar Public URL or Calendly embed URL.
                */}
                <iframe 
                  src={`https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York&mode=WEEK&showNav=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&bgcolor=%23ffffff`}
                  style={{ border: 0 }} 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no"
                  title="Scheduling Calendar"
                  className="grayscale- filter contrast-125 opacity-90"
                ></iframe>
              </motion.div>
            </AnimatePresence>
            
            {/* Overlay to hint at interaction or prevent unwanted scrolling if necessary */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
               <div className="bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl flex items-center space-x-3">
                  <i className="fas fa-mouse-pointer text-focalTeal text-xs"></i>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Interact to Select Slot</span>
               </div>
            </div>
          </div>

          <div className="px-10 py-6 bg-slate-950 border-t border-white/5 flex items-center justify-between">
             <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
               Local Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}
             </div>
             <div className="flex space-x-2">
                <i className="fab fa-google text-slate-600"></i>
                <i className="fas fa-lock text-slate-600"></i>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingCalendar;
