
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-focalNavy border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-focalTeal rounded-lg flex items-center justify-center">
              <i className="fas fa-th-large text-white text-xl"></i>
            </div>
            <span className="text-2xl font-display font-bold text-white tracking-tighter">FOCALGRID.</span>
          </div>
          <p className="text-slate-500 mb-8 max-w-sm">
            Transforming businesses with next-generation digital solutions—from custom software to AI integration.
          </p>
          <div className="flex space-x-4">
            {['linkedin', 'twitter', 'github', 'instagram'].map(platform => (
              <a key={platform} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-focalTeal hover:text-white transition-all">
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Solutions</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            {['ERP', 'CRM', 'HRM', 'LMS', 'Accounts', 'Inventory'].map(item => (
              <li key={item}><a href="#" className="hover:text-focalTeal transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            {['Engineering', 'AI & Automation', 'Integration', 'Security', 'Maintenance', 'Creative'].map(item => (
              <li key={item}><a href="#" className="hover:text-focalTeal transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            {['About Us', 'Our Team', 'Blog', 'Careers', 'Partner Program'].map(item => (
              <li key={item}><a href="#" className="hover:text-focalTeal transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            {['Documentation', 'API Reference', 'Support Portal', 'Status Page', 'Security'].map(item => (
              <li key={item}><a href="#" className="hover:text-focalTeal transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs">
        <p>&copy; 2025 Focalgrid Systems. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400">Terms of Service</a>
          <a href="#" className="hover:text-slate-400">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
