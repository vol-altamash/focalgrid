
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCategory } from '../types';

const categories: ServiceCategory[] = [
  {
    id: "core-engineering",
    headline: "Core Engineering",
    purpose: "Build product-grade software that runs the business with absolute reliability.",
    bg: "bg-slate-950",
    accent: "text-focalTeal",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    services: [
      { 
        name: "Web / Mobile App Development", 
        icon: "fa-laptop-code", 
        desc: "Native and cross-platform experiences.",
        capabilities: ["React & React Native", "Flutter", "Next.js Architecture", "PWA Strategy"]
      },
      { 
        name: "Custom Software Development", 
        icon: "fa-terminal", 
        desc: "Tailored solutions for unique challenges.",
        capabilities: ["Microservices", "API-First Design", "Legacy Modernization", "Cloud Native"]
      },
      { 
        name: "Enterprise Software", 
        icon: "fa-building", 
        desc: "Robust systems for global organizations.",
        capabilities: ["Scalability Audits", "Multi-tenant Arch", "High Availability", "Database Tuning"]
      }
    ]
  },
  {
    id: "ai-automation",
    headline: "AI & Automation",
    purpose: "Intelligent features and autonomous agents that transform operations.",
    bg: "bg-focalNavy",
    accent: "text-focalCyan",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    services: [
      { 
        name: "Custom AI Integration", 
        icon: "fa-microchip", 
        desc: "Bespoke LLM and ML data pipelines.",
        capabilities: ["LLM Fine-tuning", "RAG Implementations", "Vector Databases", "Model Ops"]
      },
      { 
        name: "AI Agent Development", 
        icon: "fa-robot", 
        desc: "Autonomous virtual support assistants.",
        capabilities: ["Natural Language Understanding", "Tool Calling Agents", "Multi-agent Systems"]
      },
      { 
        name: "Process Automation", 
        icon: "fa-cogs", 
        desc: "Intelligent RPA for business workflows.",
        capabilities: ["Workflow Mining", "Bot Governance", "Hybrid Cloud RPA"]
      }
    ]
  },
  {
    id: "design-creative",
    headline: "Design & Creative",
    purpose: "Visual identity and UI that makes digital products lovable and usable.",
    bg: "bg-slate-900",
    accent: "text-focalGold",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
    services: [
      { 
        name: "UI / UX Design", 
        icon: "fa-bezier-curve", 
        desc: "Human-centric, high-conversion interfaces.",
        capabilities: ["Design Systems", "Prototyping", "User Research", "Interaction Design"]
      },
      { 
        name: "Branding & Identity", 
        icon: "fa-signature", 
        desc: "Comprehensive brand strategy and guidelines.",
        capabilities: ["Logo Design", "Typography Systems", "Color Theory", "Brand Voice"]
      }
    ]
  },
  {
    id: "media-motion",
    headline: "Media & Motion",
    purpose: "Visual storytelling through high-fidelity photography and dynamic animation.",
    bg: "bg-gradient-to-br from-rose-50 to-white",
    accent: "text-rose-500",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    services: [
      { 
        name: "Photography & Retouching", 
        icon: "fa-camera", 
        desc: "Capturing the essence of your brand through cinematic lenses and expert post-production.",
        capabilities: ["Product Photography", "Corporate Portraits", "Advanced AI Retouching"]
      },
      { 
        name: "Motion Graphics", 
        icon: "fa-film", 
        desc: "Fluid storytelling through dynamic visual sequences and professional animation.",
        capabilities: ["2D/3D Explainer Videos", "UI Interaction Animation", "Social Media Motion Ads"]
      }
    ]
  },
  {
    id: "marketing-commerce",
    headline: "Marketing & Commerce",
    purpose: "Scale your revenue and market share through integrated digital strategies.",
    bg: "bg-focalNavy",
    accent: "text-focalCyan",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    services: [
      { 
        name: "E-commerce Solutions", 
        icon: "fa-shopping-cart", 
        desc: "High-performance storefronts built for global transactions.",
        capabilities: ["Headless Commerce", "Payment Gateways", "Inventory Logic"]
      },
      { 
        name: "Digital Marketing", 
        icon: "fa-chart-line", 
        desc: "Agile content strategies and cross-channel growth engine.",
        capabilities: ["SEO Architecture", "Content Automation", "Campaign Management"]
      }
    ]
  },
  {
    id: "systems-integration",
    headline: "Systems & Integration",
    purpose: "Ensure absolute synergy between isolated platforms and datasets.",
    bg: "bg-slate-900",
    accent: "text-indigo-400",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    services: [
      { 
        name: "System Integration", 
        icon: "fa-project-diagram", 
        desc: "Connecting silos into a unified ecosystem.",
        capabilities: ["ESB Strategy", "GraphQL Aggregation", "Webhook Orchestration"]
      }
    ]
  },
  {
    id: "security-compliance",
    headline: "Security & Compliance",
    purpose: "Protect digital assets and maintain trust with enterprise-grade hardening.",
    bg: "bg-focalNavy",
    accent: "text-emerald-500",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    services: [
      { 
        name: "Cybersecurity", 
        icon: "fa-shield-halved", 
        desc: "Hardening infrastructure against modern threats.",
        capabilities: ["Zero Trust Architecture", "Penetration Testing", "Compliance Audits"]
      }
    ]
  },
  {
    id: "quality-maintenance",
    headline: "Quality & Support",
    purpose: "Keep systems performant and mission-ready around the clock.",
    bg: "bg-slate-900",
    accent: "text-focalTeal",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    services: [
      { 
        name: "QA & Testing", 
        icon: "fa-vial", 
        desc: "Ensuring bug-free and performant code delivery.",
        capabilities: ["Automated Regression", "Load Testing", "UX Validation"]
      }
    ]
  }
];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const selectedCat = categories.find(c => c.id === activeCategory);
  const isLight = selectedCat?.id === 'media-motion';

  return (
    <div className={`relative min-h-screen transition-colors duration-700 ${activeCategory ? (isLight ? 'bg-white' : 'bg-focalNavy') : 'bg-focalNavy'}`}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <AnimatePresence mode="wait">
          {!activeCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center mb-20"
            >
              <span className="text-focalTeal font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Engineered for Success</span>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6">Service <span className="text-gradient">Matrix.</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                A comprehensive ecosystem of digital services designed for enterprises that demand excellence without borders.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Discovery Grid */}
        {!activeCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                layoutId={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className={`group cursor-pointer relative rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/5 hover:border-focalTeal/30 transition-all duration-500 ${cat.bg === 'bg-gradient-to-br from-rose-50 to-white' ? 'bg-rose-50' : 'bg-slate-900'}`}
              >
                <img src={cat.image} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700" alt="" />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.bg === 'bg-gradient-to-br from-rose-50 to-white' ? 'from-rose-100/80 via-rose-50/20 to-transparent' : 'from-slate-950 via-slate-950/40 to-transparent'}`}></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className={`text-2xl font-display font-bold mb-2 ${cat.accent}`}>{cat.headline}</h3>
                  <p className={`${cat.bg === 'bg-gradient-to-br from-rose-50 to-white' ? 'text-rose-900/60' : 'text-slate-400'} text-xs line-clamp-2 mb-4 group-hover:translate-x-1 transition-transform`}>
                    {cat.purpose}
                  </p>
                  <div className={`flex items-center text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all ${cat.bg === 'bg-gradient-to-br from-rose-50 to-white' ? 'text-rose-600' : 'text-white'}`}>
                    Explore Deep Dive <i className="fas fa-arrow-right ml-2 text-[8px]"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {selectedCat && (
              <motion.div
                key="detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <button 
                  onClick={() => setActiveCategory(null)}
                  className={`mb-12 flex items-center space-x-3 transition-colors uppercase text-[10px] font-bold tracking-[0.2em] ${isLight ? 'text-rose-500 hover:text-rose-700' : 'text-slate-500 hover:text-white'}`}
                >
                  <i className="fas fa-arrow-left"></i>
                  <span>Back to Matrix</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  {/* Sidebar Category Info */}
                  <div className="lg:col-span-4 space-y-8">
                    <motion.div 
                      layoutId={selectedCat.id}
                      className="rounded-[3rem] overflow-hidden aspect-[4/5] relative border border-white/10 shadow-2xl"
                    >
                      <img src={selectedCat.image} className="absolute inset-0 w-full h-full object-cover" alt="" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? 'from-rose-500/80' : 'from-slate-950'} to-transparent opacity-60`}></div>
                      <div className="absolute bottom-10 left-10 right-10">
                         <h2 className={`text-4xl font-display font-black text-white leading-tight`}>
                           {selectedCat.headline}
                         </h2>
                      </div>
                    </motion.div>

                    <div className={`${isLight ? 'bg-rose-50 border-rose-100' : 'bg-slate-900/50 border-white/5 backdrop-blur-xl'} p-8 rounded-[2rem] border`}>
                      <h4 className={`${isLight ? 'text-rose-900' : 'text-white'} font-bold mb-4 uppercase text-xs tracking-widest`}>Pillar Objective</h4>
                      <p className={`${isLight ? 'text-rose-800/70' : 'text-slate-400'} text-sm leading-relaxed`}>{selectedCat.purpose}</p>
                    </div>

                    <button className={`w-full font-bold py-5 px-8 rounded-2xl transition-all shadow-xl ${isLight ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-200' : 'bg-focalTeal hover:bg-focalCyan text-white shadow-teal-950/40'}`}>
                       Request Domain Audit
                    </button>
                  </div>

                  {/* Main Services List */}
                  <div className="lg:col-span-8 space-y-10">
                    {selectedCat.services.map((service, sIdx) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: sIdx * 0.1 }}
                        className={`group border p-10 rounded-[3rem] transition-all duration-500 ${isLight ? 'bg-white border-rose-50 hover:shadow-2xl hover:shadow-rose-100' : 'bg-slate-900/30 border-white/5 hover:bg-white/5'}`}
                      >
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isLight ? 'bg-rose-100 text-rose-500 group-hover:bg-rose-500 group-hover:text-white' : 'bg-white/5 text-white group-hover:bg-focalTeal'}`}>
                            <i className={`fas ${service.icon} text-3xl`}></i>
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-3 ${isLight ? 'text-rose-900' : 'text-white'}`}>{service.name}</h3>
                            <p className={`mb-8 leading-relaxed ${isLight ? 'text-rose-800/60' : 'text-slate-400'}`}>{service.desc}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {service.capabilities.map((cap, cIdx) => (
                                <div key={cIdx} className="flex items-center space-x-3 group/cap">
                                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-all ${isLight ? 'bg-rose-100 text-rose-500 group-hover/cap:bg-rose-500 group-hover/cap:text-white' : 'bg-focalTeal/10 text-focalTeal group-hover/cap:bg-focalTeal group-hover/cap:text-white'}`}>
                                    <i className="fas fa-check"></i>
                                  </div>
                                  <span className={`text-xs font-medium transition-colors ${isLight ? 'text-rose-800/50 group-hover/cap:text-rose-900' : 'text-slate-500 group-hover/cap:text-slate-300'}`}>{cap}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    <div className={`py-12 border-t flex items-center justify-between ${isLight ? 'border-rose-100' : 'border-white/5'}`}>
                       <div className="flex -space-x-3">
                         {[1,2,3,4].map(i => (
                           <div key={i} className={`w-12 h-12 rounded-full border-4 overflow-hidden ${isLight ? 'border-white bg-rose-50' : 'border-focalNavy bg-slate-800'}`}>
                             <img src={`https://i.pravatar.cc/100?u=${i + selectedCat.id}`} alt="" />
                           </div>
                         ))}
                       </div>
                       <p className={`text-xs font-bold uppercase tracking-widest ${isLight ? 'text-rose-400' : 'text-slate-500'}`}>
                         Expert Team Assigned to this Domain
                       </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Background Decorative Blobs */}
      <div className={`absolute top-0 right-0 w-[800px] h-[800px] blur-[180px] rounded-full pointer-events-none -z-10 translate-x-1/2 -translate-y-1/2 transition-colors duration-1000 ${isLight ? 'bg-rose-200/40' : 'bg-focalTeal/5'}`}></div>
      <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none -z-10 -translate-x-1/2 translate-y-1/2 transition-colors duration-1000 ${isLight ? 'bg-rose-100/40' : 'bg-focalGold/5'}`}></div>
    </div>
  );
};

export default Services;
