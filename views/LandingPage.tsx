
import React from 'react';
import { IBButton, IBCard, IBBadge, IBIcon, IBProgress } from '../components/UI';
import { ButtonVariant } from '../types';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="space-y-0 -mt-8">
      
      {/* Cinematic Hero Section - Based on Image 1 (Data Stream) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-data-stream scanline-effect overflow-hidden">
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 bg-brand-400 rounded-full blur-[1px] animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3 + Math.random() * 0.4
              }}
            />
          ))}
        </div>

        <div className="relative z-20 space-y-10 max-w-5xl mx-auto">
          <IBBadge color="brand" className="mx-auto uppercase tracking-[0.3em] py-1.5 px-6 border-brand-500/30 bg-brand-500/5 backdrop-blur-md">
            The Neural Core of Enterprise
          </IBBadge>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white uppercase">
            ARCHITECTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-pink-500">
              INTELLIGENCE.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-lg">
            InfraBuild AI engineers the invisible layers of high-scale SaaS, bridging the gap between raw compute and human intuition.
          </p>
        </div>

        {/* Floating elements mimicking the bokeh dots in user imagery */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-brand-500 to-transparent"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-40 md:px-8 space-y-60 relative z-10">
        
        {/* Proprietary Apps Section - Based on Image 3 (Neural Network) */}
        <section className="relative">
          <div className="absolute -inset-20 bg-neural-network opacity-40 z-0 pointer-events-none rounded-[5rem] blur-sm"></div>
          
          <div className="relative z-10 space-y-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10 border-b border-slate-800 pb-16">
              <div className="space-y-6">
                <span className="text-brand-500 font-mono text-sm tracking-widest uppercase font-bold">Node Catalog</span>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">Developed <br/> Assets</h2>
              </div>
              <p className="text-slate-500 max-w-md text-lg leading-relaxed font-light">
                Our suite of proprietary kernels designed to solve complex bottlenecks in global infrastructure and human resource scaling.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* HRassess Card */}
              <IBCard className="group border-brand-500/20 hover:border-brand-500/50 hover:-translate-y-4 transition-all duration-500 bg-slate-950/80 p-0 overflow-hidden shadow-2xl">
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-10 w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all shadow-inner">
                    <IBIcon name="ai" size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter">HRassess</h3>
                  <IBBadge color="brand" className="mb-8 w-fit text-[10px] font-mono tracking-widest">v2.0 ACTIVE</IBBadge>
                  <p className="text-slate-400 text-base leading-relaxed mb-12 flex-1">
                    Advanced AI psychometric platform utilizing the Big Five model to map leadership DNA and career trajectories with 99% accuracy.
                  </p>
                  <span className="group/link flex items-center gap-2 text-brand-500 text-xs font-black uppercase tracking-widest">
                    Explore Architecture
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </IBCard>

              {/* App 2 */}
              <IBCard className="group border-slate-800 hover:border-slate-700 hover:-translate-y-4 transition-all duration-500 bg-slate-950/80 p-0 shadow-2xl">
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-10 w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-all">
                    <IBIcon name="server" size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter">InfraSync</h3>
                  <IBBadge color="slate" className="mb-8 w-fit text-[10px] font-mono tracking-widest">STABLE_BUILD</IBBadge>
                  <p className="text-slate-400 text-base leading-relaxed mb-12 flex-1">
                    Cloud-native orchestration layer that synchronizes multi-region clusters with zero-latency overhead. Built for the hyper-scale enterprise.
                  </p>
                  <div className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">Enterprise Tier Required</div>
                </div>
              </IBCard>

              {/* App 3 */}
              <IBCard className="group border-slate-800 hover:border-slate-700 hover:-translate-y-4 transition-all duration-500 bg-slate-950/80 p-0 shadow-2xl">
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-10 w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-all">
                    <IBIcon name="data" size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter">FlowCore</h3>
                  <IBBadge color="slate" className="mb-8 w-fit text-[10px] font-mono tracking-widest">BETA_READY</IBBadge>
                  <p className="text-slate-400 text-base leading-relaxed mb-12 flex-1">
                    Data lake ingestion engine with real-time schema mapping and automated cleansing. The bedrock of our data-first consultancy.
                  </p>
                  <div className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">Documentation Access: Pending</div>
                </div>
              </IBCard>
            </div>
          </div>
        </section>

        {/* Final CTA - Based on Image 1 (Bokeh/Particles) */}
        <section className="relative overflow-hidden rounded-[5rem] bg-brand-600 px-8 py-40 text-center shadow-3xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/40 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 space-y-14 max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter uppercase">
              SCALE <br /> THE <br /> FUTURE.
            </h2>
            <p className="text-brand-100 text-2xl font-light max-w-xl mx-auto drop-shadow-lg">
              Infrastructure that thinks for itself. Built for the most ambitious teams on the planet.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 pt-10">
              <IBButton variant={ButtonVariant.SECONDARY} className="bg-white text-brand-600 px-14 py-7 font-black uppercase tracking-[0.3em] text-xs hover:scale-110 transition-all shadow-3xl active:scale-95">
                Join the Network
              </IBButton>
              <IBButton variant={ButtonVariant.OUTLINE} className="border-white/30 text-white hover:bg-white/10 px-14 py-7 font-black uppercase tracking-[0.3em] text-xs transition-all">
                Access Docs
              </IBButton>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer Decoration */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
    </div>
  );
};

export default LandingPage;
