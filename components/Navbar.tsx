
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IBButton } from './UI';
import { ButtonVariant } from '../types';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="md:hidden text-slate-300 hover:text-white p-1">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center font-bold text-white group-hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/20">
            IB
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            InfraBuild <span className="text-brand-500">AI</span>
          </span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-brand-400' : 'text-slate-400 hover:text-white'}`}>Home</Link>
        <Link to="/dashboard" className={`text-sm font-medium transition-colors ${location.pathname === '/dashboard' ? 'text-brand-400' : 'text-slate-400 hover:text-white'}`}>Dashboard</Link>
        <Link to="/consultant" className={`text-sm font-medium transition-colors ${location.pathname === '/consultant' ? 'text-brand-400' : 'text-slate-400 hover:text-white'}`}>AI Consultant</Link>
        <Link to="/style-guide" className={`text-sm font-medium transition-colors ${location.pathname === '/style-guide' ? 'text-brand-400' : 'text-slate-400 hover:text-white'}`}>Style Guide</Link>
      </div>

      <div className="flex items-center gap-3">
        <IBButton variant={ButtonVariant.OUTLINE} className="hidden sm:flex py-1.5 px-3 text-xs">Login</IBButton>
        <IBButton className="py-1.5 px-4 text-xs">Get Started</IBButton>
      </div>
    </nav>
  );
};

export default Navbar;
