
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Dashboard from './views/Dashboard';
import AIConsultant from './views/AIConsultant';
import StyleGuide from './views/StyleGuide';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const AppContent: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const isPublicRoute = location.pathname === '/' || location.pathname === '/style-guide';

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500/30">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex-1 flex overflow-hidden">
        {!isPublicRoute && (
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        )}
        
        <main className={`flex-1 overflow-y-auto ${!isPublicRoute ? 'md:pl-64' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/consultant" element={<AIConsultant />} />
              <Route path="/style-guide" element={<StyleGuide />} />
            </Routes>
          </div>
        </main>
      </div>
      
      <footer className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} InfraBuild AI. All rights reserved.
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
