
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatWithGemini } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am the Focalgrid AI assistant. How can I help you today?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      
      const response = await chatWithGemini(userMsg, history);
      setMessages(prev => [...prev, { role: 'model', text: response || 'I apologize, I could not generate a response.' }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'System error. Please ensure your API key is configured.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-6 w-[400px] h-[580px] bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="px-8 py-6 bg-gradient-to-r from-focalTeal to-focalCyan border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 relative">
                  <i className="fas fa-brain text-white text-sm"></i>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-focalTeal animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-white font-display font-black text-sm tracking-tight uppercase">Engineering AI</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Gemini 3 Pro</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-black/20 text-white/40 hover:text-white hover:bg-black/40 transition-all flex items-center justify-center"
              >
                <i className="fas fa-times text-xs"></i>
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide bg-slate-950/20"
            >
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] px-5 py-4 rounded-3xl text-sm leading-relaxed shadow-lg ${
                    msg.role === 'user' 
                      ? 'bg-focalTeal text-white rounded-tr-none' 
                      : 'bg-white/5 border border-white/5 text-slate-300 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 px-5 py-4 rounded-3xl rounded-tl-none flex space-x-2 items-center">
                    <i className="fas fa-circle-notch animate-spin text-focalTeal text-xs"></i>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Architecting response...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-slate-900 border-t border-white/5">
              <div className="relative flex items-center group">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Focalgrid anything..."
                  className="w-full bg-slate-950 border border-white/5 rounded-2xl pl-6 pr-14 py-4 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-focalTeal transition-all group-hover:border-white/10"
                />
                <button 
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="absolute right-3 w-10 h-10 bg-focalTeal rounded-xl flex items-center justify-center text-white hover:bg-focalCyan transition-all disabled:opacity-20 disabled:grayscale"
                >
                  <i className="fas fa-paper-plane text-xs"></i>
                </button>
              </div>
              <p className="mt-4 text-[9px] text-center text-slate-600 font-bold uppercase tracking-widest">
                Powered by Gemini 3 Pro • Enterprise Intelligence
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-focalTeal to-focalCyan rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-teal-900/50 border border-white/10 relative group"
      >
        <div className="absolute -inset-2 bg-focalTeal/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-2xl relative z-10`}></i>
      </motion.button>
    </div>
  );
};

export default Chatbot;
