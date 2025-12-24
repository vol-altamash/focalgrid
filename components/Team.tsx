
import React from 'react';
import { motion } from 'framer-motion';

const members = [
  {
    name: "Alexander Voss",
    role: "Chief Executive Officer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    linkedIn: "#",
    specialties: ["Strategy", "M&A", "Governance"],
    bio: "Visionary strategist with 15+ years in enterprise digital transformation and global scaling."
  },
  {
    name: "Elena Sterling",
    role: "Chief Technology Officer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    linkedIn: "#",
    specialties: ["Distributed Systems", "Rust", "Cybersecurity"],
    bio: "Former Lead Architect at major Silicon Valley firms, specialist in high-scale systems."
  },
  {
    name: "Marcus Thorne",
    role: "Head of Artificial Intelligence",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    linkedIn: "#",
    specialties: ["LLMs", "Neural Networks", "RAG"],
    bio: "PhD in Neural Networks, leading the development of our Focalgrid proprietary AI Core."
  },
  {
    name: "Sienna Rivera",
    role: "VP of Creative & Design",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    linkedIn: "#",
    specialties: ["UI/UX", "Brand Narratives", "3D"],
    bio: "Award-winning designer focused on human-centric interfaces and brand narratives."
  },
  {
    name: "Julian Reed",
    role: "Director of Cloud Infrastructure",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    linkedIn: "#",
    specialties: ["Kubernetes", "AWS/Azure", "DevOps"],
    bio: "Expert in architecting resilient, multi-region cloud ecosystems for global enterprises."
  },
  {
    name: "Sophia Chen",
    role: "Lead Full Stack Engineer",
    img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600",
    linkedIn: "#",
    specialties: ["React", "Go", "GraphQL"],
    bio: "Full-stack veteran specializing in performant real-time applications and API design."
  },
  {
    name: "Omar Haddad",
    role: "Product Architect",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    linkedIn: "#",
    specialties: ["Product Roadmap", "Agile", "User Flow"],
    bio: "Bridging the gap between technical complexity and intuitive product experiences."
  },
  {
    name: "Zara Whitmore",
    role: "Quality Assurance Lead",
    img: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=600",
    linkedIn: "#",
    specialties: ["Automation", "Security Audits", "UX Testing"],
    bio: "Ensuring zero-defect delivery through rigorous automated testing and security hardening."
  }
];

const Team: React.FC = () => {
  return (
    <div className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] flex items-center justify-center select-none">
        <span className="text-[20vw] font-display font-black whitespace-nowrap">GLOBAL TALENT CORE</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-focalTeal font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
            >
              The Human Capital
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter"
            >
              The minds behind <br/> <span className="text-gradient">the craft.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg leading-relaxed"
            >
              Our team is composed of the top 1% of engineering and design talent from around the globe, 
              dedicated to solving your most complex digital challenges with surgical precision.
            </motion.p>
          </div>
          <div className="hidden md:block">
             <button className="px-10 py-5 border border-white/10 hover:border-focalTeal text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all group overflow-hidden relative">
               <span className="relative z-10">View Culture Book</span>
               <div className="absolute inset-0 bg-focalTeal translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.7, ease: "easeOut" }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden mb-8 border border-white/5 bg-slate-900 shadow-2xl transition-all duration-700 group-hover:border-focalTeal/30 group-hover:-translate-y-2">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Expertise Tags Overlay (Shown on Hover) */}
                <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {member.specialties.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-black uppercase tracking-widest text-white">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <a href={member.linkedIn} className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-focalTeal hover:scale-110 transition-all">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-focalTeal/20 backdrop-blur-md border border-focalTeal/20 flex items-center justify-center text-focalTeal opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12">
                    <i className="fas fa-plus text-xs"></i>
                  </div>
                </div>
              </div>
              
              <div className="px-6">
                <h3 className="text-2xl font-display font-black text-white mb-1 group-hover:text-focalTeal transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-focalCyan text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  {member.role}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Recruitment Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border-2 border-dashed border-white/10 flex flex-col items-center justify-center p-10 text-center hover:border-focalTeal/40 transition-all duration-500 cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-focalTeal/20 transition-all duration-500">
              <i className="fas fa-user-plus text-slate-500 text-2xl group-hover:text-focalTeal transition-all"></i>
            </div>
            <h3 className="text-xl font-display font-black text-white mb-2">Join the Core</h3>
            <p className="text-slate-500 text-sm mb-6">Are you among the top 1% of talent? We're always looking for geniuses.</p>
            <span className="text-focalTeal font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
              Apply Now <i className="fas fa-arrow-right ml-2"></i>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
