
import React from 'react';
import { ComponentProps, ButtonVariant } from '../types';

export const IBButton: React.FC<ComponentProps & { 
  variant?: ButtonVariant; 
  onClick?: () => void; 
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}> = ({ 
  children, 
  variant = ButtonVariant.PRIMARY, 
  className = '', 
  onClick, 
  disabled = false,
  type = "button"
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    [ButtonVariant.PRIMARY]: "bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-900/20 active:scale-95",
    [ButtonVariant.SECONDARY]: "bg-slate-800 hover:bg-slate-700 text-slate-100",
    [ButtonVariant.OUTLINE]: "bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300",
    [ButtonVariant.GHOST]: "bg-transparent hover:bg-slate-800 text-slate-400 hover:text-slate-200",
    [ButtonVariant.DANGER]: "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/20"
  };

  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const IBCard: React.FC<ComponentProps & { title?: string; subtitle?: string; hover?: boolean }> = ({ 
  children, 
  className = '', 
  title, 
  subtitle,
  hover = true
}) => {
  return (
    <div className={`bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm ${hover ? 'hover:border-slate-700 transition-colors' : ''} ${className}`}>
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          {title && <h3 className="text-lg font-semibold text-slate-100">{title}</h3>}
          {subtitle && <p className="text-sm text-slate-400 mt-1">{subtitle}</p>}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export const IBInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }> = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm font-medium text-slate-300 ml-1">{label}</label>}
      <input 
        className={`bg-slate-900 border ${error ? 'border-red-500' : 'border-slate-800'} focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 rounded-lg px-4 py-2 text-slate-200 placeholder-slate-600 outline-none transition-all w-full ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-400 mt-1">{error}</span>}
    </div>
  );
};

export const IBBadge: React.FC<ComponentProps & { color?: 'brand' | 'success' | 'warning' | 'error' | 'slate' }> = ({ 
  children, 
  className = '', 
  color = 'brand' 
}) => {
  const colors = {
    brand: "bg-brand-500/10 text-brand-400 border-brand-500/20",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    error: "bg-red-500/10 text-red-400 border-red-500/20",
    slate: "bg-slate-700/30 text-slate-400 border-slate-700/50"
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${colors[color]} ${className}`}>
      {children}
    </span>
  );
};

export const IBSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg', color?: string, className?: string }> = ({ 
  size = 'md', 
  color = 'text-brand-500',
  className = '' 
}) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <svg className={`animate-spin ${sizes[size]} ${color} ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
};

export const IBProgress: React.FC<{ value?: number, indeterminate?: boolean, className?: string }> = ({ 
  value = 0, 
  indeterminate = false,
  className = '' 
}) => {
  return (
    <div className={`w-full bg-slate-800 rounded-full h-1.5 overflow-hidden ${className}`}>
      {indeterminate ? (
        <div className="h-full bg-brand-500 w-1/3 rounded-full animate-[progress_1.5s_ease-in-out_infinite]"></div>
      ) : (
        <div 
          className="h-full bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 ease-out shadow-[0_0_8px_rgba(99,102,241,0.4)]" 
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        ></div>
      )}
      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

export const IBIcon: React.FC<{ name: string, className?: string, size?: number }> = ({ 
  name, 
  className = "text-slate-400", 
  size = 24 
}) => {
  const icons: Record<string, React.ReactNode> = {
    ai: <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />,
    data: <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-2 0H5V5h14v2zM5 21h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2zm0-4h14v2H5v-2zm0-4h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2zm0-4h14v2H5V9z" />,
    server: <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-16 2h16v4H4V6zm16 12H4v-4h16v4zM7 8h2v1H7V8zm0 8h2v1H7v-1z" />,
    security: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.49-2.84 8.59-7 9.71-4.16-1.12-7-5.22-7-9.71V6.3l7-3.12zM12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />,
    chart: <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V5h14v14zM7 10h2v7H7v-7zm4-3h2v10h-2V7zm4 6h2v4h-2v-4z" />,
    check: <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />,
    alert: <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  };

  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[name] || <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />}
    </svg>
  );
};
