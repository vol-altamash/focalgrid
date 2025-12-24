
import React from 'react';

const tech = [
  { name: 'React', icon: 'fa-react' },
  { name: 'Node.js', icon: 'fa-node-js' },
  { name: 'Python', icon: 'fa-python' },
  { name: 'AWS', icon: 'fa-aws' },
  { name: 'Docker', icon: 'fa-docker' },
  { name: 'Google Cloud', icon: 'fa-google' },
  { name: 'Microsoft Azure', icon: 'fa-microsoft' },
  { name: 'Swift', icon: 'fa-swift' }
];

const TechStack: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-white mb-2">Our Technology Stack</h2>
        <p className="text-slate-500 text-sm">Best-in-class tools and frameworks we use to build your vision.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
        {tech.map((t) => (
          <div key={t.name} className="flex flex-col items-center space-y-2 group hover:opacity-100 transition-opacity">
            <i className={`fab ${t.icon} text-4xl text-slate-400 group-hover:text-focalTeal transition-colors`}></i>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
