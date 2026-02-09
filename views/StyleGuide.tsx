
import React, { useState, useEffect } from 'react';
import { IBButton, IBCard, IBInput, IBBadge, IBSpinner, IBProgress, IBIcon } from '../components/UI';
import { ButtonVariant } from '../types';

const StyleGuide: React.FC = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16 pb-20">
      <section>
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Design System</h1>
        <p className="text-slate-400 max-w-2xl text-lg">The official visual language for InfraBuild AI products. Minimalist, high-contrast, and focused on clarity.</p>
      </section>

      {/* Colors */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold border-b border-slate-800 pb-2">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="space-y-2">
            <div className="h-20 w-full bg-brand-600 rounded-lg shadow-lg"></div>
            <p className="text-xs font-medium">Brand Primary (#4f46e5)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full bg-slate-950 rounded-lg shadow-lg border border-slate-800"></div>
            <p className="text-xs font-medium">Background Dark (#020617)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full bg-slate-900 rounded-lg shadow-lg"></div>
            <p className="text-xs font-medium">Surface (#0f172a)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full bg-slate-800 rounded-lg shadow-lg"></div>
            <p className="text-xs font-medium">Border (#1e293b)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full bg-white rounded-lg shadow-lg"></div>
            <p className="text-xs font-medium text-slate-100">Pure Light (#ffffff)</p>
          </div>
        </div>
      </section>

      {/* Feedback & Loading */}
      <section className="space-y-8">
        <h2 className="text-xl font-bold border-b border-slate-800 pb-2">Feedback & Loading</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <IBCard title="Spinners" subtitle="Consistent loading states">
            <div className="flex items-end gap-8">
              <div className="flex flex-col items-center gap-2">
                <IBSpinner size="sm" />
                <span className="text-[10px] text-slate-500 font-mono">SMALL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <IBSpinner size="md" />
                <span className="text-[10px] text-slate-500 font-mono">MEDIUM</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <IBSpinner size="lg" />
                <span className="text-[10px] text-slate-500 font-mono">LARGE</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <IBSpinner size="md" color="text-slate-500" />
                <span className="text-[10px] text-slate-500 font-mono">MUTED</span>
              </div>
            </div>
          </IBCard>

          <IBCard title="Progress Indicators" subtitle="Visualizing long-running tasks">
            <div className="space-y-6 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium text-slate-400">
                  <span>Data Ingestion</span>
                  <span>{progress}%</span>
                </div>
                <IBProgress value={progress} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium text-slate-400">
                  <span>Indeterminate State</span>
                  <span>Connecting...</span>
                </div>
                <IBProgress indeterminate />
              </div>
            </div>
          </IBCard>
        </div>
      </section>

      {/* Iconography */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold border-b border-slate-800 pb-2">Iconography</h2>
        <div className="grid grid-cols-4 md:grid-cols-7 gap-6">
          {[
            { name: 'ai', label: 'AI Intelligence' },
            { name: 'data', label: 'Data Lake' },
            { name: 'server', label: 'Nodes' },
            { name: 'security', label: 'Security' },
            { name: 'chart', label: 'Analytics' },
            { name: 'check', label: 'Success' },
            { name: 'alert', label: 'Alert' }
          ].map(icon => (
            <div key={icon.name} className="flex flex-col items-center gap-3 p-4 bg-slate-900/40 rounded-xl border border-slate-800/50 hover:border-brand-500/30 transition-colors group">
              <IBIcon name={icon.name} size={32} className="text-slate-400 group-hover:text-brand-400 transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 text-center">{icon.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold border-b border-slate-800 pb-2">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <IBButton variant={ButtonVariant.PRIMARY}>Primary Button</IBButton>
          <IBButton variant={ButtonVariant.SECONDARY}>Secondary Action</IBButton>
          <IBButton variant={ButtonVariant.OUTLINE}>Outline Mode</IBButton>
          <IBButton variant={ButtonVariant.GHOST}>Ghost Variant</IBButton>
          <IBButton variant={ButtonVariant.DANGER}>Danger State</IBButton>
        </div>
      </section>

      {/* Form Elements */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold border-b border-slate-800 pb-2">Form Elements</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <IBInput label="Full Name" placeholder="Enter your name" />
          <IBInput label="Email Address" placeholder="you@company.com" defaultValue="invalid-email" error="Please enter a valid business email." />
        </div>
      </section>

      {/* Status Badges */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold border-b border-slate-800 pb-2">Status Badges</h2>
        <div className="flex flex-wrap gap-3">
          <IBBadge color="brand">In Progress</IBBadge>
          <IBBadge color="success">Deployment Successful</IBBadge>
          <IBBadge color="warning">High Traffic Detected</IBBadge>
          <IBBadge color="error">System Offline</IBBadge>
          <IBBadge color="slate">Draft v1.0</IBBadge>
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold border-b border-slate-800 pb-2">Typography</h2>
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tighter">Heading Level 1</h1>
          <h2 className="text-3xl font-bold tracking-tight">Heading Level 2</h2>
          <h3 className="text-xl font-semibold">Heading Level 3</h3>
          <p className="text-slate-400 max-w-lg leading-relaxed">
            The standard body text uses Inter. It is designed for maximum legibility on screen, especially in high-density data dashboards. InfraBuild AI prioritizes <strong>information hierarchy</strong> through weight and contrast.
          </p>
          <code className="block bg-slate-900 p-4 rounded-lg border border-slate-800 text-brand-400 font-mono text-sm">
            const infra = new InfraBuildAI();
            <br />
            {`await infra.provision({ region: 'us-east-1' });`}
          </code>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;
